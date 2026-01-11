import Head from "next/head";
import { MetaDataProps } from "../../types/types";

const MetaData = ({ title, description }: MetaDataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MetaData;
