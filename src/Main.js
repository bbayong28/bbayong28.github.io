import React, { useEffect, useRef, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import './css/Main.scss';
import { profile, portfolio, r_portfolio } from './Data';

//portfolio배열에서 title을 빼서 배열을 만들어 쓰겠다.
const AC = portfolio.map(it => it = it.title);


const Cover = ({ on, setOn }) => {
    const cover = useRef(null)
    const wheelStop = e => {
        e.stopPropagation();
    }
    useEffect(() => {
        cover.current.addEventListener('wheel', wheelStop);
        return () => {
            cover.current.removeEventListener('wheel', wheelStop);
        }
    }, [])
    return (
        <div className={`Cover ${on ? "on" : ""}`} ref={cover}>     
            <div className='inCover'>
                <ul className='menu'>
                    <li>
                        <a href='#cover'>MAIN</a>
                    </li>
                    {
                        portfolio.map((it, idx) => {
                            return (
                                <li key={idx} onClick={() => setOn(!on)}>
                                    <a href={`#${it.title}`}>{it.title}</a>
                                </li>
                            )
                        })
                    }
                    <li>
                        <a href='#footer'>PROFILE</a>
                    </li>
                </ul>   
            </div>
        </div>
    )
}

const Main = () => {
    const [con, setCon] = useState("cover");
    const [num, setNum] = useState(1);
    const [on, setOn] = useState(false)
    return (
        <div className='PF'>
            <Cover on={on} setOn={setOn} />
            <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
                <span>cover open</span>
            </button>
            {/* <div className='num'>{portfolio[num - 1]?.title}</div> */}
            <nav className='gnb'>
                <ul>
                    {["cover", ...AC, "footer"].map((it, idx) => {
                        return (
                            <li key={idx} className={it.id === num ? "on" : ""}>
                                <a href={`#${it.title}`}>{it.name}</a>
                            </li>
                        )}
                    )}
                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                anchors={['cover', ...AC, 'footer']}
                afterLoad={(o, d) => {
                    setNum(d.index);
                    setCon(d.anchor);
                }}


                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section main">
                                <div className='case'>
                                    <div className="inner">
                                        <div className='circle'>Hwayeong</div>
                                        <h1>WELCOME TO MY<br/>PORTFOLIO</h1>
                                        {/* <p>{profile.title}</p> */}
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="section introduce">
                                <div className='case'>
                                    <div className="inner">
                                        <div className='circle'>Me</div>
                                        <h2>WELCOME TO MY<br/>PORTFOLIO</h2>
                                        <p>{profile.title}</p>
                                    </div>                                    
                                </div>
                            </div>
                            {
                                portfolio.map((it, idx) => {
                                    return (
                                        <div className="section pf_main" >
                                            <div className='case'>
                                                <div className="left">
                                                    <div className="top">
                                                        <h3>JS,JQUERY<span>PROJECT</span></h3>
                                                        {/* <h3>PUBLISHING<br />PROJECT</h3> */}
                                                        <p>{`0${it.id}/0${portfolio.length}`}</p>
                                                    </div>
                                                    <div className="bottom">
                                                        <ul className="about">
                                                            <li className='title'>{it.title}</li>
                                                            <li>- Type : {it.type}</li>
                                                            <li>- Tool : {it.tool}</li>
                                                            <li>- Font : {it.font}</li>
                                                            <li className='color'>
                                                                {
                                                                    it.color && <strong>- Color : </strong>
                                                                }
                                                                <ol>
                                                                    {
                                                                        it.color?.map((color, idx) => {
                                                                            return (
                                                                                <li key={idx} style={{ background: color }}>{color}</li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ol>
                                                            </li>
                                                            <li>
                                                                <p>- 참여도 : 100%</p>
                                                            </li>
                                                            <li>
                                                                <a href={it.link} target='_blank' className='link'>
                                                                    <button>Web Page</button>
                                                                </a>
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>  
                                                <div className="right">
                                                    <div className='mockup'>
                                                        <div className="pc">
                                                            <div className='pc_cover'>
                                                                <img src={`${process.env.PUBLIC_URL}/img/fullpage0${it.id}.png`} alt={it.title} />
                                                            </div>
                                                        </div>
                                                        <div className="mobile">
                                                            <div className='mobile_cover'>
                                                                <img className='mo_top' src={process.env.PUBLIC_URL + "/img/mobile_top.png"} alt={it.title} />
                                                                <img className='mo_web' src={`${process.env.PUBLIC_URL}/img/m_fullpage0${it.id}.png`} alt={it.title} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                r_portfolio.map((it, idx) => {
                                    return (
                                        <div className="section pf_main" >
                                            <div className='case'>
                                                <div className="left">
                                                    <div className="top">
                                                        <h3>React<span>PROJECT</span></h3>
                                                        {/* <h3>PUBLISHING<br />PROJECT</h3> */}
                                                        <p>{`0${it.id}/0${r_portfolio.length}`}</p>
                                                    </div>
                                                    <div className="bottom">
                                                        <ul className="about">
                                                            <li className='title'>{it.title}</li>
                                                            <li>- Type : {it.type}</li>
                                                            <li>- Tool : {it.tool}</li>
                                                            <li>- Font : {it.font}</li>
                                                            <li className='color'>
                                                                {
                                                                    it.color && <strong>- Color : </strong>
                                                                }
                                                                <ol>
                                                                    {
                                                                        it.color?.map((color, idx) => {
                                                                            return (
                                                                                <li key={idx} style={{ background: color }}>{color}</li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ol>
                                                            </li>
                                                            <li>
                                                                <p>- 참여도 : 100%</p>
                                                            </li>
                                                            <li>
                                                                <a href={it.link} target='_blank' className='link'>
                                                                    <button>Web Page</button>
                                                                </a>
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>  
                                                <div className="right">
                                                    <div className='mockup'>
                                                        <div className="pc">
                                                            <div className='pc_cover'>
                                                                <img src={`${process.env.PUBLIC_URL}/img/Rfullpage0${it.id}.png`} alt={it.title} />
                                                            </div>
                                                        </div>
                                                        {/* <div className="mobile">
                                                            <div className='mobile_cover'>
                                                                <img className='mo_top' src={process.env.PUBLIC_URL + "/img/mobile_top.png"} alt={it.title} />
                                                                <img className='mo_web' src={`${process.env.PUBLIC_URL}/img/m_Rfullpage0${it.id}.png`} alt={it.title} />
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="section profile">
                                <div className='case'>
                                    <div className="w1700">
                                        <div className='left'>                                            
                                            <p>HAVE YOU ENJOY!!</p>
                                            {/* <p>즐거우셨기를 바랍니다.</p> */}
                                            <span>{profile.email}</span>
                                        </div>
                                        <div className='right'></div>
                                    </div>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    )
}

export default Main
