import React, { createContext, useCallback, useEffect, useState } from "react";
import {
  STORAGE_KEY_ACCESS_TOKEN,
  STORAGE_KEY_REFRESH_TOKEN,
  STORAGE_KEY_USER_DATA,
} from "@/constants/localstorage";
import { generateOtp, verifyOtp as verifyOtpAPI } from "@/services/query/auth";
import { LocalStorage } from "@/services/storage/localstorage";
import { setTokenInHeader } from "@/services/request/axiosHelper";
import { privateAxios } from "@/services/request/axiosConfig";
import { getUserDetails, updateUserDetails } from "@/services/query/user";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isFetchingUserData, setIsFetchingUserData] = useState(false);
  const [userData, setUserData] = useState();

  const getToken = useCallback(() => {
    return LocalStorage.getData(localStorage, STORAGE_KEY_ACCESS_TOKEN);
  }, []);

  const initialize = useCallback(async () => {
    const initialData = getToken();
    if (!initialData) return;
    setTokenInHeader(privateAxios.defaults);

    setIsFetchingUserData(true);
    try {
      const data = await getUserDetails();
      setUserData(data);
    } catch (error) {
    } finally {
      setIsFetchingUserData(false);
    }
  }, [getToken]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const handleSuccess = useCallback(
    (data) => {
      LocalStorage.setData(
        localStorage,
        STORAGE_KEY_ACCESS_TOKEN,
        data.access_token
      );
      LocalStorage.setData(
        localStorage,
        STORAGE_KEY_REFRESH_TOKEN,
        data.refresh_token
      );
      initialize();
    },
    [initialize]
  );

  const logout = useCallback(() => {
    LocalStorage.removeData(localStorage, STORAGE_KEY_ACCESS_TOKEN);
    LocalStorage.removeData(localStorage, STORAGE_KEY_REFRESH_TOKEN);
    setUserData(undefined);
    !userData && toast.success('Logout Success', {
      position: toast.POSITION.TOP_CENTER,
    });
  }, []);

  const requestOtp = useCallback(async ({ mobileNumber, captcha }) => {
    try {
      const { data } = await generateOtp({ mobileNumber, captcha });
      if (!data.success) throw data;
      return data;
    } catch (error) {
      throw error;
    }
  }, []);

  const verifyOtp = useCallback(
    async ({ mobileNumber, otp }) => {
      try {
        const { data } = await verifyOtpAPI({ mobileNumber, otp });
        if (!data.success) throw data;
        if (data.success) handleSuccess(data.data);
        return data;
      } catch (error) {
        throw error;
      }
    },
    [handleSuccess]
  );

  const updateProfile = useCallback(
    async (data) => {
      try {
        const res = await updateUserDetails(data);
        if (!res.success) throw res;
        if (res.success) setUserData(res.data);
        return res;
      } catch (error) {
        throw error;
      }
    },
    [setUserData]
  );

  useEffect(() => { }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized: !!userData,
        isFetchingUserData,
        userData,
        setUserData,
        getToken,
        requestOtp,
        verifyOtp,
        updateProfile,
        logout,
        onLogin: handleSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
