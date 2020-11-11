<h2 style="display: flex; align-items: center; font-size: 30px"><img style="padding-right: 20px" src="https://i.ibb.co/Vxpvv9k/LOGO.png" height="100" width="160"/> Fixit Common UI</h2>

[![Build Status](https://dev.azure.com/FixIt-App/FixIt-Capstone/_apis/build/status/FixitLibraries/FixitMobileComponentLib?branchName=development)](https://dev.azure.com/FixIt-App/FixIt-Capstone/_build/latest?definitionId=3&branchName=development)

Fixit Common UI is a cross platform component library which will speed up the development of the screens part of the mobile application and keep the look and feel consistent.

### 📖 	[Documentation](#)
>TODO: add link to docz when it is hosted

## Installation
⚠️ Before installing, make sure that you have followed the steps to [connect to the azure feed](https://dev.azure.com/FixIt-App/FixIt-Capstone/_packaging?_a=connect&feed=fixit-common-ui).

#### Install the package
```sh
npm install fixit-common-ui
```
This library has a peerDependencies listing for `react-native-vector-icons`. Make sure to install it too! Check out [the docs](https://github.com/oblador/react-native-vector-icons/blob/master/README.md) outlining the installation steps.

## Usage
After installing the required packages, it is quite easy to use:
```ts
import { Button } from  'fixit-common-ui';

function render(){
  return (
    <Button onPress={doSomething}>
      Press Me
    </Button>
  );
}
```
