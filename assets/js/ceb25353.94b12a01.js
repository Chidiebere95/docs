"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6396],{44875:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return h},metadata:function(){return m},toc:function(){return f}});var o=a(83117),n=a(80102),r=a(67294),i=a(3905),s=a(84035),l=a(21720),d=a.n(l),p=a(38754);var u=function(){var e=(0,r.useState)(0),t=e[0],a=e[1],o=function(){var e=(0,s.Z)(d().mark((function e(t){var o,n,r,i,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.target.value,n=parseInt(o)){e.next=4;break}return e.abrupt("return");case 4:return r=1024*n,e.next=7,(0,p.Kf)([r]);case 7:i=e.sent,console.log(i),s=Math.round(1e8*(i.solana+Number.EPSILON))/1e8,a(s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.createElement("form",{style:{border:"1px solid #444",padding:"8px"},action:"#"},r.createElement("div",null,r.createElement("label",{for:"fileSize",style:{marginRight:"10px"}},"Total storage size of asset and metadata.json (in kilobytes):"),r.createElement("input",{id:"fileSize",autoComplete:"off",type:"number",onChange:o})),r.createElement("div",null,r.createElement("span",{style:{display:"inline-block",marginRight:"10px"}},"Estimated Arweave storage cost:"),r.createElement("span",null,t),"\xa0SOL"),r.createElement("p",{style:{color:"#888",fontSize:"0.8em",margin:"10px 0 0"}},r.createElement("em",null,"Fees are dynamic. Pricing is determined by the Arweave network")))},c=["components"],h={sidebar_position:6,unlisted:!0,Audience:"people who know nothing about nfts",Goal:"people understand how data is stored, where it is stored, why decentralized storage is preferred, cost of storage"},g="NFT Storage Overview",m={unversionedId:"overviews/storage_overview",id:"overviews/storage_overview",title:"NFT Storage Overview",description:"NFTs are meant to live forever, being bought, sold, held and enjoyed for the",source:"@site/docs/overviews/storage_overview.md",sourceDirName:"overviews",slug:"/overviews/storage_overview",permalink:"/overviews/storage_overview",editUrl:"https://github.com/metaplex/docs/tree/main/docs/overviews/storage_overview.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,unlisted:!0,Audience:"people who know nothing about nfts",Goal:"people understand how data is stored, where it is stored, why decentralized storage is preferred, cost of storage"},sidebar:"sidebar",previous:{title:"Candy Machine Overview",permalink:"/overviews/candy_machine_overview"},next:{title:"Burn NFTs",permalink:"/overviews/burn_NFTS"}},f=[{value:"Storage options",id:"storage-options",children:[{value:"Arweave",id:"arweave",children:[{value:"Arweave storage fees",id:"arweave-storage-fees",children:[{value:"Arweave storage calculator",id:"arweave-storage-calculator",children:[],level:5}],level:4}],level:3},{value:"NFT.Storage",id:"nftstorage",children:[{value:"Using NFT.Storage",id:"using-nftstorage",children:[],level:4}],level:3},{value:"IPFS",id:"ipfs",children:[{value:"Using IPFS",id:"using-ipfs",children:[],level:4},{value:"IPFS storage fees",id:"ipfs-storage-fees",children:[],level:4}],level:3},{value:"AWS S3",id:"aws-s3",children:[{value:"Using AWS S3",id:"using-aws-s3",children:[],level:4},{value:"S3 storage fees",id:"s3-storage-fees",children:[],level:4}],level:3},{value:"Looking for another storage option?",id:"looking-for-another-storage-option",children:[],level:3}],level:2}],v={toc:f};function w(e){var t=e.components,a=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nft-storage-overview"},"NFT Storage Overview"),(0,i.kt)("p",null,"NFTs are meant to live forever, being bought, sold, held and enjoyed for the\nrest of time. As such, the storage on which your assets are written should be\n",(0,i.kt)("em",{parentName:"p"},"permanant"),".  NFTs created through Metaplex are written to scalable, durable,\npermanant, censorship resistent storage by default, but there are other options\navailable too. Let's take a look."),(0,i.kt)("h2",{id:"storage-options"},"Storage options"),(0,i.kt)("h3",{id:"arweave"},"Arweave"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Arweave is the default storage option"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://arweave.org"},"Arweave")," is a decentralized, trust-minimized, censorship-resistant data\nstorage network designed to retain data permanently, making it a great fit for\nNFTs.  To cover the cost of storing your media forever, storage and mining fees\nare paid at the time of upload and distributed to storage providers\nparticipating in the network."),(0,i.kt)("h4",{id:"arweave-storage-fees"},"Arweave storage fees"),(0,i.kt)("p",null,"Storage fees are based on the total size of the files you upload to the network during NFT creation. Each NFT consists of three files:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The asset itself (image, video, audio, etc)"),(0,i.kt)("li",{parentName:"ol"},"The accompanying metadata file (attributes etc)"),(0,i.kt)("li",{parentName:"ol"},"A generated ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ArweaveTeam/arweave/wiki/Path-Manifests"},"manifest which creates a logical grouping")," or relationship between your files")),(0,i.kt)("p",null,"The cumulative size of these files (in bytes) is submitted to the ",(0,i.kt)("a",{parentName:"p",href:"https://node1.bundlr.network/price/0"},"Arweave\nstorage cost estimation service")," which returns the real\ntime estimated fee for storage, priced in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.arweave.org/developers/server/http-api#ar-and-winston"},"winstons"),". We then convert the\nwinstons to SOL for payment."),(0,i.kt)("h5",{id:"arweave-storage-calculator"},"Arweave storage calculator"),(0,i.kt)("p",null,"Here's a calculator to help you estimate your NFT creation costs:"),(0,i.kt)(u,{mdxType:"ArweaveCostCalc"}),(0,i.kt)("h3",{id:"nftstorage"},"NFT.Storage"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nft.storage"},"NFT.Storage")," is a free service that provides long-term NFT data storage on the decentralized ",(0,i.kt)("a",{parentName:"p",href:"https://filecoin.io"},"Filecoin")," network with fast retrieval through ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS"),"."),(0,i.kt)("p",null,"NFT.Storage currently supports files up to 31 Gib and does not charge for storage."),(0,i.kt)("h4",{id:"using-nftstorage"},"Using NFT.Storage"),(0,i.kt)("p",null,"NFT.Storage is currently only supported within the CandyMachine ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," command. Please see the ",(0,i.kt)("a",{parentName:"p",href:"/candy-machine-v2/configuration"},"configuration guide")," for details about the configuration settings to use."),(0,i.kt)("p",null,"Note that when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"nft-storage")," configuration setting, you can optionally also set an ",(0,i.kt)("inlineCode",{parentName:"p"},"nftStorageKey")," to an NFT.Storage API token. Setting an ",(0,i.kt)("inlineCode",{parentName:"p"},"nftStorageKey")," will allow you to view uploads in your NFT.Storage account's file listing. "),(0,i.kt)("p",null,"If you do not provide an API key, the Solana keypair used for the ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," command will be used to sign an upload request message, which is used to authenticate the upload with NFT.Storage. This allows you to upload without an NFT.Storage account, but you will not be able to manage the upload using the NFT.Storage service afterwards."),(0,i.kt)("p",null,"For more information about using NFT.Storage with CandyMachine, see the ",(0,i.kt)("a",{parentName:"p",href:"https://nft.storage/docs/how-to/mint-solana"},"NFT.Storage documentation on Metaplex")),(0,i.kt)("h3",{id:"ipfs"},"IPFS"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"InterPlantetary File System"),", or IPFS, is a decentralized,\ntrust-minimized, censorship-resistant, peer-to-peer hypermedia protocol designed\nto preserve and grow humanity's knowledge by making the web upgradeable,\nresilient, and more open. It's P2P design allows for file deduplication and\nother efficiencies. IPFS is not designed to store files permanantly and so is\ntherefore not the default storage option."),(0,i.kt)("h4",{id:"using-ipfs"},"Using IPFS"),(0,i.kt)("p",null,"IPFS storage is currently only supported within the Candy Machine ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," command."),(0,i.kt)("p",null,"Please run ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node candy-machine-v2-cli.ts upload --help")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"js/packages/cli/src")," directory for details about the command line flags you'll need to set."),(0,i.kt)("h4",{id:"ipfs-storage-fees"},"IPFS storage fees"),(0,i.kt)("p",null,"Please visit ",(0,i.kt)("a",{parentName:"p",href:"https://infura.io/docs/ipfs"},"https://infura.io/docs/ipfs")," for details."),(0,i.kt)("h3",{id:"aws-s3"},"AWS S3"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon Web Services S3")," is a global, affordable but centralized storage\nprovider. Because S3 is centralized, NFTs stored there are not censorship\nresistant. If AWS receives legal threats, decides they no longer support NFTs,\ngoes out of business or you stop making payments, they can remove your assets\nfrom their service, potentially leaving holders of your NFTs without their\nmedia. For NFTs which are meant to be censorship resistant and permanant, we do\nnot recommend using S3. However, it is an affordable option so depending on your\nneeds may be what you need."),(0,i.kt)("h4",{id:"using-aws-s3"},"Using AWS S3"),(0,i.kt)("p",null,"AWS S3 storage is currently only supported within the CandyMachine ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," command."),(0,i.kt)("p",null,"Please run ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node candy-machine-v2-cli.ts upload --help")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"js/packages/cli/src")," directory for details about the command line flags you'll need to set."),(0,i.kt)("h4",{id:"s3-storage-fees"},"S3 storage fees"),(0,i.kt)("p",null,"Please visit ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/pricing/"},"https://aws.amazon.com/s3/pricing/")," for details."),(0,i.kt)("h3",{id:"looking-for-another-storage-option"},"Looking for another storage option?"),(0,i.kt)("p",null,"Please open a Pull Request on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex"},"metaplex-foundation/metaplex")," repository\nand then add documentation to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/docs/blob/main/docs/overviews/storage_overview.md"},"this\npage"),"."))}w.isMDXComponent=!0}}]);