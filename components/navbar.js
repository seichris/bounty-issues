import React from "react";
import {useEffect, useState} from "react";
import Link from 'next/link';
//import wallet from '../scripts/wallet.ts';
import dynamic from 'next/dynamic';

  const web3 = dynamic(
    () => import('../scripts/web3.ts'),
    { ssr: false }
  )

  const {web3Loading, getweb3} = web3();

function Navbar() {

  const [myWeb3, setMyWeb3] = useState();

  async function connectWallet() {
    await getweb3().then((response) => {
        setMyWeb3(response);
        response.eth.getAccounts().then((result) => {
        console.log(result)
        });
      });
  };

  return (
    <div className="flex flex-col items-stretch justify-between">
       <div className="flex justify-between h-16">
          <a className="flex flex-row items-center" href="/">
             <div className="flex items-center">
                <div className="h-8 w-8 mr-4"><img src="https://i.imgur.com/UiLsBJT.png"/></div>
                <div className="text-xl font-semibold mr-14 tracking-wider">better.dapp.com</div>
             </div>
          </a>
          <div className="flex items-center">
             <div className="self-stretch flex flex-col items-stretch font-bold text-sm leading-5 border-b hover:opacity-80">
                <div className="uppercase font-bold text-xs text-gray-400 cursor-pointer hover:text-gray-600 p-2">Log&nbsp;in&nbsp;/&nbsp;Sign&nbsp;up</div>
                {web3Loading? <button className="btn-inner-text" disabled> Loading ... </button>: <button className =" btn-inner - text "onClick = {connectWallet}>get accounts</button>}
             </div>
          </div>
       </div>
       <div className="h-10 flex items-center box-border">
          <a className="flex items-center cursor-pointer box-border p-4" href="/">
             <span className="w-3 h-3 opacity-100 mr-2 bg-gray-400"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAElBMVEVHcEz///////////////////+IGTx/AAAABXRSTlMAr0AwEGUIpLUAAABqSURBVDjL7ZXBCsAwCEOtrv//y1MYtkrNzmPmZMg7KUGaqsE85lJhyWZSrbCyhrIZ9qyyhtpMl2eVdZRidrCNNvpxVGJhEJpqiFBts2zlhmjUH9C0c4SmnSM07RyiUI3K/jawwjN6Y58D3RcGF3FNrTJBAAAAAElFTkSuQmCC"/></span>
             <div className="uppercase font-bold text-xs text-gray-400 hover:text-gray-600">Roadmap</div>
          </a>
          <a className="flex items-center cursor-pointer box-border p-2 mr-2" href="/proposed">
            <div className="bg-gray-500 w-2 h-2 mr-2 rounded-full"></div>
            <div className="uppercase font-bold text-xs text-gray-400 hover:text-gray-600">Proposed</div>
          </a>
          <a className="flex items-center cursor-pointer box-border p-2 mr-2" href="/funding">
            <div className="bg-blue-500 w-2 h-2 mr-2 rounded-full"></div>
            <div className="uppercase font-bold text-xs text-gray-400 hover:text-gray-600">In Funding</div>
          </a>
          <a className="flex items-center cursor-pointer box-border p-2 mr-2" href="/building">
             <div className="bg-purple-400 w-2 h-2 mr-2 rounded-full"></div>
             <div className="uppercase font-bold text-xs text-gray-400 hover:text-gray-600">In Progress</div>
          </a>
          <a className="flex items-center cursor-pointer box-border p-2 mr-2" href="/feature-requests">
            <span className="w-3 h-3 opacity-100 mr-2 bg-gray-400"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
            <div className="uppercase font-bold text-xs text-gray-400 hover:text-gray-600">Feature Requests</div>
          </a>
          <a className="flex items-center cursor-pointer box-border p-2 mr-2" href="/bug-reports">
            <span className="w-3 h-3 opacity-100 mr-2 bg-gray-400"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
            <div className="uppercase font-bold text-xs text-gray-400 hover:text-gray-600">Bug Reports</div>
          </a>
          <a className="flex items-center cursor-pointer box-border p-2 mr-2" href="/translation-requests">
            <span className="w-3 h-3 opacity-100 mr-2 bg-gray-400"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
             <div className="uppercase font-bold text-xs text-gray-400 hover:text-gray-600">Translation Requests</div>
          </a>
       </div>
    </div>

    );
  };

export default Navbar;
