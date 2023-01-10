import "./KcApp.css";
import { lazy, Suspense } from "react";
import type { KcContext } from "./kcContext";
import KcAppBase, { defaultKcProps } from "keycloakify";
import { useI18n } from "./i18n";
import { useDownloadTerms } from "keycloakify";
const Register = lazy(() => import("./Register"));
const MyExtraPage1 = lazy(() => import("./MyExtraPage1"));
const MyExtraPage2 = lazy(() => import("./MyExtraPage2"));
import tos_en_url from "./tos_en.md";
import tos_fr_url from "./tos_fr.md";

export type Props = {
  kcContext: KcContext;
};

export default function KcApp({ kcContext }: Props) {
  useDownloadTerms({
    kcContext,
    downloadTermMarkdown: async ({ currentLanguageTag }) => {
      const markdownString = await fetch(
        (() => {
          switch (currentLanguageTag) {
            case "fr":
              return tos_fr_url;
            default:
              return tos_en_url;
          }
        })()
      ).then((response) => response.text());

      return markdownString;
    },
  });
  const i18n = useI18n({ kcContext });

  //NOTE: Locales not yet downloaded
  if (i18n === null) {
    return null;
  }

  const props = {
    i18n,
    ...defaultKcProps,
    // NOTE: The classes are defined in ./KcApp.css
    kcHeaderWrapperClass: "my-color my-font",
  };

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case "register.ftl":
            return <Register {...{ kcContext, ...props }} />;
          case "my-extra-page-1.ftl":
            return <MyExtraPage1 {...{ kcContext, ...props }} />;
          case "my-extra-page-2.ftl":
            return <MyExtraPage2 {...{ kcContext, ...props }} />;
          default:
            return <KcAppBase {...{ kcContext, ...props }} />;
        }
      })()}
    </Suspense>
  );
}
