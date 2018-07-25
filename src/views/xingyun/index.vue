<template lang="html">
<div class="xingyun-html">
  <!-- 导航 -->
  <div class="nav opacity_7">
  	<ul class="clearfloat">
  		<li v-if='showCN' class='bg'>首页</li>
      <li v-if='!showCN' class='bg'>Home</li>
  		<li v-if='showCN' @click="downloadFile('QOS白皮书-V0.6.pdf', 'static/QOS-V0.6.pdf')">白皮书下载</li>
      <li v-if='!showCN' @click="downloadFile('QOS白皮书-V0.6.pdf', 'static/QOS-V0.6.pdf')">Whitepaper</li>
      <li @click='isShowCN'>
        <span v-if='!showCN'>CN</span>
        <span v-if='showCN'>EN</span>
      </li>
  	</ul>
  </div>
  <div class="containter">
    <!-- 第一页 -->
    <div class="page current relative">
    	<div class="qos-logo"></div>
    	<div class="absolute top57">
    		<p class="logo"></p>
    		<p v-if='showCN' class="mt35 white f36 text-center">下一代企业级应用社区</p>
        <p v-if='!showCN' class="mt35 white f36 text-center">QOS：Next generation Enterprise Application Community</p>
    	</div>
    	<img class="bg-sglobal" :src="global" alt="">
    	<img class="bg-bglobal" :src="global" alt="">
    </div>
    <!-- height:74 -->
    <div class="mt74"></div>
    <!-- page12 -->
    <div class="page12">
    	<div v-if='showCN' class="page12-bg1"></div>
      <div v-if='!showCN' class="page12-bg1 page12-bg1-en"></div>

    	<div class="page12-con margin-con">
    		<p v-if='showCN'>我们一直在思考、研究、尝试如何将区块链和我们的现实业务相结合，如何服务实体经济。并坚信以区块链为代表的新技术、新模式将改造传统经济，改变原有</p>
    		<p v-if='showCN'>的利益格局，进而充分释放社会的创新力和协作热情。因此，我们拥抱通证经济，着力打造“下一代企业级应用社区”。</p>
        <p v-if='!showCN'>We have been thinking, studying and trying how to combine the blockchains with our real business and how to serve the real economy. We firmly believe that the new technology and new model, such as the blockchains, will change the traditional economy and the original benefit structure,and even inspire the social innovation and cooperative enthusiasm. Therefore, we support the token economics and focus on building the "Next Generation Enterprise Application Community".</p>
    	</div>
    	<div class="page12-con">
    		<p v-if='showCN'>我们确信QOS公链能够填补比特币和以太坊等主流公链的市场缺位，率先将区块链技术应用于实体经济中，达到商用级服务水平，触达和服务与现有币圈完全不</p>
    		<p v-if='showCN'>同的社区群体。QOS公链致力成为全球覆盖人口最多的区块链应用社区，实现广泛的社会价值、经济价值。</p>
        <p v-if='!showCN'>We convince that the QOS public blockchain can fill the market vacancy of mainstream public blockchains, such as Bitcoin and Ethereum, and take the lead in applying blockchain technology to the real economy in order to achieve the commercial service levels and serve communities, which completely different from the currency groups. The QOS public blockchain is committed to becoming the most populous blockchain application community, and achieve a wide range of social and economic values.</p>
    	</div>
    	<div class="yuanjing-bg"></div>
    </div>
    <!-- page1 -->
    <div class="page page1">
    	<h1 class='bgf'></h1>
    	<h2 class='bgf'></h2>
    	<h3 class='bgf'></h3>
    	<h4 class='bgf'></h4>
    	<div class="page1-con">
    		<div class="page1-opac"></div>
    		<p class="page1-title f24"></p>
    		<p v-if='showCN' class='page1-content'>QOS通过打造基于公链与联盟链混合的底层操作系统、统一身份认证体系、自激励的双层代币协议、超级节点+交易挖矿的双层挖矿机制、分布式文件系统、联通开发者和用户的互动社区，支撑包括消费、传统金融、金融科技、新媒体等在内的海量用户级别的原生社区，并允许各类服务商在协议框架下便捷的发布新应用，逐步通过数据交易实现社区公民价值最大化。</p>
        <p v-if='!showCN' class='page1-content'>QOS is an operating system based on the hybrid of public and consortium chains, unified identity authentication system, self-motivated double-layer token protocol, a double-layer mining mechanism for super nodes + transaction mining, Distributed file system, and an interactive community between developers and users, serve the community with massive users in consume, traditional finance, financial technology, new media, etc., allow various service providers to easily publish their own new applications under the protocol, and gradually maximize the value of community citizenship through data transactions.</p>
    	</div>
    	<div class="w1200">
    		<div class="circle">
    			<div class="c-circle first">
    				<p v-if='showCN'>社区自激励的代币生态体系</p>
            <p v-if='!showCN'>Community Self-motivated Token Ecosystem</p>
    			</div>
    			<div class="c-circle second">
    				<p v-if='showCN'>统一身份认证体系</p>
            <p v-if='!showCN'>Unified Identity Authentication System</p>
    			</div>
    			<div class="c-circle third">
    				<p v-if='showCN'>支持多种场景、海量用户的企业应用</p>
            <p v-if='!showCN'>Support multiple enterprise applications with various scenes and massive users. </p>
    			</div>
    			<div class="c-circle four">
    				<p v-if='showCN'>隐私数据自主可控，公民价值最大化</p>
            <p v-if='!showCN'>Privacy data autonomously controlled and citizen value maximized</p>
    			</div>
    			<div class="c-circle five">
    				<p v-if='showCN'>满足企业级应用需求的公链与联盟链的hybrid chain</p>
            <p v-if='!showCN'>HYBRID CHAIN: public and consortium blockchains that meet the needs of enterprise applications</p>
    			</div>
    		</div>
    	</div>
    </div>
    <!-- page13 -->
    <div class="page13 page13-w1200">
    	<div class="w1200">
    		<div class="page13-line"></div>
    		<div v-if='showCN' class="page13-bg"></div>
        <div v-if='!showCN' class="page13-bg page13-bg-en"></div>

    		<div class="clearfloat page13-con">
    			<div class="">
    				<p class='page13-border'></p>
    				<p v-if='showCN' class='f24' style="margin: 30px 0;">QOS将建立双层代币模型， 分别为：</p>
            <p v-if='!showCN' class='f24' style="margin: 30px 0;">QOS would build a double-layer token model, which is:</p>

    				<div class="flex">
    					<p class="icon1"></p>
    					<p style="width: 420px;margin: 10px;">
                <span class="f24">QOS</span>
                <span v-if='showCN'>是公链代币，是社区通用货币，各消费、金融场景都用QOS作为价值储藏手段和支付手段。</span>
                <span v-if='!showCN'>is a kind of public blockchain token, which is the common currency of the community. QOS is used as a value storage method and payment method for all consumption and financial scenarios.</span>
              </p>
    				</div>
    				<div class="flex">
    					<p class="icon2"></p>
    					<p style="width: 420px;margin: 10px;">
                <span class="f24">QSC</span>
                <span v-if='showCN'>是符合QOS公链标准的，基于智能合约的代币发行与运营协议。为各场景运营商根据自身体系的需求自主发行，持有者为各自场景的权益最终所有人，享有场景内的收益分享权利。</span>
                <span v-if='!showCN'> is token issuance and operation protocol with smart contract, which complies with the QOS public blockchain standard. Each scenario operator can issue independently according to the needs of their own system. Each holder is the ultimate right owners of their respective scenarios, and enjoy the rights of benefit sharing within the scene.</span>
              </p>
    				</div>
    			</div>
    			<div class="">
    				<p class='p_bg'></p>
    			</div>
    		</div>
    	</div>
    </div>
    <!-- page14 -->
    <div class="h155"></div>
    <div class="page14">
    	<p class='page14-line'></p>
    	<div class="">
    		<p v-if='showCN'>与双层代币模型相对应，QOS社区建立双层挖矿机制，在底层QOS公链由21个超级节点</p>
    		<p v-if='showCN'>竞争挖矿，在各个场景由“价值交换即挖矿”。</p>
        <p v-if='!showCN'>Corresponding to the double-layer token model, the QOS community establishes a double-layer mining mechanism. In the bottom of QOS public blockchain, 21 block producers compete for mining, and in each scenario "value exchange is mining".</p>
    	</div>
    	<div class="page14-bg"></div>
    </div>
    <!-- page-dframe -->
    <div class="page-dframe">
    	<p class="page-dframe-title f24">
        <span v-if='showCN'>QOS双层链架构</span>
        <span v-if='!showCN'>QOS double-chain architecture:</span>
      </p>
    	<ul class="page-dframe-main clearfloat">
    		<li v-if='showCN'>双层代币模型</li>
    		<li v-if='showCN'>双层挖矿机制</li>
        <li v-if='!showCN'>Double-layer token model</li>
        <li v-if='!showCN'> Double-layer mining mechanism</li>
    	</ul>
    	<div class="dframe"></div>
    </div>
    <!-- page-ecological -->
    <div class="page-ecological">
    	<div class="w1200 clearfloat ecological">
    		<div class="ecological-map"></div>
    		<div class="ecological-user">
    			<p v-if='showCN' class='ecological-title'></p>
          <p v-if='!showCN' class='ecological-title ecological-title-en'></p>

    			<div class="ecological-main">
    				<p v-if='showCN'>QOS生态已经有非常成熟的支付公司、商业银行、互联网金融、新媒体公司作为合作场景服务商加入。</p>
    				<p v-if='showCN'>300个城市超过40万本地商户、1000多个停车场的交易场景将建立在QOS平台之上，合计月交易流水超过60亿元，交易笔数超过3000万笔，平台将触达5000万以上的交易用户，每月将产生超过20亿元的借贷需求。</p>
    				<p v-if='showCN'>未来会不断孵化、接纳例如出行、外卖、快递、社交服务商。</p>
            <p v-if='!showCN'>The QOS blockchain Eco has been joined payment company, commercial bank, internet finance, and new media company as a cooperative scene service provider.</p>
            <p v-if='!showCN'>The business scenario, such as more than 400,000 local merchants and more than 1,000 parking lots in 300 cities, will be built on the QOS platform in the near future. The total monthly transaction flow exceeds 6 billion RMB, the number of transactions exceeds 30 million, and the platform will connect more than 50 million transaction users, and generate more than ¥2 billion lending needs each month.</p>
            <p v-if='!showCN'>In the future, we will continue to add more business scenarios on QOS platform, for example, travel, takeaway, express delivery, and social service providers.</p>
    			</div>
    		</div>
    	</div>
    </div>
    <!-- page-scene -->
    <div class="page-scene">
    	<div class="w1200 flex scene">
    		<div v-if='showCN' class="st"></div>
        <div v-if='!showCN' class="st st-en"></div>

    		<div class="">
    			<div class="scene-img xiaofei"></div>
    			<p class='scene-title sbline'>
            <span v-if='showCN'>消费</span>
            <span v-if='!showCN'>Consume</span>
          </p>
    			<p v-if='showCN' class='scene-title'>生态服务商：钱包生活、停车钱包等</p>
    			<p v-if='showCN' class='scene-intro'>中国超过85%的零售交易发生在线下，是一个规模33万亿的交易市场。乾元社区将第一个应用场景选择为线下消费，而合作的支付服务商也意识到传统集中式的交易服务所隐含的数据风险、隐私风险，正在积极推动商户、用户、场景向区块链产业转型。 </p>
          <p v-if='!showCN' class='scene-title'>Eco service providers: Qianbao Card, Qianbao Parking, etc.</p>
          <p v-if='!showCN' class='scene-intro-en'>In China, more than 85% retail transactions take place in the offline scene, which is about 33 trillion trading market. Qianyuan Community has chosen the first application scenario as the offline consumption, and the cooperative payment service providers, merchants, users and scenarios are actively promoting the blockchain industries because of the data risk and privacy risk under the traditional centralized transaction services.</p>
    		</div>
    		<div class="">
    			<div class="scene-img xindai"></div>
    			<p class='scene-title sbline'>
            <span v-if='showCN'>金融信贷</span>
            <span v-if='!showCN'>Financial credit</span>
          </p>
    			<p  v-if='showCN' class='scene-title'>生态服务商：钱包金融、钱包好车、长治银行等</p>
    			<p  v-if='showCN' class='scene-intro'>中国的借贷市场极其广阔，社会融资规模存量156万亿，其中网络信贷规模2.2万亿元，乾元社区将从多个方面改变传统信贷业务 。 </p>
          <p v-if='!showCN' class='scene-title'>Eco-service providers: Qianbao Finance, Qianbao Car Credit, Changzhi Bank, etc.</p>
          <p v-if='!showCN' class='scene-intro-en'>In China, lending market is extremely broad. The scale of social financing is about 156 trillion RMB, and the internet credit scale is 2.2 trillion RMB. The Qianyuan community will change the traditional credit business from many aspects.</p>
    		</div>
    		<div class="">
    			<div class="scene-img meiti"></div>
    			<p class='scene-title sbline'>
            <span v-if='showCN'>媒体</span>
            <span v-if='!showCN'>Media</span>
          </p>
    			<p v-if='showCN' class='scene-title'>生态服务商：星红安等</p>
    			<p v-if='showCN' class='scene-intro'>乾元社区将在电视广播媒体领域进行应用，搭建一个国内领先的以电视屏为入口的数据服务平台，平台已集合全国超过20个省级网络运营商的家庭收视行为数据以及DPI上网流量数据，覆盖用户超过7000万户。</p>
          <p v-if='!showCN' class='scene-title'>Eco service provider: Star-v, etc.</p>
          <p v-if='!showCN' class='scene-intro-en'>The Qianyuan Community will be applied in the field of TV broadcasting media and build a leading domestic data service platform with TV screen. The platform has collected data on household viewing behavior and DPI internet traffic data in more than 20 province network operators, covering more than 70 million users.</p>
    		</div>
    	</div>
    </div>
    <!-- page2 -->
    <div class="page page2">
    	<div class="w1200 clearfloat" v-bind:class="{ 'page2-w1200': showCN, 'page2-w1200-en': !showCN }">
    		<div class="page2-circle"></div>
    		<div class="page2-logo">
    			<p class="white f16">
            <span v-if='showCN'>QOS：下一代企业级应用社区</span>
            <span v-if='!showCN'>QOS：Next generation Enterprise Application Community</span>
          </p>
    		</div>
    		<ul id="page2Main" class="clearfloat page2-con">
    			<li>
    				<div class="before-animate top1">
    					<h1></h1>
    					<p style="text-align: left;" class='mtb'>2018Q2</p>
    					<p v-if='showCN' style="text-align: left;">QOS项目筹备</p>
              <p v-if='!showCN' style="text-align: left;">QOS prepared</p>

    				</div>
    			</li>
    			<li>
    				<div class="before-animate top2">
    					<h1></h1>
    					<p style="text-align: left;" class='mtb'>2018Q3</p>
    					<p v-if='showCN' style="text-align: left;">完成私募；白皮书发布；战略合作伙伴签约；核心社区建设</p>
              <p v-if='!showCN' style="text-align: left;">QOS Close private funding; Publish White Paper; Sign the strategic partners; Build the core community</p>
    				</div>
    			</li>
    			<li>
    				<div class="before-animate top3">
    					<h1></h1>
    					<p style="text-align: left;" class='mtb'>2018Q4</p>
    					<p v-if='showCN' style="text-align: left;">公有链测试环境与QOS钱包发布；QOS生态基金成立</p>
              <p v-if='!showCN' style="text-align: left;">QOS Publish the public blockchain test environment and QOS wallet; Establish Ecological fund</p>
    				</div>
    			</li>
    			<li>
    				<div class="before-animate top4">
    					<h1></h1>
    					<p style="text-align: left;" class='mtb'>2019Q1</p>
    					<p v-if='showCN' style="text-align: left;">公有链配套服务工具开发；持续应用场景的投资和合作</p>
              <p v-if='!showCN' style="text-align: left;">QOS Develop the service tools related public blockchains; Make investment and cooperation with scenarios</p>
    				</div>
    			</li>
    			<li>
    				<div class="before-animate top5">
    					<h1></h1>
    					<p style="text-align: left;" class='mtb'>2019Q2</p>
    					<p v-if='showCN' style="text-align: left;">公有链生产环境发布</p>
              <p v-if='!showCN' style="text-align: left;">QOS Publish the public blockchain development environment</p>
    				</div>
    			</li>
    		</ul>
    	</div>
    </div>
    <!-- page3 -->
    <div class="page3">
    	<div class="w1200">
    		<p class='text-center white f36 fw300' v-bind:class="{ 'intro': showCN, 'intro-en': !showCN }"></p>
    		<div class='page3-con'>
    			<div class='flex' v-on:mouseover='showProfileZhe()' v-on:mouseout='hideProfileZhe()'>
    				<div class="item" v-bind:class="{ 'addOpacity': !isRightZhe, 'delOpacity': isRightZhe }">
    					<div class="img"><img :src="zhe" alt=""></div>
    					<div v-if='showCN' class="">张 哲</div>
              <div v-if='!showCN' class="">Allen Zhang</div>
    				</div>
    				<div class="abs" v-bind:class="{ 'page3-ani-left': !isRightZhe, 'page3-ani-right': isRightZhe }">
            <!-- <div class="abs"> -->
    					<div class="profile">
    						<p v-if='showCN'>前奥马电器（002668）副总经理，战略发展部总经理，区块链业务负责人，钱包投资管理合伙人，负责上市公司战略和投资业务。</p>
                <p v-if='!showCN'>Former Vice President of Homa(002668),General Manager of Strategic Development Department, Qianbao Investment Management Partner in charge of strategy and investment, Head of Blockchain Department. </p>
    						<p v-if='showCN' class="mt18">汉世纪创投执行总裁，16年资本市场及创业投资经验，曾参与主导投资安硕信息（300380）、万得资讯（Wind）、通付盾等知名企业。</p>
                <p v-if='!showCN' class="mt18">Executive President of Sino-Century Venture Capital, 16-year experience in capital market and venture capital investment, used to invest in Amarsoft (300380), Wind, Pay Egis and many other well-known enterprises.</p>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class='page3-con'>
    			<div class='flex' v-on:mouseover='showProfileWang()' v-on:mouseout='hideProfileWang()'>
    				<div class="item" v-bind:class="{ 'addOpacity': !isRightWang, 'delOpacity': isRightWang }">
    					<div class="img"><img :src="wang" alt=""></div>
    					<div v-if='showCN' class="">汪怡宁</div>
              <div v-if='!showCN' class="">Slash</div>

    				</div>
    				<div class="abs" v-bind:class="{ 'page3-ani-left': !isRightWang, 'page3-ani-right': isRightWang }">
    					<div class="profile">
    						<p v-if='showCN'>曾任奥马电器（002668）投资总监，作为核心成员参与上市公司多支产业投资基金设立，主导多个金融科技项目投资，钱包集团体系资源协调整合。</p>
                <p v-if='!showCN'>Former Investment Director of Homa(002668), participated in the establishment of several industrial investment funds as a core member, invested in many fintech companies such as VzoomCredit, Minivision etc.</p>

    						<p v-if='showCN' class="mt18">北京师范大学本科，中国社会科学院研究生院硕士。</p>
                <p v-if='!showCN' class="mt18">Graduated from Beijing Normal University and Chinese Academy of Social Sciences.</p>

    					</div>
    				</div>
    			</div>
    			<div class='flex' v-on:mouseover='showProfileZhou()' v-on:mouseout='hideProfileZhou()'>
    				<div class="item" v-bind:class="{ 'addOpacity': !isRightZhou, 'delOpacity': isRightZhou }">
    					<div class="img"><img :src="zhou" alt=""></div>
    					<div v-if='showCN' class="">周海京</div>
              <div v-if='!showCN' class="">Haijing Zhou</div>

    				</div>
    				<div class="abs" v-bind:class="{ 'page3-ani-left': !isRightZhou, 'page3-ani-right': isRightZhou }">
    					<div class="profile">
    						<p v-if='showCN'>安全专家，作为核心成员参与中国第一款通过CC EAL4+认证的国产安全芯片项目。主导钱包集团支付清算协会数字货币重点研究课题，以及多个区块链金融落地项目。</p>
                <p v-if='!showCN'>Security expert. Participated in the first domestic security chip project certified by CC EAL4+ as core member in China. Leading the digital currency research topic of Qianbao group, Payment & Clearing Association of China (PCAC), and many other blockchain financial projects.</p>

    						<p v-if='showCN' class="mt18">清华大学自动化系本科、硕士、博士</p>
                <p v-if='!showCN' class="mt18">Obtain Bachelor, Master, Ph.D. from Department of Automation, Tsinghua University.</p>

    					</div>
    				</div>
    			</div>
    			<div class='flex' v-on:mouseover='showProfileLi()' v-on:mouseout='hideProfileLi()'>
    				<div class="item" v-bind:class="{ 'addOpacity': !isRightLi, 'delOpacity': isRightLi }">
    					<div class="img"><img :src="li" alt=""></div>
    					<div v-if='showCN' class="">李杰</div>
              <div v-if='!showCN' class="">Sean</div>

    				</div>
    				<div class="abs" v-bind:class="{ 'page3-ani-left': !isRightLi, 'page3-ani-right': isRightLi }">
    					<div class="profile">
    						<p v-if='showCN'>曾任奥马电器（002668）架构负责人，曾参与中国人民银行法定数字货币原型设计工作。阿里巴巴工作6年，担任资深开发、架构师职位。</p>
                <p v-if='!showCN'>Former IT Architecture Leader of Homa(002668). Participated in the statutory digital currency prototype design of the People's Bank of China. Used to be working in the Alibaba Group for 6 years as Senior development, architect.</p>

    						<p v-if='showCN' class="mt18">13年开发架构经验，擅长大型互联网系统架构、技术管理。</p>
                <p v-if='!showCN' class="mt18">He has 13-year experience in IT Architecture, and expertise in Internet system architecture and technology management</p>

    					</div>
    				</div>
    			</div>
    			<div class='flex' v-on:mouseover='showProfileLuan()' v-on:mouseout='hideProfileLuan()'>
    				<div class="item" v-bind:class="{ 'addOpacity': !isRightLuan, 'delOpacity': isRightLuan }">
    					<div class="img"><img :src="luan" alt=""></div>
    					<div v-if='showCN' class="">栾悦</div>
              <div v-if='!showCN' class="">Amber</div>

    				</div>
    				<div class="abs" v-bind:class="{ 'page3-ani-left': !isRightLuan, 'page3-ani-right': isRightLuan }">
    					<div class="profile">
    						<p v-if='showCN'>曾任钱包生活市场总监；曾任腾讯视频市场品牌负责人，负责腾讯视频整体品牌；行业记者出身，曾任职于爱奇艺市场部、中国广播电视出版社，在互联网市场营销、品牌建设领域具有丰富工作经验。</p>
                <p v-if='!showCN'>Former marketing director of Qianbao Card;Former market brand leader of Tencent Video, responsible for the public relations of Tencent Video. As an industry reporter, worked in iQiyi marketing department and China Radio Film & TV Press, and accumulated professional working experience in internet marketing and brand building.</p>

    						<p v-if='showCN' class="mt18">中国传媒大学硕士</p>
                <p v-if='!showCN' class="mt18">Master degree of Communication University of China.</p>

    					</div>
    				</div>
    			</div>
    		</div>
    		<p class='text-center white f36 fw300' v-bind:class="{ 'adviser': showCN, 'adviser-en': !showCN }"></p>
    		<div class='page3-con'>
    			<div class='flex' style="background: none;"></div>
    			<div class='flex' v-on:mouseover='showProfileZhao()' v-on:mouseout='hideProfileZhao()'>
    				<div class="item" v-bind:class="{ 'addOpacity': !isRightZhao, 'delOpacity': isRightZhao }">
    					<div class="img"><img :src="zhao" alt=""></div>
    					<div v-if='showCN' class="">赵国栋</div>
              <div v-if='!showCN' class="">Guodong Zhao</div>

    				</div>
    				<div class="abs" v-bind:class="{ 'page3-ani-left': !isRightZhao, 'page3-ani-right': isRightZhao }">
    					<div class="profile">
    						<p v-if='showCN'>中国第三方支付行业元老级创业家</p>
    						<p v-if='showCN'>中国支付清算协会常务理事</p>
    						<p v-if='showCN'>清华大学五道口金融学院EMBA</p>
    						<p v-if='showCN' class="mt18">清华大学五道口金融学院互联网金融协会主席团成员</p>

                <p v-if='!showCN'>Senior entrepreneur in Chinese third party payment industry</p>
    						<p v-if='!showCN'>Standing Director of Payment & Clearing Association of China</p>
    						<p v-if='!showCN'>The PBC School of Finance (PBCSF), Tsinghua University, EMBA</p>
    						<p v-if='!showCN' class="mt18">Member of the Bureau of Internet Finance Association, The PBC School of Finance (PBCSF), Tsinghua University</p>
    					</div>
    				</div>
    			</div>
    			<div class='flex' v-on:mouseover='showProfileJian()' v-on:mouseout='hideProfileJian()'>
    				<div class="item" v-bind:class="{ 'addOpacity': !isRightJian, 'delOpacity': isRightJian }">
    					<div class="img"><img :src="jian" alt=""></div>
    					<div v-if='showCN' class="">张 健</div>
              <div v-if='!showCN' class="">Jian Zhang</div>

    				</div>
    				<div class="abs" v-bind:class="{ 'page3-ani-left': !isRightJian, 'page3-ani-right': isRightJian }">
    					<div class="profile">
    						<p v-if='showCN'>FCoin创始人 歌者资本合伙人</p>
                <p v-if='!showCN'>FCoin founder, Singer Capital partner</p>

    						<p v-if='showCN' class="mt18">区块链行业早期开拓者，通证经济实践领军人物《区块链：定义未来金融与经济新格局》作者</p>
                <p v-if='!showCN' class="mt18">Blockchain industry pioneer, leader of Token economy, The author of Blockchain: Definition New Pattern of Future Financial and Economy"</p>

    					</div>
    				</div>
    			</div>
    			<div class='flex' style="background: none;"></div>
    		</div>
    	</div>
    </div>
    <!-- corporation -->
    <div class="corporation">
    	<div class="corporation-title"></div>
    	<div class="">
    		<p v-if='showCN' class='subtitle'>场景生态<span></span></p>
        <p v-if='!showCN' class='subtitle'>Scene Ecology<span></span></p>

    		<h1 class='logo1'></h1>
    	</div>
    	<div class="">
    		<p v-if='showCN' class='subtitle'>金融服务<span></span></p>
        <p v-if='!showCN' class='subtitle'>Financial Service<span></span></p>

    		<h1 class='logo1 logo2'></h1>
    	</div>
    	<div class="">
    		<h1 class='logo1 logo3'></h1>
    	</div>
    </div>
    <!-- connect-email -->
    <div class="connect-email">
    	<div class="corporation-title connection"></div>
    	<div class="clearfloat connect-main">
    		<ul class="l">
    			<li class='ico1'>
            <span v-if='showCN'>官网：</span>
            <span v-if='!showCN'>Official Website:</span>

            <a>https://www.qoschain.io</a>
          </li>
    			<li class='ico2'>
            <span v-if='showCN'>服务邮箱：</span>
            <span v-if='!showCN'>Email:</span>
            contact@qoschain.io
          </li>
    			<li class='ico3'>
            <span>Twitter：</span>
            <a>https://twitter.com/QOS_Foundation</a>
          </li>
    			<li class='ico4'>
            <span v-if='showCN'>微博：</span>
            <span v-if='!showCN'>Weibo:</span>
            <a>https://weibo.com/u/6310001987</a>
          </li>
    			<li class='ico5'>
            <span>Facebook：</span>
            <a>https://facebook.com/QOS.Foundation</a>
          </li>
    			<li class='ico6'><div>Telegram：<a>https://t.me/QOSOfficial_EN</a></div><div style="text-align: left;text-indent: 71px;">https://t.me/QOSOfficial_CN</div></li>
    		</ul>
    		<div class="c"></div>
    		<ul class="r clearfloat">
    			<li class='ecode'>
    				<p></p>
    				<p v-if='showCN'>「  扫码加小助手好友  」</p>
            <p v-if='!showCN'>「  Scan QR Code to join us  」</p>
    			</li>
    			<li class='wechat'>
    				<p v-if='showCN'>微信群</p>
    				<p v-if='showCN'>QOS区块链微信群</p>
    				<p v-if='showCN'>请加小助手微信：QOS-Official</p>

            <p v-if='!showCN'>WeChat Group</p>
    				<p v-if='!showCN'>QOS Blockchain WeChat Group</p>
    				<p v-if='!showCN'>Please add assistant's WeChat:QOS-Official</p>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
</div>
</template>

<script>
import global from '@/assets/img/global.png'
import zhe from '@/assets/img/zhe.png'
import wang from '@/assets/img/wang.png'
import zhou from '@/assets/img/zhou.png'
import li from '@/assets/img/li.png'
import luan from '@/assets/img/luan.png'
import zhao from '@/assets/img/zhao.png'
import jian from '@/assets/img/jian.png'

export default {
  data() {
    return {
      global: global,
      zhe: zhe,
      wang: wang,
      zhou: zhou,
      li: li,
      luan: luan,
      zhao: zhao,
      jian: jian,
      showCN: true,
      isRightZhe: false,
      isRightWang: false,
      isRightZhou: false,
      isRightLi: false,
      isRightLuan: false,
      isRightZhao: false,
      isRightJian: false
    }
  },
  created() {
    // this.mouseHover()
  },
  methods: {
    isShowCN() {
      if (this.showCN) {
        this.showCN = false
      } else {
        this.showCN = true
      }
    },
    isIE() {
      var explorer = window.navigator.userAgent
      return explorer.indexOf('MSIE') >= 0 || explorer.indexOf('Trident/7.0') >= 0 || explorer.indexOf('Edge') >= 0
    },
    ieDown(url) {
      window.open(url)
    },
    downloadFile(fileName, url) {
      if (this.isIE()) {
        this.ieDown(url)
      } else {
        const aLink = document.createElement('a')
        const evt = document.createEvent('MouseEvents')
        evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        aLink.download = fileName
        aLink.href = url
        aLink.dispatchEvent(evt)
      }
    },
    showProfileZhe() {
      this.isRightZhe = true
    },
    showProfileWang() {
      this.isRightWang = true
    },
    showProfileZhou() {
      this.isRightZhou = true
    },
    showProfileLi() {
      this.isRightLi = true
    },
    showProfileLuan() {
      this.isRightLuan = true
    },
    showProfileZhao() {
      this.isRightZhao = true
    },
    showProfileJian() {
      this.isRightJian = true
    },
    hideProfileZhe() {
      this.isRightZhe = false
    },
    hideProfileWang() {
      this.isRightWang = false
    },
    hideProfileZhou() {
      this.isRightZhou = false
    },
    hideProfileLi() {
      this.isRightLi = false
    },
    hideProfileLuan() {
      this.isRightLuan = false
    },
    hideProfileZhao() {
      this.isRightZhao = false
    },
    hideProfileJian() {
      this.isRightJian = false
    }
  }
}
</script>

<style lang="css">
</style>
