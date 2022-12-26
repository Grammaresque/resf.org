import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

import Header from "@/components/Header";
import Layout from "@/components/Layout";

import {
  projectDropdownItems,
  menuItems,
  aboutDropdownItems,
  actionItems,
} from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface IndexProps {
  menuItems?: {
    projectItems: NavItems;
    menuItems: NavItems;
    aboutItems: NavItems;
    actionItems: NavActionItems;
  };
}

const Index: NextPage = ({ menuItems }: IndexProps) => {
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>{menuItems && <Header menu={menuItems} />}</Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ? locale : "en", [
      "common",
      "coming-soon",
    ])),
    menuItems: {
      projectItems: projectDropdownItems,
      menuItems: menuItems,
      aboutItems: aboutDropdownItems,
      actionItems: actionItems,
    },
  },
});

export default Index;
