# **MES-2.0 Documentation**

# Setting-Up MES-2.0

## To use the mes-ui-library in a React project, follow these steps:

### Step 1: Create a React Project
First, create a new React project using the create-react-app command in the terminal or command prompt:
```cmd 
npx create-react-app <app-name> 
```

### Step 2: Install mes-ui-library
Next, you need to install the mes-ui-library package in your React project. Since this is a private repository and only contributors can access it, you can include the GitHub repository link in the package.json file under the dependencies section. The link should include the specific version you want to use:

Open your package.json file and add the following line:
```
"dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    **"mes-2.0": "github:Bharath-007/mes-2.0",**
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
```
### Step 3: Install Dependencies
Now, run the following command in the terminal or command prompt to install the mes-ui-library and other dependencies mentioned in your package.json:

```
npm install
```

## or

### Step 4: Directly install 

Install the library using the GitHub link and version in the command
```
npm i https://github.com/Bharath-007/mes-2.0.git
```
If tagged
```
npm i https://github.com/Bharath-007/mes-2.0@1.2.1
```
### Step 5:  Now we can Import and Use the Componenets

- After successfully installing the mes-ui-library, you can import and use its components in your React application.
- For example, let's say you want to use components in your **App.js file**:
  - First we have to surround all our components with the `<ThemeProvider>{children}<ThemeProvider>`
  - Example: we have to use `our custom components inside the ThemeProvider else we ill face an error screen`
  - Inside the ThemeProvider we can use any of our component this is because everything is Theme Provider provides theme to the components inside theme without theme we get a error message
        - required - `without ?`
        - optional - `with ?`

# **MES-2.0 CUSTOM COMPONENTS** 
## MesTextField
```
     <MesTextField
        type="text"
        label="Input Text Label"
        error={name.length > 3 && name !== "1122"}
        success={name === "1122"}
        value={name}
        icon
        alignIcon="start"
        helperText={"Helper text goes here"}
        required
	user={true}
        onChange={(e) => setName(e.target.value)}
        /> 
```
### Props
- **type:** `"text" | "number" | "time" | "date" | "password"` Provides additional information or guidance to the user.
- **helperText?:** `string` Provides additional information or guidance to the user.
- **label?:** `string` Labels the input field.
- **icon?:** `icon` 
    - we can use here imported icons or we can specify icon as a ReactComponent from imports
    - eg: import {ReactComponent as ReactLogo} from './logo.svg';
- **alignIcon?:**  `"start" | "end"` Controls the alignment of the icon.
- **required?:** `boolean`  Indicates whether the field is mandatory.
- **error?:** `boolean`  Indicates an error condition.
- **success?:** `boolean` Indicates a success condition
- **value:** Represents the value of the input field.
- **onChange:** Specifies the event handler for input changes.
- **user?:** `boolean` used to show a user icon in the end of the textfield eg:used for login,signup to show a user icon
## MesBreadCrumbs & MesBreadCrumbsText
	<ThemeProvider>
        <MesBreadCrumbs>
          <MesBreadCrumbsText>Home</MesBreadCrumbsText>
          <MesBreadCrumbsText>Modules</MesBreadCrumbsText>
          <MesBreadCrumbsText>Cron Job</MesBreadCrumbsText>
        </MesBreadCrumbs>
      </ThemeProvider>
### Props
- **MesBreadCrumbs** - only have children the children can only be the MesBreadCrumbsText
- **MesBreadCrumbsText**
    - **id:** `string` which is used to access them.

## MesTooltip
	<ThemeProvider>
        <MesTooltip title="Tooltip" placement="bottom">Hover to show Tooltip</MesTooltip>
    </ThemeProvider>

### Props
- **title:** `string` This is a prop called "title" with the type of "string." It expects a string as its value.
- **children?:** `ReactNode | ReactNode[] | ReactElement | any` This is an optional prop called ==children==. It can accept various types of values, including ReactNode, an array of ReactNode, a ReactElement, or any other value.
- **placement?:**  This is an optional prop called "placement." It can accept one of the following string values: `"bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top"
    | undefined`

## MesButton
```
<MesButton
  variant={"contained"}   
  icon={<SampleIcon />}   
  alignIcon="endIcon"    
  >
  Save                     // Child text: "Save"
</MesButton>
```
### Props
- **children:** `string` This prop specifies the child content of the <MesButton>, which is expected to be a string. In your example, it contains the text "Save."
- **variant?:** `"outlined" | "contained"` This prop is optional and can accept one of two string values, either "outlined" or "contained." In your example, it's set to "contained."
- **icon?:** `ReactNode | ReactNode[] | JSX.Element` This prop is optional and can accept a variety of types for an icon, including ReactNode, an array of ReactNode, or a JSX element. In your example, it's set to <SampleIcon />, which appears to be a JSX element.
- **alignIcon?:** `"startIcon" | "endIcon"` This prop is optional and can accept one of two string values, either - **"startIcon" or "endIcon." It specifies the alignment of the icon within the button. In your example, it's set to "endIcon."
- **onClick?:** `MouseEventHandler<HTMLAnchorElement> | any` This prop is optional and can accept an onClick event handler. It can be a MouseEventHandler<HTMLAnchorElement> or any other type. It allows you to specify a function that will be executed when the button is clicked.
## MesIconButton
```
<MesIconButton
  variant="contained"   // Prop: variant is set to "contained"
>
  <SeverityDanger />    // Child content: JSX.Element, which is likely an icon or icon component
</MesIconButton>
```
### Props
- **children:** `ReactNode | ReactNode[] | JSX.Element` This prop specifies the child content of the <MesIconButton>. It can accept various types, including ReactNode, an array of ReactNode, or a JSX element. In your example, it contains <SeverityDanger />, which is likely a JSX element representing an icon or icon component.
- **variant?:** `"outlined" | "contained"` This prop is optional and can accept one of two string values, either `"outlined"` or `"contained."` It determines the visual style or variant of the button. In your example, it's set to "contained," indicating that the button should have a filled or solid appearance.
## MesSnackBar
```
<MesSnackBar
  open={true}                      // Prop: open is set to true, indicating that the snackbar is open
  message="Hello from backend"     // Prop: message contains the snackbar message
  severity={"warning"}            // Prop: severity is set to "warning"
  onClose={() => anyMethod(false)} // Prop: onClose is set to a function that calls anyMethod with false
/>
```
### Props
 - **open:** `boolean` This prop specifies whether the snackbar is open or closed. It's a boolean value. In your example, it's set to true, indicating that the snackbar is open.
 - **message:** `string` This prop contains the message that is displayed within the snackbar. It expects a string. In your example, it contains the message "Hello from backend."
 - **severity?:** `"success" | "error" | "warning" | "info"` This prop is optional and specifies the severity or type of the snackbar. It can accept one of the predefined strings: "success," "error," "warning," or "info".
 - **onClose?:** `((event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void) | undefined | any` This prop is optional and represents a callback function that is called when the snackbar is closed. It can accept a function with specific parameters, including event and reason, or it can be undefined or accept any other value.`If this is not passed Snackbar wont close it will always visible`
## MesProgress
```
const ProgressBarSample = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2}>
     <MesProgress value={progress} variant="variant1" />
     <MesProgress value={progress} variant="variant2" />
    </Stack>
  );
};
```
### Props
- **value:** `number` is set to the progress variable, which represents the current value of the progress bar.
- **variant:** `"variant1"|"variant2"` specifies the style or variant of the progress bar.

## MesHorizontalTab or MesVerticalTab
```
const TabSample = () => {
  const [label, setLabel] = useState("");
  return (
    <MesTabContainer>
      <MesTabs orientation="horizontal">
        <MesTab label="label 1" onClick={() => setLabel("1")} />
        <MesTab label="label 2" onClick={() => setLabel("2")} />
        <MesTab label="label 3" onClick={() => setLabel("3")} />
        <MesTab label="label 4" onClick={() => setLabel("4")} />
            {/* or the below one is for vertical tab */}
        <MesTabVertical label="Profile Settings" onClick={() => setLabel("1")} />
        <MesTabVertical label="Account Details" onClick={() => setLabel("2")}  />
        <MesTabVertical label="General Settings" onClick={() => setLabel("3")}  />
      </MesTabs>
      <MesContainer orientation="horizontal">
        {label === "1" && "Label 1"}
        {label === "2" && "Label 2"}
        {label === "3" && "Label 3"}
        {label === "4" && "Label 4"}
      </MesContainer>
    </MesTabContainer>
  );
};
```
### Props
 - **MesTabContainer**
    - props
      -  **children:** `ReactNode | ReactNode[] | JSX.Element` This prop specifies the child content of the component. It can accept various types, including ReactNode, an array of ReactNode, or a JSX element. This allows you to pass child elements or content into the component.
      -  **orientation:** `"vertical" | "horizontal(default)"` This prop specifies the orientation of the component. It can accept one of two string values: `"vertical" or "horizontal."` This prop likely controls how the component's contents are arranged or displayed, depending on whether you want a vertical or horizontal layout.
- **MesTabs** 
    - props
      -  **children:** `ReactNode | ReactNode[] | JSX.Element` This prop specifies the child content of the component. It can accept various types, including ReactNode, an array of ReactNode, or a JSX element. This allows you to pass child elements or content into the component.
      -  **orientation:** `"vertical" | "horizontal"` This prop specifies the orientation of the component. It can accept one of two string values: `"vertical" or "horizontal."` This prop likely controls how the component's contents are arranged or displayed, depending on whether you want a vertical or horizontal layout.
- **MesTab** or **MesTabVertical**
```<MesTab
  label="label 1"                // Prop: label is set to the string "label 1"
  onClick={() => setLabel('1')} // Prop: onClick is set to a function that calls setLabel with '1'
/>
```
- props
    - **label:** `string` This prop specifies the label or text content for the tab. It expects a string as its value. In your example, it's set to "label 1."
    - **onClick:** `MouseEventHandler<HTMLAnchorElement> | any` This prop specifies an onClick event handler for the tab. It can be a function that handles a click event on the tab. The type is defined as either a MouseEventHandler<HTMLAnchorElement> (which is a specific type for handling mouse events on anchor elements) or any other type (any). In your example, it's set to a function that calls setLabel('1') which is a setter when the tab is clicked.
- **MesContainer**
```
<MesContainer orientation="vertical">
  <Box height={"80vh"}></Box>
</MesContainer>
```
- props
    - **children?:** `any` This prop specifies the child content of the <MesContainer> component. It is of type any, which means it can accept any type of child content. In your example, the child content is a <Box> component with a specified height.
    - **orientation:** `"vertical" | "horizontal"` This prop specifies the orientation of the <MesContainer> component. It can accept one of two string values: `"vertical" or "horizontal."` This prop likely controls how the child content is arranged or displayed within the container. In your example, it's set to "vertical," indicating a vertical orientation.



#   C a n t i e r _ M E S _ U I _ L i b 
 
 
