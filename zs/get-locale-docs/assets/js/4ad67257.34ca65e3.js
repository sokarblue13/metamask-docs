"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),c=r,N=k["".concat(d,".").concat(c)]||k[c]||s[c]||i;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"MetaMask JavaScript SDK options",sidebar_position:1},l="JavaScript SDK options",o={unversionedId:"reference/sdk-js-options",id:"reference/sdk-js-options",title:"JavaScript SDK options",description:"MetaMask JavaScript SDK options",source:"@site/wallet/reference/sdk-js-options.md",sourceDirName:"reference",slug:"/reference/sdk-js-options",permalink:"/zs/get-locale-docs/wallet/reference/sdk-js-options",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-js-options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"MetaMask JavaScript SDK options",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Reference",permalink:"/zs/get-locale-docs/wallet/reference"},next:{title:"Unity SDK API",permalink:"/zs/get-locale-docs/wallet/reference/sdk-unity-api"}},d={},p=[],m={toc:p},k="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript-sdk-options"},"JavaScript SDK options"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/zs/get-locale-docs/wallet/how-to/connect/set-up-sdk/javascript/"},"JavaScript version of MetaMask SDK")," takes the\nfollowing options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dappMetadata")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'{name: "My Dapp", url: "https://mydapp.com"}')),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Only required for non-web dapps (for example, React Native and Unity).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"injectProvider")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Doesn't inject in Node.js or React Native since the window object is unavailable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forceInjectProvider")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Forces injection even if another provider is already present on the window object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forceDeleteProvider")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Forces deletion of a provider that exists on a window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInstallationImmediately")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"The SDK checks if MetaMask is installed when a call to ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_requestAccounts")," is made. When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", it checks before any call is made.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInstallationOnAllCalls")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Normally checked when a call to ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_requestAccounts")," is made. When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", it checks on all calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shouldShimWeb3")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Set as ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"window.web3")," should be shimmed for legacy compatibility purposes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preferDesktop")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"For a web dapp running on a desktop browser without a MetaMask extension, the SDK gives the option to connect with a MetaMask Mobile wallet via a QR code. When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the SDK guides the user to install the MetaMask extension instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openDeeplink")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"(deeplinkUrl: string) => void")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Platforms open deeplinks differently. For example, web: ",(0,r.kt)("inlineCode",{parentName:"td"},"window.open")," versus React Native: ",(0,r.kt)("inlineCode",{parentName:"td"},"Linking.open"),". This function retrieves the deeplink URL and allows developers to customize how it opens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getUniversalLink")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"() => string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the universal link that is presented on the QR Code (web) and deeplinks (mobile). This makes it easier to enable users to connect with backend code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"communicationLayerPreference")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"socket" or "webrtc"')),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"socket")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the communication library that the dapp and MetaMask wallet use to communicate with each other. Waku or another similar decentralized communication layer solution coming soon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"communicationServerUrl")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"URL for the communication server, generally managed in your environment variables.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webRTCLib")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"WebRTC Lib")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Not installed on the SDK by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WalletConnectInstance")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"WalletConnect Lib")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Connect a dapp to MetaMask using ",(0,r.kt)("a",{parentName:"td",href:"https://docs.walletconnect.com/"},"WalletConnect"),". Not installed by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forceRestartWalletConnect")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Set ",(0,r.kt)("inlineCode",{parentName:"td"},"forceRestartWalletConnect")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," to kill the previous WalletConnect session and start another one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transports")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"['websocket', 'polling']")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Used to set the preference on ",(0,r.kt)("a",{parentName:"td",href:"https://socket.io/docs/v4/"},"socket.io")," transports to ",(0,r.kt)("inlineCode",{parentName:"td"},"use"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timer")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"BackgroundTimer")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Used by React Native dapps to keep the dapp alive while using ",(0,r.kt)("inlineCode",{parentName:"td"},"react-native-background-timer")," in the background")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enableDebug")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables/disables the sending of debugging information to the socket.io server. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," for the beta version of the SDK. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," in production versions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logging")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{developerMode: boolean}")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Log-related configurations. ",(0,r.kt)("inlineCode",{parentName:"td"},"developerMode")," enables/disables developer logs.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your project is a web dapp and ",(0,r.kt)("inlineCode",{parentName:"p"},"injectProvider")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", then the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," object should be\navailable in ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum"),".")))}s.isMDXComponent=!0}}]);