import React, { Component } from 'react'

import Panel from '../components/panel'

export default class DemoPanel extends Component{
	render(){
		return (
			<ul id="button">
				<li className="demo-box">
					<span className="tips">默认面板</span>
					<div className="component" style={{width:'375px'}}>
						<Panel className="ui-panel">
						    <h2 className="ui-arrowlink">猜你喜欢<span className="ui-panel-subtitle">1328条</span></h2>
						    <ul className="ui-grid-trisect">
						        <li>
						            <div className="ui-border">
						                <div className="ui-grid-trisect-img">
						                    {<span style={{backgroundImage:'url(http://placeholder.qiniudn.com/190x284)'}}></span>}
						                </div>
						                <div>
						                    <h4 className="ui-nowrap-multi">长书名长书名长书名长书名长书名长书名长书名</h4>
						                    <h5 className="ui-nowrap">小仙</h5>
						                </div>
						            </div>
						        </li>
						        <li>
						            <div className="ui-border">
						                <div className="ui-grid-trisect-img">
						                    {<span style={{backgroundImage:'url(http://placeholder.qiniudn.com/190x284)'}}></span>}
						                </div>
						                <div>
						                    <h4 className="ui-nowrap-multi">长书名长书名长书名长书名长书名长书名长书名</h4>
						                    <h5 className="ui-nowrap">小仙</h5>
						                </div>
						            </div>
						        </li>
						        <li>
						            <div className="ui-border">
						                <div className="ui-grid-trisect-img">
						                    {<span style={{backgroundImage:'url(http://placeholder.qiniudn.com/190x284)'}}></span>}
						                </div>
						                <div>
						                    <h4 className="ui-nowrap-multi">长书名长书名长书名长书名长书名长书名长书名</h4>
						                    <h5 className="ui-nowrap">小仙</h5>
						                </div>
						            </div>
						        </li>
						    </ul>
						</Panel> 
					</div>
				</li>
				<li className="demo-box">
					<span className="tips">ui-panel-simple没有下边距</span>
					<div className="component" style={{width:'375px'}}>
						<section className="ui-panel ui-panel-simple ui-border-tb">
						    <h2 className="ui-arrowlink"><span>评论</span><span className="ui-panel-subtitle">1328条</span><span className="ui-panel-title-tips">更多评论</span></h2>
						</section>
					</div>
				</li>
				<li className="demo-box">
					<span className="tips">简单版，标题字体较小</span>
					<div className="component" style={{width:'375px'}}>						
						<section className="ui-panel ui-panel-pure ui-border-t">
						    <h3>历史搜索：</h3>
						    <ul className="ui-list ui-list-pure ui-border-tb">
						        <li className="ui-border-t">
						            <h5><span>1.faycheng </span><span className="date"> 2月12日</span></h5>
						            <h4>这本书太赞了，每次看都有不一样的体会和感悟，超级喜欢！期待大结局。</h4>
						        </li>
						        <li className="ui-border-t">
						            <h5><span>2.faycheng </span><span className="date"> 2月12日</span></h5>
						            <h4>标题标题标题标题标题标题题标题标题标题标题标题标题标题标题标题</h4>
						        </li>
						        <li className="ui-border-t">
						            <h5><span>3.faycheng </span><span className="date"> 2月12日</span></h5>
						            <h4>标题标题标题标题标题标题题标题标题标题标题标题标题标题标题标题</h4>
						        </li>
						    </ul>
						</section>        
					</div>
				</li>
			</ul>			       
		)
	}
}