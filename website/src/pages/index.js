import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./styles.module.css";

import { fields, options, validation } from "../schema";
import {
  StarForm,
  useForm,
  FormContext,
  Autoform,
  htmlComponentMap
} from "@star-js/form";
import chakraComponentMap from "@star-js/form-chakra-ui";

import {
  ChakraProvider,
  Flex,
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack
} from "@chakra-ui/core";
import { Heading } from "@chakra-ui/layout";

const features = [
  {
    title: "Easy to use forms for React",
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        StarForm is a low code solution designed to add powerful forms to your
        React project
      </>
    )
  },
  {
    title: "Focus on What Matters",
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Define your forms with a simple JSON schema. We'll take care of making
        it look nice, validation, etc.
      </>
    )
  },
  {
    title: "Designed for business apps",
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        JSON schema allows you to define and reuse elements, like options and
        validations.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Example() {
  const [uiPlugin, setUiPlugin] = React.useState(htmlComponentMap);
  const [selectedUi, setSelectedUi] = React.useState("html");
  React.useEffect(() => {
    if (selectedUi === "html") setUiPlugin(htmlComponentMap);
    else if (selectedUi === "chakra") setUiPlugin(chakraComponentMap);
  }, [selectedUi]);
  return (
    <ChakraProvider>
      <Flex justify="center">
        <Box borderWidth={1} rounded="lg" p={4}>
          <Heading mb={5} size="md">
            Example
          </Heading>
          <RadioGroup mb={5} onChange={setSelectedUi} value={selectedUi}>
            <Stack direction="row">
              <Radio value="html" mr={3}>
                HTML
              </Radio>
              <Radio value="chakra" mr={3}>
                Chakra
              </Radio>
              <Radio value="3">Third</Radio>
            </Stack>
          </RadioGroup>
          {/*<Box>*/}
          {/*  <Button onClick={() => setUiPlugin(htmlComponentMap)}>HTML</Button>*/}
          {/*  <Button onClick={() => setUiPlugin(chakraComponentMap)}>*/}
          {/*    Chakra*/}
          {/*  </Button>*/}
          {/*</Box>*/}
          <Box width={400}>
            <ExampleBody uiPlugin={uiPlugin} />
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

function ExampleBody({ uiPlugin }) {
  const autoForm = useForm({
    isEditing: true,
    fields,
    validation,
    values: {},
    optionsMap: options,
    controlMap: uiPlugin
  });

  // return (
  //   <StarForm
  //     isEditing
  //     fields={fields}
  //     validation={validation}
  //     // values: {},
  //     optionsMap={options}
  //     controlMap={uiPlugin}
  //   >
  //     <Autoform fields={fields} options={options} />
  //     {/*<SubmitButton onSubmit={(form) => alert(form)}>Do it</SubmitButton>*/}
  //     {/*<pre>{JSON.stringify(autoForm.form)}</pre>*/}
  //   </StarForm>
  // );

  return (
    <div>
      <FormContext.Provider value={autoForm}>
        <Autoform fields={fields} options={options} />
        {/*<SaveButton onSave={save} />*/}
        {/*<Button onClick={save}>Submit</Button>*/}
        <Box mt={5}>
          <pre>{JSON.stringify(autoForm.form)}</pre>
        </Box>
      </FormContext.Provider>
    </div>
  );
}

function Home() {
  // const { SubmitButton } = htmlComponentMap

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div
          className="container"
          style={{
            backgroundImage: "./static/img/logo.svg"
          }}
        >
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
          <div className="container">
            {/*<h2>A simple example:</h2>*/}
            <Example />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
