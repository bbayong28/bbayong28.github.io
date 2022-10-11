import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import data from './portfolioDATA';
import './main.scss'
import './reset.css'



const App = () => {
    const [num, setNum] = useState(1);
    const [con, setCon] = useState('cover');
    const [on, setOn] = useState(false);
    const ac = data.map(it => it.anchor);

    const Cover = () => {
        return (
            <div className={`cover ${on ? 'on' : ''} `}>
                <ul>
                    {
                        data.map((it, idx) => { 
                            return (
                                <li key={idx}>
                                    <a href={`#${it.anchor}`} onClick={
                                        () => setOn(!on)
                                    }>{it.title}</a>
                                </li>
                            )                                              
                        })
                    }
                </ul>
                
            </div>
        )
    }
    
    return (
        <div className='FP'>
            <Cover/>
            <header className='header'>
                2023 Shin portfolio {num} {con}
                <button onClick={() => setOn(!on)} className={`cover_open ${on ? 'on' : '' }`}>
                    <span>커버나오는 버튼</span>
                </button>
            </header>
            <nav className='gnb'>
                <ul>
                    {
                        ['cover', ...ac, 'copyright'].map((it, idx) => { 
                            return (
                                <li key={idx} className={num === (idx + 1) ? 'on' : ''}>
                                    <a href={`#${it}`}>{it}</a>
                                </li>
                            )                                              
                        })
                    }
                </ul>
            </nav>
            <ReactFullpage
            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                //anchors={ac}
                anchors={['cover', ...ac, 'copyright']}
                //afterLoad={(origin, destination) => console.log(origin.index, destination.index, destination.anchor)}
                afterLoad={(origin, destination) => { 
                    setNum(destination.index + 1);
                    setCon(destination.anchor)
                }}

            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className="inner">
                                <p>Section 1 (welcome to fullpage.js)</p>
                                <a href='#pf01'>01</a>
                                <button onClick={() => fullpageApi.moveSectionDown()}>
                                Click me to move down
                                </button>
                            </div>
                            
                        </div>
                        {
                            data.map(it => { 
                                return (
                                    <div key={it.id} className="section">
                                        <div className="inner">
                                            <p>{it.id}</p>
                                            {
                                                it.color?.map(color => <li style={{ background: color }}>{color}</li>)
                                            }
                                        </div>                                        
                                    </div>
                                )
                            })
                        }
                        
                        <div className="section">
                            <p className='inner2'>footer</p>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
        </div>
    )
}

export default App