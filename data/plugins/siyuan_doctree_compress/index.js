"use strict";var W=Object.defineProperty;var J=(l,e,t)=>e in l?W(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var v=(l,e,t)=>(J(l,typeof e!="symbol"?e+"":e,t),t);const U=require("siyuan");class Q{constructor(e,t,i,n,h){v(this,"plugin");v(this,"name");v(this,"file");v(this,"settings",new Map);v(this,"elements",new Map);this.name=t??"settings",this.plugin=e,this.file=this.name.endsWith(".json")?this.name:`${this.name}.json`,this.plugin.setting=new U.Setting({width:n,height:h,confirmCallback:()=>{for(let d of this.settings.keys())this.updateValue(d);let c=this.dump();i!==void 0?i(c):(this.plugin.data[this.name]=c,this.save()),window.location.reload()}})}async load(){let e=await this.plugin.loadData(this.file);if(console.debug("Load config:",e),e)for(let[t,i]of this.settings)i.value=(e==null?void 0:e[t])??i.value;return this.plugin.data[this.name]=this.dump(),e}async save(){let e=this.dump();return await this.plugin.saveData(this.file,this.dump()),e}get(e){var t;return(t=this.settings.get(e))==null?void 0:t.value}async assignValue(e,t){let i=this.settings.get(e);i.value=t,this.plugin.data[this.name]=i.value,await this.save(),window.location.reload()}dump(){let e={};for(let[t,i]of this.settings)i.type!=="button"&&(e[t]=i.value);return e}addItem(e){var i,n,h,c,d;this.settings.set(e.key,e);let t;switch(e.type){case"checkbox":let b=document.createElement("input");b.type="checkbox",b.checked=e.value,b.className="b3-switch fn__flex-center",t=b;break;case"select":let p=document.createElement("select");p.className="b3-select fn__flex-center fn__size200";let m=(e==null?void 0:e.options)??{};for(let x in m){let f=document.createElement("option"),k=m[x];f.value=x,f.text=k,p.appendChild(f)}p.value=e.value,t=p;break;case"slider":let u=document.createElement("input");u.type="range",u.className="b3-slider fn__size200 b3-tooltips b3-tooltips__n",u.ariaLabel=e.value,u.min=((i=e.slider)==null?void 0:i.min.toString())??"0",u.max=((n=e.slider)==null?void 0:n.max.toString())??"100",u.step=((h=e.slider)==null?void 0:h.step.toString())??"1",u.value=e.value,u.onchange=()=>{u.ariaLabel=u.value},t=u;break;case"textinput":let s=document.createElement("input");s.className="b3-text-field fn__flex-center fn__size200",s.value=e.value,t=s;break;case"textarea":let o=document.createElement("textarea");o.className="b3-text-field fn__block",o.value=e.value,t=o;break;case"number":let r=document.createElement("input");r.type="number",r.className="b3-text-field fn__flex-center fn__size200",r.value=e.value,t=r;break;case"button":let g=document.createElement("button");g.className="b3-button b3-button--outline fn__flex-center fn__size200",g.innerText=((c=e.button)==null?void 0:c.label)??"Button",g.onclick=((d=e.button)==null?void 0:d.callback)??(()=>{}),t=g;break;case"hint":let _=document.createElement("div");_.className="b3-label fn__flex-center",t=_;break}this.elements.set(e.key,t),this.plugin.setting.addItem({title:e.title,description:e==null?void 0:e.description,createActionElement:()=>this.getElement(e.key)})}getElement(e){let t=this.settings.get(e),i=this.elements.get(e);switch(t.type){case"checkbox":i.checked=t.value;break;case"select":i.value=t.value;break;case"slider":i.value=t.value,i.ariaLabel=t.value;break;case"textinput":i.value=t.value;break;case"textarea":i.value=t.value;break}return i}updateValue(e){let t=this.settings.get(e),i=this.elements.get(e);switch(t.type){case"checkbox":t.value=i.checked;break;case"select":t.value=i.value;break;case"slider":t.value=i.value;break;case"textinput":t.value=i.value;break;case"textarea":t.value=i.value;break}}}function X(){a(`
        .b3-list-item__icon.b3-tooltips.b3-tooltips__n:hover::after,
        .b3-list-item__action.b3-tooltips.b3-tooltips__nw:hover::after,
        .popover__block.b3-tooltips.b3-tooltips__nw:hover::after {
          display: none;
        }                    
       `)}function Y(){a(`
        .b3-list-item__icon.b3-tooltips.b3-tooltips__n[aria-label="修改图标"],
        .b3-list-item__icon.b3-tooltips.b3-tooltips__n[aria-label="Change icon"] {
        pointer-events: none;
        }
       `)}function ee(l,e){const t=l?`
        .layout-tab-container .b3-list-item__text {
            transition: font-size 0.2s ease;
        }
        .layout-tab-container .b3-list-item:hover > .b3-list-item__text {
            font-size: ${e}px !important;
         }
         `:`
        .layout-tab-container .b3-list-item__text {
            transition: font-size 0.2s ease;
        }
        .layout-tab-container .b3-list-item:hover > .b3-list-item__text {
            font-size: ${e}px;
         }`;a(t)}function te(l){a(l?`
        .layout-tab-container .b3-list-item:hover > .b3-list-item__text {
            overflow:visible !important;
         -webkit-line-clamp: unset;
         }
         `:`
         .layout-tab-container .b3-list-item:hover > .b3-list-item__text {
            overflow:visible;
         -webkit-line-clamp: unset;
         }`)}function ie(){a(`
        .fn__flex-1.fn__flex-column.file-tree.sy__file .ariaLabel:hover {
            pointer-events: none;
          }                      
       `)}function le(l,e){const t=l?`
        .layout-tab-container .b3-list-item__text {
            line-height: ${e}px !important;
         }
         `:`
         .layout-tab-container .b3-list-item__text {
            line-height: ${e}px;
         }`;a(t)}function ne(l){const e=`
        .layout-tab-container .b3-list-item__text {
            border-top: ${l}px solid #eaecef;
        }
        `;a(e)}function se(l){const e=`
        .sy__file ul.b3-list.b3-list--background {
            border-radius: 0.1em;
            margin: 7px 4px 7px 4px;
            outline: 1.9px solid var(--b3-theme-background-light);
            overflow: hidden;
        }
        `,t=`
        .sy__file ul.b3-list.b3-list--background {
            border-radius: 0.3em;
            margin: 7px 10px 6px 10px;
            outline: 2px solid var(--b3-theme-background-light);
            overflow: hidden;
        }
        `,i=`
        .sy__file ul.b3-list.b3-list--background {
            border-radius: 0.3em;
            margin: 6px 10px 6px 12px;
            outline: 1.5px double #8e9ba3;
            overflow: hidden;
        }
        `;l==1?a(t):l==2?a(e):l==3&&a(i)}function oe(l){a(l?`
            .b3-list-item__icon {
                display: none !important;
            }
            `:`
            .b3-list-item__icon {
                display: none;
            }
            `)}function ae(l,e){const t=l==!0?`
        .layout-tab-container.fn__flex-1 {
            font-size: ${e}px !important;
        }
        `:`
        .layout-tab-container.fn__flex-1 {
            font-size: ${e}px;
        }
        `;a(t)}function ue(l,e,t,i){console.log(l),Number(t)>=Number(e)&&(t=e);var n;switch(l){case"1":n=` .b3-list ul {
                position: relative;
                }

                /* main */
                .b3-list ul::before {
                content: '';
                position: absolute;
                left: 20px;
                top: 0;
                height: 100%;
                border-left: ${i}px solid var(--b3-theme-background-light);
                z-index: 1;
                }

                .b3-list ul ul::before {
                left: 34px;
                }

                .b3-list ul ul ul::before {
                left: 52px;
                }

                .b3-list ul ul ul ul::before {
                left: 70px;
                }

                .b3-list ul ul ul ul ul::before {
                left: 88px;
                }

                .b3-list ul ul ul ul ul ul::before {
                left: 106px;
                }

                .b3-list ul ul ul ul ul ul ul::before {
                left: 124px;
                }

                .b3-list ul ul ul ul ul ul ul ul::before {
                left: 142px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul::before {
                left: 160px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul::before {
                left: 178px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 196px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 214px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 232px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 250px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 268px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 286px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 304px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 322px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 340px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 358px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 376px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 394px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 412px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 430px;
                }

                .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 448px;
                }
                `;break;case"2":n=`
                .layout-tab-container .b3-list-item > .b3-list-item__toggle {
                    position: relative; 
                    padding-left: 4px !important;
                }
                
                .layout-tab-container ul ul::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: ${e}px;
                    border-left: ${i}px solid var(--b3-theme-background-light);
                }
                
                .layout-tab-container ul ul {
                    position: relative;
                    padding-left: ${t}px;
                }
                
                .layout-tab-container ul ul::after {
                    content: "";
                    position: absolute;
                    left: ${e}px;
                    border-bottom: var(--custom-block-list-guides-line-width) solid var(--b3-theme-on-surface) !important;
                    width: 0px; //dunno what's this currently
                    height: 0;
                }
                
                .layout-tab-container ul ul::before {
                    content: "";
                    position: absolute;
                    top: 0px; // make the line go down for x px.
                    left: ${e}px;
                    border-top: var(--custom-block-list-guides-line-width) solid var(--b3-theme-on-surface);
                }
                
                `;break;case"3":n=`

                .layout-tab-container .b3-list-item > .b3-list-item__toggle {
                    padding-left: 4px !important;
                }
        
                .layout-tab-container ul ul:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: ${e}px;
                    border-left: ${i}px solid var(--b3-theme-background-light);
                }
                
                .layout-tab-container ul ul {
                    position: relative;
                    padding-left: ${t}px;
                }
                
                `;case"4":n=`
                .layout-tab-container .b3-list-item > .b3-list-item__toggle {
                    padding-left: 4px !important;
                }
        
                .layout-tab-container ul ul:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: ${e}px;
                    border-left: ${i}px solid var(--b3-theme-background-light);
                }
                
                .layout-tab-container ul ul {
                    position: relative;
                    padding-left: ${t}px;
                }
        
                .layout-tab-container ul ul:hover:before {
                    border-left-color: var(--b3-theme-on-primary);
                }
                `;break}a(n)}function re(l,e,t){switch(t){case"1":const h=l?`
                  .layout-tab-container .b3-list-item__toggle {
                      transition: padding-left 0.2s ease;
                  }
                  .layout-tab-container .b3-list-item:hover > .b3-list-item__toggle {
                      padding-left: ${e}px !important;
                  }
                  `:`
                  .layout-tab-container .b3-list-item__toggle {
                      transition: padding-left 0.2s ease;
                  }
                  .layout-tab-container .b3-list-item:hover > .b3-list-item__toggle {
                      padding-left: ${e}px;
                  }`;a(h);break;case"2":let c=function(){for(var s=document.getElementsByClassName("b3-list-item__toggle"),o=0;o<s.length;o++){var r=window.getComputedStyle(s[o],null).getPropertyValue("padding-left"),g=s[o].parentNode.getElementsByClassName("b3-list-item__icon")[0];g&&r!==e+"px"&&(g.style.paddingLeft=r,s[o].style.paddingLeft=e+"px")}};const d=l?`
                  .layout-tab-container .b3-list-item__icon {
                      transition: padding-left 0.2s ease;
                  }
                  .layout-tab-container .b3-list-item:hover > .b3-list-item__icon {
                      padding-left: ${e}px !important;
                  }
                  `:`
                  .layout-tab-container .b3-list-item__icon {
                      transition: padding-left 0.2s ease;
                  }
                  .layout-tab-container .b3-list-item:hover > .b3-list-item__icon {
                      padding-left: ${e}px;
                  }`;a(d),c();var i=new MutationObserver(function(s){c()}),n={childList:!0,subtree:!0};i.observe(document,n);break;case"3":let b=function(){for(var s=document.getElementsByClassName("b3-list-item__toggle"),o=0;o<s.length;o++){var r=window.getComputedStyle(s[o],null).getPropertyValue("padding-left");r!==e+"px"&&(s[o].style.paddingRight=r,s[o].style.paddingLeft=e+"px")}};b();var i=new MutationObserver(function(s){b()}),n={childList:!0,subtree:!0};i.observe(document,n);const p=l?`
                  .layout-tab-container .b3-list-item__toggle {
                      transition: padding-right 0.2s ease;
                  }
                  .layout-tab-container .b3-list-item:hover > .b3-list-item__toggle {
                      padding-right: ${e}px !important;
                  }
                  `:`
                  .layout-tab-container .b3-list-item__toggle {
                      transition: padding-right 0.2s ease;
                  }
                  .layout-tab-container .b3-list-item:hover > .b3-list-item__toggle {
                      padding-right: ${e}px;
                  }`;a(p);break;case"4":let m=function(){for(var s=document.getElementsByClassName("b3-list-item__toggle"),o=0;o<s.length;o++){var r=window.getComputedStyle(s[o],null).getPropertyValue("padding-left"),g=s[o].parentNode.getElementsByClassName("b3-list-item__text")[0];g&&r!==e+"px"&&(g.style.paddingLeft=r,s[o].style.paddingLeft=e+"px")}};const u=l?`
                  .layout-tab-container .b3-list-item__text {
                      transition: padding-left 0.2s ease;
                  }
                  .layout-tab-container .b3-list-item:hover > .b3-list-item__text {
                      padding-left: ${e}px !important;
                  }
                  `:`
                  .layout-tab-container .b3-list-item__text {
                      transition: padding-left 0.2s ease;
                  }
                  .layout-tab-container .b3-list-item:hover > .b3-list-item__text {
                      padding-left: ${e}px;
                  }`;a(u),m();var i=new MutationObserver(function(s){m()}),n={childList:!0,subtree:!0};i.observe(document,n)}}function a(l){const e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");e.appendChild(t),t.appendChild(document.createTextNode(l))}async function ce(l){try{var e=await S(),t=l.get("enableDeviceList"),i=t.split(`
`),n=i.length,h=i[n-1];h===""&&i.pop(),i.push(e);var c=i.join(`
`);l.assignValue("enableDeviceList",c),l.save()}catch(d){console.error("Error appending current device into list:",d)}}async function de(l){try{for(var e=await S(),t=l.get("enableDeviceList"),i=t.split(`
`),n=i.length-1;n>=0;n--){var h=i[n];h===e&&i.splice(n,1)}var c=i.join(`
`);l.assignValue("enableDeviceList",c),l.save()}catch(d){console.error("Error removing current device from list:",d)}}async function S(){var l=window.siyuan.config.system.id,e=window.siyuan.config.system.name,t=l+" "+e;return Promise.resolve(t.toString())}async function he(l){try{var e=await S(),t=await l.get("enableDeviceList"),i=t.split(`
`);return i.includes(e)}catch(n){console.error("Error checking if current device is enabled:",n)}}const D="menu-config";class ge extends U.Plugin{constructor(){super(...arguments);v(this,"settingUtils")}async onload(){this.data[D]={readonlyText:"Readonly"},this.settingUtils=new Q(this,D),this.settingUtils.load(),this.settingUtils.addItem({key:"begging",value:"",type:"hint",title:this.i18n.beggingTitle,description:this.i18n.beggingDesc}),this.settingUtils.addItem({key:"mainSwitch",value:!1,type:"checkbox",title:this.i18n.mainSwitch,description:""}),this.settingUtils.addItem({key:"highPerformanceZoneHint",value:"",type:"hint",title:this.i18n.experimentFeatureHintTitle,description:this.i18n.experimentFeatureHintDesc}),this.settingUtils.addItem({key:"mouseHoverZeroPadding",value:!1,type:"checkbox",title:"🌊 "+this.i18n.mouseHoverZeroPadding,description:this.i18n.mouseHoverZeroPaddingDesc}),this.settingUtils.addItem({key:"mouseHoverZeroPaddingForce",value:!0,type:"checkbox",title:"🌊 "+this.i18n.mouseHoverZeroPaddingForce,description:this.i18n.mouseHoverZeroPaddingForceDesc}),this.settingUtils.addItem({key:"mouseHoverZeroPaddingStyle",value:1,type:"select",title:"🌊 "+this.i18n.mouseHoverZeroPaddingStyle,description:this.i18n.mouseHoverZeroPaddingStyledesc,options:{1:this.i18n.mouseHoverZeroPaddingStylePaddingToggle,2:this.i18n.mouseHoverZeroPaddingStylePaddingIcon,3:this.i18n.mouseHoverZeroPaddingStylePaddingIconButMoveLR,4:this.i18n.mouseHoverZeroPaddingStylePaddingText}}),this.settingUtils.addItem({key:"mouseHoverZeroPaddingPx",value:4,type:"slider",title:"🌊 "+this.i18n.mouseHoverZeroPaddingPx,description:this.i18n.mouseHoverZeroPaddingPxDesc,slider:{min:0,max:10,step:1}}),this.settingUtils.addItem({key:"mouseOverLineUnclamp",value:!1,type:"checkbox",title:"🟰 "+this.i18n.mouseOverLineUnclampTitle,description:this.i18n.mouseOverLineUnclampDesc}),this.settingUtils.addItem({key:"mouseOverLineUnclampForce",value:!1,type:"checkbox",title:"🟰 "+this.i18n.mouseOverLineUnclampForceTitle,description:this.i18n.mouseOverLineUnclampForceDesc}),this.settingUtils.addItem({key:"mouseOverReduceFontSize",value:!1,type:"checkbox",title:"🔡 "+this.i18n.mouseOverReduceFontSizeTitle,description:this.i18n.mouseOverReduceFontSizeDesc}),this.settingUtils.addItem({key:"mouseOverReduceFontSizeForce",value:!1,type:"checkbox",title:"🔡 "+this.i18n.mouseOverReduceFontSizeForceTitle,description:this.i18n.mouseOverReduceFontSizeForceDesc}),this.settingUtils.addItem({key:"mouseHoverReduceFontSizePx",value:4,type:"slider",title:"🔡 "+this.i18n.mouseHoverReduceFontSizePx,description:this.i18n.mouseHoverReduceFontSizePxDesc,slider:{min:1,max:50,step:1}}),this.settingUtils.addItem({key:"disable document buttons popup",value:!1,type:"checkbox",title:"💬 "+this.i18n.disableDocumentButtonsPopup,description:this.i18n.disableDocumentButtonsPopupDesc}),this.settingUtils.addItem({key:"hideContextualLabel",value:!1,type:"checkbox",title:"🖃  "+this.i18n.hideContextualLabel,description:this.i18n.hideContextualLabelDesc}),this.settingUtils.addItem({key:"hintDangerousZone",value:"",type:"hint",title:this.i18n.hintDangerousZoneTitle,description:this.i18n.hintDangerousZoneDesc}),this.settingUtils.addItem({key:"enableAdjustStaticDoctreePadding",value:!1,type:"checkbox",title:"🗜️ "+this.i18n.enableAdjustStaticDoctreePadding,description:this.i18n.enableAdjustStaticDoctreePaddingDesc}),this.settingUtils.addItem({key:"Slider",value:50,type:"slider",title:"🗜️ "+this.i18n.compressPercent,description:this.i18n.compressPercentDesc,slider:{min:0,max:100,step:5}}),this.settingUtils.addItem({key:"enableDoctreeFrontLine",value:!1,type:"checkbox",title:"⛕ "+this.i18n.enableDoctreeFrontLine,description:this.i18n.enableDoctreeFrontLineDesc}),this.settingUtils.addItem({key:"doctreeFrontLinePosition",value:20,type:"slider",title:"⛕ "+this.i18n.doctreeFrontLinePosition,description:this.i18n.doctreeFrontLinePositionDesc,slider:{min:0,max:60,step:1}}),this.settingUtils.addItem({key:"doctreeFrontLinePadding",value:20,type:"slider",title:"⛕ "+this.i18n.doctreeFrontLinePadding,description:this.i18n.doctreeFrontLinePaddingDesc,slider:{min:6,max:60,step:1}}),this.settingUtils.addItem({key:"doctreeFrontLineBorder",value:2,type:"slider",title:"⛕ "+this.i18n.doctreeFrontLineBorder,description:this.i18n.doctreeFrontLineBorderDesc,slider:{min:1,max:20,step:1}}),this.settingUtils.addItem({key:"docTreeFrontLineImplememtation",value:1,type:"select",title:this.i18n.docTreeFrontLineImplememtation,description:this.i18n.docTreeFrontLineImplememtationDesc,options:{1:"1",2:"2",3:"3",4:"4"}}),this.settingUtils.addItem({key:"enableDoctreeSeperateLine",value:!1,type:"checkbox",title:"➖ "+this.i18n.enableDoctreeSeperateLine,description:this.i18n.enableDoctreeSeperateLineDesc}),this.settingUtils.addItem({key:"doctreeSeperateLineBorder",value:2,type:"slider",title:"➖ "+this.i18n.doctreeSeperateLineBorder,description:this.i18n.doctreeSeperateLineBorderDesc,slider:{min:1,max:20,step:1}}),this.settingUtils.addItem({key:"hideIcon",value:!1,type:"checkbox",title:"🧩 "+this.i18n.hideIcon,description:this.i18n.hideIconDesc}),this.settingUtils.addItem({key:"hideIconForce",value:!1,type:"checkbox",title:"🧩 "+this.i18n.hideIconForce,description:this.i18n.hideIconDescForce}),this.settingUtils.addItem({key:"displayIconButDisableIconClick",value:!1,type:"checkbox",title:"🖱️ "+this.i18n.displayIconButDisableIconClick,description:this.i18n.displayIconButDisableIconClickDesc}),this.settingUtils.addItem({key:"overloadFontSizeSwitch",value:!1,type:"checkbox",title:"🇦 "+this.i18n.overloadFontSizeSwitch,description:this.i18n.overloadFontSizeSwitchDesc}),this.settingUtils.addItem({key:"overloadFontSizeForceSwitch",value:!1,type:"checkbox",title:"🇦 "+this.i18n.overloadFontSizeForceSwitch,description:this.i18n.overloadFontSizeForceSwitchDesc}),this.settingUtils.addItem({key:"overloadFontSizePx",value:14,type:"slider",title:"🇦 "+this.i18n.overloadFontSizePx,description:this.i18n.overloadFontSizePxDesc,slider:{min:5,max:60,step:1}}),this.settingUtils.addItem({key:"overloadLineHeight",value:!1,type:"checkbox",title:"🛅 "+this.i18n.overloadLineHeight,description:this.i18n.overloadLineHeightDesc}),this.settingUtils.addItem({key:"overloadLineHeightForce",value:!1,type:"checkbox",title:"🛅 "+this.i18n.overloadLineHeightForce,description:this.i18n.overloadLineHeightForceDesc}),this.settingUtils.addItem({key:"overloadLineHeightPx",value:28,type:"slider",title:"🛅 "+this.i18n.overloadLineHeightPx,description:this.i18n.overloadLineHeightPxDesc,slider:{min:1,max:100,step:1}}),this.settingUtils.addItem({key:"addNotebookOutline",value:!1,type:"checkbox",title:"🖼️ "+this.i18n.addNotebookOutline,description:this.i18n.addNotebookOutlineDesc}),this.settingUtils.addItem({key:"notebookOutlineMode",value:1,type:"select",title:"🖼️ "+this.i18n.notebookOutlineMode,description:this.i18n.notebookOutlineModeDesc,options:{1:"normal",2:"tight",3:"high contrast AKA TCOTC style"}}),this.settingUtils.addItem({key:"hintDeviceSpecificSettings",value:"",type:"hint",title:this.i18n.hintDeviceSpecificSettingsTitle,description:this.i18n.hintDeviceSpecificSettingsDesc}),this.settingUtils.addItem({key:"onlyEnableListedDevices",value:!1,type:"checkbox",title:this.i18n.onlyEnableListedDevices,description:this.i18n.onlyEnableListedDevicesDesc}),this.settingUtils.addItem({key:"enableDeviceList",value:"",type:"textarea",title:this.i18n.enableDeviceList,description:this.i18n.enableDeviceListDesc}),this.settingUtils.addItem({key:"addCurrentDeviceIntoList",value:"",type:"button",title:this.i18n.addCurrentDeviceIntoList,description:this.i18n.addCurrentDeviceIntoListDesc,button:{label:this.i18n.addCurrentDeviceIntoListLabel,callback:()=>{ce(this.settingUtils)}}}),this.settingUtils.addItem({key:"removeCurrentDeviceFromList",value:"",type:"button",title:this.i18n.removeCurrentDeviceFromList,description:this.i18n.removeCurrentDeviceFromListDesc,button:{label:this.i18n.removeCurrentDeviceFromListLabel,callback:()=>{de(this.settingUtils)}}}),this.settingUtils.addItem({key:"hint",value:"",type:"hint",title:this.i18n.hintTitle,description:this.i18n.hintDesc})}onLayoutReady(){this.loadData(D),this.settingUtils.load(),(async()=>{try{const i=this.settingUtils.get("mouseHoverZeroPadding"),n=this.settingUtils.get("mainSwitch"),h=this.settingUtils.get("hideIcon"),c=this.settingUtils.get("hideIconForce"),d=this.settingUtils.get("enableAdjustStaticDoctreePadding"),b=this.settingUtils.get("Slider"),p=this.settingUtils.get("overloadFontSizeSwitch"),m=this.settingUtils.get("overloadFontSizeForceSwitch"),u=this.settingUtils.get("overloadFontSizePx"),s=this.settingUtils.get("mouseHoverZeroPaddingForce"),o=this.settingUtils.get("mouseHoverZeroPaddingStyle"),r=this.settingUtils.get("mouseHoverZeroPaddingPx"),g=this.settingUtils.get("mouseOverLineUnclamp"),_=this.settingUtils.get("mouseOverLineUnclampForce"),x=this.settingUtils.get("mouseOverReduceFontSize"),f=this.settingUtils.get("mouseOverLineUnclampForce"),k=this.settingUtils.get("mouseHoverReduceFontSizePx"),I=this.settingUtils.get("onlyEnableListedDevices"),P=await he(this.settingUtils),w=this.settingUtils.get("hideContextualLabel"),H=this.settingUtils.get("displayIconButDisableIconClick"),z=this.settingUtils.get("disable document buttons popup"),C=this.settingUtils.get("overloadLineHeight"),E=this.settingUtils.get("overloadLineHeightForce"),O=this.settingUtils.get("overloadLineHeightPx"),Z=this.settingUtils.get("enableDoctreeFrontLine"),$=this.settingUtils.get("doctreeFrontLinePosition"),B=this.settingUtils.get("doctreeFrontLinePadding"),N=this.settingUtils.get("doctreeFrontLineBorder"),R=this.settingUtils.get("docTreeFrontLineImplememtation"),T=this.settingUtils.get("enableDoctreeSeperateLine"),M=this.settingUtils.get("doctreeSeperateLineBorder"),j=this.settingUtils.get("addNotebookOutline"),A=this.settingUtils.get("notebookOutlineMode");if((P||!I)&&n&&(C&&le(E,O),h&&oe(c),w&&ie(),i&&re(s,r,o),g&&te(_),x&&ee(f,k),p&&ae(m,u),H&&Y(),z&&X(),Z&&!i&&!d&&ue(R,$,B,N),T&&ne(M),j&&se(A),!i&&d)){let V=function(){document.querySelectorAll(".b3-list-item").forEach(F=>{const y=F.querySelector(".b3-list-item__toggle");if(y&&!y.getAttribute("data-compressed")){const K=parseFloat(window.getComputedStyle(y).paddingLeft)*(1-b/100);F.getAttribute("data-type")!="navigation-root"&&(y.style.paddingLeft=`${K}px`,y.setAttribute("data-compressed","true"))}})};const q=new MutationObserver(L=>{V()}),G={attributes:!0,childList:!0,subtree:!0};document.querySelectorAll(".fn__flex-column").forEach(L=>{q.observe(L,G)})}}catch(i){console.error("siyuan_doctree_compress: failed inject interface",i)}})()}async onunload(){}}module.exports=ge;
