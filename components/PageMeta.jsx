import Head from "next/head";

const defaultMeta = {
  title: "GProjukti.com - Leading Computer, Laptop & Gadget Shop in Bangladesh",
  description: "GProjukti.com is the Best Laptop, Computer, Gaming PC, Component, Accessories, and Gadget retail & Online shop in Bangladesh. GProjukti.com offers the Latest Tech products with the most competitive price in BD"
};

export const PageMeta = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>G Projukti | {title || defaultMeta.title}</title>
      <meta name="description" content={description || defaultMeta.description} />
    </Head>
  )
}