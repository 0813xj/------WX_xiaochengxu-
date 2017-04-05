//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    greeting: "",
    currentTime: util.currentTime,
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading_1: false,
    loading_2: false,
    quant: 0,
    progress_percent: 0,
    tikushuliang: "",
    zhanyongkongjian: ""
  },
  onLoad: function () {
    var that = this
    var currentTime = ""
    var greeting = ""
    currentTime = util.currentTime(new Date())
    if (currentTime < 12) {
      greeting = "Good morning";
    } else if (currentTime < 19) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    wx.getStorage({
      key: "tikushuliang",
      success: function (res) {
        console.log(res.data)
        that.setData({
          tikushuliang: res.data,
        })
      }
    })
    wx.getStorageInfo({
      success: function (res) {
        var kk = Math.ceil(Number(res.currentSize) / Number(res.limitSize) * 100)
        that.setData({ zhanyongkongjian: kk, })
      }
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        greeting: greeting,
        currentTime: currentTime
      })
    })
  },
  //事件处理函数
  readvalue: function (e) {
    var ff = e.detail.value

    this.setData({
      quant: ff
    })
  },

  Start: function (e) {
    var quant = e.target.dataset.quant

    var original = new Array;
    for (var i = 0; i < 1000; i++) {
      original[i] = i;
    }
    original.sort(function () {
      return 0.5 - Math.random();
    })
    original = original.slice(0, quant)

    console.log(original)
    wx.navigateTo({
      url: '../page1/page1?quant=' + original
    })
  },

  huancunlist: function (e) {
    var that = this
    wx.showActionSheet({
      itemList: ['缓存', 'XX缓存'],
      success: function (res) {

        if (res.tapIndex == 0) {
          that.hunacuntimu()
        }
        if (res.tapIndex == 1) {
          //console.log(res.tapIndex)
          that.XXhunacun()
          //console.log(Page[XXhunacun])

        }

      }
    })
  },

  XXhunacun: function () {
    var that = this
    that.setData({
      disabled: true,
      loading_2: true
    }),
      wx.showLoading({
        title: "loading...",
        mask: true
      }),
      wx.clearStorage(),
      wx.hideLoading(),
      wx.setStorage({ key: "tikushuliang", data: "0" }),
      that.setData({
        disabled: false,
        loading_2: false,
        tikushuliang: 0
      }),
      wx.getStorageInfo({
        success: function (res) {
          var kk = Math.ceil(Number(res.currentSize) / Number(res.limitSize) * 100)
          that.setData({ zhanyongkongjian: kk })
        }
      })
  },

  hunacuntimu: function () {
    var that = this
    that.setData({
      disabled: true,
      loading_1: true
    })
    wx.showLoading({
      title: "loading...",
      mask: true
    })

    wx.setStorage({key: "0", data: ["1.It is a paradox of the Victorians that they were both_______and, through their empire, cosmopolitan.",
{A: 'A.capricious',B: 'B.insular',C: 'C.mercenary',D: 'D.idealistic',E: 'E.intransigent',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 paradox 可以判断出,空格要和 cosmopolitan 构成反义,正确答案 选 B 选项.insular 狭隘的,与世隔绝的. \n***翻译：维多利亚时期的人实在是矛盾,他们既与世隔绝又与世相通."]}),

that.setData({progress_percent:0}),wx.setStorage({key: "1", data: ["2. My grandma has as strong belief in all things _______: she insists, for example, that the house in which she lived as a child was haunted.",
{A: 'A.clamorous',B: 'B.invidious',C: 'C.numinous',D: 'D.empirical',E: 'E.sonorous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后文的内容说奶奶说房子闹鬼,能对应的选项只有 C 选项. numinous 精神上的,超自然的. \n***翻译：我奶奶有一种对于所有超自然的事情的强烈的信任：例如,她坚持认为 她小时候所住的房子是闹鬼的."]}),

wx.setStorage({key: "2", data: ["3. The (i)_____of molecular oxygen on Earth-sized planets around other stars in the universe would not be (ii)_____sign of life: molecular oxygen can be a signature of photosynthesis (a biotic process) or merely of the rapid escape of water from the upper reaches of a planetary atmosphere (an abiotic process).",
{A: 'A.dearth',B: 'B.presumption',C: 'C.detection',D: 'D.a controversial',E: 'E.an unambiguous',F: 'F.a possible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说氧气的发现有两种可能,说明这不一定是存在生命的信号,所以 第二空选 E 选项.第一空根据句意选出 C 选项.detection 发现,unambiguous 明确的. \n***翻译：探测到在宇宙中的其他和地球差不多大的行星上有分子氧并不能直接得 出十分清楚的生命存在的迹象,分子氧可以是来自于光合作用,也可以是来自 于从水中释放升入大气层中."]}),

wx.setStorage({key: "3", data: ["4. Given the (i)_____the committees and the (ii)_____nature of its investigation, it would be unreasonable to gainsay the committee\'s conclusions at first glance.",
{A: 'A.sterling reputation of',B: 'B.lack of finding of',C: 'C.ad hoc existence of',D: 'D.superficial',E: 'E.spontaneous',F: 'F.exhaustive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 unreasonable to gainsay 得知,前面的两个空格体现的特征都必 须是正评价,所以正确答案选 AF 选项.sterling reputation 纯正的名声, exhaustive 全面的. \n***翻译：由于委员会纯正的名声和详尽的调查的性质,第一眼就反对这个委员会 的结论实在是太不合理了."]}),

wx.setStorage({key: "4", data: ["5. The skin of the poison dart frog contains deadly poisons called batrachotoxins. But the (i) _______ of the toxins has remained an enigma, as the frog does not (ii)_____them. Now an analysis suggests that the melyrid beetle is the source. Collected beetle specimens all contained batrachotoxins, suggesting that these beetles are (iii)_____by the frogs.",
{A: 'A.effect',B: 'B.origin',C: 'C.purpose',D: 'D.pressure',E: 'E.produce',F: 'F.suffer from',G: 'G.eaten',H: 'H.neutralized',I: 'I.poisoned'},
"###解析：第一空对应点在 melyrid beetle is the source 这里,说明这个题研究 的主题是 source,所以第一空答案选 B 选项,既然说这种毒的来源是神秘的 事,说明这个毒本身不是这种青蛙产生的,所以第二空选 E 选项,第三空说找 到了原因,实际上来自于甲壳虫,说明这些甲壳虫被青蛙吃掉了,所以第三空 选 G 选项.origin 来源,produce 生产,eat 吃. \n***翻译：毒箭蛙的皮肤包含致死的毒物,叫做蟾毒素.但这个毒素的起源一直都 是个谜,因为这种青蛙并不是自己生成毒素,现在,有一种分析认为 melyrid 甲虫是毒素的来源.所有收集来的甲虫都含有这样的毒素,告诉我们这些虫子 可能被毒箭蛙吃了."]}),

wx.setStorage({key: "5", data: ["6.  Now that photographic prints have become a popular field for collecting, auctions are becoming more (i) _______. It is not just the entry of new collectors into the field that is causing this intensification. Established collectors\' interests are also becoming more (ii) _______. Those who once concentrated on the work of either the nineteenth-century pioneers or the twentieth-century modernists are now keen to have (iii)_____collections.",
{A: 'A.competitive',B: 'B.tedious',C: 'C.exclusive',D: 'D.fickle',E: 'E.wide-ranging',F: 'F.antiquarian',G: 'G.comprehensive',H: 'H.legitimate',I: 'I.impressive'},
"###解析：第一空格同义重复 this intensification,所以正确答案选 A 选项,第二空根据 also 得知是延续前文对于收藏爱好的评价,所以还是对应 this intensification,所以第二空选 E 选项,第三空 once concentrated 和 now 形 成对比,所以现在的特征是 concentrated 反义词,正确答案选 G 选项. competitive 有竞争力的,wide-ranging 广泛的,comprehensive 全面的. \n***翻译：现在图片打印在收集界已经成为一种流行的领域,拍卖正在变的越来越 竞争激烈,这并不是只因为刚刚进入首场接的新人们从而造成了这样的进展 感.逐渐发展成熟的收藏者们的兴趣也正在变的越来越涉猎广泛,那些只关注于不是十九世纪先驱者的创造就是二十世纪当代艺术家的人们正在变的越来越 热衷于有比较性的收藏."]}),

wx.setStorage({key: "6", data: ["7.  The beauty of the scientific approach is that even when individual researchers do_______bias or partiality, others can correct them using a framework of evidence on which everyone broadly agrees.",
{A: 'A.overreact to',B: 'B.deviate from',C: 'C.succumb to',D: 'D.recoil from',E: 'E.yield to',F: 'F.shrink from',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：even when 和后面的 can correct them 取反,所以前面是存在 bias 和 partiality 的,所以后面才能改正这些偏见,所以选 CE 选项.succumb to 屈 服于,yield to 屈服于. \n***翻译：科学探讨方法的美感在于即便当个体研究人员确实屈服于偏见时,其他 人能够运用证据的框架结构纠正他们,这些证据时所有人都认同的."]}),

wx.setStorage({key: "7", data: ["8.  The reconstruct known work is beautiful and also probably _______: it is the only Hebrew verse written by a woman.",
{A: 'A.singular',B: 'B.unique',C: 'C.archaic',D: 'D.counterfeit',E: 'E.valuable',F: 'F.fake',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：only Hebrew verse 说明这个作品是唯一的,正确答案选 AB 选项. singular 单一的,unique 唯一的. \n***翻译：这个重建的知名作品是十分美丽并且也可能是唯一的,这是唯一一本由 女士写作的希伯来诗选."]}),

wx.setStorage({key: "8", data: ["9.  In a book that inclines to _______, an epilogue arguing that ballet is dead arrives simply as one more overstatement.",
{A: 'A.pessimism',B: 'B.misinterpretation',C: 'C.imprecision',D: 'D.vagueness',E: 'E.exaggeration',F: 'F.hyperbole',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应后面的 overstatement,所以正确答案选 EF 选项. exaggeration 夸张,hyperbole 夸张. \n***翻译：在一本趋向于夸张的书中,一个议论芭蕾已死的结语仅仅是一个夸张的 说法."]}),

wx.setStorage({key: "9", data: ["10.  The political upheaval caught most people by surprise: despite the_______warnings of some commentators, it had never seemed that imminent.",
{A: 'A.stern',B: 'B.prescient',C: 'C.prophetic',D: 'D.indifferent',E: 'E.repeated',F: 'F.apathetic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复 that imminent,所以答案选 BC 选项,prescient 有先见 之明的,prophetic 有预见的. \n***翻译：这个政治突变让大部分人吃了一惊,尽管一些评论员有预见性的警告, 这样的突变势头却从来没有那么迫近."]}),

wx.setStorage({key: "10", data: ["11.Among the Meakambut people of Papua New Guinea, legends are associated with specific caves in the Sepik region, and these legends are _______: only the cave owner can share its secrets.",
{A: 'A.impenetrable',B: 'B.immutable',C: 'C.proprietary',D: 'D.didactic',E: 'E.self-perpetuating',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的 only the cave owner can share its secrets 说明这些传 说是专属于洞穴主人的,所以正确答案选 C 选项.proprietary 所有者的. \n***翻译：在 Papua New Guinea 的 Meakambut 民族中,传说是和一些在 Sepik 地区 的特定洞穴有联系的,而且这些传说是专属的：只有洞穴的主人能够享有它的 秘密."]}),

that.setData({progress_percent:1}),wx.setStorage({key: "11", data: ["12. We often regard natural phenomena like rainfall as mysterious and unpredictable; although for short time spans and particular places they appear so, in fact on a truly global scale, nature has been a model of _______.",
{A: 'A.reliability',B: 'B.diversity',C: 'C.complexity',D: 'D.plasticity',E: 'E.discontinuity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 although 推知空格是选前面 mysterious and unpredictable 的 反义,那么正确答案选 A 选项.reliability 准确性. \n***翻译：我们经常将自然现象,比如降雨,视作神秘而又难以预测的,尽管对于 很短的一段时间喝空间内来说是这样的,但实际上对于整个的全球范围来说, 自然一直是以可靠的模式运行."]}),

wx.setStorage({key: "12", data: ["13. The economic recovery was somewhat lopsided: (i)_____in some of the industrial economies while(ii)_____in others of them.",
{A: 'A.unexpected',B: 'B.feeble',C: 'C.swift',D: 'D.robust',E: 'E.turbulent',F: 'F.predictable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：lopsided 可知前后空格反义,所以在选项中能够选出 BD 选项. feeble 虚弱的,robust 强壮的. \n***翻译：经济复苏开始变的有点不平衡.有些工业产业十分无力,但另一些却在 迅速崛起."]}),

wx.setStorage({key: "13", data: ["14. Although trains may use energy more (i)_____than do automobiles, the latter move only when they contain at least one occupant, whereas railway carriages spend a considerable amount of time running up and down the tracks (ii) _______, or nearly so.",
{A: 'A.lavishly',B: 'B.efficiently',C: 'C.routinely',D: 'D.vacant',E: 'E.unimpeded',F: 'F.overlooked',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后取反,the latter move only when they contain at least one occupant 说明汽车 上座率比火车高,所以第二空选 D 选项,第一空根据逻辑推出要说火车比汽车 好的地方,所以第一空选 B 选项.efficiently 高效地,vacant 空的. \n***翻译：尽管火车比汽车要更剩能量,后者在只要有至少一个人有需求时就可以 行动,但火车的车厢却需要空着花费很长时间在铁轨上运行."]}),

wx.setStorage({key: "14", data: ["15. Most capuchin monkey conflict involves such a (i)_____repertoire of gestural and vocal signals that it is difficult for researchers to tease apart the meanings of the individual signals. This (ii) _______ is (iii)_____by the fact that many signals seem to shift in meaning according to the context in which they are produced and the developmental stage of the individuals producing them.",
{A: 'A.precise',B: 'B.rich',C: 'C.straightforward',D: 'D.problem',E: 'E.opportunity',F: 'F.oversight',G: 'G.augmented',H: 'H.ameliorated',I: 'I.anticipated'},
"###解析：很难去梳理每一个信号的意义表明 repertoire of gestural and vocal signals 比较多,所以第一空选 B 选项,第二空通过 this 得知取前面的 同义,所以第二空选 D 选项,第三空根据 many signals seem to shift in meaning according to the context 说明这个问题更加严重了,所以第三空选G 选项.rich 丰富的,problem 问题,augment 增加. \n***翻译：大部分僧帽猴的斗争包括如此丰富的手势和声音的信号的表现形式以至 于研究者很难去梳理每一个信号的意义.这个问题被继续增大,因为很多信号 似乎会根据它们被产生的环境和产生这些信号的个体的发展阶段而改变意思."]}),

wx.setStorage({key: "15", data: ["16.  Within the culture as a whole, the natural sciences have been so successful that the word \"scientific\" is often used in (i)_____manner: it is often assumed that to call something \"scientific\" is to imply that its reliability has been (ii)_____by methods whose results cannot reasonably be(iii) _______.",
{A: 'A.an ironic',B: 'B.a literal',C: 'C.an honorific',D: 'D.maligned',E: 'E.challenged',F: 'F.established',G: 'G.exaggerated',H: 'H.anticipated',I: 'I.disputed'},
"###解析：第一空和 so successful 并列,所以第一空选 C 选项,第二空实际上 是重复了第一空的评价,所以第二空选 F 选项,第三空简单逻辑推理即可找到答案,确立的东西自然是不能轻易被反驳,所以第三空选 I 选项.honorific 表示尊敬的,established 确立的,dispute 质疑. \n***翻译：在整个文化中,自然科学已经是如此成功以至于科学这个词经常用一种 尊敬的方式来使用：经常发现把一个东西成为科学就是表明他的可信度是确立 的,而且是用那些结果不能被合理地否决的方法来确立的."]}),

wx.setStorage({key: "16", data: ["17.  Members of the union\'s negotiating team insisted on several changes to the company\'s proposal before they would support it, making it clear that they would_______no compromise.",
{A: 'A.disclose',B: 'B.reject',C: 'C.brook',D: 'D.tolerate',E: 'E.repudiate',F: 'F.weigh',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：题目中的 insisted on 表明公会强硬的态度,所以对 compromise 是 不会接受的,no 体现\"不会\"这层否定意思,所以空格选\"接受\"这层意思, 所以正确答案选 CD.brook 容忍,tolerate 容忍,此题难点在于考了 brook 熟 词僻意,大家一般记 brook 会记成小溪. \n***翻译：工会协商组里面的人员坚持在支持这个提议之前一定要有公司的一些改 变,很明显,他们不会容忍任何妥协."]}),

wx.setStorage({key: "17", data: ["18.  Wilson is wont to emphasize the_______of ants, how ants with full stomachs will regurgitate liquid food for those without , or how the old will fight so the young can survive.",
{A: 'A.beneficence',B: 'B.altruism',C: 'C.unpredictability',D: 'D.intelligence',E: 'E.fecundity',F: 'F.fertility',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面的解释都在说蚂蚁之前的互助行为,所以空格选 AB 选项. beneficence 善行,altruism 利他. \n***翻译：威尔逊习惯于强调蚂蚁的有益,比如饱腹的蚂蚁怎么反刍液体给那些没 有饱腹的蚂蚁吃,或者那些年老的蚂蚁怎么为了年轻的蚂蚁能够生活而斗争."]}),

wx.setStorage({key: "18", data: ["19.  During the Renaissance, the use of optical lenses, which were capable of projecting images onto blank canvases, greatly aided artists by allowing them to accurately observe and depict the external world; in other words, these lenses were instrumental in conveying _______.",
{A: 'A.idealism',B: 'B.optimism',C: 'C.ambition',D: 'D.realism',E: 'E.sanguinity',F: 'F.verisimilitude',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过by allowing them to accurately observe and depict the external world 得知这些镜片是来帮助人们准确观察和描绘世界的,所以对应的答案选 DF 选 项.realism 真实,verisimilitude 真实. \n***翻译：在文艺复兴时期,光学镜,这种能够反射图像到一个空白的帆布上的镜 片,是被用来辅助艺术家们工作,通过允许他们更加准确的观察并且描述外界 世界,换句话来说,这些镜片被用来帮助创造逼真的画作."]}),

wx.setStorage({key: "19", data: ["20.  The professor\'s habitual air of_______was misleading front, concealing amazing reserves of patience and a deep commitment to his students\' learning.",
{A: 'A.cordiality',B: 'B.irascibility',C: 'C.disorganization',D: 'D.conviviality',E: 'E.diffidence',F: 'F.exasperation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：concealing amazing reserves 说明表面上的是 reserve 的反义, 所以正确答案选 BF 选项.irascibility 易怒,exasperation 恼怒. \n***翻译：这个教授脾气暴躁的说法是个被人误解的一面,这隐藏了他背后的有耐 心和对学生的学习付出了巨大的贡献."]}),

wx.setStorage({key: "20", data: ["21.Though we live in an era of stunning scientific achievement, many otherwise educated people remain indifferent to or contemptuous of such achievement, even going so far as to_______their ignorance of basic physics.",
{A: 'A.decry',B: 'B.condone',C: 'C.remedy',D: 'D.boast of',E: 'E.downplay',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据后文的 even going so far as to 推出空格要选入前面内容的递 进,前文说对这些成就漠不关心或者很鄙视,后文递进后最合适的是 D 选项, 甚至还去吹嘘他们的无知.boast 吹嘘. \n***翻译：尽管我们生活在一个科学成果令人惊叹的年代,有一些其他的经过教育 的人仍然对这些成就表示不赞同或轻视,甚至是自吹自擂他们对于基本物理知 识的无知."]}),

that.setData({progress_percent:2}),wx.setStorage({key: "21", data: ["22. Slight but_______variation in the timing of the star\'s pulses led astronomers to deduce that it was being pulled backwards and forwards by three planets orbiting around it.",
{A: 'A.subtle',B: 'B.regular',C: 'C.undetectable',D: 'D.inconsequential',E: 'E.explicable',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格要和 slight 构成反义,所以正确答案选 B 选项.regular 稳定的. \n***翻译：在给恒星的脉冲计时时的微弱的却有周期性的变动导致宇航员们推论出 这颗恒星的脉冲被附近绕着它运行的三颗行星向前或向后移动了."]}),

wx.setStorage({key: "22", data: ["23. The great (i)_____of most books that examine the American presidency is their ideological bias, but for most part, this volume on the presidency maintains an impressive degree of (ii) _______.",
{A: 'A.contribution',B: 'B.limitation',C: 'C.paradox',D: 'D.certainty',E: 'E.fluency',F: 'F.objectivity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：ideological bias 说明空格选负评价,所以第一空选 B 选项.后面 but 转折,所以第二空要取 bias 的反义,所以第二空选 F 选项.limitation 局 限,objectivity 客观性. \n***翻译：大部分检验美国总统事务的书的一个巨大的限制就是,他们的理想性的 偏见但对于绝大部分,这本关于美国总统的书却保留了相当的,让人敬佩的客 观公正."]}),

wx.setStorage({key: "23", data: ["24. Many of the towns that have voted to keep incinerators in the county\'s solid waste plan have done so not because they necessarily (i)_____incinerators, but because they are(ii)_____to narrow their waste-disposal options.",
{A: 'A.question',B: 'B.favor',C: 'C.oppose',D: 'D.willing',E: 'E.eager',F: 'F.loath',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：necessarily 同义重复,第一空找 voted to keep 的同义词,所以正确 答案选 B 选项.第二空用他因解释保留垃圾焚烧炉,只能选 F 选项.favor 支 持,loath 不愿意的. \n***翻译：许多城镇支持保留在该县的固体废物计划中的垃圾焚化炉,它们这么做 不是因为它们喜欢垃圾焚化炉,是因为它们不想减少垃圾处理方式的选择."]}),

wx.setStorage({key: "24", data: ["25. Just because, as a photographer, Friedlander (i)_____places that most people consider ugly does not mean that he is out to prove they are beautiful. Instead, his work suggests that the photographer simply cannot ignore so much of the built American landscape but is obligated to (ii)_____what we pass through day in and day out, regardless of (iii) _______.",
{A: 'A.tends to avoid',B: 'B.is harshly critical of',C: 'C.is interested in',D: 'D.document',E: 'E.emulate',F: 'F.discredit',G: 'G.authenticity',H: 'H.truthfulness',I: 'I.aesthetics'},
"###解析：does not mean that he is out to prove they are beautiful 说明前面 F 做的事就是对应 out to prove they are beautiful,所以第一空选 C 选 项,第二空 not...but...取反,所以第二空选 ignore 的反义,所以第二空选 D 选项,第三空的词依然对应 out to prove they are beautiful,意思说不管 美不美都应该记录,所以第三空选 I 选项.interested 对...有兴趣, document 记录,aesthetics 美观.\n***翻译：仅仅因为 F 作为一个摄影师对于大部分人认为丑的地方有兴趣这件事并 不意味着他是在努力地证明它们很美.相反,他的作品表明摄影师的确不能地 忽略如此多的优美的美国风景,而是有义务去记录每天经历的东西,而且不管 是否美观."]}),

wx.setStorage({key: "25", data: ["26.  Both very good and very bad books are easy to review. Praise and (i)_____come easily. But what of books that contain a muddle of virtues and vices? Here the reviewer\'s task is more(ii)_______: the author\'s useful and thought-provoking observations need to be (iii)_____the useless and tedious.",
{A: 'A.ambivalence',B: 'B.compliment',C: 'C.censure',D: 'D.evident',E: 'E.demanding',F: 'F.manageable',G: 'G.supplanted by',H: 'H.sifted from',I: 'I.overshadowed by'},
"###解析：praise 重复 very good,空格重复 very bad,所以第一空选 C 选项,第 二空递进 a muddle of,所以第二空选 E 选项,第三空的动词要体现解决 muddle 的方法,所以正确答案选 H 选项.censure 谴责,demanding 严格的, sift from 从…筛选.\n***翻译：非常好和非常差的书都很容易评论.表扬和批评来得很容易.但是如果 是包含杂乱无章的优点和缺点的书呢？这样的话评论者的任务更加要求苛刻 了：作者的有用的和引发思考的评论需要从无用的和乏味的内容中筛选出来."]}),

wx.setStorage({key: "26", data: ["27.  In matters of taste, the art patron and collector Peggy Guggenheim was _______, she was for the strangest, the most surprising, the most satisfying, the best, the unique.",
{A: 'A.a neophyte',B: 'B.a novice',C: 'C.a realist',D: 'D.an extremist',E: 'E.a pragmatist',F: 'F.a zealot',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the strangest, the most surprising, the most satisfying, the best, th e unique 这些词组都能体现\"极端\"这个特征,所以正确答案选 DF 选项. extremist 极端分子,zealot 狂热者.\n***翻译：在审美上,艺术赞助商和收藏家 PG 是个极端的人,她喜欢最怪异的,最 让人瞠目结舌的,最让人满意的,而且必须是最好,最独特的."]}),

wx.setStorage({key: "27", data: ["28.  The laboratory maze has grown ever less_______since it was first invented instead of hoping to lose a rodent in a labyrinth; today\'s scientists design mazes to elicit a few simple, easily measured behaviors.",
{A: 'A.intricate',B: 'B.extensive',C: 'C.effective',D: 'D.convoluted',E: 'E.useful',F: 'F.prevalent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：today’s scientists design mazes to elicit a few simple, easily measu red behaviors 说明迷宫已经变得不那么\"迷\"了,正确答案选 AD 选项. intricate 复杂的,convoluted 错综复杂的. \n***翻译：这个实验研究的迷宫演变的逐渐不再复杂,因为它一开始被创造出来并 不是为了观察啮齿类动物逃出迷宫,今天的科学家们设计的迷宫是为了引出几 个简单的容易被测量的行为."]}),

wx.setStorage({key: "28", data: ["29.  In mathematics, judgments about the validity of proofs are mediated by peer-reviewed journals; to ensure _______, reviewers are carefully chosen by journal editors, and the identity of scholars whose papers are under consideration are kept secret.",
{A: 'A.timelessness',B: 'B.originality',C: 'C.fairness',D: 'D.comprehensiveness',E: 'E.objectivity',F: 'F.novelty',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：reviewers are carefully chosen by journal editors 说明这种同行 评议期刊要确保一种公平,所以认真选人,正确答案选 CE 选项.fairness 公 平,objectivity 客观性. \n***翻译：在数学中,关于证明的有效性的评论被同行评议的期刊调解.为了确保 公平,评判者被这个期刊的编辑小心选择出来,并且那些论文被讨论的学者的 名字是被隐瞒的."]}),

wx.setStorage({key: "29", data: ["30.  Since some contemporary Western dieticians believe that the only function of food is to provide nourishment, these dieticians view an emphasis on the aesthetic dimension of the culinary arts as_______.",
{A: 'A.unprecedented',B: 'B.unwarranted',C: 'C.illuminating',D: 'D.groundless',E: 'E.promising',F: 'F.novel',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：营养学家坚信的是 nourishment,所以对于 aesthetic dimension 是否 定态度,所以正确答案选 BD 选项.unwarranted 不合理的,groundless 无根据 的. \n***翻译：因为一些当代西方营养学家坚信食物的唯一功能就是为了提供营养,这 些营养学家将重视美学厨艺的行为视作毫无用处."]}),

wx.setStorage({key: "30", data: ["31.In the last two hundreds years, the practice of archaeology has changed greatly, from digging up ancient artifacts for use by wealthy individuals as art objects to analyzing the detritus of everyday life in the laboratory, and thus from_______to data collection.",
{A: 'A.supposition',B: 'B.theorizing',C: 'C.fact-finding',D: 'D.treasure hunting',E: 'E.scientific discovery',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应digging up ancient artifacts for use by wealthy individuals as art ob jects,data collection 对应analyzing the detritus of everyday life in the laboratory,此题是两个 from … to …结构的同义重复,所以空格选 D 选项,treasure hunting 寻 宝. \n***翻译：在过去的两百年里,考古的实践有了很大的改变,从为富贵人家发掘作 为艺术装饰品的古文物,到每天在实验室中研究分析岩屑,这就是从寻宝到数 据采集的演变过程."]}),

that.setData({progress_percent:3}),wx.setStorage({key: "31", data: ["32. History teaches us that science is not_______enterprise; indeed, it is quite the opposite, a motley assortment of tools designed to safeguard researchers against their own biases.",
{A: 'A.an opportunistic',B: 'B.an anomalous',C: 'C.a haphazard',D: 'D.a collective',E: 'E.a monolithic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：opposite, a motley assortment of tools 推出空格要选 motley assortment 的反义,正确答案选 E 选项.monolithic 单一的.\n***翻译：历史教会我们,科学并不是一个单一的整体,事实上,它是相反的,多 种多样的,被创造出来用于保证科学家们的研究成果不受他们自己偏见认知控 制的工具."]}),

wx.setStorage({key: "32", data: ["33. What they see in Tanaka is the one candidate capable of (i)_____leadership, in direct contrast to Williamson , whose term in office has been marred by (ii) _______.",
{A: 'A.compassionate',B: 'B.decisive',C: 'C.nepotistic',D: 'D.grandstanding',E: 'E.partisanship',F: 'F.vacillation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 in direct contrast to 能够推出两个空格取反,而且从 mar 能够 推出第二空是负评价,所以正确答案选 BF 选项.decisive 果断的, vacillation 犹豫.\n***翻译：塔娜卡是一个能果断领导的候选人,和 Williamson 正相反,后者的任职 期限因为他的优柔寡断而减短."]}),

wx.setStorage({key: "33", data: ["34. Despite having only recently learned to walk, toddlers make the most (i)_____dance students. Their joy in movement is so pure, so complete, and so (ii) _______.",
{A: 'A.skilled',B: 'B.inattentive',C: 'C.delightful',D: 'D.futile',E: 'E.irrelevant',F: 'F.contagious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应 their joy,所以正确答案选 C 选项,第二空和 pure, complete 并列,所以第二空选 F 选项.delightful 令人愉快的,contagious 有感染力的. \n***翻译：尽管刚刚学会走路,孩子们是最开心的舞蹈学生.他们在舞蹈中的喜悦 是如此纯洁,如此完整,如此的有感染力."]}),

wx.setStorage({key: "34", data: ["35. Readers may initially be irked by the book\'s apparent (i)_____but, once immersed in the author\'s prose, they may come to regard the work\'s (ii)_____as an asset.",
{A: 'A.flippancy',B: 'B.aimlessness',C: 'C.tendentiousness',D: 'D.subtlety',E: 'E.discursions',F: 'F.exhaustiveness',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后两个空格是取同,所以争取答案选 BE 选项.aimlessness 盲目性, discursion 散漫离题. \n***翻译：读者可能一开始会被这本书表面上的漫无目的激怒,但是一旦他们沉浸 在作者的散文中,他们就会渐渐地欣赏这书中的东拉西扯."]}),

wx.setStorage({key: "35", data: ["36.  Unambiguous texts can allow their readers to (i)_____them quickly, but ambiguous texts can have the attractive (ii)_____of multiple possible interpretations, all of which can be considered equally (iii) _______, and none of which is the single true meaning.",
{A: 'A.misunderstand',B: 'B.comprehend',C: 'C.complicate',D: 'D.stigma',E: 'E.blemish',F: 'F.allure',G: 'G.valid',H: 'H.frank',I: 'I.inveterate'},
"###解析：清晰的文字必然让读者迅速理解,所以第一空选 B 选项,不清晰的文字却 have the attractive+空格,所以空格一定是一个正评价的词,所以第二空 选 F 选项,第三空根据 multiple possible interpretations 得知想表达的意 思是所有的理解都可以同等地被认为合理的,但是却没有一个又是真正唯一的 解释.comprehend 理解,allure 引诱,valid 合理的.\n***翻译：清晰的文字能够让读者快速理解,但是模糊的文字也可以有若干种可能 解释的这样一种吸引人的诱惑,在这些解释中所有的都可以同等地被认为合理 的,但是却没有任何一个是唯一的真正的意思."]}),

wx.setStorage({key: "36", data: ["37.  Harper Lee\'s narration in To Kill a Mockingbird is _______, mixing an adult\'s and a child\'s perspective according to no logic other than the immediate exigencies of the plot.",
{A: 'A.a paradigm',B: 'B.a hodgepodge',C: 'C.a model',D: 'D.an innovation',E: 'E.a patchwork',F: 'F.an embarrassment',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复后文的内容,后文的主要特征是 mixing...,所以空格选 BE 选项.hodgepodge 混杂物,patchwork 拼凑之物.\n***翻译：HL 的小说\"杀死一只知更鸟\"是拼凑式作品.将成人和小孩儿的视角毫 无逻辑地混合,不同于情节的紧迫的迫切需求."]}),

wx.setStorage({key: "37", data: ["38.  The employee had a reputation for fractiousness, but his coworkers found him to be, on the contrary, quiet _______.",
{A: 'A.insightful',B: 'B.affable',C: 'C.sagacious',D: 'D.capable',E: 'E.easygoing',F: 'F.productive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：on the contrary 看出取前面 fractiousness 反义,正确答案选 BE 选 项.affable 和蔼可亲的,easygoing 随和的. \n***翻译：这个老板有着易怒的名声,但他的同事却发现他是,相反的,十分随 和."]}),

wx.setStorage({key: "38", data: ["39.  Even though women in the US would not gain the rights to vote until 1920, throughout the nineteenth century many feminist goals were gradually _______, especially the rights of married women to control their own property.",
{A: 'A.realized',B: 'B.abandoned',C: 'C.eroded',D: 'D.modified',E: 'E.revised',F: 'F.achieved',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：1920 年之前女性没有投票权,后来逐渐有了这种权利,正确答案选 AF 选项.realize 实现,achieve 实现.注意题目的 realize 用了\"实现\"这层意 思.\n***翻译：尽管在美国女人没有投票权,直到 1920 年之后,在十九世纪很多女权主 义者的目标逐渐得到了实现,尤其是已婚女士能够掌控自己的财产."]}),

wx.setStorage({key: "39", data: ["40.  Edited collections of scholarly essays generally tend to be somewhat uneven: they suffer from the______________subject matter of the various essays, the lack of an overarching and consistent thesis, and the variable quantity of the contributions.",
{A: 'A.intriguing',B: 'B.heterogeneous',C: 'C.comprehensive',D: 'D.disparate',E: 'E.mediocre',F: 'F.engaging',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面体现 uneven,后面空格和the lack of an overarching and consistent thesis,the variable quantity of the contributions 并列,都是体现 uneven,所以 空格选 BD 选项.heterogeneous 各种各样的,disparate 不同的. \n***翻译：编辑过的学术论文集合通常有点不平衡.他们受到不同主题文章,缺乏 持续性的主题,还有变化不断的质量的制约."]}),

wx.setStorage({key: "40", data: ["41.The Labrador duck is one of the most_______extinct birds, although there are a fair number of specimens, few have yielded reliable data and little is known about the species\' breeding patterns.",
{A: 'A.anomalous',B: 'B.controversial',C: 'C.enigmatic',D: 'D.misrepresented',E: 'E.cherished',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：few have yielded reliable data and little is known 说明这种鸟比 较神秘,正确答案选 C 选项.enigmatic 神秘的. \n***翻译：拉布拉多鸭就是最高深莫测的濒临灭绝的鸟类之一,尽管我们有很大量 的一批试样,但只有其中了很少一部分得到了可靠的数据,而且人们对于该物 种的繁殖模式更是知之甚少."]}),

that.setData({progress_percent:4}),wx.setStorage({key: "41", data: ["42. The research found that in assessing others, many people hold an unconscious view that competence and warmth are (i) _______: when they perceive a person to be highly capable, they infer that he or she must have a tendency to be (ii) _______.",
{A: 'A.equally important',B: 'B.mutually reinforcing',C: 'C.inversely related',D: 'D.ambitious',E: 'E.unfeeling',F: 'F.disingenuous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：两个空相互联系,能够搭配的是 CE 选项,这个题说的是竞争力和热情是 负相关的,竞争力强就代表没有热情.inversely related 负相关,unfeeling 无情的. \n***翻译：研究发现评估他人时,许多人无意识的认为能力和热情是成反比的：当 他们认为一个人很有能力的时候,他们断定那人一定有冷酷无情的倾向."]}),

wx.setStorage({key: "42", data: ["43. Mr. Stevens found that home schooling, far from representing (i)_____philosophy, (ii) _______ some of the most widely accepted education ideas: that children should be treated as individuals, taught in small numbers, and given a measure of discretion over their own learning.",
{A: 'A.a benign',B: 'B.an orthodox',C: 'C.an anomalous',D: 'D.overcomes',E: 'E.embodies',F: 'F.anticipates',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：far from 看出第一空和 most widely accepted 取反,所以第一空选 C 选项.第二空取 represent 的同义词,正确答案选 E 选项.anomalous 反常 的,embody 包括. \n***翻译：史蒂文斯先生发现在家上学并不是一种奇怪的观念,它包含了许多最广 被接受的教育理念：孩子应该被当成个体对待,小班教学,还应该给他们决定 自己该学什么的权力."]}),

wx.setStorage({key: "43", data: ["44. He was never (i) _______; he was nothing if not (ii) _______, so he forbore for the present to declare his passion.",
{A: 'A.chivalrous',B: 'B.impetuous',C: 'C.thoughtful',D: 'D.boorish',E: 'E.circumspect',F: 'F.spontaneous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：nothing if not 是极其的意思.so he forbore for the present to declare his passion 说明此人很谨慎, 所以第二空选 E 选项,第一空根据 never 得知选第二空的反义词,所以第一空 选 B 选项.impetuous 鲁莽的,circumspect 小心谨慎的. \n***翻译：他从不鲁莽；他极其谨慎,因此他暂时克制住不表示他的激情."]}),

wx.setStorage({key: "44", data: ["45. Computers make it spectacularly easy to search for particular pieces of information in downloaded texts. And doing research in this strategic, targeted manner can feel (i) _______. Instead of (ii)_____the organizing logic of the book you are reading, you can approach the book with your own questions and (iii) _______. You, not the author, are the master.",
{A: 'A.disorienting',B: 'B.humbling',C: 'C.empowering',D: 'D.disregarding',E: 'E.surrendering to',F: 'F.imitating',G: 'G.begin to discern the author\'s intent',H: 'H.glean precisely what you want from it',I: 'I.evaluate the book on its own terms'},
"###解析：第一空和第二空都可以根据 you can approach the book with yourown questions 得出第一空体现自由,第二空体现被动(注意 instead of 取 反),所以第一空选 C 选项,第二空选 E 选项,第三空和 you can approach the book with your own questions 并列关系,所以选取体现自由的特征的 词,所以第三空选 H 选项.empowering 有自主权的,surrender to 屈服于, glean precisely what you want from it 准确获取你想从这本书获取的东 西. \n***翻译：电脑让我们在下载的资料中寻找特定的某些信息变得令人惊讶的简单. 而且用这种巧妙的,有的放矢的方法来做研究会感觉增加了自主权.不用服从 你正在读的书籍的组织逻辑,你可以用自己的问题阅读这本书而且准确获取你 所需要的东西.你才是真正的主人,而不是作者."]}),

wx.setStorage({key: "45", data: ["46.  Given our species\' increasing numbers and appetites-which are reflected in and compounded by global climate change-even (i)_____species are likely to become endangered within the foreseeable future. If we are to avoid a calamitous loss of biodiversity, according to Golbe, we cannot simply let nature take its course. Ongoing conservation management is (ii) _______, as we have, in a sense, become nature, and the responsibilities that come with the role cannot be(iii)_____.",
{A: 'A.exotic',B: 'B.vulnerable',C: 'C.now common',D: 'D.ineffective',E: 'E.obligatory',F: 'F.promising',G: 'G.jettisoned',H: 'H.assumed',I: 'I.contrived'},
"###解析：even 让步,所以第一空选 become endangered 的反义,所以第一空选 C 选项,第二空和后文 responsibilities that come with the role cannot be+\"空格\"并列,所以二三空取同,而且根据 we cannot simply let naturetake its course 说明我们需要强制性施加一下措施,所以第二空选 E 选项, 第三空选 G 选项.common 常见的,obligatory 规定的,jettison 抛弃. \n***翻译：鉴于我们物种越来越多的数量和越来越大的胃口(由全球气候变化反映 和加剧),就算目前常见的物种也很有可能在不远的将来濒临灭绝.根据 G 的 说法,如果我们要避免生物多样性毁灭性的损失的话,我们不能简单地让自然 来选择.从某种意义上来说,因为我们已经成为了自然,正在实施的保护管理 系统是规定性的,而且随着这个角色而来的责任不能被抛弃."]}),

wx.setStorage({key: "46", data: ["47.  Miller reminded his clients that labor relationship are inherently _______; the interests of business owners are diametrically opposed to those of employees.",
{A: 'A.adversarial',B: 'B.exploitative',C: 'C.mercenary',D: 'D.antagonistic',E: 'E.variable',F: 'F.changeable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the interests of business owners are diametrically opposed to those o f employees 说明老板和员工是对立的,正确答案选 AD 选项.adversarial 敌 对的,antagonistic 敌对的. \n***翻译：米勒提醒他的客户,劳动关系固有敌对性.商人们的目标和兴趣本来就 和他们的员工相反."]}),

wx.setStorage({key: "47", data: ["48.  Progressive and reactionary populist movements are not necessarily _______; each may, and usually does, possess features of the other.",
{A: 'A.dichotomous',B: 'B.untenable',C: 'C.unsustainable',D: 'D.contradictory',E: 'E.subversive',F: 'F.efficacious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：necessarily 同义重复标志词,前面的进步和保守是反义词,所以句子的逻辑 是进步和保守不一定就是相互矛盾的,正确答案选 AD 选项.dichotomous 有矛 盾的,contradictory 矛盾的. \n***翻译：进步与保守民粹主义运动不一定就是相互矛盾的,每一个都可能而且经 常具有另一党派的通常特性."]}),

wx.setStorage({key: "48", data: ["49.  Although one can adduce myriad of examples of ecosystem disruption by nonindigenous species, nevertheless most introduced species that survive in fact appear to have quite  _______ effects on the ecosystem they have invaded.",
{A: 'A.minimal',B: 'B.trifling',C: 'C.marked',D: 'D.conspicuous',E: 'E.intriguing',F: 'F.deleterious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后转折关系,尽管有 myriad of examples,但是实际上影响很小,正 确答案选 AB 选项.minimal 最小的,trifling 微不足道的. \n***翻译：尽管人们可以举出无数个关于生态系统遭到非本土物种破坏的例子,然 而大部分能够存活下来的引进物种实际上却并只能对它们侵入的生态系统造成 很小的影响."]}),

wx.setStorage({key: "49", data: ["50.  Although field studies have linked inbreeding to declines among song sparrow populations, some researchers argue that, in nature, inbreeding proves_______as a factor when compared with crushing blows from weather changes.",
{A: 'A.hazardous',B: 'B.momentous',C: 'C.trivial',D: 'D.significant',E: 'E.precarious',F: 'F.inconsequential',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：crushing blow\"毁灭性打击\"说明后面的气候变化更影响物种的数量, 所以空格表明近亲繁殖影响较小,正确答案选 CF 选项.trivial 微不足道的, inconsequential 不重要的. \n***翻译：尽管现场研究将北美歌雀数量的下降和其近亲交配有关,一些研究者却 认为,在自然环境中,比起气候的毁灭性的打击来说近亲交配只是其数量减少 的微不足道的原因."]}),

wx.setStorage({key: "50", data: ["51.One view of historicism holds that systems of belief prevalent during different periods in history are_______and therefore cannot be understood except in their own term.",
{A: 'A.discriminatory',B: 'B.incommensurable',C: 'C.anachronistic',D: 'D.cosmopolitan',E: 'E.objective',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：cannot be understood except in their own term 说明这种系统是不 能通用的,能够对应的选项是 B 选项.incommensurable 不可比较的. \n***翻译：历史学认为信仰的系统流行于不同的历史时期是不能比较的,因此不能 明白他们自己独特的词汇."]}),

that.setData({progress_percent:5}),wx.setStorage({key: "51", data: ["52. The company suffers from an almost total lack of _______: even the most innocuous communications between departments lend to devolve into acrimony.",
{A: 'A.dissension',B: 'B.variance',C: 'C.comity',D: 'D.conformity',E: 'E.mordancy',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：even the most innocuous communications between departments lend to de volve into acrimony 说明前面的特征是 acrimony,注意 lack of 取反,所以 空格选 acrimony 的反义,正确答案选 C 选项.comity 友谊.\n***翻译： 这个公司因为缺少礼仪而备受苦楚,尽管是部门和部门之间的最无害的 沟通也都言辞刻薄."]}),

wx.setStorage({key: "52", data: ["53. One way to predict the effects of global climate change on an ecosystem is to extrapolate current trend in global change factors into the future. A (i)_____of this method is that its predictions (ii)_____actual observation, but the method also makes the questionable assumption that the future will resemble the present.",
{A: 'A.virtue',B: 'B.drawback',C: 'C.peculiarity',D: 'D.dispense with',E: 'E.derive from',F: 'F.improve upon',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从but the method also makes the questionable assumption that the future will resemble the present 推出第一空应该是正评价,所以正确答案选 A 选 项,第二空体现这个优点,所以 E 选项最合适.virtue 优点,derive from 源 于. \n***翻译：一种预测全球气候变化对生态系统的影响的方式就是外推当下全球变化 因素的趋势到未来.这种方法的优点是它的预测是从真实的观察中得到的,但 它也有一个有问题的假设就是未来和现在相似."]}),

wx.setStorage({key: "53", data: ["54. So (i)_____is the reputation of the city\'s police force for (ii)_____that whenever a new police chief take office, he or she routinely promises to clean up the force.",
{A: 'A.persistent',B: 'B.recent',C: 'C.discouraging',D: 'D.corruption',E: 'E.efficiency',F: 'F.inexperience',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：routinely 说明第一空的名声已经很久了,所以第一空选 A 选项,第二 空根据 clean up the force 可知这种 force 是负评价,所以第二空选 D 选项. persistent 持久的,corruption 腐败. \n***翻译：这个城市警察局贪污的名声一直都存在,以至于无论哪个新位新长官上 任,他或她都会不断承诺要根除这股势力."]}),

wx.setStorage({key: "54", data: ["55. Scientists said that cosmology was the field where the ratio of theory to data was (i) _______: there was an abundance of theories, but almost no data. Recently, however, that ratio has flipped. A huge and ever-increasing amount of data has (ii)_____all theories but one.",
{A: 'A.completely unknown',B: 'B.nearly infinite',C: 'C.always variable',D: 'D.eliminated',E: 'E.supported',F: 'F.clarified',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说理论很多但是没有资料说明理论对资料的比例是无穷的,第一空 选 B 选项.第二空根据 however 得知资料很多,理论比较少了,所以第二空选 D 选项 eliminate.infinite 无穷的,eliminate 除掉. \n***翻译：科学家们说,宇宙学是一个理论和已测到的数据极为不相称,我们有大 量的假设理论,但却几乎没有任何数据佐证.最近,相反的是,这样的比例却 调换过来了.我们得到了很大量的,前所未有的,一直不断增加的数据,这些 数据消除了众多关于宇宙的理论,只留下了一种可能."]}),

wx.setStorage({key: "55", data: ["56.  Many fairy tales are complex narratives of wish fulfillment. They teach the reader that a struggle against severe difficulties in life is (i) ______________, that it is an intrinsic part of human existence, and that if one does not (ii) _______, but steadfastly meets unexpected and often unjust hardships, one masters all obstacles and at the end (iii) _______.",
{A: 'A.atypical',B: 'B.unavoidable',C: 'C.insurmountable',D: 'D.preserve',E: 'E.improvise',F: 'F.shy away',G: 'G.elicits adversities',H: 'H.emerges victorious',I: 'I.evades achievements'},
"###解析：根据 an intrinsic part 得知对抗困难是一件不可避免的事情,所以第一空选 B 选项,第二空根据 not...but...结构推知选 steadfastly meet(与… 交战)的反义,所以第二空选 F 选项,第三空和 master(克服) all obstacle 并列,所以第三空选 H 选项.unavoidable 不可避免的,shy away 躲 避,emerge victorious 表现出胜利.\n***翻译：很多童话故事都是实现愿望的复杂的叙事诗.它们会教读者反抗生活中 巨大的困难是不可避免的,也就是说这是人类存在的固有的成分而且如果一个 人没有避开而是坚定地与没有预期到的而且是经常不公正的困难交战的话,这 个人会克服所有的困难而且最终取得胜利."]}),

wx.setStorage({key: "56", data: ["57.  Since it was committed to the idea of science as an international, politically neutral enterprise, the Royal Society of London refused to_______members from enemy nations during world wars of the twentieth century.",
{A: 'A.betray',B: 'B.expel',C: 'C.endorse',D: 'D.oust',E: 'E.sanction',F: 'F.condemn',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：既然是中立的,RSL 就不会对敌国的科学家做出不利的事,所以正确答 案选 BD 选项.expel 驱赶,oust 驱赶. \n***翻译：因为它致力于将科学作为一种国际性,政治性中立的企业,英国伦敦皇 家学会在二十世纪世界大战期间拒绝驱赶来自敌国的成员."]}),

wx.setStorage({key: "57", data: ["58.  Coagulation factors are useful proteins whose simple names-many are known only by Roman numerals-_______their importance and the specificity of their roles in the thinning and clotting of blood.",
{A: 'A.nullify',B: 'B.obviate',C: 'C.mitigate',D: 'D.belie',E: 'E.mask',F: 'F.accentuate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：注意题目的反义特征\"简单的名字\"和\"重要性和专一性\",所以中间 选一个体现这种对立特征的词,正确答案选 DE 选项.belie 掩饰,mask 掩盖. \n***翻译：凝血因子是有用的蛋白质的简单名称(很多人都是通过罗马数字知道 的),这个简单的名字掩盖了蛋白质在血液凝固上的重要性和专一性."]}),

wx.setStorage({key: "58", data: ["59.  Despite her rather_______choices, Moreland was neither a rebellious spirit nor someone who saw herself as anything out of the ordinary.",
{A: 'A.unconventional',B: 'B.impractical',C: 'C.quirky',D: 'D.flamboyant',E: 'E.successful',F: 'F.lucrative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：neither a rebellious spirit nor someone who saw herself as anything o ut of the ordinary 特征是反叛者,前面 despite 取反,所以句子的意思是尽 管有反叛者的选择,但绝对不是反叛者,所以正确答案选 AC 选项. unconventional 不传统的,quirky 古怪的.\n***翻译：尽管她不依惯例的选择,M 实际上既不是一个叛逆的人,也不是一个认 为自己与众不同的人."]}),

wx.setStorage({key: "59", data: ["60.  Despite their cultural and social significance, rapid growth, and widespread appear in China, video games-unlike traditional media-have received_______attention from international communication researches.",
{A: 'A.undue',B: 'B.scant',C: 'C.excessive',D: 'D.focused',E: 'E.limited',F: 'F.dwindling',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：despite 说明空格和前面的特征取反,前文的特征主要由 significance,rapid,widespread 体现,所以正确答案选 BE 选项.scant 缺 乏的,limited 有限的. \n***翻译：尽管他们有文化和社会的显著而且极快的增长,并且广泛发生于中国, 电子游戏,不像是传统的媒介,并没有得到来自于国际性交流研究的足够的关 注."]}),

wx.setStorage({key: "60", data: ["61.The artist\'s career was remarkable partly because it was so _______: she died, with only a few paintings to her credit, while still in her twenties.",
{A: 'A.felicitous',B: 'B.prolific',C: 'C.enduring',D: 'D.conventional',E: 'E.abbreviated',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析： she died, with only a few paintings to her credit, while still in her twenties 说明他作品不多而且死得早,能够对应的选项是 E 选项. abbreviated 简短的. \n***翻译：这个艺术家的艺术生涯是十分著名的,一部分依赖于时间实在太过短 暂,她死了,只留有一少部分有她签名的画作,还是在她年仅二十多岁的时 候."]}),

that.setData({progress_percent:6}),wx.setStorage({key: "61", data: ["62. The province has long claimed to be just another developing region, even as its economy  _______ those of other regions and threatens to eclipse the rest of the country combined.",
{A: 'A.parallels',B: 'B.bolsters',C: 'C.corroborates',D: 'D.outstrips',E: 'E.engages',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：threatens to eclipse the rest of the country combined 说明这个 地区的经济发展会超过其他地区,所以对应的选项是 D 选项,注意 eclipse 是 \"使黯然失色\"的意思,也就是鹤立鸡群的意思.outstrip 超过. \n***翻译：该省一直声称自己只是一个发展中地区,即使其经济超过其他地区并且 可能会超过该国其他地区结合起来的."]}),

wx.setStorage({key: "62", data: ["63. Scholars have marveled over the (i)_____that Shakespeare displays in his works, noting that such broad learning is all the more remarkable given that books were relatively (ii)_____in Shakespeare\'s time.",
{A: 'A.meticulousness',B: 'B.humor',C: 'C.erudition',D: 'D.edifying',E: 'E.scarce',F: 'F.inexpensive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空和 such broad learning 同义重复,所以第一空选 C 选项.第二 空说这件事是 remarkable,说明博学在当时很让人诧异,所以原因是因为书比 较少,第二空选 E 选项.erudition 博学,scarce 缺乏的. \n***翻译：不少学者被莎士比亚戏剧中展现出来的博学而表示惊讶.他们表示,在 莎士比亚的那个极度缺乏书籍的时期,能够学到如此丰富的学识是十分难得 的."]}),

wx.setStorage({key: "63", data: ["64. She was never (i) _______; she was nothing if not discreet, so she (ii)_____for the present to declare her passion.",
{A: 'A.precipitate',B: 'B.tactful',C: 'C.thoughtful',D: 'D.pretended',E: 'E.decided',F: 'F.forbore',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：she was nothing if not discreet 说明她的特征就是小心翼翼,那么 第二空对应这个特征选 F 选项,第一空根据 never 得知选 discreet 的反义词, 所以第一空选 A 选项.precipitate 仓促的,forbore(原形 forbear)克制. \n***翻译：她从来都不会仓促,她极其谨慎,所以她在现在压抑自己,就为了日后 能一展雄心抱负."]}),

wx.setStorage({key: "64", data: ["65. Except for a few passages in the biography in which the subject\'s flaws are (i) _______, the author\'s treatment of her subject is (ii) _______.",
{A: 'A.too harshly judged',B: 'B.analyzed in depth',C: 'C.frankly acknowledged',D: 'D.erudite',E: 'E.judicious',F: 'F.acrimonious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：能从句意看出前后两个空格是取反,所以根据选项找出取反的选项是 AE 选项.too harshly judged 严厉评判,judicious 审慎的. \n***翻译：除去那几篇文风被严厉谴责的生物学文章以外,这个作家对于她的主题 处理是很明智的."]}),

wx.setStorage({key: "65", data: ["66.  The writer argues that jewelry-grade diamonds, because they are both (i)_____and (ii) _______, prove one of two conclusions; their purchasers have so much money they can spend it on goods that (iii) _______, or their purchasers are so committed to making others think they have such wealth that they are willing to go into debt to do so.",
{A: 'A.flawless',B: 'B.fungible',C: 'C.expensive',D: 'D.durable',E: 'E.useless',F: 'F.irreplaceable',G: 'G.may appreciate in value',H: 'H.reflect the buyers\' connoisseurship',I: 'I.serve no practical purpose'},
"###解析：此题后面的两个结论都是在讽刺买这种砖石的人,所以前两个空格都需要填入负评价词,所以第一空选 C 选项,第二空选 E 选项,第三空依然体现砖 石的负评价,能够对应的选项是 I 选项.expensive 昂贵的,useless 无用的, serve no pratical purpose 没有实际用处. \n***翻译：作者认为珠宝类的钻石,因为它们既贵又没用,所以它们证明了两个结 论中的其中一个.第一个结论是它们的购买者有如此多的钱以至于他们能够花 钱去购买没有实际意义的东西,或者另外一个结论是购买者是如此的决心要让 别人认为他们有很多的财富以至于他们愿意贷款来做这件事."]}),

wx.setStorage({key: "66", data: ["67.  In Ramachandran\'s opinion, it is perfectly acceptable to propose bold speculations about the brain, even if these speculations seem _______; as Ramachandran frequently remarks, science thrives on risky conjecture.",
{A: 'A.unfounded',B: 'B.premature',C: 'C.controversial',D: 'D.verifiable',E: 'E.testable',F: 'F.baseless',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说 perfectly acceptable,后面 even if 转折,所以空格要填入 perfectly acceptable 的反义,所以正确答案选 AF 选项.unfounded 无根据 的,baseless 无根据的. \n***翻译：在拉马钱德朗的观点里,提出关于大脑的大胆的猜测是能被完全接受 的,就算是这些猜测毫无根据,就像拉马钱德朗经常评论的那样,科学是在大 胆冒险的猜测当中繁荣发展的."]}),

wx.setStorage({key: "67", data: ["68.  The concert hall\'s suspended ceiling is two-inch-thick plaster that reflects low-frequency sound energy; similarly, all wall surfaces are angled and shaped to_______sound from the stage throughout the audience area.",
{A: 'A.diffuse',B: 'B.amplify',C: 'C.spread',D: 'D.dampen',E: 'E.eclipse',F: 'F.deaden',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：similarly 说明分号前后的句子道理一致,所以空格选入 reflects 的同 义,正确答案选 AC 选项.diffuse 传播,spread 传播. \n***翻译：这个音乐厅的吊顶是两英寸厚的,能够反射低频音的石膏,所有的墙面 都是成角的并且构造成能够扩散来自台上的声音到整个观众区域的形状."]}),

wx.setStorage({key: "68", data: ["69.  Any notion of justice in the fortunes of artists is _______: works of equal value and quality produce quite different returns or no returns at all.",
{A: 'A.baseless',B: 'B.cliché',C: 'C.untenable',D: 'D.insulting',E: 'E.condescending',F: 'F.idealistic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：works of equal value and quality produce quite different returns or n o returns at all 说明作品的回报是和价值和质量不匹配的,所以所谓的 justice 是不存在的,所以正确答案选 AC 选项.baseless 无根据的, untenable 站不脚的. \n***翻译：任何公平的观念在艺术家的命运中都是毫无根据的,有等同价值和质量 的作品会产生完全不同的回馈,或者是完全没有回馈."]}),

wx.setStorage({key: "69", data: ["70.  Agencies responsible for protecting natural resources too often issue permits allowing exploitation of those resources, a process that remains_______given that agencies have become experts at masking their decisions in the scientific terms.",
{A: 'A.controversial',B: 'B.exacting',C: 'C.obscure',D: 'D.onerous',E: 'E.opaque',F: 'F.misleading',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因为机构擅长 masking their decisions in the scientific terms, 所以这个过程显得比较不透明,正确答案选 CE 选项.obscure 模糊的,opaque 不透明的. \n***翻译：对保护自然资源有责任的机构太经常给出允许开发资源的许可,这种做 法仍然保持模糊,使得这些机构在科学角度上闪烁其词成了专家."]}),

wx.setStorage({key: "70", data: ["71.Parker\'s model of human reflects a_______outlook, in stark contrast to the generally pessimistic analyses of her colleagues in the economics department.",
{A: 'A.prescient',B: 'B.circumspect',C: 'C.technical',D: 'D.magisterial',E: 'E.sanguine',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：in stark contrast to the generally pessimistic 说明空格和 pessimistic 取反义,所以正确答案选 E 选项.sanguine 乐观的. \n***翻译：帕克的人类模型反应出一个乐观的观点,与她经济学部门的同事普遍的 悲观分析形成鲜明的对比."]}),

that.setData({progress_percent:7}),wx.setStorage({key: "71", data: ["72. The history of the region\'s natural resources has been one of initial (i)_____followed by  (ii) _______; as such the region has over time gone from a resource-rich to a resource-dependent economy.",
{A: 'A.disappointment',B: 'B.abundance',C: 'C.conservation',D: 'D.growing interdependence',E: 'E.draconian regulation',F: 'F.rapacious depletion',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：from a resource-rich to a resource-dependent economy 分别对应两 个空格,所以第一空选 resource-rich 同义词,第二空选 resource-dependent 同义词.所以正确答案选 BF 选项.abundance 丰富,rapacious depletion 贪 婪的耗尽. \n***翻译：于这个地区自然资源的历史,这里的资源曾经是天生丰富却被贪婪损耗 的.以至于这个地区从原来的资源丰富到现在的资源依赖经济."]}),

wx.setStorage({key: "72", data: ["73. Any account of experimental music in the United States that (i)_____the  predominantly African American bebop and free jazz movements is (ii) _______, since this body of music constitutes what is arguably the most influential African experimental music in the decades following the Second War War.",
{A: 'A.neglects',B: 'B.exaggerates',C: 'C.reinterprets',D: 'D.underappreciated',E: 'E.problematic',F: 'F.self-serving',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：双空联立,后面对这种音乐给予了正评价,所以搭配此句意的是 AE 选 项.neglect 忽略,problematic 有问题的. \n***翻译：任何一种实验性质的音乐在美国如果忽略了非裔美国人在比波普和爵士 乐上的主导地位都是有问题的,因为音乐的主干在二战之后是最受非洲实验音 乐所影响的."]}),

wx.setStorage({key: "73", data: ["74. Despite the abundance and importance of maize, its biological origin has been a long-running mystery. The bright yellow, mouth-watering treat does not grow in the wild anywhere on the planet, so its (i)_____is not at all (ii) _______.",
{A: 'A.utility',B: 'B.popularity',C: 'C.ancestry',D: 'D.helpful',E: 'E.important',F: 'F.obvious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：两个空格联系用来解释 mystery,而且从does not grow in the wild anywhere on the planet 看得出这里是研究 maize 的起源,所以正确答案选 CF 选项.ancestry 起源,obvious 明显的. \n***翻译： 不管玉米的丰富和重要性,玉米的生物起源地一直以来都是个谜题.这 种明黄色美味的植物不能在地球任何地方野生生长,所以它的起源就不那么清 楚."]}),

wx.setStorage({key: "74", data: ["75. In medieval Europe, watermills were more (i)_____than windmills. It is true that windmills could be built virtually anywhere, whereas watermills (ii) ______________. However, watermills\' greater capacity and reliability provided a better (iii)_____the money required to build the mill.",
{A: 'A.problematic',B: 'B.profitable',C: 'C.versatile',D: 'D.were suitable only for certain locations',E: 'E.inspired a variety of new technologies',F: 'F.required a good deal of upkeep',G: 'G.source of',H: 'H.adjunct to',I: 'I.return on'},
"###解析：第二空根据 whereas 推知选 anywhere 反义,所以第二空选 D 选项,第三 空水磨的大容量和可靠性更容易回本,所以第三空选 I 选项,第一空对应the money,选 B 选项.profitable 获利的,were suitable only for certain locations 只能在某些地方合适,return 回 本. \n***翻译：中世纪的欧洲,水磨比起风车更加能够产生利益.确实风车能够被修到 任何地方,然后水磨只能在某些地方修建.然而,水磨更大的动能和可靠性能 够提供一个更好的修磨坊的钱的回本途径."]}),

wx.setStorage({key: "75", data: ["76.  When the Agriculture Department (i)  its dietary guidelines, it laid down a challenge: Eat better, smarter, and healthier or else. The \"or else\" included a long list of (ii)           that (iii)     the developed world, from heart disease and osteoporosis to diabetes.",
{A: 'A.make public',B: 'B.debunked',C: 'C.refused to consider',D: 'D.intangibles',E: 'E.misconceptions',F: 'F.maladies',G: 'G.assuage',H: 'H.plague',I: 'I.ignore'},
"###解析：第一空和 laid down 并列关系,所以第一空选 A 选项,第二空要知道 \"or else\"是\"否则\"的意思,所以后面的第二空和第三空都是负评价的词, 所以第二空选 F 选项,第三空选 H 选项.make public 公布,malady 疾病, plague 干扰. \n***翻译：当农业部在公布它的饮食指导方针时,他也提出了一个挑战：吃得更好,更聪明而且更健康否则的话.其中的\"否则的话\"包括了很多干扰发达国 家人民的疾病,包括心脏病,骨质疏松和糖尿病."]}),

wx.setStorage({key: "76", data: ["77.  Although legislators on both sides of issues have repeatedly_______a desire to find a middle ground, until now no acceptable compromise has been achieved.",
{A: 'A.discussed',B: 'B.proclaimed',C: 'C.professed',D: 'D.rejected',E: 'E.disowned',F: 'F.betrayed',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：尽管重复声称要调解,但是最终没有实现 compromise,正确答案选 BC 选项.proclaim 宣布,profess 声称. \n***翻译：尽管关于这个问题的两个方面的立法车重复发出公告,想要找到一个中 间立场,直到现在都没有任何能够接受的妥协实现."]}),

wx.setStorage({key: "77", data: ["78.  The company is so old-fashioned and opposed to innovation that it can seem downright           .",
{A: 'A.antediluvian',B: 'B.flighty',C: 'C.archaic',D: 'D.chauvinistic',E: 'E.capricious',F: 'F.patronizing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：old-fashioned and opposed to innovation 直接对应空格,所以答案 选 AC 选项.antediluvian 陈旧的,archaic 过时的. \n***翻译：这个公司实在是太过时了,并且停止创新,使得它显得异常远古."]}),

wx.setStorage({key: "78", data: ["79.  Estimating demographic parameters in marine mammals is challenging, often requiring many years of data to achieve sufficient precision to_______biologically meaningful change.",
{A: 'A.effect',B: 'B.tolerate',C: 'C.discern',D: 'D.envisage',E: 'E.withstand',F: 'F.detect',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：收集多年的资料的目的是觉察出变化,所以正确答案选 CF 选项. discern 觉察,detect 发现. \n***翻译：估算海洋类哺乳动物的数量参数,经常需要收集很多年很多年的资料, 才能达到足够的准确去识别生物上有意义的改变."]}),

wx.setStorage({key: "79", data: ["80.  Scientists should hope the faults in their theories will be_______their peers since the refutation of one hypothesis can free its originator to develop a better one.",
{A: 'A.discerned by',B: 'B.disregarded by',C: 'C.discovered by',D: 'D.ignored by',E: 'E.opaque to',F: 'F.inspiring to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：refutation of one hypothesis 和空格同义重复,所以空格体现 refutation,那就是错误被发现,正确答案选 AC 选项.discern 觉察, discover 发现. \n***翻译：科学家们应该寄希望于他们理论中的问题能够被他们的同事发现,因为 反驳一个假设能够释放它原来的发明者去形成一个更好的假设."]}),

wx.setStorage({key: "80", data: ["81.He was so_______during the filming of the movie that crew members nicknamed his \"The Angriest Man in the World\"",
{A: 'A.loquacious',B: 'B.irascible',C: 'C.perfidious',D: 'D.sanguine',E: 'E.voracious',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：简单题,对应后面的 The Angriest Man in the World,所以选 angriest 的同义,正确答案选 B 选项.irascible 易怒的. \n***翻译：他在电影拍摄过程中非常易怒,剧组成员给他起外号为\"世界怒王\"."]}),

that.setData({progress_percent:8}),wx.setStorage({key: "81", data: ["82. The film was a _______: its elements were assembled more or less haphazardly from a dozen of different sources.",
{A: 'A.burlesque',B: 'B.satire',C: 'C.pastiche',D: 'D.chronicle',E: 'E.parody',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容明显说明这个电影结合了很多不同的来源,所以正确答 案选 C 选项.pastiche 混成作品. \n***翻译：这个电影是个拼凑的作品：它的素材差不多是从一打不同的来源杂乱地 收集的."]}),

wx.setStorage({key: "82", data: ["83. The description of Green\'s scholarship as (i)_____is grossly misleading: while her research on interstellar particles is not especially novel, the conclusions she draws from her data are (ii) _______.",
{A: 'A.esoteric',B: 'B.tendentious',C: 'C.derivative',D: 'D.remarkably pioneering',E: 'E.dubiously supported',F: 'F.strangely comforting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面是让步关系,前面说 not novel,所以后面第二空选 not novel 的反义,所以第二空选 D 选项,第一空根据 grossly misleading 得知空格选冒 号后面特征的反义,冒号后面主要体现 pioneering,所以答案选 C 选项. derivative 非原创的,pioneering 先锋的. \n***翻译：对于格林的学术是别人学术的衍生物的说法是十分误导的.尽管她在关 于星际粒子的研究中得到的结果并不是十分新颖的,但她从研究数据中所得到 的结论确实惊人的首创."]}),

wx.setStorage({key: "83", data: ["84. People frequently attempt to relieve their workplace frustrations via surreptitious comments around the water cooler but would be better able to resolve their resentment if they were less (i)           about their problem and imitated a more (ii)           dialogue.",
{A: 'A.vexatious',B: 'B.clandestine',C: 'C.opportunistic',D: 'D.equitable',E: 'E.sincere',F: 'F.open',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空重复 via surreptitious comments,所以第一空选 surreptitious 的同义词,正确答案选 B 选项,第二空和第一空取反,所以第 二空选 F 选项.clandestine 秘密的,open 公开的. \n***翻译：人们经常尝试将他们在工作场合上的愤恨通过围着饮水机偷偷评论来进 行倾泄,但实际上,如果他们能够将自己的愤恨不那么偷偷摸摸地说出来并且 采用一种更加公开的对话方式,可能效果会更好地解决愤怒."]}),

wx.setStorage({key: "84", data: ["85. It would be (i)_____not to (i)_____these tabloid journalists for thriving in hard times: they deserve credit for doing well in a profession in financial straits.",
{A: 'A.apropos',B: 'B.churlish',C: 'C.cagey',D: 'D.admire',E: 'E.envy',F: 'F.emulate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 they deserve credit 推出这里对这些记者是正面评价,所以两个 空格联系起来 BD 最合适.churlish 无礼的,admire 欣赏. \n***翻译：不去敬仰那些能在艰难时期兴旺的新闻小报出版业是十分没礼貌的,他 们值得得到称赞,因为他们能够在经济低迷时期依然保持良好."]}),

wx.setStorage({key: "85", data: ["86.  The historian\'s narrative of the dynasty\'s decline is (i) ______________, because though there is nothing (ii)_____the account, largely parts of it rely on (iii) _______.",
{A: 'A.diffuse',B: 'B.reasonable',C: 'C.questionable',D: 'D.psychologically penetrating in',E: 'E.inherently implausible about',F: 'F.fully documented in',G: 'G.plagiarism',H: 'H.conjecture',I: 'I.pretense'},
"###解析：第一空和第三空同义,第二空根据 though 得知转折,所以 nothing+第 二空和第一三空取反,其实也就是说这个题的三个空格逻辑方向一致,所以答 案选 CEH 选项.questionable 可疑的,inherently implausible about 内在不 合情理的,conjecture 推测. \n***翻译：历史学家对于朝代的衰落的叙事诗是有问题的,因为尽管没有什么内在 不合情理的内容,但是大部分的内容都是依赖于推测."]}),

wx.setStorage({key: "86", data: ["87.  Though Edmurd certainly had a dignified bearing and made a great first impression, those who became acquainted with him soon realized he had an essentially_______nature.",
{A: 'A.pugnacious',B: 'B.deliberate',C: 'C.punctilious',D: 'D.courteous',E: 'E.complacent',F: 'F.truculent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：though 得知前后转折,前后说有很好的第一印象,所以后面空格是负评 价词,正确答案选 AF 选项.pugnacious 争强好胜的,truculent 爱吵架的. \n***翻译：尽管埃德蒙确实有庄严的包容能力并且形成了一个很好的第一印象,那 些变得和他舒适的人后来马上意识到他有一种极其重要的好斗的本质."]}),

wx.setStorage({key: "87", data: ["88.  The life of a secret agent is dangerous enough, but the life of a double agent is infinitely more_______: a single slip can send an agent crashing to destruction.",
{A: 'A.arduous',B: 'B.precarious',C: 'C.clandestine',D: 'D.perilous',E: 'E.covert',F: 'F.exhilarating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：more 递进前面的 dangerous,所以空格选 dangerous 同义,正确答案选 BD 选项.precarious 危险的,perilous 危险的. \n***翻译：特工的生活是十分危险的,但是双重间谍的生活更是极其危险的,一个 小小的失误将会导致一个间谍的崩溃和毁灭."]}),

wx.setStorage({key: "88", data: ["89.  Natural causes nerves to die off and muscles to weaken, but regular exercise of muscle fibers enlarges and can_______the decline by increasing the strengthen muscle you have left.",
{A: 'A.speed up',B: 'B.stave off',C: 'C.forestall',D: 'D.facilitate',E: 'E.assist',F: 'F.exploit',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：but 得知前后取反,前面的特征是 die off 和 weaken,所以空格+the decline=这俩词的反义,所以正确答案选 BC 选项.stave off 避开, forestall 预先阻止. \n***翻译：自然导致神经死掉,肌肉衰老,但是经常性的锻炼肌肉纤维和罐头通过 加强你剩下的肌肉组织从而达到延缓衰老的效果."]}),

wx.setStorage({key: "89", data: ["90.  Creativity is no longer seen as_______inspiration leading to poem or painting, it has come to be thought of as something permeating the whole of a person\'s life.",
{A: 'A.a mundane',B: 'B.a momentary',C: 'C.an illusory',D: 'D.an evanescent',E: 'E.a metaphoric',F: 'F.a prosaic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：no longer 得知空格和后面的特征取反,后面的特征是permeating the whole of a person’s life,所以空格选体现\"短暂\"的 词,正确答案选 BD 选项.momentary 暂时的,evanescent 稍纵即逝的. \n***翻译：创造力已经不被认为是一种瞬时的灵感,引发诗歌和画作创作,它变成 了渗透人一生的东西."]}),

wx.setStorage({key: "90", data: ["91.Nylenna\'s study showed that errors in scientific manuscripts submitted for publication often escape reviewers\' notice results that were not _______: when Godlee conducted a study of the same phenomenon, her findings were similar.",
{A: 'A.credible',B: 'B.unwelcome',C: 'C.anomalous',D: 'D.quantifiable',E: 'E.consequential',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 her finding were similar 推出前面的 results 并不是唯一的,所以 对应的正确选项是 C 选项.anomalous 异常的.\n***翻译：Nylenna 的研究表明提交出版的科学手稿中的错误经常让审稿人注意不 到,这种结果并不反常：当 Godlee 做相同现象的研究时,她的发现是相似的."]}),

that.setData({progress_percent:9}),wx.setStorage({key: "91", data: ["92. Among the Meakambut people of Papua New Guinea, legends are associated with specific caves in the Sepik region, and these legends are _______: only the cave owner can share its secrets.",
{A: 'A.impenetrable',B: 'B.immutable',C: 'C.proprietary',D: 'D.didactic',E: 'E.self-perpetuating',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的 only the cave owner can share its secrets 说明这些传 说是专属于洞穴主人的,所以正确答案选 C 选项.proprietary 所有者的. \n***翻译：在 Papua New Guinea 的 Meakambut 民族中,传说是和一些在 Sepik 地区 的特定洞穴有联系的,而且这些传说是专属的：只有洞穴的主人能够享有它的 秘密."]}),

wx.setStorage({key: "92", data: ["93. It would be imprecise to characterize her scholarship as (i) _______: though her etymological discussion is necessarily esoteric, there is nothing (ii)_____about the conclusions she derives from it.",
{A: 'A.derivative',B: 'B.arcane',C: 'C.careless',D: 'D.obscure',E: 'E.controversial',F: 'F.innovative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空和 necessarily esoteric 同义重复,所以选 esoteric 同义,B 选项最合适,第二空根据让步关系得知 nothing+空格=esoteric 反义词,所以 第二空也选 esoteric 同义,所以选 D 选项合适.arcane 神秘难懂的,obscure 模糊的. \n***翻译：将她的学术成果描述为晦涩难懂的说法并不准确,尽管她对于词源学的 讨论是深奥的,但是她从中得到的结论却并不模糊."]}),

wx.setStorage({key: "93", data: ["94. While acknowledging behaviors the Prime Minster took in order to remain in office were(i)_______, some politicians nevertheless believed this small amount of (ii)_____was justified to keep reforming government in office.",
{A: 'A.unethical',B: 'B.impractical',C: 'C.quixotic',D: 'D.skullduggery',E: 'E.indolence',F: 'F.incivility',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从题目中的 this small amount of 看出前后两个空格是同义重复,所以 取同义词,正确答案选 AD 选项.unethical 不道德的,skullduggery 阴谋. \n***翻译：尽管承认首相为了留任的举动是不道德的,一些政客却认为这种少量的 欺诈是合理的,因为想继续改革政府."]}),

wx.setStorage({key: "94", data: ["95. Attending with equal (i)_____to any question that presents itself, the sociologist\'s work has strengths and weaknesses that flow from this energetically (ii)_____approach.",
{A: 'A.skepticism',B: 'B.lethargy',C: 'C.fervor',D: 'D.hybrid',E: 'E.indiscriminate',F: 'F.conciliatory',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：equal 说明第一空重复后面的特征 energetically,所以第一空选 C 选 项,第二空重复 equal fervor 这个特征,所以第二空选 E 选项.fervor 热 情,indiscriminate 不加区分的. \n***翻译：对任何代表自己的问题参与时都抱有同样的热情,这个社会学家的工作 有他的长处也有弱点,正是因为这种断然地不加区别的工作方法."]}),

wx.setStorage({key: "95", data: ["96.  Galaxy Zoo set a standard for citizen-scientist participation project. Zealous volunteers (i) _______ the project\'s organizers by classifying an entire catalog of galaxies years ahead of schedule.(ii)_______ by the (iii)_____of the volunteers, Galaxy Zoo team was inspired to pursue lines of research they had never even imagined.",
{A: 'A.beguiled',B: 'B.forestalled',C: 'C.astonished',D: 'D.Baffled',E: 'E.Buoyed',F: 'F.Embarrassed',G: 'G.insouciance',H: 'H.stoicism',I: 'I.alacrity'},
"###解析：志愿者体现做完了整个任务这件事会让这个项目的组织者非常震惊,第 一空选 C 选项,后文说这个团队后来开始去计划以前从来不敢想象的研究,说 明是受到这些志愿者的高效率的激励,所以第二空选 E 选项,第三空选 I 选 项.astonish 使…震惊,buoy 使…振作,alacrity 迅捷,乐意. \n***翻译：银河动物园为民间科学家参与计划设立了一个标准.积极的志愿者远远 提前于日程对银河做了一个完整的归类,这让项目的组织者异常惊讶,被志愿 者的迅捷震撼到之后,银河动物园团队努力地去计划做他们从来都不敢想象的 研究."]}),

wx.setStorage({key: "96", data: ["97.  In establishing that the dust she had observed constitutes two percent of the mass in the quadrant, the astronomer showed that the dust\'s extreme visual prominence_______its relatively minor contribution to the total mass of the region.",
{A: 'A.belies',B: 'B.masks',C: 'C.highlights',D: 'D.nullifies',E: 'E.disproves',F: 'F.accentuates',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：extreme visual prominence 和 minor contribution 构成反义,句子想 表达的意思是极端的视觉显赫度掩盖了微小的贡献,正确答案选 AB 选项. belie 掩盖,mask 掩饰.\n***翻译：在确立她观察的微尘只占有这个空间中的质量的百分之二,这个天文学 家展示出了这个微尘的视觉上的突出能力,掩饰了它在这个空间中质量的极小 的贡献."]}),

wx.setStorage({key: "97", data: ["98.  Writing about advances in climate science is often problematic, in part because the material is so _______: climate science is the study of shifting, interrelated, and sometimes paradoxical patterns.",
{A: 'A.disheartening',B: 'B.pedestrian',C: 'C.complicated',D: 'D.depressing',E: 'E.knotty',F: 'F.mundane',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格要体现 problematic,冒号后面的内容体现了 material 的繁琐,正 确答案选 CE 选项.complicated 复杂的,knotty 复杂的. \n***翻译：写关于气候科学的发展的论文通常都是不确定的,一部分是因为这个材 料太复杂：气候科学是一项关于变化,互相关联,然后有些时候会是悖论模式 的研究."]}),

wx.setStorage({key: "98", data: ["99.  There are many insights in the essay collected in Observations on modernity, but they are embedded in a dense English translation of a dense German original that may make many of them_______ to most readers.",
{A: 'A.vapid',B: 'B.inaccessible',C: 'C.sagacious',D: 'D.banal',E: 'E.distressing',F: 'F.opaque',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：dense English translation of a dense German original 的东西会让 大部分读者读不懂,正确答案选 BF 选项.inaccessible 难理解的,opaque 难 懂的. \n***翻译：这篇被收录进现代性观察里面的文章中有很多深刻的见解,但是他们都 被嵌入进一种浓重的英文翻译气息以及浓重的来自于德国的发源,使得这些见 解对于众多读者来说很难理解."]}),

wx.setStorage({key: "99", data: ["100.  Noise suppression in phones can play an important role in making cellphone networks more efficient, since when sounds that are_______to the meaningful signal are transmitted, precious network band width is wasted.",
{A: 'A.unsuitable',B: 'B.detrimental',C: 'C.irrelevant',D: 'D.confined',E: 'E.limited',F: 'F.extraneous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 noise,噪音在题目中就是无关的声音,题目的意思说这种无 关声音(噪音)被传播的时候,网路就被浪费了,所以要清除噪音. irrelevent 无关的,extraneous 无关的. \n***翻译：电话中的降噪处理能够在使得电话网络通讯更加有效上起到一个非常重 要的作用,因为当无关的声音相对于真正有意义的信号被传播之后,珍贵的网 络宽带就被浪费了."]}),

wx.setStorage({key: "100", data: ["101.The title of her final and unfinished film, Escape, was _______: indeed while shooting it, she was preoccupied with thoughts of desertion.",
{A: 'A.quixotic',B: 'B.apt',C: 'C.misleading',D: 'D.inconsequential',E: 'E.uncharacteristic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从indeed while shooting it, she was preoccupied with thoughts of desert ion 得知拍摄的时候她就想放弃,那说明 Escape 这个名字取得很合适,很准 确,所以正确答案选 B 选项.apt 合适的. \n***翻译：她最终未完成的电影的片名《出逃》很合适：实际上在拍摄的时候,她 一直有逃跑的想法."]}),

that.setData({progress_percent:10}),wx.setStorage({key: "101", data: ["102. This is neither praise nor criticism, neither a compliment nor _______, just an observation.",
{A: 'A.an exposition',B: 'B.an elucidation',C: 'C.an animadversion',D: 'D.a culmination',E: 'E.a divination',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：逻辑非常简单,找 compliment 的反义词,此题主要靠词汇,正确答案选 C 选项.animadversion 批评. \n***翻译：这不是称赞也不是批评,不是赞扬也不是责备,这就是一个评论."]}),

wx.setStorage({key: "102", data: ["103. The national bank has been uncommonly powerful in comparison to its counterparts in other nations. It retains this potency partly because its control of the nation\'s banking system is (i) _______ governmental interference, and thus its actions remain largely (ii) _______.",
{A: 'A.unencumbered by',B: 'B.replete with',C: 'C.hindered by',D: 'D.compulsory',E: 'E.discretionary',F: 'F.bureaucratic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：这个银行比其他国家的银行更有权利是因为它不受政府干涉,第一空选 A 选项,第二空是结果,那么不受政府干涉的银行的行为就是自由的,所以第 二空选 E 选项.unencumbered 不受阻挡的,discretionary 自由决定的. \n***翻译：该国家银行和其他国家的国家银行相比要有权力很多.它有这种权力一 部分是因为它对该国银行系统的管控不受政府影响,因此它有很大的自由决定 权."]}),

wx.setStorage({key: "103", data: ["104. Mr. Billington, at times, can be a (i) _______. For instance, he deplores the Royal Shakespeare Company\'s eight-and-a-half hour version of Nicholas Nickelby, which many found (ii) _______.",
{A: 'A.naysayer',B: 'B.pushover',C: 'C.braggart',D: 'D.perplexing',E: 'E.unpredictable',F: 'F.absorbing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题关键词是 deplore,这里用的是谴责的意思,所以第一空选 A 选 项,第二空根据第一空的 naysayer 得知第二空要选正评价.naysayer 唱反调 的人,absorbing 吸引人的. \n***翻译：贝灵顿先生,在那时,可以被称之为唱反调的人.比如说,他谴责皇家 莎士比亚公司来尼古拉斯八个半小时的的版本,而这个版本很多人都认为有吸 引力."]}),

wx.setStorage({key: "104", data: ["105. At Cerro Portezuelo, the task of separating grinding tools from the larger collection of excavated stone objects was (i)_____the ancient practice of recycling grinding tool fragments for building materials, hammer stones, and other purposes that (ii)_____their original use.",
{A: 'A.complicated by',B: 'B.important to',C: 'C.independent from',D: 'D.complemented',E: 'E.obscured',F: 'F.underscored',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the ancient practice of recycling grinding tool fragments 说明 这个 task 是很困难的,所以第一空选 A 选项,第二空是 recycling 这个动作的 结果,如果 recycle 这些东西的话,必然会让最初的用途比较模糊.\n***翻译：在 CP,关于从大量的发掘出来的石器中分离打磨工具的任务是十分复杂 的,因为古时候人们经常会重复利用打磨石器,当成建筑材料,锤石或者其他 用处进行二次利用,这种二次利用会使它原本的用途模糊."]}),

wx.setStorage({key: "105", data: ["106.  To label Hamilton a foreigner because he was born outside what later became the United States is to assume anachronistically the existence of the nation before the fact. It is true that Hamilton came to believe that he was a (i)_____the United States, but his (ii)_____was stemmed not from his (iii)_____but from his confrontation with American democracy, which he considered to be a disease afflicting the nation.",
{A: 'A.symbol of',B: 'B.stranger in',C: 'C.citizen of',D: 'D.alienation',E: 'E.ambition',F: 'F.patriotism',G: 'G.ideology',H: 'H.profession',I: 'I.birthplace'},
"###解析：第一空和第三空是同义重复,所以第一空选 B 选项,第三空选 I 选项, 第二空选择他对抗民主的结果或者是出生在美国领土之外的结果,所以第二空 选 D 选项.stranger 外地人,alienation 疏远,birthplace 出生地. \n***翻译：因为 H 出生在后来的美国领土之外就将他打上外国人的标签也就是时间 上错误地认为了这个国家的存在先于他的出生.确实 H 开始相信他是一个美国 的外地人,但是他的疏远并不是源于他的出生地而是源于他对抗美国的民主, 因为他把民主当成了毁坏这个国家的一种病害."]}),

wx.setStorage({key: "106", data: ["107.  Changes made to ecosystem in order to achieve a goal, such as food production or flood control, often significant unforeseen trade-offs between other important products and service the ecosystems provide.",
{A: 'A.predict',B: 'B.delay',C: 'C.foretell',D: 'D.obscure',E: 'E.yield',F: 'F.engender',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：语义完整题目,填入一个动词能够体现 changes 产生的动作即可,这些 改变是为了生态系统而做的,所以后文填入一个\"引起\"的意思的词. \n***翻译：为了生态系统而做的为了实现一个目标的改变,例如食物生产或者洪水 控制,都会产生重大的无法预见的在生态系统提供的重要产品和服务之间的交 易."]}),

wx.setStorage({key: "107", data: ["108.  The union states its position polemically; its leader say they are fighting to save good jobs while_______ corporations replace full-time workers with part-time ones in order to cut down on both wages and benefits.",
{A: 'A.precarious',B: 'B.enterprising',C: 'C.rapacious',D: 'D.troubled',E: 'E.influential',F: 'F.avaricious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：replace full-time workers with part-time ones in order to cut down on both wages and benefits 表明有一些 公司的做法比较唯利是图,正确答案选 CF 选项.rapacious 贪婪的, avaricious 贪婪的. \n***翻译：这个工会辩论的表达了自己的位置,它的领导说他们正在努力去保护好 的工作,虽然这个贪婪的公司将所有全职职工都替换成兼职员工,就为了减少 他们的工资和福利."]}),

wx.setStorage({key: "108", data: ["109.  When the atmosphere over the city is at its best, it is peculiarly _______, and this clarity seems to distill this very special beauty of the place.",
{A: 'A.limpid',B: 'B.acute',C: 'C.calm',D: 'D.sharp',E: 'E.pellucid',F: 'F.tranquil',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：this clarity 和空格同义重复,正确答案选 AE 选项.limpid 清晰的, pellucid 清晰的. \n***翻译：这个城市上空的空气是最好的,它特别的透明,并且这样的清晰度就像 提炼了这个地方特殊的美."]}),

wx.setStorage({key: "109", data: ["110.  The book brings together many valuable reports on conservation projects, but with less variety than might have been wished: nearly half the contributions are from the same state, and consequently, the case studies are similarly_______geographically.",
{A: 'A.rudimentary',B: 'B.interdependent',C: 'C.interrelated',D: 'D.complex',E: 'E.heterogeneous',F: 'F.dissimilar',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：similarly 说明空格同义重复前文的特征\"from the same state\",所 以答案选 BC 选项.interdependent 相互依赖的,interrelated 相互关联的. \n***翻译：这本书汇集了许多有价值的保护项目报告,但却没有多少人们希望看到 的多样性,近乎一半的内容都是来自于一个相同的州,因此案例研究也有相同 的地理位置."]}),

wx.setStorage({key: "110", data: ["111.The identity of hominid remains found in a cave in the Altai Mountains was      until Paabo and his colleagues ended the speculation by showing that DNA sequences indicated the bones belonged to Neanderthals.",
{A: 'A.extraneous',B: 'B.conjectural',C: 'C.improbable',D: 'D.demonstrable',E: 'E.consistent',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：until=before,until 后面的内容是一个确定的事实,所以在这之前只 能是推测,正确答案选 B 选项.conjectural 推测的.\n***翻译：在 Altai 山区岩洞中发现史前人类的遗骸是推测确定的,知道 P 和他的 同事们通过展现出这些遗骸的 DNA 序列和 Neaderthals 人类的 dna 相近从而停 止了人们的推测."]}),

that.setData({progress_percent:11}),wx.setStorage({key: "111", data: ["112. In a production process that is complex and often unpredictable, roles that start out discretely defined may become quite _______.",
{A: 'A.confused',B: 'B.perfunctory',C: 'C.independent',D: 'D.overt',E: 'E.exacting',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：在 complex and often unpredictable 的制片过程中,离散定义的角色 只能让这些角色更混乱.confused 混乱的,此题能 google 到原文,原文用的 fluid. \n***翻译：在一个过程复杂并且经常难以预测的制片过程中,分散的定义的角色可 能会变的很散乱迷惑."]}),

wx.setStorage({key: "112", data: ["113. Tagore had a sharply defined sense of the (i)_____of scientific inquiry. The fact that science dealt in statistics and numbers, that its logic was probabilistic, meant that the domain of moral questions (ii)_____it: moral questions, for Tagore, required certainties, not probabilities.",
{A: 'A.irrationality',B: 'B.limits',C: 'C.futility',D: 'D.guarded over',E: 'E.lay outside',F: 'F.was subject to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：道德问题要求准确性而不是可能性,而科学逻辑是可能性的,所以第二 空选 E 选项,道德问题在科学之外,所以第一空说明泰戈尔在说科学问题的界 定,也就是选 B 选项.limit 界限,lay outside 在...之外. \n***翻译：泰戈尔对科学探究的局限性有一个明确的界定.科学处理数据和数字且 科学的逻辑是概率性的这个事实意味着道德问题在科学问题之外,因为道德问 题对于泰戈尔来说要求确定性而不是概率性."]}),

wx.setStorage({key: "113", data: ["114. The author suggests that cinema archives should become more like museums, justifying their existence by selecting, grouping and commenting on important films. By thus (i)_____films, archives would not only serve as repositories but would provide (ii)_____as well.",
{A: 'A.improving',B: 'B.restoring',C: 'C.interpreting',D: 'D.conservation',E: 'E.education',F: 'F.income',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应前文的 selecting, grouping and commenting,正确答案选 C 选项,第二空和 repositories 并列,而且还是第一空的结果,所以第二空选 E 选项.interpret 解释,演绎,education 教育. \n***翻译：这个作家提议,电影档案馆应该做的更像博物馆,通过选择证明它们的 存在,对于重要的电影进行分组和评论.因此通过解释这些电影,档案不仅成 为了储存方法而且还能成为一种教育的方法."]}),

wx.setStorage({key: "114", data: ["115. Although Professor Pearson\'s colleagues often complained that he was (i) _______, his friends were quick to defend him from this charge of (ii) _______.",
{A: 'A.importunate',B: 'B.garrulous',C: 'C.mercurial',D: 'D.inconstancy',E: 'E.dishonest',F: 'F.partiality',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 this charge of 得知前后两个空格是同义,而且同为负评价,根据 选项选出 CD.mercurial 善变的,inconstancy 多变.\n***翻译：尽管教授 Pearson 的同事们经常抱怨教授是个善变的人,他的朋友们会 立马针对他的这种善变的指责进行辩解."]}),

wx.setStorage({key: "115", data: ["116.  Just because, as a photographer, Friedlander (i)_____places that most people consider ugly does not mean that he is out to prove they are beautiful. Instead, his work suggests that the photographer simply cannot ignore so much of the built American landscape but is obligated to (ii)_____what we pass through day in and day out, regardless of (iii) _______.",
{A: 'A.tends to avoid',B: 'B.is harshly critical of',C: 'C.is interested in',D: 'D.document',E: 'E.emulate',F: 'F.discredit',G: 'G.authenticity',H: 'H.truthfulness',I: 'I.aesthetics'},
"###解析：does not mean that he is out to prove they are beautiful 说明前面 F 做的事就是对应 out to prove they are beautiful,所以第一空选 C 选 项,第二空 not...but...取反,所以第二空选 ignore 的反义,所以第二空选 D 选项,第三空的词依然对应 out to prove they are beautiful,意思说不管 美不美都应该记录,所以第三空选 I 选项.interested 对...有兴趣, document 记录,aesthetics 美观.\n***翻译：仅仅因为 F 作为一个摄影师对于大部分人认为丑的地方有兴趣这件事并 不意味着他是在努力地证明它们很美.相反,他的作品表明摄影师的确不能地 忽略如此多的优美的美国风景,而是有义务去记录每天经历的东西,而且不管 是否美观."]}),

wx.setStorage({key: "116", data: ["117.  For those of us who have been intoxicated by the power and potential of mathematics, the mystery isn\'t why that fascination developed but why it isn\'t _______.",
{A: 'A.advantageous',B: 'B.discounted',C: 'C.prevalent',D: 'D.undervalued',E: 'E.celebrated',F: 'F.widespread',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：not...but...结构看出第二个 why 后面要填入 fascination developed 的反义,所以空格应该填入一个正面评价的词,正确答案选 CF 选项. prevalent 流行的,widespread 广泛传播的. \n***翻译：对于我们中那些已经沉迷于数学的力量和潜力的人来说,神秘的事情不 是为什么这种沉迷会形成,而是为什么这种沉迷没有广泛传播."]}),

wx.setStorage({key: "117", data: ["118.  The nation\'s robust economic performance could be_______by the persistent flaws in its economic institutions and structure that are the result of half-finished and misguided government policies.",
{A: 'A.neutralized',B: 'B.concealed',C: 'C.undermined',D: 'D.impaired',E: 'E.obscured',F: 'F.outstripped',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：robust economic performance 会被持续的错误起到负面的作用,空格 填入体现这种负评价的词,正确答案选 CD 选项.undermine 损害,impair 损 害. \n***翻译：这个国家良好的经济表现可能会被经济机构和组织长期的错误损害,这 些错误是不成熟的和受误导的的政府政策的结果."]}),

wx.setStorage({key: "118", data: ["119.  An abundance of nutrient-rich pollution in estuaries causes algae to _______, much as houseplants grow better when their soil contains added fertilizer.",
{A: 'A.abound',B: 'B.proliferate',C: 'C.stagnate',D: 'D.coalesce',E: 'E.collect',F: 'F.diversity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：much as houseplants grow better when their soil contains added fertil izer 这句话和前面是类比关系,所以空格要选 grow 的同义,正确答案选 AB 选 项.abound 丰富,proliferate 激增. \n***翻译：在河口大量富含营养的污染物导致水藻大量繁殖,就像室内植物会在土 壤有额外的化肥的时候长得更快一样."]}),

wx.setStorage({key: "119", data: ["120.  Taking to the mountains to escape the chaos occasioned by the collapse of the ruling dynasty, artists looked to nature for_______and a serenity not evident in human society.",
{A: 'A.an order',B: 'B.a stability',C: 'C.a fragility',D: 'D.a decadence',E: 'E.an interaction',F: 'F.a degeneracy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和后面的 serenity\"宁静\"并列关系,所以选项中 AB 选项正确. order 秩序,stability 稳定. \n***翻译：去山里逃避由于统治朝代崩溃而引起的混乱,艺术家们寻求这种稳定秩 序和一种在人类社会中不明显的安宁."]}),

wx.setStorage({key: "120", data: ["121.Because people expect theater directors to be authoritarians, many were surprised that Clark was so _______.",
{A: 'A.histrionic',B: 'B.megalomaniacal',C: 'C.egalitarian',D: 'D.indolent',E: 'E.charismatic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因为大家预期导演是专制主义者,所以人们惊讶是因为后面的空格是专 制主义者的反义词,所以正确答案选 C 选项.egalitarian 平等主义者. \n***翻译：因为人们认为戏剧导演会是专制主义者,因此克拉克的平等主义让很多 人感到惊讶."]}),

that.setData({progress_percent:12}),wx.setStorage({key: "121", data: ["122. The students\'_______natures were in sharp contrast to the imperturbable dispositions of their teacher.",
{A: 'A.volatile',B: 'B.duplicitous',C: 'C.apathetic',D: 'D.cunning',E: 'E.blithe',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 in sharp contrast to the imperturbable dispositions 得知空 格要选 imperturbable\"冷静的\"的反义词,正确答案选 A 选项.volatile 变 化无常的. \n***翻译：学生们变化无常的本性和他们老师镇定冷静的性格形成鲜明的对比."]}),

wx.setStorage({key: "122", data: ["123. In a federally governed country, a regional government can function as a (i)_____for the entire nation-a setting in which new ideas under consideration for national implementation are (ii) _______ without having to involve the country as a whole.",
{A: 'A.laboratory',B: 'B.catalyst',C: 'C.standard',D: 'D.dispersed',E: 'E.undermined',F: 'F.tried',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：new ideas 能够推出第二空选 F 选项,第一空根据后面新的想法在这里 被尝试,所以这里应该最像一个实验室,所以第一空选 A 选项.laboratory 实 验室,try 尝试. \n***翻译：在一个联邦制统治的国家里,一个地区的政府,对于整个当有实现的新 想法产生的国家来说,就像实验室一样运行,地区政府尝试去做,但并不融入 整个国家作为整体."]}),

wx.setStorage({key: "123", data: ["124. Conventional deposits of oil and gas are actually the final resting place of far-traveled hydrocarbons that were (i)_____deeper source beds of organic-rich rock. By contrast, shale gas (ii)_____its birthplace, remaining in the source bed whose organic matter produced the gas.",
{A: 'A.trapped in',B: 'B.generated in',C: 'C.bound for',D: 'D.never leaves',E: 'E.swiftly escapes from',F: 'F.rarely stays in',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 by contrast 可知两者特征相反,前者的特征是 far-traveled,所 以第一空选 B,后者的特征是 remaining,所以第二空选 D 选项.generate 产 生,never leave 从来不离开. \n***翻译：传统的石油天然气实际上是遥远的,来自于深层床岩石富含有机物的石 头形成的碳氢化合物,但相反的事,页岩气是从页岩本来产生的地方衍生而来 的,一直残留于资源层中,由有机物生成气体."]}),

wx.setStorage({key: "124", data: ["125. Despite dispute between the sisters lasted all summer, Megan remained (i)_____and Laruen was equally (ii) _______.",
{A: 'A.intransigent',B: 'B.feckless',C: 'C.munificent',D: 'D.indolent',E: 'E.uncompromising',F: 'F.taciturn',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 equally 得知两个空格取同义,所以正确答案选 AE 选项. intransigent 不妥协的,uncompromising 不妥协的. \n***翻译：尽管姐妹之间的争论持续了整个夏天,M 依然固执己见而 L 也同样毫不 妥协."]}),

wx.setStorage({key: "125", data: ["126.  In a view of 17 studies from 2008, Trudeau and Shephard concluded that reserving up to an hour a day for (i)_____in school curricula does not (ii)_____academic achievement. In fact, they noted that more exercise often (iii)_____school performance, despite the time it took away from reading, writing, and arithmetic.",
{A: 'A.physical activity',B: 'B.leisure time',C: 'C.open study',D: 'D.contribute to',E: 'E.detract from',F: 'F.correlate with',G: 'G.diminished',H: 'H.augmented',I: 'I.counteracted'},
"###解析：从 despite the time it took away from reading, writing, andarithmetic 倒推,尽管花掉了学术时间,但是体育活动能够促进学习,所以第 三空选 H 选项,第二空同理说明不会损害学术表现,所以第二空选 E 选项,第 一空对应后文的 more exercise,所以第一空选 A 选项.physical activity 体 育活动,detract from 减损,augment 增强.\n***翻译：根据 2008 年的 17 个研究的结果来看,T 和 S 总结到说每天在学校课程 中保留一个小时来进行体力活动并不会减损学术成就.事实上,他们认为更多 的活动经常能够加强学校的表现,尽管参加这些活动会花去阅读,写作和算数 的时间."]}),

wx.setStorage({key: "126", data: ["127.  The Great Lakes wolf is a _______, stumping scientists as to whether it is a subspecies of the gray wolf or a distinct species.",
{A: 'A.prototype',B: 'B.riddle',C: 'C.paragon',D: 'D.model',E: 'E.legend',F: 'F.conundrum',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：stump 是\"难倒\"的意思,这里熟词僻意,既然难倒了科学家,说明这 种狼比较神秘莫测,所以空格选 BF 选项合适.riddle 谜语,conundrum 字谜.\n***翻译：GL 狼是一种谜,难倒了科学家,因为他们不知道它到底是灰狼的亚种还 是一种独立的物种."]}),

wx.setStorage({key: "127", data: ["128.  The book aims to illuminate how science has changed the meaning of nothingness from  _______ philosophical concept to something we can almost put under a microscope.",
{A: 'A.a tangible',B: 'B.a palpable',C: 'C.a nebulous',D: 'D.a nettlesome',E: 'E.an incontrovertible',F: 'F.a vague',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：from...to...说明空格处选 to 后面something we can almost put under a microscope 的反义,所以正确答案选 CF 选项.nebulous 模糊的,vague 模糊的. \n***翻译：这本书想要阐释科学是如何已经改变了空洞的含义,从模糊的哲学概念 变成了一些我们能够在微观世界下看到的东西."]}),

wx.setStorage({key: "128", data: ["129.  Readers have long considered Lawd Today! , Richard Wright\'s first written and last published novel, _______; the novel simply seems inconsistent with the image of what a Wright text should do or be.",
{A: 'A.an artifact',B: 'B.a prototype',C: 'C.an anomaly',D: 'D.a mainstay',E: 'E.an aberration',F: 'F.a model',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the novel simply seems inconsistent with the image of what a Wright t ext should do or be说明这个小说是与大家预期相反的,正确答案选 CE 选项.anomaly 异常, aberration 反常.\n***翻译：LT 这本书(RW 写的第一本但是最后才出版的书)的读者长期把这本书当 成是反常.这本小说很明显看起来和 RW 这个人的本文应该的样子不一样."]}),

wx.setStorage({key: "129", data: ["130.  It is hardly_______for today\'s film to try to blur the boundaries between the moral and the immoral. Hollywood has been doing that since at least the 1960s.",
{A: 'A.entertaining',B: 'B.original',C: 'C.novel',D: 'D.pertinent',E: 'E.relevant',F: 'F.insightful',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说好莱坞从 20 世纪 60 年代就开始做这件事,说明这件事不是新鲜 事,答案选 BC 选项.original 原创的,novel 新颖的. \n***翻译：今天的电影努力去让道德和不道德之间的界限变得模糊这件事几乎不是 新鲜事.好莱坞至少从 20 世纪 60 年代开始就已经开始做这件事了."]}),

wx.setStorage({key: "130", data: ["131.Despite the neighborhood\'s lingering reputation for _______, it has in fact become increasingly varied in its architecture and demographics.",
{A: 'A.boisterousness',B: 'B.unpretentiousness',C: 'C.idiosyncrasy',D: 'D.accessibility',E: 'E.homogeneity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 despite 得知空格和后面的内容取反,后面的核心词是 varied,所 以空格选 varied 的反义词,正确答案选 E 选项.homogeneity 同质. \n***翻译：尽管该社区还留存着的趋同化的名声,但事实上它的建筑和人口变得越 来越多样化."]}),

that.setData({progress_percent:13}),wx.setStorage({key: "131", data: ["132. That Seiberg and Witten lack celebrity can be explained by the_______nature of their pursuit: the mathematical exploration of four-dimensional space.",
{A: 'A.pedestrian',B: 'B.esoteric',C: 'C.compelling',D: 'D.global',E: 'E.univocal',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the mathematical exploration of four-dimensional space 对应了空 格的意思,四维空间是深奥的内容,所以正确答案选 B 选项.esoteric 深奥难 懂的. \n***翻译：塞伯格和威滕名气不大可以被他们的追求的深奥性所解释：对四维空间 的数学探索(的追求)."]}),

wx.setStorage({key: "132", data: ["133. World demand for oil had been intensified, but it slackened because China\'s surge in oil consumption had (i) _______. Moreover, high oil price had themselves started to act as a short-term (ii)_____the global economy, thus further dampening demand.",
{A: 'A.spread',B: 'B.commenced',C: 'C.slowed',D: 'D.spur to',E: 'E.drag on',F: 'F.panacea for',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空选 slacken 同义,所以第一空选 C 选项,第二空根据thus further dampening demand 得知对经济是负面的动词,所以第二空选 E 选项.slow 减缓,drag on 对...的阻碍. \n***翻译：世界对油的需求量增大,但由于中国消费油的增速变缓,世界对油的需 求量下降.此外,高油价开始变成了对全球经济的一个短期累赘,因此进一步 抑制需求."]}),

wx.setStorage({key: "133", data: ["134. Despite the fact that the book promises a complete rethinking of the factors contributing to the conflict, the picture that the book paints is (i)       : in identifying cause, it is more orthodox than (ii)          .",
{A: 'A.obscure',B: 'B.detailed',C: 'C.familiar',D: 'D.restrictive',E: 'E.revisionist',F: 'F.enigmatic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空很明显选 orthodox 的反义,选项中最合适的是 E 选项,第一空是对应第二空的重点 orthodox,所以第一空选 orthodox 的同义词 C 选项. familiar 熟悉的,revisionist 修正主义的. \n***翻译：尽管该书承诺要完全重新考虑产生矛盾的原因,但它描绘的论调确没改 变：在查明原因时,它更多的是传统守旧的而不是修正主义的."]}),

wx.setStorage({key: "134", data: ["135. Collecting such fragment of contemporary popular culture as postcards, newspaper clippings, and wallpaper patterns, Susan Hiller transforms these seemingly (i)        artifacts into objective (ii)           by making them the centerpieces in her compositions.",
{A: 'A.extravagant',B: 'B.trivial',C: 'C.archaic',D: 'D.importance',E: 'E.uniformity',F: 'F.banality',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：seemingly … into 说明前后两个空格取反,第一空根据postcards, newspaper clippings, and wallpaper patterns 得知选 B 选项, 第二空通过 centerpieces 一词得知选正评价,所以第二空选 D 选项最合适. trivial 琐碎的,importance 重要性. \n***翻译：收集当代流行艺术的碎片比如明信片,剪报,和壁纸花样,SH 将这些看 似不重要的艺术品,通过变成她作品的中心装饰品变成客观重要的艺术."]}),

wx.setStorage({key: "135", data: ["136.  Gravitational waves-ripples in the geometry of space-time-are analogous to electromagnetic waves. The challenge in trying to observe these waves directly is that they are extremely weak. To make waves large enough to be (i) _______, the most (ii)_____events in the universe are required: supernova explosions, the formation of black holes, or the collision of stars. Even so, the effects are (iii) _______. The geometry changes so little that a distance of several kilometers changes by less than the diameter of a proton.",
{A: 'A.detectable',B: 'B.usable',C: 'C.explicable',D: 'D.obvious',E: 'E.subtle',F: 'F.violent',G: 'G.masked',H: 'H.disastrous',I: 'I.minuscule'},
"###解析：第一空根据 make waves large enough 知道目的是想要让引力波被发 现,所以第一空选 A 选项,第二空重复 large enough,所以第二空选 F 选项, 第三空根据 even so 的转折,得知效果取第二空的反义,所以第三空选 I 选 项.detectable 可觉察的,violent 剧烈的,minuscule 小的. \n***翻译：引力波(时空几何中的波动)是和电磁波非常类似的.观察这些波的挑 战在于它们非常的弱.为了让波足够大到能够被发现,需要宇宙中最猛烈事件 发生：超新星爆炸,黑洞形成,或者恒星碰撞.即便这样,效果还是非常小 的.时空几何改变得如此小以至于几千米的距离变得不及一个质子的直径长 度."]}),

wx.setStorage({key: "136", data: ["137.  Reversing a decade-long trend on global _______, earth\'s surface has become brighter since 1990, scientists are reporting.",
{A: 'A.warming',B: 'B.cooling',C: 'C.diffusing',D: 'D.dimming',E: 'E.darkening',F: 'F.heating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：地球表面变得 brighter,说明是和全球变暗的说法相反,所以空格选 brighter 的反义,正确答案选 DE 选项.dimming 昏暗的,darkening 变暗. \n***翻译：和一个持续十年时间的关于全球变暗的趋势相反,科学家报告说地球表 面自从 1990 年以来已经变得更亮了."]}),

wx.setStorage({key: "137", data: ["138.  All Shaker furniture implies humanism in design: the Shakers made objects that look like objects, following a nonhuman law of design and rejecting the unconscious self-flattery inherent in making anthropomorphic objects.",
{A: 'A.a rejection of',B: 'B.a liberation from',C: 'C.a belief in',D: 'D.an affinity for',E: 'E.an attraction to',F: 'F.a misunderstanding of',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复following a nonhuman law of design and rejecting the unconscious self-flattery,所以空格选\"reject\"同义,正确答案选 AB 选项.\n***翻译：所有 S 的家具都表明一种设计中对于人文主义的排斥：S 制造物品,这 些物体看起来像遵从设计中非人类法则而且排斥在制作拟人化物品中内在的无 意的自吹自擂的物品."]}),

wx.setStorage({key: "138", data: ["139.  The controversial social analysis that Moynihan offered in the 1960s is now generally recognized as having been prescient; in fact, it has been the_______upon which much of our discussion of social pathology must base.",
{A: 'A.concession',B: 'B.bedrock',C: 'C.imperative',D: 'D.compromise',E: 'E.foundations',F: 'F.vision',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：prescient 说明这种 analysis 是正面评价的,所以后文要给予它正评 价,所以空格选体现这种内容的正评价,所以答案选 BE 选项.bedrock 基础, foundation 基础.\n***翻译：M 在 20 世纪 60 年代提出的受争议的社会分析现在被普遍认为是有预见 性的.事实上,它已经成为了我们大多数对于社会病理学讨论必须要依靠的基 础."]}),

wx.setStorage({key: "139", data: ["140.  The life of a secret agent is dangerous enough, but the life of a double agent is infinitely more_______: a single slip can send an agent crashing to destruction.",
{A: 'A.arduous',B: 'B.precarious',C: 'C.clandestine',D: 'D.perilous',E: 'E.covert',F: 'F.exhilarating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：more 递进前面的 dangerous,所以空格选 dangerous 同义,正确答案选 BD 选项.precarious 危险的,perilous 危险的. \n***翻译：特工的生活是十分危险的,但是双重间谍的生活更是极其危险的,一个 小小的失误将会导致一个间谍的崩溃和毁灭."]}),

wx.setStorage({key: "140", data: ["141.Paintings created in India during the Mughal dynasty were_______in ambition but ornamental in presentation: in one direction they have a affinity with newspaper photographs, while in the other they have the intricacy of jewels.",
{A: 'A.metaphorical',B: 'B.documentary',C: 'C.aesthetic',D: 'D.sectarian',E: 'E.baroque',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析： in one direction they have a affinity with newspaper photographs 对应 的就是空格,newspaper photographs 就是写实的特征,所以正确答案选 B 选 项.documentary 纪实的. \n***翻译：在莫卧儿王朝时期的印度创作的画在志向上是纪实性的但在表现上却是 装饰性的：一方面它们和报纸的照片类似,一方面它们有珠宝的错综复杂."]}),

that.setData({progress_percent:14}),wx.setStorage({key: "141", data: ["142. It is a paradox of the Victorians that they were both_______and, through their empire, cosmopolitan.",
{A: 'A.capricious',B: 'B.insular',C: 'C.mercenary',D: 'D.idealistic',E: 'E.intransigent',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 paradox 可以判断出,空格要和 cosmopolitan 构成反义,正确答案 选 B 选项.insular 狭隘的,与世隔绝的. \n***翻译：维多利亚时期的人实在是矛盾,他们既与世隔绝又与世相通."]}),

wx.setStorage({key: "142", data: ["143. Although movie critic Pauline Kael had a distaste for sycophancy, she also had a need for(i) _______; as a consequence of these competing feelings, she sent very (ii)_____signals to friends and colleagues.",
{A: 'A.solitude',B: 'B.obeisance',C: 'C.clarity',D: 'D.direct',E: 'E.subtle',F: 'F.mixed',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 although 和 a distaste for sycophancy 得知第一空取a distaste for sycophancy 的反义,所以正确答案选 B 选项,第二空根据 competing\"矛盾的\"得知,空格选 competing 的同义,正确答案选 F 选项. obeisance 尊敬,mixed 矛盾的. \n***翻译：尽管影评家宝琳·凯尔反感阿谀奉承,但是她也有对敬意的需求.因为这 些矛盾的想法,她给朋友和同事传达了很混杂的信号."]}),

wx.setStorage({key: "143", data: ["144. Since fibromyalgia\'s symptoms can be (i)_____and can (ii)_____other disorder, and its diagnosis depends largely on patients\' descriptions rather than blood tests or biopsies, fibromyalgia\'s cause and treatment have been the subject of much debate.",
{A: 'A.wide-ranging',B: 'B.distinctive',C: 'C.debilitating',D: 'D.mimic',E: 'E.illuminate',F: 'F.preclude',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：两个空格并列,最终的结果是说这种病的诊断靠patients’ descriptions 而不是 blood tests or biopsies,说明这个病不好 和别的病区分,正确答案选 AD 选项.wide-ranging 广泛的,mimic 模仿, 和...相似. \n***翻译：因为纤维肌疼痛的症状的范围可以十分广,而且和别的疾病相似,而且 关于它的专断基本上是依赖于大量的病人的表述而不是血液测试或者或组织检 测,因此肌纤维疼痛的诊断与治疗一直是人们长久的争论点."]}),

wx.setStorage({key: "144", data: ["145. Architecture scholar Sandy McCreery recently argued that traffic congestion, far from being a sign of urban (i) _______, is a mark of urban (ii) _______; congestion promotes contemplation of our surroundings and provides us with a shared experience, thereby fulfilling the essential task of the city.",
{A: 'A.plentitude',B: 'B.decline',C: 'C.excitement',D: 'D.ambition',E: 'E.privation',F: 'F.health',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 far from being a sign of urban 可知两个空格取反义,后面的解释 内容对拥堵是正评价,所以第二个空格填入正评价,第一个空格填入负评价, 所以正确答案选 BF 选项.decline 衰落,health 健康.\n***翻译：建筑学家 SM 最近因为交通拥堵进行了争论,这不是城市化后退的象征, 而是城市化健康的象征,交通拥堵能够引发人们对于周围事物的思索并且提供 给我们能够互相分享的经历,进而完成了城市的基本任务."]}),

wx.setStorage({key: "145", data: ["146.  When the Agriculture Department (i)  its dietary guidelines, it laid down a challenge: Eat better, smarter, and healthier or else. The \"or else\" included a long list of (ii)           that (iii)     the developed world, from heart disease and osteoporosis to diabetes.",
{A: 'A.make public',B: 'B.debunked',C: 'C.refused to consider',D: 'D.intangibles',E: 'E.misconceptions',F: 'F.maladies',G: 'G.assuage',H: 'H.plague',I: 'I.ignore'},
"###解析：第一空和 laid down 并列关系,所以第一空选 A 选项,第二空要知道 \"or else\"是\"否则\"的意思,所以后面的第二空和第三空都是负评价的词, 所以第二空选 F 选项,第三空选 H 选项.make public 公布,malady 疾病, plague 干扰. \n***翻译：当农业部在公布它的饮食指导方针时,他也提出了一个挑战：吃得更 好,更聪明而且更健康否则的话.其中的\"否则的话\"包括了很多干扰发达国 家人民的疾病,包括心脏病,骨质疏松和糖尿病."]}),

wx.setStorage({key: "146", data: ["147.  The jazz style called bebop was born and nurtured in New York City, and despite a_______initial reception, it resonated three thousand miles away on the West Coast.",
{A: 'A.wary',B: 'B.warm',C: 'C.confused',D: 'D.muddled',E: 'E.convivial',F: 'F.hostile',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：despite 看出空格和 resonate 取反,resonate 在这里是一致的意思,所 以正确答案选 CD 选项.confused 迷惑的,muddled 混乱的. \n***翻译：一种称之为 bepop 的爵士风格在纽约城诞生并成熟,并且尽管最初比较 混乱的接收情况,但它西海岸三千英里以外的地方是一致的."]}),

wx.setStorage({key: "147", data: ["148.  Despite the_______of medical information available through e-mail, the Internet, and mobile devices, not many patients are taking advantage of the potential of electronic communications for health-related needs.",
{A: 'A.wealth',B: 'B.complexity',C: 'C.intricacy',D: 'D.profusion',E: 'E.resurgence',F: 'F.overload',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：despite 让步,后面说很少有人利用,所以前面是尽管信息丰富,所以 正确答案选 AD 选项.wealth 丰富,profusion 大量. \n***翻译：尽管大量从电子邮件,因特网和移动设备上能够得到的医学信息,不是 很多病人在利用电子手段来寻找健康相关的需求."]}),

wx.setStorage({key: "148", data: ["149.  The political upheaval caught most people by surprise: despite the_______warnings of some commentators, it had never seemed that imminent.",
{A: 'A.stern',B: 'B.prescient',C: 'C.prophetic',D: 'D.indifferent',E: 'E.repeated',F: 'F.apathetic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复 that imminent,所以答案选 BC 选项,prescient 有先见 之明的,prophetic 有预见的. \n***翻译：这个政治突变让大部分人吃了一惊,尽管一些评论员有预见性的警告, 这样的突变势头却从来没有那么迫近."]}),

wx.setStorage({key: "149", data: ["150.  Wilson is wont to emphasize the_______of ants, how ants with full stomachs will regurgitate liquid food for those without , or how the old will fight so the young can survive.",
{A: 'A.beneficence',B: 'B.altruism',C: 'C.unpredictability',D: 'D.intelligence',E: 'E.fecundity',F: 'F.fertility',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面的解释都在说蚂蚁之前的互助行为,所以空格选 AB 选项. beneficence 善行,altruism 利他. \n***翻译：威尔逊习惯于强调蚂蚁的有益,比如饱腹的蚂蚁怎么反刍液体给那些没 有饱腹的蚂蚁吃,或者那些年老的蚂蚁怎么为了年轻的蚂蚁能够生活而斗争."]}),

wx.setStorage({key: "150", data: ["151.Blake\'s reputation for weakness is _______: almost all who have worked with him say he is a disciplined, intellectually formidable, and very tough politician.",
{A: 'A.specious',B: 'B.pervasive',C: 'C.irreversible',D: 'D.trivial',E: 'E.ambivalent',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后文的内容说他是一个 tough 的政治家,所以前面 reputation for weakness 是假的,能体现\"假\"特征的词是 A 选项. specious 虚假的.\n***翻译：Blake 软弱的名声是虚假的：几乎所有和他一起工作的人都说他是一个 守纪律,有强大智力而且非常坚强的政治家."]}),

that.setData({progress_percent:15}),wx.setStorage({key: "151", data: ["152. In protoscientific (for example, in ancient Greece), claims about the physical world were often accepted as true if they were reasonable; experimental verification, if thought necessary at all, was_______.",
{A: 'A.utilitarian',B: 'B.perfunctory',C: 'C.egregious',D: 'D.empirical',E: 'E.inductive',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题最关键的地方是 if thought necessary at all,if 在这里是即使 的意思,所以这句话的意思是即使被认为很有必要,所以后面的答案选一个和 necessary 广义取反的词,正确答案选 B 选项.perfunctory 敷衍的. \n***翻译：在原科学时代(例如,在古希腊),关于物理世界的言论只要是合理的 就被接受为真的；实验的确认,即使被认为有必要,也是很敷衍的."]}),

wx.setStorage({key: "152", data: ["153. Though many professional book reviewers would agree that criticism should be (i) _______ enterprise, a tendency to write (ii)_____reviews has risen, partly out of the mistaken belief that sharing personal details will help reviewers stand out of the pack",
{A: 'A.an anonymous',B: 'B.an evenhanded',C: 'C.a spirited',D: 'D.scathing',E: 'E.confessional',F: 'F.superficial',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 though 推出前后两个空格要选反义,从 partly out of the mistaken belief that sharing personal details will help reviewers stand out of the pack 能够推出,第二空要对应 sharing personal details,所以第二空选 E 选项,所以第一空选第二空反义词,所以选 A 选项. anonymous 匿名的,confessional 自白的. \n***翻译：尽管很多专业的评论员都会同意批判应该是个匿名的活动,但自白形式 的评论成为了趋势,这部分因为一种错误的认知,那就是认为让评论员们分享 出自己的个人信息细节能够使得他们的评论脱颖而出."]}),

wx.setStorage({key: "153", data: ["154. Many of the unusual behaviors attributed to crows-such as drinking coffee or presenting gifts to people who feed them-are based on (i)_____and therefore fall into the category of (ii) _______ rather than science.",
{A: 'A.long-term observation',B: 'B.controlled experiments',C: 'C.secondhand testimony',D: 'D.anecdote',E: 'E.speculation',F: 'F.hypothesis',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：双空有联系,前后因果关系,而且第二空还要和 science 取反,正确答 案选 CD 选项.secondhand testimony 间接的证据,anecdote 轶闻. \n***翻译：乌鸦的很多不寻常的行为,比如喝咖啡或者给饲养它们的人类带来礼 物,实际上都只是口口相传的说法,因此可以归为趣闻轶事而不是科学."]}),

wx.setStorage({key: "154", data: ["155. Despite the scathing precision with which she satirizes the lives of social aspirants and moneyed folk, the writer appears to (i)_____being part of the world she presents as so (ii) _______.",
{A: 'A.abhor',B: 'B.relish',C: 'C.evoke',D: 'D.unattainable',E: 'E.insufferable',F: 'F.enchanting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据前面的让步关系得知选 scathing 和 satirize 的反义,所以 第一空选 B 选项,第二空根据 she presents as so 得知选前面的同义重复,前 文的特征是 scathing,所以第二空选 E 选项.relish 喜欢,insufferable 难 以忍受的. \n***翻译：尽管她的严厉精密地讽刺社会有志和有钱的人,这个作家似乎很享受作 为这个世界中,像她所表现的那样,难以忍受的一部分."]}),

wx.setStorage({key: "155", data: ["156.  Although Thaler employs an innovative mode of analysis, his study offers yet another examination of quite (i)_____ground-namely, the culture ideology of Norwegian-American preservationist writers in the early twentieth century. The history, literature, and changing internal dynamics of the Norwegian subculture in America constitute a particularly well-studied area. Anyone familiar with the authoritative work of scholars in the field will (ii)_____little in Thaler\'s study that is (iii) _______.",
{A: 'A.unfamiliar',B: 'B.well-worked',C: 'C.fruitful',D: 'D.find',E: 'E.understand',F: 'F.reveal',G: 'G.accurate',H: 'H.new',I: 'I.recognizable'},
"###解析：第一空对应后文的 particularly well-studied,所以第一空选 B 选 项,因为 T 这次运用了创新的东西,所以熟悉以前的风格的人在\"新\"的作品 中几乎\"找不到\"需要的内容,第三空格对应前文的 innovative,第三空选 H 选项,第二空选 D 选项.well-worked 精细研究的,find 发现,new 新颖的. \n***翻译：尽管 T 采用一种创新的分析方法,他的研究却提供了另一种充分研究的 领域,那就是二十世纪早期作家中 norwegian－american 保护主义的文化意识 形态.那段历史,文学,还有一直改变的关于 norwegian 亚文化群的内在变 化,在美国形成了一种特定的,并且广为研究的领域.任何熟悉这个领域当中的权威学者的作品的人,都会发现在 T 十分新颖的研究中几乎找不到专断的内 容."]}),

wx.setStorage({key: "156", data: ["157.  Though it may seem as if more than a century of_______has made the electrical grid an all- encompassing web connecting the whole of the continent, many vast and beautiful areas remain without power.",
{A: 'A.refinement',B: 'B.expansion',C: 'C.ubiquity',D: 'D.augmentation',E: 'E.omnipresence',F: 'F.isolation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：让步转折,后面说后多地方仍然没有电,所以前面应该说电力发展比较 好,所以空格选 BD 选项.expansion 扩张,augmentation 增大. \n***翻译：尽管这看起来像是经过了长达一个多世纪的扩张,使得电网格变成了一 个包罗万象的网络连接整个大陆,很多广阔而又美丽的地区仍然没有电力."]}),

wx.setStorage({key: "157", data: ["158.  Much of the literature of railroad seeks someone to _______, and it is thus replete with encomiums on entrepreneurs and managers.",
{A: 'A.indict',B: 'B.rehabilitate',C: 'C.exalt',D: 'D.valorize',E: 'E.emulate',F: 'F.excoriate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：thus replete with encomiums 说明空格要填入 encomiums\"表扬\"的同 义词,正确答案选 CD 选项.exalt 赞美,valorize 赞扬(这个词很多词典查不 出赞扬的意思,一定要查韦氏). \n***翻译：很多关于铁道的文学描述期待有人能够赞美,因此这样的文学在企业和 经理人之间充满了赞美."]}),

wx.setStorage({key: "158", data: ["159.  Not only was this writer content to leave the reading public in the dark, she seems to have_______ the role of trickster, seeding her works with apparent clues that led nowhere.",
{A: 'A.rejected',B: 'B.disdained',C: 'C.relished',D: 'D.participated in',E: 'E.delighted in',F: 'F.developed',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：不仅满足,还享受这个过程,递进关系,选 CE 选项.relish 享受, delight in 享受. \n***翻译：这个作者不仅满足于这本书让公众摸不着头脑,她似乎还因为自己骗子 的角色而感到开心,将她的作品中提供了大量的明显却毫无意义的证据."]}),

wx.setStorage({key: "159", data: ["160.  The major_______of much popular history is that it betrays no interest in making intellectual contributions to our understanding of an issue.",
{A: 'A.characteristic',B: 'B.shortcoming',C: 'C.dilemma',D: 'D.quandary',E: 'E.ploy',F: 'F.fault',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：注意 betray 是\"表现\"的意思,后文是负评价,所以空格选负评价词即 可,正确答案选 BF 选项.shortcoming 缺点,fault 缺点. \n***翻译：大量流行的历史的最大缺点是它对于在某个问题的理解上做出智力上的 贡献没有表现出任何的兴趣."]}),

wx.setStorage({key: "160", data: ["161.While early biographies of Florence Nightingale tended to be quite _______, Lytton Strachey\'s irreverent 1918 essay about her ushered in a new era, making it acceptable, even fashionable, to criticize her.",
{A: 'A.unsympathetic',B: 'B.sycophantic',C: 'C.unsentimental',D: 'D.censorious',E: 'E.pedantic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：注意 irreverent 是\"不尊重\"的意思,后面说这种不尊重的文章变得流 行起来了,然后通过 while 的让步知道前面的空格是要填入 irreverent 的反义 词,所以正确答案选 B 选项.sycophantic 阿谀奉承的. \n***翻译：早期的弗洛伦斯·南丁格尔的传记往往很是阿谀奉承的,然而里顿·斯特 拉奇 1918 年关于她的一篇轻蔑的文章开启了一个新纪元,让批评她变得受欢 迎,甚至是时髦的."]}),

that.setData({progress_percent:16}),wx.setStorage({key: "161", data: ["162. The modest but functional new wing finally gives the museum the_______to serve its visitors properly, including multiple entrances to eliminate the lines that used to snake around the building.",
{A: 'A.visibility',B: 'B.wherewithal',C: 'C.reputation',D: 'D.solemnity',E: 'E.panache',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：serve its visitors properly,说明空格填入正评价词,然后 multiple entrances to eliminate the lines that used to snake around t he building 也说明空格要选一个提供便利的东西,正确答案选 B 选项. wherewithal 必要的资源. \n***翻译：这个简朴但实用的新馆给这个博物馆必要的条件去很好地招待参观者, 新馆的多个入口消除了原来绕着楼曲曲折折排的队."]}),

wx.setStorage({key: "162", data: ["163. The benefits offered by information technology do not (i)_____the need for individual reasoning; for example, Internet user should not allow the reasoning process to be (ii)_____the mere accumulation raw data.",
{A: 'A.disguise',B: 'B.signal',C: 'C.diminish',D: 'D.preceded by',E: 'E.supplemented with',F: 'F.supplanted by',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文例子解释前文道理,所以双空联立求解,前面选 C 选项,没有减少 需求,后面选 F 选项,没有被取代,搭配合理.diminish 减少,supplant 取 代. \n***翻译：信息技术带来的好处并没有减少对个人推理的需求：例如,网民不应该 让单单原始数据的堆叠取代推理的过程."]}),

wx.setStorage({key: "163", data: ["164. Because the book is largely concerned with an examination of various (i)_____often encountered in contemporary thinking, such as an exaggerated appreciation for meaningless coincidence and a credulous accept of pseudoscience, much of the writing has a (ii)_____quality to it. Nevertheless, it avoids the overly earned scolding tone common to many such endeavors.",
{A: 'A.inadequacies',B: 'B.abstractions',C: 'C.complexities',D: 'D.debunking',E: 'E.speculative',F: 'F.generalizing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：such as 后面举例的内容都表明第一空是负评价,所以第一空选 A 选 项,第二空通过 nevertheless 后面的让步信息avoids the overly earned scolding tone 得知第二空还是有 scold 在里面 的,所以第二空选 D 选项.inadequacy 不足,debunking 曝光的. \n***翻译：因为这本书主要关心的是检验思考中经常发生的各种不足,比如过分欣 赏无意的巧合或者是对伪科学轻信的接受,所以大部分的写作内容都有揭穿的 本质.然而,它避免了对于许多这样的努力常见的斥责的语气."]}),

wx.setStorage({key: "164", data: ["165. The building affairs minister rightly recognizes that the current planning system-under which the government controls every aspect of construction-creates disastrous developments, but she is wrong to propose the opposite: the wholesale (i)_____of the building market. Such a complete (ii)_____of responsibility on the part of the state can hardly be in the public\'s interest.",
{A: 'A.liberalization',B: 'B.preservation',C: 'C.regulation',D: 'D.abnegation',E: 'E.recapitulation',F: 'F.accretion',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the opposite 指的是 control every aspect 的反面,所以第一空选 control every aspect 的反义,所以正确答案选 A 选项,第二空根据 such 得 知是重复第一空,那么放弃责任=liberalization,所以第二空选 D 选项. liberalization 自由化,abnegation 放弃. \n***翻译：这个住建部长正确地认识到最近的计划系统—由政府管控每一个建筑过 程—导致了灾难性的进展,尽管她对于提议相反的方向的做法是错误的：建筑 材料批发自由化.这样一个完全放弃对这个州负责的提议无法引起公众的关 注."]}),

wx.setStorage({key: "165", data: ["166.  Publisher, publicist, and broadcasters love anniversaries, those occasions when historical events become (i)_____in (ii)_____culture of celebration. On such occasions patriotic sentiment and national pride wrapped in the panoply of history to manufacture a mythical past that is serviceable for public (iii) _______.",
{A: 'A.elusive moments',B: 'B.marketable artifacts',C: 'C.raging controversies',D: 'D.an authentic',E: 'E.a commercial',F: 'F.an elitist',G: 'G.consumption',H: 'H.scrutiny',I: 'I.censure'},
"###解析：三空联立,主要说的是这些纪念日现在都被用于商业目的,所以三空取 同即可,答案 BEG 选项.marketable artifact 有市场的人工作品, commercial 商业化的,consumption 消费.\n***翻译：出版人,推介人员和播音员都喜欢纪念日,这些历史事件的特别时刻在 商业化的文化庆祝中变成一种有市场的人工产品.在这些时刻爱国情感和国家 的骄傲包裹在华丽的历史服饰之下,用来生产可用于公众消费的神秘过去."]}),

wx.setStorage({key: "166", data: ["167.  After rising continuously over the summer, commodity prices fell, leaving analyst wondering whether the downward trend is a turning point or merely a_______before demand picks up in the winter months.",
{A: 'A.spike',B: 'B.upsurge',C: 'C.harbinger',D: 'D.portent',E: 'E.lull',F: 'F.respite',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：whether...or...得知空格和 turning point 取反,turning point 是 \"转折点\"的意思,所以空格选 EF 选项.lull 间歇,respite 喘息. \n***翻译：在长达一个暑假的持续上涨之后,商品价格下降了,促使分析人员怀疑 这个价格下降的趋势是不是一个转折点,或者仅仅只是在冬季到来之前蓄意再 次涨价的一个缓冲而已."]}),

wx.setStorage({key: "167", data: ["168.  Doris Kearns Goodwin\'s elegant, incisive study of Lincoln_______those whose knowledge of Lincoln is an amalgam of high school history and popular mythology as well as those who are experts.",
{A: 'A.gratify',B: 'B.entice',C: 'C.inspire',D: 'D.confuse',E: 'E.perplex',F: 'F.please',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：DKG 的研究用了 elegant 和 incisive 这俩形容词,所以后面空格也应该 是正评价,所以正确答案选 AF 选项.gratify 使满意,please 使满意. \n***翻译：DKG 的优雅深刻的关于林肯的研究使得那些关于林肯的了解仅仅只是来 自于高中历史和盛行流言的人,还有资深学者们,都能得到满足."]}),

wx.setStorage({key: "168", data: ["169.  Explorers could not build each other\'s knowledge if they could not trust records of previous explorers; thus exploration depended on the_______of those who had gone before.",
{A: 'A.collegiality',B: 'B.endurance',C: 'C.exactitude',D: 'D.meticulousness',E: 'E.eminence',F: 'F.tenacity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说了探索者必要信任前人的记录,所以探索就取决于前人的精确性 了,正确答案选 CD 选项.exactitude 精确性,meticulousness 注重细节. \n***翻译：研究人员并不能建造每个人的知识如果他们不相信前一个研究人员所记 录的数据,所以研究依赖于前一个已经研究过的研究者得出结论的准确性."]}),

wx.setStorage({key: "169", data: ["170.  Well organized and researched and including all significant discoveries and medical scientists, this history of Western medicine has justly been called _______.",
{A: 'A.encyclopedic',B: 'B.long-winded',C: 'C.exhaustive',D: 'D.rambling',E: 'E.overbearing',F: 'F.undiscriminating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：including all significant discoveries and medical scientists 体 现这本书的全面性,正确答案选 AC 选项.encyclopedic 百科全书式的, exhaustive 全面的. \n***翻译：组织有序,深入研究,并且包含了所有重要的发现以及药理学家,这个 关于西方医药的历史书被称之为百科全书."]}),

wx.setStorage({key: "170", data: ["171.Politicians who invoke the founders of the United States in support of their views seem to imply that the founders consistently concurred in their own views when in reality they were a highly_______ group of thinkers.",
{A: 'A.erudite',B: 'B.innovative',C: 'C.predictable',D: 'D.contentious',E: 'E.methodical',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过后文 in reality 看出,这里是拿理论和现实的情况进行对比,理论 的特征是\"concur\",所以现实的特征是找 concur 的反义词,正确答案选 D 选 项.contentious 有争议的. \n***翻译：那些援引美国开国元勋来支持他们的言论的政治家似乎表明这些元勋总 是在意见上一致,但实际上他们是高度好争议的一群思想者."]}),

that.setData({progress_percent:17}),wx.setStorage({key: "171", data: ["172. Apparently, advanced tortoises evolved multiple times: the high-domed shells and columnar, elephantine feet of current forms are specializations for terrestrial life that evolved_______on each continent.",
{A: 'A.independently',B: 'B.interchangeably',C: 'C.paradoxically',D: 'D.simultaneously',E: 'E.symmetrically',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：on each continent 体现出这些乌龟是分开进化的,所以能体现此特征 的词是 A 选项.independently 独立地. \n***翻译：显然高等乌龟进化了很多次：现在外形上高高的圆顶壳和圆柱形的象足 是专为陆地生活而在各大陆独立进化的特征."]}),

wx.setStorage({key: "172", data: ["173. Scholarly works on detective stories often begin with (i) _______, suggesting that there is something vaguely wrong with adults who spend their time reading such fiction and certainly something (ii)_____those who devote energy to its analysis.",
{A: 'A.chronologies',B: 'B.apologies',C: 'C.synopses',D: 'D.awry in',E: 'E.astute about',F: 'F.courageous about',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：something vaguely wrong 说明第一空要选体现 wrong 的词,所以选 B 选项,第二空和第一空是并列关系,所以第二空和第一空是广义同义,所以第 二空选 D 选项.apology 道歉,awry 错误. \n***翻译：那些侦探小说中的学术级作品通畅都是以道歉开头的,指出那些看这类 书籍的达人们可能有点问题,并且一定是有什么东西歪曲了他们的想法才导致 他们费尽心思去分析."]}),

wx.setStorage({key: "173", data: ["174. Due to the extraordinary circumstances, British business owners found themselves in a (i) _______ position during the Second World War, forced to accept regular interference from government and to acquiesce to (ii)_____role for labor unions in negotiating the terms and conditions of employment.",
{A: 'A.defensive',B: 'B.dominant',C: 'C.customary',D: 'D.a traditional',E: 'E.an enhanced',F: 'F.a diminished',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据forced to accept regular interference from government 推出选 A 选项, 第二空首先要知道商人和公会是对立的关系,所以第二空选 E,就是公会的力 量加强了. \n***翻译：由于一些特殊情况,英国企业主们发现自己在世界二次大战时处于防护 的位置,导致他们不得不接受政府下达的常规干涉而且要默许公会在劳动联盟 中商讨雇佣关系的地位有所增强."]}),

wx.setStorage({key: "174", data: ["175. As Ellen Donkin explains, in eighteenth-century England, writing plays (i)_____women. Even when the (ii)_____meant that playwriting did not bring personal fame, the work nevertheless enabled them to present their own views to the public and offered the possibility of acquiring capital.",
{A: 'A.empowered',B: 'B.overextended',C: 'C.impressed',D: 'D.use of a pseudonym',E: 'E.lack of a producer',F: 'F.poor remuneration',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 playwriting did not bring personal fame 可知第二空选 D 选 项,第一空要解释为什么女性要写戏剧,所以第一空选 A 选项最好.empower 使…有权利,pseudonym 笔名.\n***翻译：就像 ED 这个人解释的那样,在十八世纪的英格兰,写戏剧让女人得到权 利,就算当时署名是用笔名,这意味着这部戏剧不会带来任何名望,这部剧却 能使得他们在公共面前表达出来他们自己的观点并且给是他们有机会得到资 本."]}),

wx.setStorage({key: "175", data: ["176.  laws protecting intellectual property are intended to stimulate creativity, yet some forms of creative work have never enjoyed legal protection-a situation that ought to be of great interest. If we see certain forms of creative endeavor (i)_____as a result of uncontrolled copying, we might decide to (ii)_____intellectual property law. Conversely, if unprotected creative work (iii)_____in the absence of legal rules against copying, we would do well to know how such flourishing is sustained.",
{A: 'A.languishing',B: 'B.proliferating',C: 'C.diversifying',D: 'D.jettison',E: 'E.extend',F: 'F.relax',G: 'G.declines in originality',H: 'H.manages to thrive',I: 'I.openly invites imitation'},
"###解析：uncontrolled copying 会对 creative endeavor 产生负面的影响,所以第一空选 A 选项,第二空根据前面的条件来推,前面说会产生负面影响,所以 现在必须有这种法律,所以第二空选 E 选项,第三空同义重复 such flourishing,所以正确答案选 H 选项.languish 失去活力,extend 延伸, manage to thrive 成功繁荣.\n***翻译：保护脑力财富的法律想要激励创新,然而一些形式的创新作品从来没有 享受到法律的保护,这是一个应当引起关注的事情.如果我们看到某些创新的 努力因为不受控制的盗版而失去活力的话,我们可能会决定扩展脑力财富法 律.相反,如果没有受到保护的创新作品在缺乏防止盗版的法律中成功繁荣的 话,我们应当努力地去知道这种繁荣该如何维持."]}),

wx.setStorage({key: "176", data: ["177.  Science is arguably a very high-minded pursuit, but that is not to say that all of its practitioners are _______, as numerous articles alleging overly generous pharmaceutical industry payments to medical researchers have tried to show.",
{A: 'A.conventional',B: 'B.clever',C: 'C.unimpeachable',D: 'D.ingenious',E: 'E.blameless',F: 'F.predictable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复 high-minded,所以正确答案选 CE 选项.unimpeachable 无可指责的,blameless 无可指责的. \n***翻译：科学应该是个高尚的追求,但这并不是说所有的实践者都是无可指责 的,因为众多的文章都在描述过度慷慨的制药业给医疗研究者的高昂的工资."]}),

wx.setStorage({key: "177", data: ["178.  In a field of egotists, Bloomfield is _______, often praising her competitors and punctuating her correspondence with self-deprecating remarks.",
{A: 'A.unassuming',B: 'B.complimentary',C: 'C.acerbic',D: 'D.ingenuous',E: 'E.cutting',F: 'F.modest',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复 self-deprecating,所以正确答案选 AF 选项. unassuming 谦逊的,modest 谦虚的. \n***翻译：在自我主义的领域中,布洛姆菲尔德是很谦逊的,经常赞美她的竞争 者,用自贬的语调抨击她自己的信件."]}),

wx.setStorage({key: "178", data: ["179.  Because its previously_______beliefs had become core tenets of mainstream politics, the activist group disbanded; with no more skeptics to persuade, its purpose had evaporated.",
{A: 'A.arcane',B: 'B.seditious',C: 'C.quixotic',D: 'D.idealistic',E: 'E.popular',F: 'F.conventional',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：with no more skeptics to persuade 说明它的 beliefs 之前有人质 疑,所以空格填入质疑的广义同义,选项中只能对应 CD 选项.quixotic 不切 实际的,idealistic 不切实际的. \n***翻译：因为它原先的不切实际的信念变成了主流政治中的核心原则,这个激进 组织解散了,因为没有任何怀疑的人能让他们说服,因此它本来的目的就化为 乌有了."]}),

wx.setStorage({key: "179", data: ["180.  Although scientific progress leads to constant revision of ideas, one observation that has remained_______over the years is that there are a lot of insects in the world: some 950,000 species have been identified.",
{A: 'A.robust',B: 'B.significant',C: 'C.strong',D: 'D.perplexing',E: 'E.confounding',F: 'F.obscure',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面尽管有 revision of ideas,但是还是有没有改变的东西,所以空 格选 revision 的反义,正确答案选 AC 选项.robust 强壮的,strong 强壮的. \n***翻译：尽管科学研究进程意味着不断修正想法,一种几年来仍然有效的观察数 据显示,世界上有很多很多的昆虫,其中 950000 种类已经被认定."]}),

wx.setStorage({key: "180", data: ["181.What once seemed a quixotic vision-the \"Subway to the Sea,\" connecting Union Station in downtown Los Angeles to the Pacific Ocean in Santa Monica-no longer seems quite so _______.",
{A: 'A.impracticable',B: 'B.prescient',C: 'C.banal',D: 'D.viable',E: 'E.beneficial',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：so+空格是和前文的 quixotic 同义重复,所以空格选 quixotic 的同义 词,所以正确答案选 A 选项.impractical 不切实际的. \n***翻译：\"STTS\"连接洛杉矶和太平洋的 Santa Monica 曾经被认为是堂吉柯德式 的幻想,现在看起来并不是那么不切实际."]}),

that.setData({progress_percent:18}),wx.setStorage({key: "181", data: ["182. There is_______in the director\'s most recent film that keeps the melodramatic possibilities latent in its script safely at bay.",
{A: 'A.a mawkishness',B: 'B.a predictability',C: 'C.an austerity',D: 'D.an ostentatiousness',E: 'E.an emotiveness',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题关键点在于 keep sth. at bay 这个短语的意思是\"抵制\",抵制这 种 melodramatic\"夸张\"的东西出现,所以空格要选 melodramatic 的反义, 正确答案选 C 选项.austerity 朴素. \n***翻译：这个导演最近的电影中都有一种苦行的感觉,它能抵制在剧本中潜在的 夸张的可能性."]}),

wx.setStorage({key: "182", data: ["183. Computers have become adept in rarefied domains once thought to be uniquely human. However, they simultaneously have (i)_____certain tasks basic to the human experience, including spatial orientation and object recognition, and in so doing, have shown us how (ii) _______ such fundamental skills truly are.",
{A: 'A.failed to master',B: 'B.helped to improve',C: 'C.managed to mimic',D: 'D.outmoded',E: 'E.common',F: 'F.impressive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 however 得知要选一个负面评价的词,所以第一空选 A 选 项,第二空说电脑无法掌握这些东西,说明这些东西还是有比较厉害的地方 的,所以第二空选 F 选项.fail to master 没能掌握,impressive 令人敬畏 的. \n***翻译：计算机已经在一些曾经一度被认为只属于人类的高端领域驾轻就熟.然 而计算机同时确不能掌握一些对人类来说基本的任务,包括空间导向和物体识 别,这表明了这些基础技能是多么牛啊."]}),

wx.setStorage({key: "183", data: ["184. Until the advent of film, commercial entertainment in England occurred only where concentrated urban populations provided audiences large enough to make it remunerative: theaters and music halls were (i)_____in rural villages. But village cinemas quickly become (ii) _______, even though they were ramshackle affairs in comparison to the urban picture palaces.",
{A: 'A.spartan',B: 'B.conceivable',C: 'C.profitable',D: 'D.commonplace',E: 'E.sophisticated',F: 'F.unfashionable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对比城市和农村,城市能盈利,农村取反,所以第一空选 A 选 项,第二空根据 but 得知后面是正评价,所以第二空选 D 选项.spartan 简朴 的,commonplace 常见的. \n***翻译：在电影出现之前,英国的商业娱乐只在城市人口集中的地方出现,在那 里观众数量庞大到足够使其回报颇丰：乡村的剧院和音乐厅是很简朴的.但是 乡村电影院很快变得普及,尽管它们和城市的图片宫殿比起来破烂不堪."]}),

wx.setStorage({key: "184", data: ["185. Among wide-ranging animal species, populations at the edge of the species\' range are frequently exposed to less (i)_____and more variable conditions than those in other parts on the range. As a results, the animal\'s abundance is often (ii) _______.",
{A: 'A.erratic',B: 'B.favorable',C: 'C.demanding',D: 'D.lower at the periphery',E: 'E.unaffected by habitat',F: 'F.underestimated by researchers',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：多变的环境对于动物来说是不好的,所以第一空选 B 选项,注意 less 取 反,第二空根据题意推理,既然边缘的环境对于动物不利,那么说明在边缘动 物的丰富性会更低.favorable 有利的,lower at the periphery 在边缘更 低. \n***翻译：在范围广的动物种类中,在物种范围边缘的种群经常处在的环境比其他 部分的种群处于的环境更不好,更多变.因此边缘处的动物数量更少."]}),

wx.setStorage({key: "185", data: ["186.  Common sense tells me some people are more (i)_____than others. The claim that these differences are (ii) _______, or that deep down, everybody acts only to further their own interests, (iii)_____our everyday observations and deep-seated human practices of moral evaluation.",
{A: 'A.altruistic',B: 'B.adaptable',C: 'C.disciplined',D: 'D.growing',E: 'E.illusory',F: 'F.relevant',G: 'G.mimics',H: 'H.explains',I: 'I.contradicts'},
"###解析：everybody acts only to further their own interests 推出句子描写 的是人类自私无私的事,所以第一空选 A 选项,也说明一些人是自私的,所以 第二空想表达的意思是这种差别(有些人很无私)是不存在的,所以第二空选 E 选项,第三空自私和 moral 是反义关系,所以第三空选 I 选项.altruistic 无私的,illusory 虚假的,contradict 与…矛盾. \n***翻译：常识告诉我们一些人确实比另外一些人更无私.这些区别是虚假的,或者更深刻地说,每个人只考虑自己的利益的说法与我们每天的观察和深层的对 于道德评估的人类实践是相矛盾的."]}),

wx.setStorage({key: "186", data: ["187.  Anne Carson\'s book Nox is, very deliberately,_______literary object-the opposite of an e-reader, which is designed to vanish in your palm as you read on a train.",
{A: 'A.an evanescent',B: 'B.a cumbersome',C: 'C.an immutable',D: 'D.an unwieldy',E: 'E.an ephemeral',F: 'F.an flexible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：vanish in your palm as you read on a train 说明这个东西容易操 控,所以空格取反,正确答案选 BD 选项.cumbersome 笨重的,unwieldy 笨重 的.\n***翻译：AC 的书 NOX 是,非常刻意地写地笨重的文学书籍,这和电子书读者爱好 完全相反,电子书的设计就是为了要让你在火车上阅读时,手上的东西完全消 失."]}),

wx.setStorage({key: "187", data: ["188.  One of the peculiarities of humans is that we irrationally gravitate to the predictable and avoid risk, whatever the reasons for this _______, it is hardly a sound basis for dealing with complex, long- term problems.",
{A: 'A.eccentricity',B: 'B.predilection',C: 'C.vacillation',D: 'D.proclivity',E: 'E.wavering',F: 'F.cowardice',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：irrationally gravitate to 说明我们在做事的时候有一个倾向,所以 空格选\"倾向\",正确答案选 BD 选项.predilection 偏爱,proclivity 倾 向. \n***翻译：人类的独特怪癖中,我们不够理智地被可预测或者避免的危险而吸引. 不管这个倾向是因为什么原因,解决这个长期的,艰难的困难很难听起来像是 个基础的问题."]}),

wx.setStorage({key: "188", data: ["189.  Williamson had a fierce commitment to achieving an accord, spending enormous amount of time trying to forge a consensus out of an often_______assembly.",
{A: 'A.apathetic',B: 'B.fractious',C: 'C.restive',D: 'D.cynical',E: 'E.compliant',F: 'F.tractable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：语义推理题,想在一群躁动不安的人群中形成一种一致.正确答案选 BC 选项.fractious 易怒的,restive 躁动不安的. \n***翻译：威廉姆逊为了实现和谐一致付出了巨大的花费,他花费了大量的时间尝 试去融合难以驾驭的人群来使他们变的和谐一致."]}),

wx.setStorage({key: "189", data: ["190.  One_______is that so far, Web services have turned out to be much harder to deliver than their champions had hoped.",
{A: 'A.hope',B: 'B.snag',C: 'C.prospect',D: 'D.hitch',E: 'E.upshot',F: 'F.reason',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面的内容体现了一种非常 hard 的状态,所以对应的选项是 BD 选项. snag 障碍,hitch 故障. \n***翻译：现在面临的一个困难在于,网络服务比他们的开发者所认为的更加难以 传输."]}),

wx.setStorage({key: "190", data: ["191.Unlike some mammals-cows and sheep, for instance-that are notably _______, lions have a wide range of facial expressions.",
{A: 'A.tractable',B: 'B.impassive',C: 'C.solitary',D: 'D.social',E: 'E.sluggish',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：unlike 体现对比关系,所以空格选a wide range of facial expressions 的反义词,所以正确答案选 B 选项. impassive 面无表情的. \n***翻译：并不像有些动物,比如牛和羊,是出了名的面无表情,狮子却有着大量 的表情."]}),

that.setData({progress_percent:19}),wx.setStorage({key: "191", data: ["192. Though humanitarian emergencies are frequent features of television news, such exposure seldom_______the public, which rather seems resigned to a sense of impotency.",
{A: 'A.paralyzes',B: 'B.demoralizes',C: 'C.assuages',D: 'D.galvanizes',E: 'E.exasperates',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：which rather seems resigned to a sense of impotency 说明 seldom+ 空格=resigned,所以空格选 resigned 的反义,正确答案选 D 选项.galvanize 激励. \n***翻译：尽管新闻报道中的人道主义危机是时常发生的,这样的曝光很少刺激公 众,反而有种看似无力的感觉."]}),

wx.setStorage({key: "192", data: ["193. Historian Barbara Alpern Engel\'s task in writing a book about women in Russia must have been a (i)_____one, because the (ii)_____the Russian empire\'s peoples meant that Russian women could never be treated as a homogeneous group.",
{A: 'A.motivating',B: 'B.boring',C: 'C.daunting',D: 'D.unity among',E: 'E.disinterest in',F: 'F.diversity of',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：could never be treated as a homogeneous group 说明第二空选 homogeneous 反义,所以第二空选 F 选项.第一空根据因果关系推,民族差异 大所以写一本书很难,所以第一空选 C 选项.daunting 使人怯步的, diversity 差异.\n***翻译：历史学家 BAE 要写一本关于俄国女性的书的任务一定是个非常让人畏缩 的任务,因为俄国帝国中民族的差异化导致俄国女性从来不能被当作一个单一 的群体."]}),

wx.setStorage({key: "193", data: ["194. The national bank has been uncommonly powerful in comparison to its counterparts in other nations. It remains this potency partly because its control of the nation\'s banking system is (i) _______ governmental interference, and thus its actions remain largely (ii) _______.",
{A: 'A.unencumbered by',B: 'B.replete with',C: 'C.hindered by',D: 'D.compulsory',E: 'E.discretionary',F: 'F.bureaucratic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：这个银行比其他国家的银行更有权利是因为它不受政府干涉,第一空选 A 选项,第二空是结果,那么不受政府干涉的银行的行为就是自由的,所以第 二空选 E 选项.unencumbered 不受阻挡的,discretionary 自由决定的. \n***翻译：这个国家银行相较于其他的国家的国家银行显得异常的具有权利,它能 有如此强悍的力量可能是因为这个银行的银行系统的管控实施起来没有任何阻 碍,所以它的政策有一部分都是自由无拘束的."]}),

wx.setStorage({key: "194", data: ["195. The material covered in this article has been (i)_____in previous publications, and since currently neglected areas remained unexplored, the article contains no (ii) _______.",
{A: 'A.skirted',B: 'B.scrutinized',C: 'C.countered',D: 'D.revelations',E: 'E.distortions',F: 'F.conclusions',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：currently neglected areas 推出 previous publications 应该是 neglected 的反义,所以第一空选 B 选项,第二个根据 unexplored 推出结果是 文章没有披露出内容,所以第二空选 D 选项.scrutinize 仔细检查, revelation 披露. \n***翻译：这个文章中的内容在过去的出版中被仔细检查过,并且因为现在被忽视 的领域还是没被探索,该文章没有任何令人惊讶的新发现."]}),

wx.setStorage({key: "195", data: ["196.  China\'s rapidly growing population is the main threat facing large carnivores in the People\'s Republic. Increasingly, policies aimed at limiting population growth have been (i) _______; nevertheless, the country\'s vast size and the isolation of many of its regions mean that human populations in areas where large carnivores still occur (ii) _______. This human pressure has(iii)_____the South China tiger.",
{A: 'A.modified',B: 'B.deemphasized',C: 'C.implemented',D: 'D.could start to decline',E: 'E.can grow unchecked',F: 'F.have stabilized',G: 'G.celebrated',H: 'H.doomed',I: 'I.bypassed'},
"###解析：aimed at limiting population growth 得知这些政策已经颁布了,第一空选 C 选项,第二空根据 nevertheless,得知这些政策尽管实施了,但是效 果不好,所以人口还是在快速增加,第二空选 E 选项,第三空 human pressure 一定是负面的动词,所以第三空选 H 选项.implement 实施,can grow unchecked 不加约束的增长,doom 使…在劫难逃.\n***翻译：中国快速增加的人口是让这个国家大型肉食生物面临的最大威胁.越来 越频繁的关注于限制人口增长的政策已经被执行了.但是这个国家巨大的面积 和很多地区的隔离意味着存在肉食动物的地区的人口数量会无限制地增加.这 种人口压力已经让华南虎在劫难逃了."]}),

wx.setStorage({key: "196", data: ["197.  Asserting a need to preserve the_______that became the hallmark of her predecessor\'s tenure, the new director of federal monetary policy refused to subscribe to rigid or mechanistic rules in policy making.",
{A: 'A.firmness',B: 'B.adaptability',C: 'C.unpredictability',D: 'D.autonomy',E: 'E.strictness',F: 'F.flexibility',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：拒绝 rigid or mechanistic 是因为想保持灵活性,空格选 rigid 和 mechanistic 的反义,正确答案选 BF 选项.adaptability 可改性, flexibility 灵活性. \n***翻译：主张要保护她任期当中她灵活多变的特点的需求,这个新的联邦货币政 治局局长拒绝赞成政策颁布中有严格或者机械的规则."]}),

wx.setStorage({key: "197", data: ["198.  At first, most of the famous fairy tales seem so implausible and so irrelevant to contemporary life that their_______is hard to understand.",
{A: 'A.universality',B: 'B.persistence',C: 'C.appeal',D: 'D.ephemerality',E: 'E.survival',F: 'F.transience',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：如此难以置信如此和当代生活无关,所以这种东西还能传下来是很难理 解的一件事,正确答案选 BE 选项.persistence 持续存在,survival 持续存 在. \n***翻译：一开始,大部分的童话故事看起来都是这么的难以置信并且和真实生活 毫无关系,以至于它们的持续流传实在是让人难以理解."]}),

wx.setStorage({key: "198", data: ["199.  Far from_______innovations, as the patent system was designed to do, the patenting of concepts such as gene sequences gives individuals and corporations a legal choke to hold over ideas that should be useful to all.",
{A: 'A.spurring',B: 'B.recognizing',C: 'C.codifying',D: 'D.acknowledging',E: 'E.fostering',F: 'F.cataloging',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 far from 推出空格与后文内容取反,后文的核心意思是hold over\"推迟\",所以正确答案选 AE 选项.spur 激励,foster 促进. \n***翻译：不是刺激新创意,就像这个专利系统设计来达到的目的一样,基因序列 概念的专利给个人和公司一个合法的对所有有用的想法的抑制."]}),

wx.setStorage({key: "199", data: ["200.  Advocates for workers\' rights have adopted a new strategy, one that will require considerable ingenuity but that, if successful, could_______a movement aimed at making labor rights an unassailable feature of American democracy.",
{A: 'A.frustrate',B: 'B.galvanize',C: 'C.presume',D: 'D.affect',E: 'E.animate',F: 'F.thwart',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 if successful,得知后面对于这种 movement 是正评价,所以答案 选 BE 选项.galvanize 刺激,animate 激励. \n***翻译：拥护工人权益的人们采用了一个新的策略,一个需要十分精巧,但是, 一旦成功,就会刺激一个针对劳动权益的不容置疑的美国民主政治的条例的运 动."]}),

wx.setStorage({key: "200", data: ["201.In protoscientific (for example, in ancient Greece), claims about the physical world were often accepted as true if they were reasonable; experimental verification, if thought necessary at all, was_______.",
{A: 'A.utilitarian',B: 'B.perfunctory',C: 'C.egregious',D: 'D.empirical',E: 'E.inductive',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题最关键的地方是 if thought necessary at all,if 在这里是即使 的意思,所以这句话的意思是即使被认为很有必要,所以后面的答案选一个和 necessary 广义取反的词,正确答案选 B 选项.perfunctory 敷衍的. \n***翻译：在原科学时代(例如,在古希腊),关于物理世界的言论只要是合理的 就被接受为真的；实验的确认,即使被认为有必要,也是很敷衍的."]}),

that.setData({progress_percent:20}),wx.setStorage({key: "201", data: ["202. The theory that the 1908 Tunguska event was the explosion of a cosmic body in the sky over Siberia is _______: no one has yet found fragments of the object or any impact craters in the affected region.",
{A: 'A.long-standing',B: 'B.indisputable',C: 'C.plausible',D: 'D.uncontested',E: 'E.unproven',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 no one has yet found fragments of the object or any impact craters in the affected region 推出这个理论是没有证据来支撑的,所以正 确答案选 E 选项.unproven 未经证明的.\n***翻译：1908 的通古斯大爆炸是一个在西伯利亚上空的天体爆炸—该理论未被证 实：还没人找到这个天体的碎片或者任何在受影响的区域的撞击坑."]}),

wx.setStorage({key: "202", data: ["203. Although the political science professor\'s paper is quite (i)_____about the government\'s problem, suggesting that they are part of (ii)_____a process, the prognosis for the government is, on the contrary, actually quite auspicious.",
{A: 'A.straightforward',B: 'B.circuitous',C: 'C.pessimistic',D: 'D.degenerative',E: 'E.comprehensive',F: 'F.spontaneous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据让步关系得知选后文 auspicious 的反义,所以第一空选 C 选 项,第二空和第一空修饰关系取同,所以第二空选 D 选项.pessimistic 悲观 的,degenerative 退步的. \n***翻译：尽管政治学教授的论文对政府目前的问题很悲观,指出这些问题是衰退 的一部分,但相反的是对政府的展望确非常有前景."]}),

wx.setStorage({key: "203", data: ["204. Although the vast weight of evidence supports the contention that the products of agricultural biotechnology are environmentally (i) _______, many people still find them (ii)_____unsettling.",
{A: 'A.destructive',B: 'B.sound',C: 'C.intriguing',D: 'D.retroactively',E: 'E.innocuously',F: 'F.intrinsically',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空通过让步关系知道选 unsettling 的反义词,所以第一空选 B 选 项,第二空选一个副词修饰 unsettling,原则就是不要和题目逻辑相反,且不 要填出不相关的内容,D 选项和题目无关,E 选项自相矛盾,所以正确答案选 F 选项.sound 健康的,intrinsically 本质上. \n***翻译：尽管大量的证据表明农业生物科技的产品是对环境健康的,但许多人仍 然认为其本质上是令人不安的."]}),

wx.setStorage({key: "204", data: ["205. The usual (i)_____spending public monies on scientific projects is that such projects have the potential to make our lives healthier, safer, and more productive. However, the fact that science – even \"pure\" science – can strengthen democracy and promote public participation in the political process is hardly ever (ii) _______. It should be Scientific literacy (iii)_____democracy, and this is an important ancillary benefit of the promotion of science.",
{A: 'A.argument against',B: 'B.rationale for',C: 'C.precedent for',D: 'D.denied',E: 'E.mentioned',F: 'F.gainsaid',G: 'G.stifles',H: 'H.energizes',I: 'I.disregards'},
"###解析：后文说科学能够让人们生活更好,所以第一空就是说花钱在科学的原因 或者推动力,所以第一空选 B 选项,第二空通过 however 转折了,科学其实还 能推动民主,但是从来没有提到过,所以第二空选 E 最合适,第三空通过 this is an important ancillary benefit of the promotion of science 说明科 学确实是促进民主了,所以第三空选 H 选项.rationale 根本原因,mention 提 及,energize 使…活跃. \n***翻译：在科学项目中花费公共资金的常见根本原因就是这些项目有能力去让我 们的生活更加健康,更加安全,更加高效.然而,科学(甚至是纯粹的科学) 能够加强民主而且能够推动公众参与政治活动的事实几乎没有再被提到过.应 该是科学的专业能力推动民主,而且这是一个附加的重要的推动科学的好处."]}),

wx.setStorage({key: "205", data: ["206.  Early practitioners of the natural sciences developed methods to remove distortions caused by either the research environment or the researcher. Such methods, especially with respect to the researcher, were considered to (i)_____those (ii)_____subjectivity whose unbridled expression was thought to (iii)_____research.",
{A: 'A.restrain',B: 'B.reveal',C: 'C.disguise',D: 'D.incursions of',E: 'E.restrictions on',F: 'F.acknowledgements of',G: 'G.corrupt',H: 'H.justification',I: 'I.expedite'},
"###解析：第二空根据 those 得知空格+subjectivity=distortions,所以第二空选 D 选项,第一空重复前文的 remove,所以第一空选 A 选项,第三空则根据语义 推理,主观的东西会破坏研究,所以第三空选 G 选项.restrain 抑制, incursion 入侵,corrupt 破坏,使腐败.\n***翻译：早期的自然科学从业者创造一些方法来移除由于研究环境或者研究人员 导致的歪曲事实.这些方法,尤其是关于研究者的方法,被认为是抑制了主观 的侵入,这些主观想法中不受约束的表达被认为会使研究腐败."]}),

wx.setStorage({key: "206", data: ["207.  The researcher noted that microbes, although _______, make up far more of the living protoplasm on Earth than all humans, animals and plants combined.",
{A: 'A.invisible',B: 'B.omnipresent',C: 'C.diminutive',D: 'D.ubiquitous',E: 'E.minuscule',F: 'F.ethereal',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：although 后的空格和 make up far more of the living protoplasm 取 反,所以正确答案选 CE 选项.diminutive 极小的,minuscule 非常小的. \n***翻译：这个研究人员指出,细菌,尽管微小,也能比地球上任何人类和动植物 合并一起,生成更多的的生物原生质."]}),

wx.setStorage({key: "207", data: ["208.  In Inuit culture, elaborate carving has often been used to enhance_______object such as harpoon heads and other tools.",
{A: 'A.utilitarian',B: 'B.functional',C: 'C.domestic',D: 'D.decorative',E: 'E.manufactured',F: 'F.ornamental',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：鱼叉的头和其他工具体现的是实用性,正确答案选 AB 选项. utilitarian 实用的,functional 实用的. \n***翻译：在因纽特人的文化中,精心制作的雕刻经常被用来改进实用的物件,比 如鱼叉头或者是其他工具."]}),

wx.setStorage({key: "208", data: ["209.  Benjamin Franklin\'s reputation is so much one of appearing scientific investigation with commonsense empiricism that it is somewhat startling to realize how_______the great experiment\'s mentoring truly was.",
{A: 'A.reasonable',B: 'B.speculative',C: 'C.pragmatic',D: 'D.conjectural',E: 'E.careless',F: 'F.judicious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：富兰克林的名声是调查研究而来的,所以当人们发现这个实验是一个推 测的时候,人们感觉到惊讶. \n***翻译：本杰明富兰克林源自于调查研究常识经验而得到的声名,所以当人们意 识到这个伟大实验的指导真正上是如此依靠推测的时候,人们感到很惊讶."]}),

wx.setStorage({key: "209", data: ["210.  Scientist reported last month on a sign of relative solar _______; the solar wind, a rush of charged particles continually spewed from the Sun at a million miles an hour, had diminished to its lowest level in 50 years.",
{A: 'A.quiescence',B: 'B.turbulence',C: 'C.isolation',D: 'D.calm',E: 'E.remoteness',F: 'F.instability',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 had diminished to its lowest level in 50 years,所以空 格选体现\"lowest\"的词,正确答案选 AD 选项.quiescence 静止,calm 平 静. \n***翻译：科学家们上个月报道了一个太阳静止的迹象；太阳风,太阳表面一小时 行进百万里的不断扫过的一群带电粒子,已经削减到其五十年内的最低量."]}),

wx.setStorage({key: "210", data: ["211.Motivation is the hardest of all managerial tasks, and it is_______to expect a single memo, no matter how well crafted, to have much effect on the staff\'s attitude.",
{A: 'A.ingenious',B: 'B.reasonable',C: 'C.fanciful',D: 'D.scrupulous',E: 'E.radical',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：Motivation is the hardest of all managerial tasks 说明了任务 的困难,也说明一个 memo 是不现实的,所以正确答案选 C 选项.fanciful 不 现实的. \n***翻译：积极性是所有管理任务中最难的,想要用一个小便签就能对员工的态度 起到很大影响是不现实的,不管它制作的多么精巧."]}),

that.setData({progress_percent:21}),wx.setStorage({key: "211", data: ["212. Many readers today consider the moral sentiments expressed in the ancient writers\' work to be quite vapid, and in the seventeenth century they were similarly regarded as _______.",
{A: 'A.jejune',B: 'B.didactic',C: 'C.dogmatic',D: 'D.tendentious',E: 'E.arcane',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 similarly 可知,空格的特征和前文的特征是一致的,前面对 moral sentiments 的态度是 quite vapid,所以空格选 vapid 的同义词,正确 答案选 A 选项.jejune 枯燥乏味的. \n***翻译：许多读者今天认为古代作家的作品中表达的道德情感是很枯燥的,在 17 世纪的时候它们(指作品中表达的道德情感)同样也被认为是乏味的."]}),

wx.setStorage({key: "212", data: ["213. The author argued that the field of sociology has been overly (i) _______, partly because, for many scholars, the edges of social universe are defined by national borders. In this era of increasing globalization, however, sociology is presented with a historically distinct opportunity to transcend its former (ii) _______.",
{A: 'A.narrow in scope',B: 'B.susceptible to fads',C: 'C.averse to empiricism',D: 'D.utilitarianism',E: 'E.parochialism',F: 'F.historicism',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 the edges of social universe are defined by national borders 得知第一空选 A 选项,第二空根据 its former 得知是重复前文的内 容,所以第二空选 E 选项.narrow in scope 范围狭窄,parochialism 狭隘. \n***翻译：这个作者争论说社会学领域对于很多学者来说过于狭窄浅显了,一部分 可能是因为对于很多学者来说,社会学领域的边境被国家界限而定义.在越来 越明显的全球化中,社会学被赋予了一次可以超越它之前的狭隘定义的机会."]}),

wx.setStorage({key: "213", data: ["214. The author of this travel guide (i)_____to show his readers Cairo as it really is, but his information is not reliable: for example, his geography is (ii) _______, with one walking tour covering areas of the city that are twenty miles apart.",
{A: 'A.designs',B: 'B.forbears',C: 'C.purports',D: 'D.erratic',E: 'E.erudite',F: 'F.extensive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 but his information is not reliable,说明第一空是这个作 者想要给读者呈现真实内容,搜易第一空选 C 选项.第二空体现 not reliable,所以正确答案选 D 选项.purport 声称(一般是虚假的: to have the often specious appearance of being, intending, or claiming), erratic 难以预测的. \n***翻译：这本旅行手册的作者声称给他的读者展现真正的开罗,但他的信息却并 不靠谱：比如他的地理布局是不可预测的,一个步行团居然走了开罗相隔 20 英 里的两个地方."]}),

wx.setStorage({key: "214", data: ["215. Behavioral economists have come to believe that a (i)_____of choices can be paralyzing as Schwartz pointed out in the recent book The Paradox of Choice. Studies of retirement plans show that the more investment choices a plan offers, the less likely people are to participate in it. It may follow, then, that a lack of flexibility in certain plans may actually be a (ii) _______. People reasonably (iii)_____some advantages in exchange for peace of mind.",
{A: 'A.surfeit',B: 'B.reduction',C: 'C.stabilization',D: 'D.virtue',E: 'E.conundrum',F: 'F.revelation',G: 'G.foresee',H: 'H.forestall',I: 'I.forgo'},
"###解析：第一空对应后文的 more investment choices,所以体现 more 的含 义,正确答案选 A 选项,既然选择多是坏事,说明选择少(lack of flexibility)就是好事了,所以第二空选 D 选项,第三空根据 in exchange for 得知,人们是放弃了 some advantages,正好也对应前文的主体意思,所以 第三空选 I 选项.surfeit 过量,virtue 优点,forgo 放弃. \n***翻译：行为经济学家已经开始意识到过多的选择可能使人无法正常活动,正如 S 在最新的书 The Paradox of Choice 所指出的那样.关于退休计划的研究表 明一个计划提供的投资选择越多,人们愿意参加的意愿越弱.所以很可能在某些计划中缺乏灵活性可能真正是一个真正的优点.人们很合理地放弃了一些好 处来换取内心的安宁."]}),

wx.setStorage({key: "215", data: ["216.  Although political events in different countries were not (i)_____in the nineteen century, their interrelationship was (ii)_____compared with the present, when interdependence has become far greater: (iii)_____has ceased to be an option.",
{A: 'A.unconnected',B: 'B.trivial',C: 'C.simultaneous',D: 'D.conditional',E: 'E.superficial',F: 'F.transparent',G: 'G.isolationism',H: 'H.resilience',I: 'I.idealism'},
"###解析：interrelationship=not+空格,所以空格选 interrelationship 的反 义,正确答案选 A 选项,第三空根据 interdependence 变得 greater 得知,不 再是选择的应该是 interdependence 的反义,所以第三空选 G 选项,最后填第 二空,既然 interdependence 不再是选择了,说明现在的国家的相互联系更强 了,所以过去的相互联系比现在的相互联系更弱,所以第二空选 E 选项. unconnected 不相关的,superficial 表面的,肤浅的,isolationism 孤立主 义.\n***翻译：尽管在不同国家的政治事件在 19 世纪的时候是相互联系的,但是它们的 相互联系和当前比起来更加浅薄,当相互依赖变得越来越强的时候：孤立主义 不再是一个选择了."]}),

wx.setStorage({key: "216", data: ["217.  Publicity surrounding celebrities\' donations to charity is often greeted with cynicism, but a study of celebrity donation shows that they do_______other donations.",
{A: 'A.preclude',B: 'B.elicit',C: 'C.allow',D: 'D.draw',E: 'E.bar',F: 'F.replace',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面对于这种 donation 给予 cynicism,but 转折,所以后面对于 donation 正评价：这些捐献能够推动别的捐献.elicit 引出,draw 吸引. \n***翻译：公众对于名人给慈善机构的捐赠通常表现出冷嘲热讽,但一个关于名人 捐赠的研究显示出,名人的捐赠的确能引起其他人的捐赠."]}),

wx.setStorage({key: "217", data: ["218.  Aerial viewings of the gigantic stone horse attributed to the Native American Quechuan people fail to_______the considerable artistry required to create the piece: the horse appears crudely constructed unless carefully examined from the ground.",
{A: 'A.reveal',B: 'B.justify',C: 'C.manifest',D: 'D.mitigate',E: 'E.diminish',F: 'F.undercut',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：语义推理,后文说马如果不好好检验的话就会粗制滥造,说明这些空 中观察无法揭示重要的艺术才能,答案选 AC 选项.reveal 揭露,manifest 展 现. \n***翻译：由美洲盖比亚人建造的巨石马,在空中俯瞰的时候,没有能够显示出建 造一个艺术品的时候应该有的艺术性.这匹马看起来是被极其粗糙的建造,除 非是在地面上仔仔细细地观察."]}),

wx.setStorage({key: "218", data: ["219.  Culture, like speech, is primarily a human faculty, although both functions may exist in a more_______ form in lesser primates.",
{A: 'A.indispensable',B: 'B.crucial',C: 'C.primitive',D: 'D.intelligible',E: 'E.recognizable',F: 'F.rudimentary',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：让步关系,前面说主要是人类的能力,后文说在一些灵长类动物中也 会以一种更加原始的方式出现,也就是说人类和灵长类动物都有文化和演讲, 但是灵长类动物的文化和演讲更原始(初级),正确答案选 CF 选项. primitive 原始的,rudimentary 原始的. \n***翻译：文化,就像演讲一样,主要是人类的能力,尽管同样的功能能够以一种 更原始的形式出现于一小部分灵长类动物中."]}),

wx.setStorage({key: "219", data: ["220.  Jackie Wullschlager\'s biography of Habs Chiristian Andersen_______the insipid sweetness with which Andersen coated his life and reveals a vulnerable gingerbread man with a bitter almond where his heart should be.",
{A: 'A.conjures up',B: 'B.imagines',C: 'C.strips away',D: 'D.overlooks',E: 'E.removes',F: 'F.ignores',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：with a bitter almond 和 insipid sweetness 反义,所以这里 JW 是\"去掉\"了最初的 sweetness,正确答案选 CE 选项.strip away 除去, remove 去掉.\n***翻译：JW 关于 HCA 的传记去除了 HCA 涂抹在他生活中的无聊的甜味,而且用他 心中原本的苦杏仁揭露了一个脆弱的且华而不实的人"]}),

wx.setStorage({key: "220", data: ["221.Though the volume of radioactive waste produced by nuclear power plants is _______, the problem of how to dispose of that waste is not: rather, it is of major importance.",
{A: 'A.unmanageable',B: 'B.troubling',C: 'C.significant',D: 'D.small',E: 'E.deceptive',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：rather, it is of major importance 说明后面的 problem of how to dispose of that waste 是很重大的,再通过 though 得知前面空格要填入 重大的反义词,所以正确答案选 D 选项.small 微弱的,小的. \n***翻译：尽管核电站产生的放射性废弃物的量是很少的,但是如何处理这些废弃 物的问题却不小：相反,它是很重要的."]}),

that.setData({progress_percent:22}),wx.setStorage({key: "221", data: ["222. For the urban researcher, the long lives of ancient cities can provide ample chronological data, making up for the paucity stemming from relative_______of most present-day cities.",
{A: 'A.complexity',B: 'B.formlessness',C: 'C.transparency',D: 'D.diversity',E: 'E.youthfulness',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格要填入一个词作为当前城市的历史资料缺乏的原因,能导致这种 缺乏的原因是 E 选项,城市的年轻导致了资料的缺乏.youthfulness 年轻. \n***翻译：对于这个城市研究者,古城的长寿命能够提供丰富的时间资料,这补偿 了大多数现在的城市因为相对年轻而引起的资料缺乏."]}),

wx.setStorage({key: "222", data: ["223. The school system\'s modest plan for curriculum improvements has (i)_____local educators: some call it (ii)_____effort, while others say it is a pragmatic approach given the complexity of the task.",
{A: 'A.surprised',B: 'B.impressed',C: 'C.divided',D: 'D.genuine',E: 'E.halfhearted',F: 'F.practical',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：some...while others 能看出这里有两种态度,所以第一空选 C 选 项,第二空根据 while 后面的特征 pragmatic 倒推即可,所以第二空应该是负 评价词,所以第二空选 E 选项.divided 有分歧的,halfhearted 不认真的. \n***翻译：该校系统对课程改进的简单计划让当地的教育工作者产生了分歧：一些 说它是半心半意的努力,而另一些说鉴于任务的复杂性,这倒是个务实的方 法."]}),

wx.setStorage({key: "223", data: ["224. The author of this political history text shows considerable bias against the political party when assigning credit or blame for its actions: he deems (i)_____what he favors and avoids what he (ii) _______.",
{A: 'A.pertinent',B: 'B.inevitable',C: 'C.divided',D: 'D.condemns',E: 'E.condones',F: 'F.ignores',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容主要体现 bias,所以他喜欢的东西一定要有,他避 免他不喜欢的东西,所以第一空选 B 选项,第二空选 D 选项.inevitable 必然 的,condemn 谴责. \n***翻译：这个政治历史文章的作者在或褒或贬这个政党的行为时表现出的相当大 的偏差：他认为他喜欢的必须要有,同时回避他所谴责的东西."]}),

wx.setStorage({key: "224", data: ["225. The (i)_____quality of much contemporary drawing may be attributable to the use of photography as a drawing shortcut. Photography (ii)_____modern arts, but when it is used as a tracing tool in order to (iii)_____the difficulties of achieving correct proportion, the resulting art often feels static and lifeless.",
{A: 'A.inert',B: 'B.jubilant',C: 'C.sensuous',D: 'D.frequent enervated',E: 'E.wonderfully enriched',F: 'F.inevitably circumscribed',G: 'G.augment',H: 'H.foreground',I: 'I.circumvent'},
"###解析：第一空对应句尾的 static and lifeless,第二空根据 but 得知前后 转折,but 之后的特征是 static and lifeless,所以第二空选正评价词,第二 空选 E 选项,第三空搭配,摄影被用为一种工具去克服困难,所以第三空选 I 选项.inert 无生气的,enrich 使丰富,circumvent 回避. \n***翻译：很多当代绘画无生气的特征可能归因于使用摄影来作为绘画的捷径.摄 影出色地丰富了现代艺术,但是当它被用为一种跟踪工具来回避实现正确均衡 的困难时,最终的艺术形式总感觉是静止不动的而且是没有生命力的."]}),

wx.setStorage({key: "225", data: ["226.  To read Joanna Scott is to admire the work of a (i) _______. From sentence to story, she narrates with great skill and (ii) _______, so that the reader soon relaxes in the assurance that a hint or a brushstroke delivered in chapter 1 will be (iii)_____before the novel comes to an end.",
{A: 'A.proselytizer',B: 'B.sage',C: 'C.master',D: 'D.deliberation',E: 'E.enthusiasm',F: 'F.flamboyance',G: 'G.given import',H: 'H.largely forgotten',I: 'I.overwhelmed with details'},
"###解析：great skill 对应第一空,所以第一空选 C 选项,第二空和 great skill 并列,而且后文说读者都知道有这样一个特征,所以第二空选 D 选项最 合适,第三空依然要体现作者的 great skill 和 deliberation,所以三个选项 中 G 选项最合理.master 大师,deliberation 深思熟虑,given import 给予 重要性.\n***翻译：阅读 JS 的作品也就是欣赏一个大师的作品.从句子到整个故事,她都会 用伟大的技巧和深思熟虑来进行讲解,以至于读者会相信在第一章中呈现的暗 示和随意的一笔都会在小说结束前被给予重要性,因而读者会非常放松."]}),

wx.setStorage({key: "226", data: ["227.  While it is always clear that the author\'s message is heartfelt, it is mostly buried by shortcomings of style, organization, and production, although the book does become more_______toward the end.",
{A: 'A.sincere',B: 'B.intelligible',C: 'C.orthodox',D: 'D.readable',E: 'E.frank',F: 'F.voluble',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：让步关系,although 前面的 shortcoming 是负评价,所以空格要对 应正评价,所以答案选 BD 选项.intelligible 容易理解的,readable 清晰易 懂的. \n***翻译：作者的信息一直都是真诚的,这几乎被一些形式,组织,还有作品上面 的缺陷所掩埋,尽管这本书确实在结尾部分变得容易理解了."]}),

wx.setStorage({key: "227", data: ["228.  A clever form of diplomacy involves subtly inducing the other party to propose your preference so that your_______their requests appears as the granting of concession.",
{A: 'A.accession to',B: 'B.inattention to',C: 'C.subversion of',D: 'D.abnegation of',E: 'E.repudiation of',F: 'F.acquiescence to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：结果是 as the granting of concession,所以空格要体现 concession 的意思,正确答案选 AF 选项.accession to 加入,acquiescence to 默许. \n***翻译：外交的一种聪明的形式包含了不明显地引起另一党提出你的偏好,这样 你对于他们的请求表示默许就是一种让步."]}),

wx.setStorage({key: "228", data: ["229.  Films that critics have slumbered through rarely generate industry excitement, even though the critics\'_______reception may be less the fault of the movie than of its unfortunate time slot near a fatiguing film festival\'s conclusion.",
{A: 'A.somnolent',B: 'B.impartial',C: 'C.lethargic',D: 'D.laconic',E: 'E.befuddled',F: 'F.evenhanded',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 rarely generate industry excitement,而且后文说不是 电影本身的错,说明空格也应该是负评价词,所以答案选 AC 选项.somnolent 打瞌睡的,lethargic 无精打采的. \n***翻译：那些被评判家批判很少能产生行业兴奋的电影,尽管这些评判家不喜欢 这些电影,但这可能并不是电影本身的错,而是时机问题,因为临近一个使人 劳累的电影节."]}),

wx.setStorage({key: "229", data: ["230.  Even the cleverest use of time management techniques is powerless to_______the sum of minutes in a person\'s life (over 52 million, optimistically assuming a life expectancy of 100 years ), so people squeeze as much as they could into each one of them.",
{A: 'A.justify',B: 'B.quantify',C: 'C.augment',D: 'D.enrich',E: 'E.measure',F: 'F.extend',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：so people squeeze as much as they could into each one of them 说明再聪明的人也不能延长时间的,所以正确答案选 CF 选项.augment 增 加,extend 延长. \n***翻译：尽管是最聪明的时间管理法则也没有办法延长人一生的所有分钟(超过 五千二百万,乐观的话能够比 100 年长久),所以人们竭尽全力挤压其中的每 一分钟."]}),

wx.setStorage({key: "230", data: ["231.Few studies have been published on ground-squirrel dispersal, and most of them have involved very small sample sizes, thus most statement regarding ground-squirrel dispersal must be considered _______.",
{A: 'A.invaluable',B: 'B.unexceptional',C: 'C.inveterate',D: 'D.routine',E: 'E.conjectural',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：few studies 和 very small sample sizes 都说明大多数言论都是推 测性的,正确答案选 E 选项.conjectural 推测的. \n***翻译：有一些关于地松鼠分布的学说被发表出来,其中大部分的学说只包含了 一小部分的实验对象,并且大部分的学说认为关于地松鼠分布的说法仍然是推 测."]}),

that.setData({progress_percent:23}),wx.setStorage({key: "231", data: ["232. To criticize a disaster film for being_______is a bit silly, since people do not go to disaster movies to see an honest portrayed of reality.",
{A: 'A.expensive',B: 'B.harrowing',C: 'C.derivative',D: 'D.convoluted',E: 'E.implausible',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：since people do not go to disaster movies to see an honest portrayed of reality 说明\"真实\"不好,那么这里就不应该批评这部电影的 \"不真诚\".正确答案选 E 选项,implausible 不合情理的. \n***翻译：批评灾难片十分不真实是个有点傻的举动,因为人们去看灾难片的时候 并不是为了看现实生活中的真实写照."]}),

wx.setStorage({key: "232", data: ["233. It would be naïve to treat remarks made in diaries or personal letters as giving especially candid access to historical truth or even as being expressions of the writer\'s true state of mind, since the (i)_____for exaggeration and deception in those forms is virtually nonexistent. Diaries and letters are rarely sites for (ii) _______.",
{A: 'A.motivation',B: 'B.penalty',C: 'C.tendency',D: 'D.premeditated manipulation',E: 'E.childish theatrics',F: 'F.balanced reflection',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空因果关系,没有惩罚,所以内容不一定真实,所以第一空选 B 选项.第二空根据 rarely 得知选体现真实的意思,所以选 F 选项.penalty 惩 罚,balanced reflection 公正的反映.\n***翻译： 将日记和个人信件视作极度准确的了解历史真相的方式或者作为作者真 实想法的表达的想法是十分不明智的.因为根本没有关于写作时夸张和欺骗的 惩罚,所以日记和信件很少被作为可靠的现实进行引用."]}),

wx.setStorage({key: "233", data: ["234. The author paints a rather dark picture of book publishing as a hidebound industry, one that is facing a profound change in its mode of production but is so (i)_____its past as to be (ii) _______ opportunity offered by technological changes.",
{A: 'A.alienated from',B: 'B.emboldened by',C: 'C.encumbered by',D: 'D.eager to exploit',E: 'E.unable to seize',F: 'F.forced to reconsider',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 but 得知和 facing a profound change 取反,所以第一 空选 C 选项.第二空 so as to be 是表结果,所以第二空选第一空的结果,所 以第二空选 E 选项.encumbered by 被…阻碍,unable to seize 不能抓住. \n***翻译：这个作家将书籍出版描绘成一个非常黑暗且古板的行业,一个正在面临 其生产模式的深刻改革,但是太受到过去的羁绊以至于无法抓住由技术变革带 来的机会."]}),

wx.setStorage({key: "234", data: ["235. The experimental theater company\'s members know that their performances (i)_____an audience, that they were dense and unpredictable and not always easy to digest. But none of the techniques used would be (ii)_____anyone with an interest in music or films. Indeed, they would seem strange only to people who expected to see traditionally crafted plays. The actors therefore felt that theater critics\' derisive commentary showed only that the critics (iii)_____the company\'s work.",
{A: 'A.made demands on',B: 'B.had to command',C: 'C.were sure to please',D: 'D.contemplated by',E: 'E.alien to',F: 'F.intuitive for',G: 'G.lambasted',H: 'H.exploited',I: 'I.misunderstood'},
"###解析：第一空根据 dense, unpredictable 和 not easy to digest 说明表演 对观众要求很高,所以第一空选 A 选项,第二空转折,尽管要求高,但对于那 些对音乐和电影有兴趣的人不至于是怎么样的,第二空选要求高的递进词,正 确答案选 E 选项,第三空根据前面的解释得知答案,前面说只有想要看到传统 戏剧的人才会觉得奇怪,所以如果这些人去嘲笑,说明这些人是误解了这些作 品,第三空选 I 选项.make demands on 对…提出要求,alien to 与…不相 容,misunderstand 误解. \n***翻译：这个创新的戏剧公司的成员知道他们的表演对观众要求很高,因为表演 是难懂的,难以预测的而且不容易消化.但是这些运用的技巧都不会与那些对 音乐和电影有兴趣的人不相容.确实,只有那些希望看到传统技艺戏剧的人才会觉得这些表演很奇怪.因此,演员们感觉戏剧评论家嘲讽的评论只能表明这 些评论家误解了这个公司的作品."]}),

wx.setStorage({key: "235", data: ["236.  Unlike most other serious journals, which drain money from their owners, the Review has long been (i) _______. But the formula is not without its imperfections, which have grown more pronounced in recent years. The publication has always been erudite and (ii)_____but not always lively and readable. (iii) ______________, accompanied by a certain aversion to risk taking, has pervaded its pages for a long time.",
{A: 'A.lucrative',B: 'B.realistic',C: 'C.unesteemed',D: 'D.authoritative',E: 'E.animated',F: 'F.trendy',G: 'G.an originality',H: 'H.an impulsiveness',I: 'I.a staleness'},
"###解析：第一空和那些从所有者那拿钱的 journal 对比,所以第一空选 A 选 项,第二空和 erudite 并列,和 lively 和 readable 取反,所以第二空选 D 选 项最好,第三空其实就是重复 erudite and authoritative,所以第三空选 I 选项.lucrative 获利丰厚的,authoritative 专断的,staleness 陈腐. \n***翻译：不像大多数其他的严肃学术论文,它们从所有者拿那钱来运营,这个 Review 已经是获利丰厚的了.但是这个方案也不是没有不完美的地方,二者这 些不完美在这些年变得越来越明显了.出版物通常是博学的而且是专断的,但 却一点不生动也不易懂.伴随着对于冒险的反感,出版物中的陈腐气息在很长 时间都弥漫着每一页纸张."]}),

wx.setStorage({key: "236", data: ["237.  In the absence of a surface gradient, the new laws of refraction and reflection are_______the conventional law, so they represent more of an extension than a complete revolution.",
{A: 'A.inferable from',B: 'B.entailed by',C: 'C.antithetical to',D: 'D.coincident with',E: 'E.antecedent to',F: 'F.oppositional to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：so they represent more of an extension than a complete revolution 说明空格体现的是 extension,那么对应的答案是 AB 选项. inferable from 从...推论,entailed by 被…引出. \n***翻译：在不考虑梯度折射率的情况下, 新的折射和反射定律可以由传统的定律 推导出,所以这些定律算是一个拓展而不是一个彻底的改变."]}),

wx.setStorage({key: "237", data: ["238.  Flawed as it may be because it is conducted by subjective scientists, science itself has methods that help us_______our biases and talk about objective reality with some validity.",
{A: 'A.bypass',B: 'B.reduce',C: 'C.exacerbate',D: 'D.magnify',E: 'E.acknowledge',F: 'F.circumvent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：注意 as 是尽管的意思,题目的意思是尽管是由主管的科学家做的, 但是科学本身能够避开这种主观,所以答案选 AF 选项.bypass 避开, circumvent 避开. \n***翻译：尽管它是由主观的科学家进行创造,因而会有缺陷,科学本身就有方法 能够帮助我们避开我们的偏见然后生动地客观现实."]}),

wx.setStorage({key: "238", data: ["239.  In Japanese aesthetics, especially but not only in Noh, beauty contains the idea of _______: beauty must have an air of evanescence, the intimation of its own demise.",
{A: 'A.transience',B: 'B.symmetry',C: 'C.decay',D: 'D.simplicity',E: 'E.balance',F: 'F.deterioration',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格重复后文的 an air of evanescence, the intimation of its own demise,正确答案选 CF 选项,对应 intimation of its own demise. decay 衰退,deterioration 衰退,此题 A 选项也正确,但是没有同义词,所以 不选.\n***翻译：在日本美学中,尤其是但又不仅仅局限于在 N 中,美感包含颓败,美感 必须展示出稍纵即逝的气息,暗示自我的消亡."]}),

wx.setStorage({key: "239", data: ["240.  The uniquely human ability to rethink and revise our social arrangements is a weird blessing, allowing us to create systems that are as likely to_______us as to liberate us.",
{A: 'A.cheer',B: 'B.shackle',C: 'C.admonish',D: 'D.educate',E: 'E.stifle',F: 'F.enliven',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：题目关键点在 weird\"奇怪的\",说明后面要体现对立特征,其中 一个特征是 liberate,所以空格要选 liberate 的反义,所以正确答案选 BE 选 项.shackle 束缚,stifle 镇压. \n***翻译：人类能够回顾并且修正我们的社会布置的奇特能力实际上是一种奇怪的 赐福,允许我们去创造一种既能束缚我们又能赦免我们的社会系统."]}),

wx.setStorage({key: "240", data: ["241.In contrast to such sparsely populated terrestrial habitats as desert and tundra, the oceans_______ with a seemingly endless array of creatures.",
{A: 'A.teem',B: 'B.flow',C: 'C.evolve',D: 'D.roil',E: 'E.ebb',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 in contrast to 推知,空格与前文 such sparsely populated 取反,所以正确答案选 A 选项.teem with 充满. \n***翻译：和陆地上动植物数量稀少的沙漠和苔原相反,海洋看起来充满了无穷的 生物."]}),

that.setData({progress_percent:24}),wx.setStorage({key: "241", data: ["242. Barring the discovery of new letters, hidden diaries, or the like, fresh information about eminent people is hard to find because their lives have been so intensely _______.",
{A: 'A.ridiculed',B: 'B.scrutinized',C: 'C.admired',D: 'D.embellished',E: 'E.underrated',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：注意 barring 是 except 的意思,名人的新鲜事很难找到是因为这些 名人的生活都已经被一遍一遍仔细检查过了,所以正确答案选 B 选项. scrutinize 仔细检查. \n***翻译：除了新的信件,隐藏的日记或者类似的东西之外,关于杰出人物的新鲜 的信息都是很难去发现的,因为他们的生活已经极度地被仔细发掘过了."]}),

wx.setStorage({key: "242", data: ["243. Recent scholarship has questioned the (i)_____of tropical forests around the world. Archaeologists have shown, for example, that the largest contiguous tract of what was thought to be virgin rain forest in the southern Amazon had been transformed into a cultural parkland before European contact, and many of the forest islands in West Africa\'s savanna forest transition zone are (ii)_____as well.",
{A: 'A.diversity',B: 'B.naturalness',C: 'C.sustainability',D: 'D.isolated',E: 'E.endangered',F: 'F.anthropogenic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面的例子中 virgin rain forest 变成了 cultural parkland,说 明第一空质疑的就是 virgin,所以第一空选 B 选项.第二空根据 as well 推出 第二空要选前面的同义,所以第二空选 F 选项.naturalness 自然, anthropogenic 人为的. \n***翻译：最近的学术研究质疑了世界上热带森林的天然性.比如,考古学家表示 最大片连绵不断的南亚马逊的原始热带雨林在欧洲人接触之前其实就已经被变 成了一个文化园地,并且许多西非的亚热带稀树草原森林过渡带的森林岛屿也 是人为的."]}),

wx.setStorage({key: "243", data: ["244. A (i)        to disseminate the vast scientific knowledge of our time to nonscientists shows real (ii) the magnificent achievement humanity is capable of, like allowing a great work of art to molder in a warehouse.",
{A: 'A.triumph',B: 'B.failure',C: 'C.diffusion',D: 'D.indifference to',E: 'E.enthusiasm for',F: 'F.glory of',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：like allowing a great work of art to molder in a warehouse 说明后面对 achievement 是一种负面的态度,所以第二空选 D 选项,第一空根 据第二空倒推得知也应该是负评价,所以第一空选 B 选项.failure 失败, indifference 冷漠. \n***翻译：将大量我们这个时代的科学知识传播给不是科学家的大众的失败, 显示 了对于人类能取得的伟大成就真正的冷漠, 就像听任一件伟大的艺术品在仓库 中腐烂一样."]}),

wx.setStorage({key: "244", data: ["245. Cultures can shape attitudes and beliefs in ways that (i)_____conscious awareness or control; in other words, cultural orientations may develop form processes that do not entail (ii) _______ participation, and cultures may pervade subtle psychological dynamics in ways that individuals may not be able to (iii) _______. Thus, theories and tools developed to study implicit cognition may increase our understanding of the complex interplay between culture and individuals.",
{A: 'A.operate outside of',B: 'B.tend to facilitate',C: 'C.may not alter',D: 'D.active',E: 'E.random',F: 'F.rote',G: 'G.report',H: 'H.maintain',I: 'I.condone'},
"###解析：in other words 说明分号前后两个句子是同义重复,不一定需要参 与也就是说可以在外部进行,所以第一空选 A 选项,第二空看搭配,三个选项 只有 active 合适,第二空选 D 选项,第三空对应点在 implicit 上,既然是 implict,说明个人是无法去表达出来的,所以第三空选 G 选项. \n***翻译：文化能够通过在自觉意识或控制之外运作的方式来塑造态度和信仰.换 句话说,文化方向能够形成形式过程(这种过程不一定要积极的参与)而且文 化能够用个体可能不能报告的方式来弥漫不明显的心理动态.因此,为研究内 隐认知而形成的理论和工具可能会增加我们对于文化和个体之间复杂的相互作 用的理解."]}),

wx.setStorage({key: "245", data: ["246.  Publisher, publicist, and broadcasters love anniversaries, those occasions when historical events become (i)_____in (ii)_____culture of celebration. On such occasions patriotic sentiment and national pride wrapped in the panoply of history to manufacture a mythical past that is serviceable for public (iii) _______.",
{A: 'A.elusive moments',B: 'B.marketable artifacts',C: 'C.raging controversies',D: 'D.an authentic',E: 'E.a commercial',F: 'F.an elitist',G: 'G.consumption',H: 'H.scrutiny',I: 'I.censure'},
"###解析：三空联立,主要说的是这些纪念日现在都被用于商业目的,所以三空 取同即可,答案 BEG 选项.marketable artifact 有市场的人工作品, commercial 商业化的,consumption 消费. \n***翻译：出版人,推介人员和播音员都喜欢纪念日,这些历史事件的特别时刻在 商业化的文化庆祝中变成一种有市场的人工产品.在这些时刻爱国情感和国家 的骄傲包裹在华丽的历史服饰之下,用来生产可用于公众消费的神秘过去."]}),

wx.setStorage({key: "246", data: ["247.  The Chavez Pass archaeological site was initially interpreted as indicative of_______society, since it was thought to have been at the center of a cluster of smaller, contemporary settlements that it presumably controlled.",
{A: 'A.an expansionist',B: 'B.a hierarchical',C: 'C.an urban',D: 'D.a heterogeneous',E: 'E.a diverse',F: 'F.a stratified',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：at the center of a cluster of smaller, contemporary settlements that it presumably controlled 说明这里的 site 是处于中心并 且通知外围,体现的是一种\"分层\"的感觉,正确答案选 BF 选项. hierarchical 分等级的,stratified 分阶层的.\n***翻译： CP 考古学网站一开始被理解为等级制度社会的一种象征.因为它本身 被视为在它完全统治的一群规模较小的当代定居点的中心."]}),

wx.setStorage({key: "247", data: ["248.  Although the insistence on balancing spending against tax revenues has contributed to the economy\'s stagnation, unfortunately, the government does not seem likely to   this rigid policy.",
{A: 'A.initiate',B: 'B.persist in',C: 'C.publicize',D: 'D.repudiate',E: 'E.continue',F: 'F.recant',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：句子的主要意思是\"尽管坚持前面的政策不好,但是政府没有取消这 个政策\",正确答案选 DF 选项.repudiate 拒绝履行,recant 宣布放弃. \n***翻译：尽管坚持平衡开支与税收导致了经济停滞,不幸的是,政府好像并不打 算取消这个政策."]}),

wx.setStorage({key: "248", data: ["249.  Although its director that the movie uses a documentary approach in portraying the famous sit-down strike, in practice its characters are heavily fictionalized and fall into familiar Hollywood types.",
{A: 'A.asserts',B: 'B.concedes',C: 'C.guarantees',D: 'D.disputes',E: 'E.grants',F: 'F.maintains',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后转折关系,意思是说\"尽管声称这个电影是写实的,但实际上是 虚构的\",正确答案选 AF 选项.assert 断言,maintain 断言,注意此题考查 了 maintain 熟词僻意.\n***翻译： 尽管这个导演坚称这个电影在描述非常著名的一次静坐罢工时是写实 的,但实际上其中的演员都用熟悉的好莱坞式表演严重地虚构了其中的人物."]}),

wx.setStorage({key: "249", data: ["250.  For all the_______the new CEO has received from the press recently, her staff have a decidedly less rosy view of her.",
{A: 'A.encomiums',B: 'B.tributes',C: 'C.evaluations',D: 'D.critiques',E: 'E.attention',F: 'F.publicity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：注意 for all=despite,所以这里是让步,尽管 CEO 受到了出版社 的表扬,但是员工对他不怎么看好,正确答案选 AB 选项.\n***翻译：encomium 赞美, tribute 赞扬."]}),

wx.setStorage({key: "250", data: ["251.Scientists have argued not only that the chains of atoms called ladder compounds have  _______ theoretical interest but also that studies of such systems can lead to important practical applications.",
{A: 'A.limited',B: 'B.dubious',C: 'C.superfluous',D: 'D.unidimensional',E: 'E.intrinsic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 not only 和 but also 得知前后关系是并列,后面的核心意思是 important practical applications,所以空格选 important 的同义,正确答 案选 E 选项.intrinsic 固有的,真正的. \n***翻译：科学家们认为不仅是所谓梯状结构化合物的原子的链本身具有理论价 值,对这种系统的研究也有重要的实际应用."]}),

that.setData({progress_percent:25}),wx.setStorage({key: "251", data: ["252. Some novelists immodestly idealized and exaggerated the significance of their work, but others,_______ to exalt the role of the writer, question a transcendent view of the art.",
{A: 'A.averring',B: 'B.declining',C: 'C.seeking',D: 'D.feigning',E: 'E.avowing',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面的人是 idealized and exaggerated,but 转折,所以后面的人 要取反,而且根据 question 这个动词也可以推出,所以正确答案选 B 选项. decline 拒绝.\n***翻译：一些小说家不谦虚地美化和夸大他们功劳的重要性, 但另一些拒绝赞扬 作家的作用的小说家质疑艺术的超越性观点."]}),

wx.setStorage({key: "252", data: ["253. In her works, she (i)_____confidence. She gets excessively (ii)_____to authorities, even when rejecting their views.",
{A: 'A.inspire',B: 'B.exudes',C: 'C.lacks',D: 'D.pugnacious',E: 'E.deferential',F: 'F.condescending',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 even when rejecting their views 入手,寿命第二空选 reject 的反义词,所以第二空选 E 选项,再从第二空倒推第一空,服从权威说明缺乏 自信,第一空选 C 选项.lack 缺乏,deferential 顺从的. \n***翻译：在她的作品中,她缺乏自信.即使是在反对权威们的观点时,她也对他 们过于顺从."]}),

wx.setStorage({key: "253", data: ["254. The trade in scientific literature in nineteenth-century Germany was so robust that publisher constantly worried about (i)_____of new titles, an anxiety that gave even relatively undistinguished authors, who made their living writing technical treatises, (ii) _______.",
{A: 'A.prices',B: 'B.supplies',C: 'C.embargoes',D: 'D.limited public relevance',E: 'E.enviable scholarly credentials',F: 'F.strong bargaining positions',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因为交易太活跃以至于出版社担心供给不足,既然这是一种出版社的 焦虑,那么对于作家来说就是一个好事,这样就可以和出版社讨价还价了,正 确答案选 BF 选项.supply 供给,strong bargaining position 强势的讨价还 价的位置. \n***翻译：在十九世纪的德国,科学文献的贸易非常活跃,以至于出版商一直担心 新出版物的供应,这种焦虑给了甚至比较平庸的靠写科技论文为生的作家很强 的谈判地位."]}),

wx.setStorage({key: "254", data: ["255. laws protecting intellectual property are intended to stimulate creativity, yet some forms of creative work have never enjoyed legal protection-a situation that ought to be of great interest. If we see certain forms of creative endeavor (i)_____as a result of uncontrolled copying, we might decide to (ii)_____intellectual property law. Conversely, if unprotected creative work (iii)_____in the absence of legal rules against copying, we would do well to know how such flourishing is sustained.",
{A: 'A.languishing',B: 'B.proliferating',C: 'C.diversifying',D: 'D.jettison',E: 'E.extend',F: 'F.relax',G: 'G.declines in originality',H: 'H.manages to thrive',I: 'I.openly invites imitation'},
"###解析：uncontrolled copying 会对 creative endeavor 产生负面的影响, 所以第一空选 A 选项,第二空根据前面的条件来推,前面说会产生负面影响, 所以现在必须有这种法律,所以第二空选 E 选项,第三空同义重复 such flourishing,所以正确答案选 H 选项.languish 失去活力,extend 延伸, manage to thrive 成功繁荣. \n***翻译：保护脑力财富的法律想要激励创新,然而一些形式的创新作品从来没有 享受到法律的保护,这是一个应当引起关注的事情.如果我们看到某些创新的 努力因为不受控制的盗版而失去活力的话,我们可能会决定扩展脑力财富法 律.相反,如果没有受到保护的创新作品在缺乏防止盗版的法律中成功繁荣的 话,我们应当努力地去知道这种繁荣该如何维持."]}),

wx.setStorage({key: "255", data: ["256.  The slow pace of job creation was without precedent for the period of recovery from a recession, but the conditions that conspired to cause the recession were also (i) _______. The stock market declined sharply, and rampant business investment slumped. Then an ensuing spate of scandals (ii)_____public trust in the way companies were run. And yet, despite these powerful (iii)_____to growth, the recession proved surprisingly mild.",
{A: 'A.heartening',B: 'B.atypical',C: 'C.ambiguous',D: 'D.weakened',E: 'E.illuminated',F: 'F.consolidated',G: 'G.counterforces',H: 'H.stimulants',I: 'I.concomitants'},
"###解析：第一空根据 also 得知取 without precedent 的同义,所以第一空选 B 选项,第二空 scandals\"丑闻\"对于公众信任必然是削弱,所以第二空选 D 选项,第三空根据 these 得知取前文的重复内容,所以第三空选 G 选项. atypical 反常的,weaken 削弱,counterforce 反作用力. \n***翻译：如此缓慢的工作创造机会在衰退恢复期并没有先例,但是能够导致衰退 的条件同样是反常的.股票市场急剧衰退,而且疯长的商业投资骤降.然后紧 随而至的大量丑闻破坏了公众对于公司运行方式的信任.然而,尽管这些强大 抑制成长的反作用力,衰退还是让人惊讶的温和的."]}),

wx.setStorage({key: "256", data: ["257.  A cure for the common cold has been so elusive that it has become a modern symbol of _______.",
{A: 'A.danger',B: 'B.futility',C: 'C.unease',D: 'D.pointlessness',E: 'E.sloth',F: 'F.apathy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：常见感冒的治疗方法找不到,所以宣召这种治疗方式变为了无意义的 事情,正确答案选 BD 选项.futility 无效,pointlessness 无意义. \n***翻译：针对常见感冒的治疗实在是太难以捉摸,以至于它变成了一个无意义的 象征."]}),

wx.setStorage({key: "257", data: ["258.  The dictator\'s gleaming military uniform and imperial paraphernalia sharply contrast with the_______fashion favored by most other contemporary political leaders.",
{A: 'A.unostentatious',B: 'B.modest',C: 'C.august',D: 'D.majestic',E: 'E.formal',F: 'F.casual',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：contrast with 得知前后特征取反,前面特征是 gleaming 和 imperial,所以后面答案选 AB 选项.unostentatious 不夸耀的,modest 简朴 的. \n***翻译：这个独裁者闪闪发光的军装还有随身用具和大多数其他喜爱朴素的现代 政治领导人形成了鲜明的对比."]}),

wx.setStorage({key: "258", data: ["259.  If giant X-ray flares churn circumstellar disks enough to keep newborn planets, such as Earth once was, from spiraling into their suns, it would be an ironic twist on our conception of X-ray flares as _______.",
{A: 'A.dangerous',B: 'B.predictable',C: 'C.ancient',D: 'D.ephemeral',E: 'E.perilous',F: 'F.foreseeable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面描述了 X 射线耀斑对于行星的好处,所以后面的讽刺必然就是我 们把这种 X 射线耀斑当成坏事,所以正确答案选 AE 选项.dangerous 危险的, perilous 危险的.\n***翻译：如果 X 射线耀斑搅动拱星盘足够到让新产生的行星(例如地球曾经一 样)不会卷进它们的恒星的话,那么 X 射线耀斑被当成危险的就是一件讽刺的 事."]}),

wx.setStorage({key: "259", data: ["260.  Not only was this writer content to leave the reading public in the dark, she seems to have_______ the role of trickster, seeding her works with apparent clues that led nowhere.",
{A: 'A.rejected',B: 'B.disdained',C: 'C.relished',D: 'D.participated in',E: 'E.delighted in',F: 'F.developed',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：不仅满足,还享受这个过程,递进关系,选 CE 选项.relish 享 受,delight in 享受. \n***翻译：这个作者不仅满足于这本书让公众摸不着头脑,她似乎还因为自己骗子 的角色而感到开心,将她的作品中提供了大量的明显却毫无意义的证据."]}),

wx.setStorage({key: "260", data: ["261.Though many avant-garde writers_______traditional distinctions among literary categories, combining elements of biography and fiction, prose and poetry, this fusion of forms has been slow to catch on with publishers.",
{A: 'A.flout',B: 'B.presuppose',C: 'C.exploit',D: 'D.imitate',E: 'E.illuminate',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：avant-garde 的特征是 combining,这和 traditional distinction 是对立关系,所以空格要选一个体现对立的意思的词,正确答案选 A 选项. flout 嘲笑. \n***翻译：尽管很多先锋派作家嘲笑文学类别之间的传统不同,结合了自传,虚构 小说,散文和诗歌的所有元素,这个奇怪的结合格式一直不被出版人认可."]}),

that.setData({progress_percent:26}),wx.setStorage({key: "261", data: ["262. By pointing out the self-serving nature of the governor\'s motives for supporting the newhealth care policy, the columnist implied that the governor\'s idealistic-sounding explanation of her position on the issue was almost certainty _______.",
{A: 'A.impractical',B: 'B.derivative',C: 'C.simplistic',D: 'D.disingenuous',E: 'E.ineffectual',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：self-serving nature 对应空格,而且从 idealistic-sounding 也可 以推出空格要选一个体现\"不真实\"的意思的词,正确答案选 D 选项. disingenuous 不真诚的. \n***翻译：通过指出那些自私自利的政客想要扶持新健康护理政策的动机,这个专 栏作家暗示这个政客所给出的对于她的意见的十分理想的解释是完全虚假的."]}),

wx.setStorage({key: "262", data: ["263. The documentation of Earth\'s biodiversity is complicated by the (i) taxonomists. Those experts in classifying species tent to be (ii)       North American and Europe, whereas most of the undocumented biodiversity is likely in the tropics.",
{A: 'A.uneven distribution of',B: 'B.theoretical commitments of',C: 'C.professional rivalries among',D: 'D.clustered in',E: 'E.oblivious to',F: 'F.exported from',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空要引起 complicated,而且对应后面的 classifying species,所以第一空选 A 选项.第二空对比,undocumented biodiversity is likely in the tropics 说明前面的空格填入专家的关注点,所以 D 选项最合 适.uneven distribution 不平均分布,cluster 聚集. \n***翻译：地球生物多样性的记录被分类学家不平均的分布变得更加复杂.这些分 类学家倾向于聚集在北美和欧洲,然而大部分没有被记录的生物多样性很可能 在热带地区."]}),

wx.setStorage({key: "263", data: ["264. Invention was (i)_____the work of the ancient Greek historians, whose writings were filled with long and often purely fictitious speeches by great historical figures. The animating force in historical writing was rhetoric rather than (ii) _______. Even well into the eighteenth century, not a few historians continued to understand themselves as artists, given a license to invent.",
{A: 'A.discouraged in',B: 'B.a hallmark of',C: 'C.exceptional in',D: 'D.eloquence',E: 'E.evidence',F: 'F.imagination',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：whose writings were filled with long and often purely fictitious speeches by great historical figures 说明创造是常见的事, 所以第一空选 B 选项.第二空选 rhetoric 的反义词,所以第二空选 E 选项最合 适. \n***翻译：发明是古希腊历史学家的标志,那些历史学家们的写作充满了运用古时 候历史的内容写出的冗长并且纯粹伪造的言辞.历史中有生气的力量并不是证 据而是修辞.甚至是到了十八世纪,不少历史学家仍然认为自己是艺术家,因 为他们被赋予了捏造的权利."]}),

wx.setStorage({key: "264", data: ["265. Given children\'s active fantasy lives, one might think of truthfulness as (i)_____virtue in young children, but it turns out that lying is the more (ii)_____skill. A child who is going to lie must recognize the truth, intellectually conceive of an alternate reality, and be able to convincingly sell that new reality to someone else. Therefore, lying (iii)_____cognitive development and social skills in a way that honesty simply does not.",
{A: 'A.an instinctive',B: 'B.an acquired',C: 'C.a conscious',D: 'D.advanced',E: 'E.practical',F: 'F.mundane',G: 'G.undermines',H: 'H.forgoes',I: 'I.demands'},
"###解析：鉴于孩子爱幻想的生活,真实(幻想的反义)对于孩子来说就不是天 生的,所以第一空选 B 选项,第二空 the more 得知空格要比第一空更加递进, 所以答案选 D 选项,第三空根据后文中说到撒谎比说真话更难的叙述,推出第 三空选体现\"要求\"的意思的词,所以第三空答案选 I 选项.acquired 后天 的,advanced 先进的,demand 要求. \n***翻译：鉴于孩子活跃的幻想生活,一个人可能会认为诚实对于小孩来说是一种 后天习得的美德,但是事实证明撒谎是更加先进的一个既能.想要撒谎的孩子 必须认识到什么是事实,再机智地构建一个供替换的事实,而且能够令人信服地去让人接受这个新的事实.因此,撒谎要求诚实没有具备的认知的形成和社 会技能."]}),

wx.setStorage({key: "265", data: ["266.  Traditional Vietnamese culture has long promoted the idea of gender equality. Founding myths (i)_____the equal division of labor in child care for mothers and fathers. As is often the case, however, theoretical commitments are (ii)_____actual processes. In reality, gender-based(iii)_____persists.",
{A: 'A.obscure',B: 'B.celebrate',C: 'C.countermand',D: 'D.incommensurate with',E: 'E.surpassed by',F: 'F.inspired by',G: 'G.parity',H: 'H.inclusiveness',I: 'I.stratification'},
"###解析：第一空要对应前面的 promoted,所以第一空选 B 选项,第二空要表 明现实和理论的不一致,所以第二空选 D 选项,第三空要体现男女不平等依然 存在,所以选 I 选项.celebrate 歌颂,incommensurate 不相称的, stratification 阶层化. \n***翻译：传统越南文化长期推动性别平等的理念.建国神话歌颂父母在照顾孩子 时平分劳动力.但是,理论的承诺和实际的情况不相称.实际上,基于性别的 阶层化(不平等)还是存在的."]}),

wx.setStorage({key: "266", data: ["267.  Although the biography never explicitly assesses what role the dynamic between Mr. Merrill\'s parents might have played in the development of his personality, the author offers plenty of _______.",
{A: 'A.mystification',B: 'B.elucidation',C: 'C.speculation',D: 'D.reflection',E: 'E.obfuscation',F: 'F.conjecture',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：尽管没有明确评价,但是有大量的？,所以空格要选明确评价的弱递 进词,所以正确答案选 CF 选项,整体意思就是尽管没有明确评价过,但是有大 量推测.speculation 推测,conjecture 推测. \n***翻译：尽管传记中从没明确的评定过 M 先生的父母可能在他的性格形成上扮演 的角色,这个作者给出了很多推测."]}),

wx.setStorage({key: "267", data: ["268.  There are great_______in countries\' greenhouse gas emissions, especially in per capita terms: while the United States and China are similar in aggregate emissions, United States per capita emissions are a huge multiple of China\'s.",
{A: 'A.distortions',B: 'B.disparities',C: 'C.fluctuations',D: 'D.advances',E: 'E.variances',F: 'F.vacillations',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容说明在人均排放量上,美国远大于中国,所以空格要 体现\"远大于\",所以正确答案选 BE 选项.disparity 差异,variance 不同. \n***翻译：关于国家温室气体释放有很大的不同,尤其是在人均问题上,因为美国 和中国在释放总数上很相似,但美国的人均释放量却是中国的很多倍."]}),

wx.setStorage({key: "268", data: ["269.  There is frequently a protracted time interval between the introduction of an innovative musical composition and its public acceptance; the concert-going public often spurns the_______in favor of the familiar for a prolonged period.",
{A: 'A.comprehensive',B: 'B.intricate',C: 'C.novel',D: 'D.original',E: 'E.intelligible',F: 'F.complex',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面提到最新作品被接受要有一段时间的间隔,所以后文 public spurn(拒绝)的是新出现的作品,对应的词就是 innovative,所以正确答案 选 CD 选项.novel 新颖的,original 原创的. \n***翻译：在创造的音乐作曲和公众接受之间一个经常性的漫长的时间间隔,听音 乐会的公众们会拒绝新奇的,原创的,反而很长一段时间更喜欢熟悉的音乐."]}),

wx.setStorage({key: "269", data: ["270.  The concept of the Hellenistic period in ancient history has proved useful but also _______, with scholars disagreeing on the dates when the period began and ended.",
{A: 'A.slippery',B: 'B.elusive',C: 'C.fruitless',D: 'D.deceptive',E: 'E.futile',F: 'F.compelling',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面的独立主格结构说学者们在出现和结束的时间上不能达成一 致,说明这个 period 是棘手的,所以正确答案选 AB 选项.slippery 棘手的, elusive 难以实现的. \n***翻译：希腊时期的概念在远古时期历史中被认为有用,但也是棘手的,因为学 者们在关于这个时期开始与结束时间上面的争论意见不统一."]}),

wx.setStorage({key: "270", data: ["271.In the solar system, collisions involving cosmic object are among the most_______processes shaping surfaces: images of many solar objects show a proliferation of impact craters formed throughout the past 4.5 billion years.",
{A: 'A.cataclysmic',B: 'B.pervasive',C: 'C.misleading',D: 'D.uncontrollable',E: 'E.random',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：proliferation of impact craters 说明这种活动很多,所以能对应 这种多的选项是 B 选项.pervasive 普遍的. \n***翻译：在太阳系中,宇宙物体的碰撞是最普遍的为表面塑形的过程：很多太阳 系的物体的图像都显示出了在从 45 亿年前就开始的大量增加的陨石坑."]}),

that.setData({progress_percent:27}),wx.setStorage({key: "271", data: ["272. If the study proves that bears are still endemic to the area, the proposal to introduce additional bears of the same species will probably face less opposition, since the plan would then involve_______ a historic population, not trying to build population from scratch.",
{A: 'A.reclassifying',B: 'B.augmenting',C: 'C.forestalling',D: 'D.publicizing',E: 'E.winnowing',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：注意 from scratch 是从头做起的意思,不想从头来增加数量,说明 这个计划的内容还是要增加数量,空格填入 build 的同义词,正确答案选 B 选 项.augment 增加. \n***翻译：如果这个研究证明熊仍然是这个地方土生土长的,那么关于引进其他同 类别的熊的提议就会面对少一些的反对,因为这个计划会增加历史性数量,而 并不是想要从头开始增加数量."]}),

wx.setStorage({key: "272", data: ["273. Folmer\'s book on Edith Wharton seems far removed from recent trends in literary criticism; this need not to be a fault, except that, in its title and introduction, the book (i)_____to be conversant with contemporary discourse in the field, but in its actual analysis of Wharton\'s work, it is marked by a very (ii)_____approach.",
{A: 'A.designs',B: 'B.fails',C: 'C.purports',D: 'D.old-fashioned',E: 'E.timely',F: 'F.arcane',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空通过 but 可知选 contemporary 的反义词,所以第二空选 D 选 项,第一空体现这本书最初声称的事,所以第一空选 C 选项.purport 声称(一 般是虚假的: to have the often specious appearance of being, intending, or claiming),old-fashioned 守旧的.\n***翻译：F 写的关于 EW 这个人的书看起来似乎和最近的文学批判文章风格有明显 的出入.这本来不是个错误,除了他的开头和引入.这本书声称熟悉当代这个 领域当中的论述,但是在真正分析 EW 的作品中,这个作品却有着十分过时的写 作手法."]}),

wx.setStorage({key: "273", data: ["274. The book is not comprehensive but is, instead, (i)_____in the most positive sense:(ii) _______ rather than settles.",
{A: 'A.definitive',B: 'B.provocative',C: 'C.timely',D: 'D.stipulates',E: 'E.suggests',F: 'F.disseminates',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空选 comprehensive 的反义,所以正确答案选 B 选项,第二空选 settle 的反义,所以第二空选 E 选项.provocative 挑起的(注意 provocative 除了挑衅还有挑起新事物的意思),suggest 提出建议. \n***翻译：这本书并不是综合广泛的,但是它是,相反的,能够激起人们正能量 的,是能够给人们提供建议而不是彻底解决问题."]}),

wx.setStorage({key: "274", data: ["275. Although political events in different countries were not (i)_____in the nineteen century, their interrelationship was (ii)_____compared with the present, when interdependence has become far greater: (iii)_____has ceased to be an option.",
{A: 'A.unconnected',B: 'B.trivial',C: 'C.simultaneous',D: 'D.conditional',E: 'E.superficial',F: 'F.transparent',G: 'G.isolationism',H: 'H.resilience',I: 'I.idealism'},
"###解析：interrelationship=not+空格,所以空格选 interrelationship 的反 义,正确答案选 A 选项,第三空根据 interdependence 变得 greater 得知,不 再是选择的应该是 interdependence 的反义,所以第三空选 G 选项,最后填第 二空,既然 interdependence 不再是选择了,说明现在的国家的相互联系更强 了,所以过去的相互联系比现在的相互联系更弱,所以第二空选 E 选项. unconnected 不相关的,superficial 表面的,肤浅的,isolationism 孤立主 义.\n***翻译：尽管在不同国家的政治事件在 19 世纪的时候是相互联系的,但是它们的 相互联系和当前比起来更加浅薄,当相互依赖变得越来越强的时候：孤立主义 不再是一个选择了."]}),

wx.setStorage({key: "275", data: ["276.  In adolescence, (i)_____interactions are crucial in forging a self-identity. To be sure, this process often plays out in (ii)_____as a means of defining and shoring up the sense of self. Kids will seek out like-minded companions, and spurn others who seem different. But when kept within reasonable bounds, this in-group (iii)_____generally evolves into a more mature friendship pattern.",
{A: 'A.adult',B: 'B.wide-ranging',C: 'C.peer',D: 'D.cliquish social behavior',E: 'E.dramatic changes in personality',F: 'F.heightened sociability',G: 'G.alienation',H: 'H.clustering',I: 'I.competition'},
"###解析：句中的第一空和第二空是同义关系,对应点在后文的例子 Kids will seek out like-minded companions,说明两个空格都填入 like-minded(志趣 相投的)同义,所以第一空选 C 选项,第二空选 D 选项,第三空根据 this 得知 同义重复前文的特征,所以第三空选 like-minded companions 的同义,所以选 H 选项.peer 同伴,cliquish social behavior 小集团式的社交行为, cluster 聚集. \n***翻译：在青春期,同伴交往对于建立自我认知是非常关键的.的确,这个过程 经常呈现出小集团的社交行为来作为一种定义和加固自我意识的方式.孩子会 去寻找志趣相投的伙伴,而且拒绝那些与众不同的人.但是当被局限在一个合 理的边界之内时,这个组群内部的聚集就普遍会演变成一个更加成熟的友谊."]}),

wx.setStorage({key: "276", data: ["277.  Few ideas are more_______than the notion that cultures evolve in Darwin fashion; many academics have begun writing about cultural evolution, but few treat the underlying Darwinian logic with the care it deserves.",
{A: 'A.abused',B: 'B.archaic',C: 'C.misused',D: 'D.outdated',E: 'E.divisive',F: 'F.derivative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：few treat the underlying Darwinian logic with the care it deserves 说明这个达尔文的理念本来是好的,但是大家不重视,所以这里的 few ideas 也是一样的,所以正确答案选 AC 选项.abused 错误使用,misused 误用的. \n***翻译：一些关于达尔文进化论的想法比观念更加滥用,很多学院开始写关于文 化进化论的论文,但只有一些对达尔文观点潜在的逻辑给予了它应得的重视."]}),

wx.setStorage({key: "277", data: ["278.  After many years of feeling_______by his seniors managers, Clark was becoming hopeful of advancement.",
{A: 'A.vilified',B: 'B.stymied',C: 'C.hindered',D: 'D.aggrieved',E: 'E.circumvented',F: 'F.overlooked',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：becoming hopeful of advancement 说明之前是对于 advancement 没 有希望,所以空格体现阻碍,正确答案选 BC 选项.stymie 阻碍,hinder 阻 碍.\n***翻译：在感觉被他的经理阻碍了事业发展的很多年之后,C 渐渐觉得自己的提 升变得有希望了."]}),

wx.setStorage({key: "278", data: ["279.  Williamson had a fierce commitment to achieving an accord, spending enormous amount of time trying to forge a consensus out of an often_______assembly.",
{A: 'A.apathetic',B: 'B.fractious',C: 'C.restive',D: 'D.cynical',E: 'E.compliant',F: 'F.tractable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：语义推理题,想在一群躁动不安的人群中形成一种一致.正确答案选 BC 选项.fractious 易怒的,restive 躁动不安的. \n***翻译：威廉姆逊为了实现和谐一致付出了巨大的花费,他花费了大量的时间尝 试去融合难以驾驭的人群来使他们变的和谐一致."]}),

wx.setStorage({key: "279", data: ["280.  Readers looking for another condemnation of private equity firms should look elsewhere, this book is not_______such firms.",
{A: 'A.a rant against',B: 'B.a diatribe on',C: 'C.an exculpation',D: 'D.a disquisition on',E: 'E.a vindication of',F: 'F.an argument about',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：condemnation 要找别的地方,说明这本书不是在 condemnation 这 本书,空格选 condemnation 同义,正确答案选 AB 选项.rant 痛骂,diatribe 诽谤. \n***翻译：期待看到谴责私人股本公司的读者们应该看看别的书,这本书并没有特 别针对这些公司."]}),

wx.setStorage({key: "280", data: ["281.Many readers today consider the moral sentiments expressed in the ancient writers\' work to be quite vapid, and in the seventeenth century they were similarly regarded as _______.",
{A: 'A.jejune',B: 'B.didactic',C: 'C.dogmatic',D: 'D.tendentious',E: 'E.arcane',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 similarly 可知,空格的特征和前文的特征是一致的,前面对 moral sentiments 的态度是 quite vapid,所以空格选 vapid 的同义词,正确 答案选 A 选项.jejune 枯燥乏味的. \n***翻译：许多读者今天认为古代作家的作品中表达的道德情感是很枯燥的,在 17 世纪的时候它们(指作品中表达的道德情感)同样也被认为是乏味的."]}),

that.setData({progress_percent:28}),wx.setStorage({key: "281", data: ["282. A new television documentary focuses on of the prime minister\'s defining contradiction, portraying her as a woman who cultivated an image of _______, but who liked to live grandly.",
{A: 'A.irascibility',B: 'B.abstemiousness',C: 'C.contentiousness',D: 'D.insouciance',E: 'E.surreptitiousness',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 defining contradiction 看出,空格要和后面的 who liked to live grandly 取反,所以正确答案选 B 选项.abstemiousness 节制. \n***翻译：一个新的纪录片聚焦于首相的矛盾定义,把她描绘成一个生活节制却又 活得高贵的女人."]}),

wx.setStorage({key: "282", data: ["283. The author clearly supports the causes he writes about, but he is more a narrator than (i) _______. Some say he should have included more (ii) _______, but he is wise to let the fact speak for themselves. They are complex enough to prompt many kinds of interpretation, and he would bog down the complicated tale if he tried to adjudicate all of their competing claims.",
{A: 'A.a reporter',B: 'B.an advocate',C: 'C.an adversary',D: 'D.statistical data',E: 'E.analysis of events',F: 'F.detailed description',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应 supports,尽管支持,但是他更多的是叙述者而不是支 持者,第二空根据后面 but 取反,but 后面说他让事件自己说话,说明他本应 该(should have included)有更多的分析(主观的东西).advocate 支持 者,analysis of events 对于事件的分析. \n***翻译：这个作者明确地指出他所写出的原因,但他更像是一个叙述者而不是事 件的支持者.一些人说他应该包括更多的事件分析进去,但他足够明智能够让 事件自己为自己说话,他们足够复杂以至于不能引发任何形式的解释,并且如 果他尝试去解释其中复杂的说法的话,将使他自己如同陷入泥淖一般动弹不 得."]}),

wx.setStorage({key: "283", data: ["284. The controversy about Alexander the Great\'s personality derives from the fact that our sources are (i) _______, all eyewitness accounts having perished. What remains is, at best, (ii)_____(one history, for instance is based largely on the now-lost memoirs of Alexander\'s alleged half-brother, Ptolemy) and at worst, highly unreliable.",
{A: 'A.outdated',B: 'B.inadequate',C: 'C.abstruse',D: 'D.secondhand',E: 'E.repetitious',F: 'F.deceptive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 all eyewitness accounts having perished 可以得知选 体现不足的意思,答案选 B 选项.剩下的东西说得好听点可以算间接证据(括 号后面的解释也说明是间接的),所以第二空选 D 选项.inadequate 不充足 的,secondhand 间接的. \n***翻译：关于亚历山大大帝的性格的争论是源自于我们得到的资源的不充分,所 有亲眼所见的证据都已经灭亡了.唯独剩下来的,最好的情况,是二手的(比 方说,是所谓的亚历山大的同父异母兄弟的模糊回忆),最差的情况,是极其 不可信的."]}),

wx.setStorage({key: "284", data: ["285. One sometimes hears that Marco Polo introduced pasta to the Western world, having encountered it in China. This durable myth, which (i)_____that nothing should have been known of pasta in Italy until 1295, when Marco Polo returned from the Far East, can easily be (ii)_____by pointing out that there are Italian references to pasta that (iii) _______.",
{A: 'A.requires',B: 'B.demonstrates',C: 'C.symbolizes',D: 'D.augmented',E: 'E.debunked',F: 'F.traced',G: 'G.praise its virtues',H: 'H.can be authenticated',I: 'I.predate that event'},
"###解析：如果意大利面食是从中国传入的话,那么在 1295 年之前的意大利就 要求没有任何关于意大利面食的信息,所以第一空选 A 选项,第二三空联系, 只有 EI 选项合理,表达的意思是说这个说法被拆穿了,因为发现存在早于那个 时间关于意大利面食的参考文献.require 要求,debunked 拆穿的,predate that event 在那个事件之前. \n***翻译：人们有时候会听说是马可波罗将意大利面食引入西方的,因为在中国碰 到过这种面食.这个长期存在的故事要求在 1295 年(马可波罗从远东返回意大利的时间)之前没有任何关于意大利面食的信息,但是这个故事被拆穿了,因 为有人指出在那个事件之前就已经存在关于意大利面食的参考文献了."]}),

wx.setStorage({key: "285", data: ["286.  For almost two centuries, the German island of Sylt has offered various therapies for every conceivable (i)   from broken bones to liver complaints. The local mud, saltwater, thermal pools, and spas have been deemed (ii)           by the German medical system, which (iii)  some of these treatments. Consequently, the treatments are widely used.",
{A: 'A.malady',B: 'B.indiscretion',C: 'C.prognosis',D: 'D.healthful',E: 'E.suspect',F: 'F.innocuous',G: 'G.doubts',H: 'H.denies',I: 'I.funds'},
"###解析：第一空根据后文的 from broken bones to liver complaints 得知空 格需要填入\"疾病\",所以第一空选 A 选项,第二空对应前文的 various therapies,所以第二空选 D 选项,第三空根据后文说 Consequently, the treatments are widely used,说明这种治疗方式使用广泛,所以第三空选 I 选项,I 选项说出了这种治疗方法广泛使用的原因.malady 疾病,healthful 健康的,fund 为…提供资金.\n***翻译：几乎整整两个世纪,德国的 S 这个岛屿为每一种可以想到的疾病提供各 种各样的治疗,包括受损骨头到肝病.当地的泥土,盐水,温泉和矿泉已经被 德国医疗系统认为是有益健康的,而这个系统正是为这些治疗提供资金的.所 以,这些治疗最终广泛被使用."]}),

wx.setStorage({key: "286", data: ["287.  His premiership, seemingly cast-iron year ago, is now so vulnerable that even a good day at the office does no more than buy him a few weeks of_______from rebels within his own party.",
{A: 'A.controversy',B: 'B.reproach',C: 'C.respite',D: 'D.relief',E: 'E.blame',F: 'F.deference',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：总理的职位很脆弱,所以在办公室的一天只不过是换来反对者的消 停,正确答案选 CD 选项.respite 喘息,relief 解脱. \n***翻译：他在一年前还确定无疑的总理职位现在看来是如此的脆弱,以至于在办 公室良好的一天也只不过是给他换来了自己党内反对派的消停而已."]}),

wx.setStorage({key: "287", data: ["288.  Even before she went to art school, Veronica found the standard design categories _______: she didn\'t understand why designing buildings and designing tables should require different sensibilities.",
{A: 'A.provocative',B: 'B.limiting',C: 'C.stimulating',D: 'D.confusing',E: 'E.confining',F: 'F.exhilarating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：她不理解为什么这两种东西的设计需要不同的鉴赏力,说明她对于设 计分类的知识非常有限.limiting 有限的,confining 受限的. \n***翻译：甚至是在她去艺术学校之前,V 还发现标准的设计门类有些狭窄,她不 能明白为什么设计建筑和设计桌子需要用不同的鉴赏力."]}),

wx.setStorage({key: "288", data: ["289.  The author engages this issue from diverse perspectives, supports his arguments with many examples, and manages to avoid antagonizing others in dealing with a very_______subject.",
{A: 'A.contentious',B: 'B.pedestrian',C: 'C.controversial',D: 'D.perplexing',E: 'E.mundane',F: 'F.intriguing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应前面的 antagonizing others,能够引起敌对,说明空格要 选 antagonize 同义词,正确答案选 AC 选项.contentious 好争论的, controversial 好争辩的. \n***翻译：这个作者从各种角度考虑这个问题,用很多的例子支持他的论点,并且 规避对有争议的问题的误入歧途."]}),

wx.setStorage({key: "289", data: ["290.  Space is often referred to as the final frontier, as the only realm of which humankind has still to gain substantial understanding, yet the ocean is also another vast area about which our knowledge is _______.",
{A: 'A.erroneous',B: 'B.confusing',C: 'C.frustrating',D: 'D.rudimentary',E: 'E.delusive',F: 'F.sketchy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：space 的特征是 gain substantial understanding,通过 yet 得知 ocean 的特征是 substantial 的反义词,正确答案选 DF 选项.rudimentary 初 级的,sketchy 粗略的. \n***翻译：宇宙通常被称为最后的边疆,因为那是人类还没有大量了解的唯一领 域,然而,海洋领域是另一个知识面广阔但我们所了解的内容却只是其中初级 的."]}),

wx.setStorage({key: "290", data: ["291.The stories in Yiyun Li\'s recent collection are distinctive particularly for the strong contrast between their emotional intensity and their consistently_______tone.",
{A: 'A.affable',B: 'B.ebullient',C: 'C.measured',D: 'D.irascible',E: 'E.overwrought',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 contrast 推知空格和 emotional intensity 取反,\"情感强 烈\"的反义是 C 选项\"慎重的\",注意 A 选项是\"和蔼可亲\"的意思,不能和 emotional intensity 取反. \n***翻译：李依云最近的故事集中的故事是十分不同的,特别是在情感强成都和持 续慎重的语言之间形成的强烈反差."]}),

that.setData({progress_percent:29}),wx.setStorage({key: "291", data: ["292. The paleontologist examined the problem afresh, believing that the accepted classification_______ the essential continuity of the specimens by making specious distinctions among them.",
{A: 'A.disproved',B: 'B.belied',C: 'C.conflated',D: 'D.divulged',E: 'E.relaxed',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：by making specious distinctions among them 表明空格要填入一 个词体现\"没有表现出\"的意思,所以正确选项是 B 选项.belie 掩饰,掩 盖.注意 disprove 只有\"证明错误\"的意思,所以不能选. \n***翻译：古生物学家们重新检查了一遍这个问题,坚持相信那个被广泛接受的分 类掩饰了样本中最重要的连续性,因为在这些样本之间做了不真实的区分."]}),

wx.setStorage({key: "292", data: ["293. It would be naïve to treat remarks made in diaries or personal letters as giving especially candid access to historical truth or even as being expressions of the writer\'s true state of mind, since the (i)_____for exaggeration and deception in those forms is virtually nonexistent. Diaries and letters are rarely sites for (ii) _______.",
{A: 'A.motivation',B: 'B.penalty',C: 'C.tendency',D: 'D.premeditated manipulation',E: 'E.childish theatrics',F: 'F.balanced reflection',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空因果关系,没有惩罚,所以内容不一定真实,所以第一空选 B 选项.第二空根据 rarely 得知选体现真实的意思,所以选 F 选项.penalty 惩 罚,balanced reflection 公正的反映.\n***翻译： 将日记和个人信件视作极度准确的了解历史真相的方式或者作为作者真 实想法的表达的想法是十分不明智的.因为根本没有关于写作时夸张和欺骗的 惩罚,所以日记和信件很少被作为可靠的现实进行引用."]}),

wx.setStorage({key: "293", data: ["294. Making loans and fighting poverty are normally two of the least glamorous pursuits around, but remarkably enough put the two together, and you have an economic innovation that has become not just (i)           but downright (ii)          .",
{A: 'A.popular',B: 'B.pointless',C: 'C.dangerous',D: 'D.chic',E: 'E.unfathomable',F: 'F.sensible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 not just…but (also)得知两个空格是递进关系,所以正确答 案选 AD 选项最合适.popular 受欢迎的,chic 时髦的. \n***翻译：借贷和消除贫困是两个最不光彩的两件事情,但是将这两个东西结合起 来就会有一个既受欢迎又特时髦的经济创新."]}),

wx.setStorage({key: "294", data: ["295. Although Thaler employs an innovative mode of analysis, his study offers yet another examination of quite (i)_____ground-namely, the culture ideology of Norwegian-American preservationist writers in the early twentieth century. The history, literature, and changing internal dynamics of the Norwegian subculture in America constitute a particularly well-studied area. Anyone familiar with the authoritative work of scholars in the field will (ii)_____little in Thaler\'s study that is (iii) _______.",
{A: 'A.unfamiliar',B: 'B.well-worked',C: 'C.fruitful',D: 'D.find',E: 'E.understand',F: 'F.reveal',G: 'G.accurate',H: 'H.new',I: 'I.recognizable'},
"###解析：第一空对应后文的 particularly well-studied,所以第一空选 B 选 项,因为 T 这次运用了创新的东西,所以熟悉以前的风格的人在\"新\"的作品 中几乎\"找不到\"需要的内容,第三空格对应前文的 innovative,第三空选 H 选项,第二空选 D 选项.well-worked 良好的,精细研究的,find 发现,new 新颖的.\n***翻译：尽管 T 采用一种创新的分析方法,他的研究却提供了另一种充分研究的 领域,那就是二十世纪早期作家中 norwegian－american 保护主义的文化意识 形态.那段历史,文学,还有一直改变的关于 norwegian 亚文化群的内在变 化,在美国形成了一种特定的,并且广为研究的领域.任何熟悉这个领域当中 的权威学者的作品的人,都会发现在 T 十分新颖的研究中几乎找不到专断的内 容."]}),

wx.setStorage({key: "295", data: ["296.  Biologists have little (i)_____drawing the link between the success of humanity and human(ii) _______. Indeed, many biologists claim that this attribute, the ability to (iii) _______, or, to put it more sharply, to make individuals subordinate their self-interest to the needs of the group, lies at the root of human achievement.",
{A: 'A.consensus regarding',B: 'B.compunction about',C: 'C.justification for',D: 'D.resilience',E: 'E.sociability',F: 'F.uniqueness',G: 'G.reflect',H: 'H.communicate',I: 'I.cooperate'},
"###解析：第二空和第三空是同义词,重复 make individuals subordinate their self-interest to the needs of the group,所以第二空选 E 选项,第 三空选 I 选项,根据 Indeed 这个词的语气发现生物学家在人类成功和人类合作 之间得出的联系确实是存在的,所以生物学家从来没有后悔过做出了这样的联 系,所以第一空答案选 B 选项. \n***翻译：生物学家几乎不会后悔在人类成功和人类交际之间得出的联系.确实, 很多生物学家都说这种能力,也就是合作的能力,或者更加准确地说就是使个 人把自己的利益服从于团体的需求的这种能力,是人类伟大成就的根基."]}),

wx.setStorage({key: "296", data: ["297.  Culture, like speech, is primarily a human faculty, although both functions may exist in a more_______ form in lesser primates.",
{A: 'A.indispensable',B: 'B.crucial',C: 'C.primitive',D: 'D.intelligible',E: 'E.recognizable',F: 'F.rudimentary',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：让步关系,前面说主要是人类的能力,后文说在一些灵长类动物中也 会以一种更加原始的方式出现,也就是说人类和灵长类动物都有文化和演讲, 但是灵长类动物的文化和演讲更原始(初级),正确答案选 CF 选项. primitive 原始的,rudimentary 原始的. \n***翻译：文化,就像演讲一样,主要是人类的能力,尽管同样的功能能够以一种 更原始的形式出现于一小部分灵长类动物中."]}),

wx.setStorage({key: "297", data: ["298.  Tompkinson\'s prior donations to the university, while very generous, failed to_______the magnitude of her latest gift.",
{A: 'A.compensate for',B: 'B.portend',C: 'C.clarify',D: 'D.predict',E: 'E.offset',F: 'F.undermine',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：尽管已经很慷慨了,但是没有料到后来更加慷慨的捐赠,弄个对应点 在于 latest,答案选 BD 选项.portend 预示,predict 预言.\n***翻译：T 之前给大学的捐赠,虽然是慷慨,但实际上没能预计到最近她的捐赠 的礼物的重量级."]}),

wx.setStorage({key: "298", data: ["299.  The first images of Jupiter\'s moon Callisto show bright regions of material, as if older and darker ice had slid downhill and exposed the_______ice underneath.",
{A: 'A.ancient',B: 'B.murky',C: 'C.compact',D: 'D.pristine',E: 'E.grimy',F: 'F.unblemished',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：older and darker ice had slid downhill 之后肯定会露出没有被 勿扰的 ice underneath,所以答案选 DF 选项.pristine 崭新的,原始的, unblemished 无瑕疵的. \n***翻译：第一张关于火星的卫星的木卫四的照片显示出了材料中的光亮的区域, 就像是更苍老更黑暗的冰滑下山坡,并且暴露了底下原始的冰层."]}),

wx.setStorage({key: "299", data: ["300.  Mortoris is dour and _______, seemingly incapable of smiling, let alone laughing.",
{A: 'A.mirthful',B: 'B.jovial',C: 'C.intelligent',D: 'D.tepid',E: 'E.lugubrious',F: 'F.gloomy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：seemingly incapable of smiling, let alone laughing 说明这个 人不苟言笑,正确答案选 EF 选项.lugubrious 悲伤的,gloomy 阴暗的. \n***翻译：M 是严厉而且阴沉的,看上去不会微笑,更不用说是大笑了."]}),

wx.setStorage({key: "300", data: ["301.The era\'s examples of_______that are cited by the author can be balanced in part by certain examples of dissent during the same period.",
{A: 'A.diversity',B: 'B.authoritarianism',C: 'C.forbearance',D: 'D.volatility',E: 'E.lucidity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：can be balanced 得知前后应该是反义,后面的核心是 dissent 异 议,所以前面的空格选一个异议的反义词,正确答案选 B 选项. authoritarianism 独裁主义(也就是不能存在异议). \n***翻译：被作者引用的该时代的专制主义的例子中有一部分可以被这同一时期的 某些异议的例子中和."]}),

that.setData({progress_percent:30}),wx.setStorage({key: "301", data: ["302. It seems foolish to refuse the offer of an expedient that is both so_______success and so difficult to create them absent.",
{A: 'A.reminiscent of',B: 'B.lacking in',C: 'C.distinct from',D: 'D.indispensable to',E: 'E.inimical to',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：so difficult to create them absent(没他们不行)与空格并列, 所以空格体现不可或缺,正确答案选 D 选项. \n***翻译：拒绝一个既对成功不可或缺又很难没有它的权宜之计似乎是愚蠢的."]}),

wx.setStorage({key: "302", data: ["303. The genius of the scientific method is that it (i)_____the dictum of Aristotle that the goal of science is knowledge of the ultimate cause of things. True science, we now know, advances human knowledge by (ii)_____ultimate causes and focusing instead on the testing of empirical hypotheses.",
{A: 'A.qualifies',B: 'B.jettisons',C: 'C.affirms',D: 'D.ignoring',E: 'E.predicting',F: 'F.confirming',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 focusing instead on 看出第二空选 focus on 的反义,所以第二 空选 D 选项,第一空和第二空是取同(dictum of Aristotle=ultimate causes),所以第一空选 B 选项.jettison 放弃,ignore 忽略. \n***翻译：科学方法的精神是它摒弃了阿里仕多德认为科学的目标就是为了明白事 物的根本原因.真实的科学,就像我们认为的那样,丰富了人们的知识,通过 忽视事物背后的原因,反而重视完全根据经验得来的假说的试验."]}),

wx.setStorage({key: "303", data: ["304. The meandering journey across the soundscape of the Internet can be (i) _______. Listening to music in this medium often generates anxiety fulfillment: no sooner has one experience begun than the thought of what else is out there intrudes. Putting an old-fashioned disk and letting it play to the end restores a measure of (ii) _______.",
{A: 'A.liberating',B: 'B.taxing',C: 'C.educational',D: 'D.choice',E: 'E.boredom',F: 'F.sanity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 no sooner has one experience begun than the thought of what else is out there intrudes 体现出这个 journey 很费劲很紧张,第一 空选 B 选项,第二空 old-fashioned disk 和 Internet 是对立的事物,所以第 二空要体现 taxing 的反义词,所以 F 选项合适.taxing 费力的,sanity 神志 清醒. \n***翻译：穿过网络音响范围的十分曲折的旅程可能十分费力,在这个介质中聆听 音乐经常会被焦虑充满,没过多久人们就会想到有什么其他的东西开始侵入. 放置一张过时的碟子并且任由它播放到最后结尾能使我们恢复理智."]}),

wx.setStorage({key: "304", data: ["305. Inuit print making is less (i)_____than carving in that it does not have substantial historical precedents, although there are (ii)_____incised carvings on bone or antler, facial tattoo marks or inlay skin work on clothing, mitts and footwear. Carving materials such as stone, bone, antler, wood, and  ivory were (iii) _______, but paper and drawing tools were unknown until introduced by early explorers and missionaries.",
{A: 'A.traditional',B: 'B.prestigious',C: 'C.anomalous',D: 'D.affinities with',E: 'E.objections to',F: 'F.regulations about',G: 'G.available locally',H: 'H.rarely used',I: 'I.virtually interchangeable'},
"###解析：in that it does not have substantial historical precedents 中的 it 指的是 Inuit print making,既然没有先例,说明 Inuit print making 比起 carving 不是那么传统,第一空选 A 选项,第二空让步,前面说两 者不同,但是两者还是有某种联系,第二空选 D 选项,第三空根据 but 前后对 比,paper and drawing tools were unknown until introduced by early explorers and missionaries 说明 carving materials 是取 unknown 的反义, 所以第三空选 G 选项.traditional 传统的,affinity 紧密联系, availability locally 当地能获得.注意此题的 affinity 不要理解成\"喜 爱\"这层意思. \n***翻译：尽管因纽特印刷和在骨头或者鹿角的雕刻,衣服上的面部图案标记和镶 嵌的动物皮有密切联系,但是因纽特印刷比起雕刻更加不传统,因为它没有大量的历史先例.例如像石头,骨头,鹿角,木头和象牙之类的雕刻材料是在当 地能够获取的,但是纸和绘画材料知道早期的探索者和传教士引入之前都是不 为人知的."]}),

wx.setStorage({key: "305", data: ["306.  For many years, Americans have had a love affair with ferryboats. Ferries are said to relieve our frayed nerves after we\'ve stewed in bumper-to-bumper traffic, and conventional wisdom also says ferries (i)_____congestion and air pollution by getting us out of cars. Unfortunately, this (ii) _______ notion recently has (iii)_____several West Coast mayors, who have in consequenceeagerly pursued the implementation of ferry service in their cities.",
{A: 'A.contribute to',B: 'B.reduce',C: 'C.cover up',D: 'D.provocative',E: 'E.misguided',F: 'F.cynical',G: 'G.captivated',H: 'H.confused',I: 'I.outraged'},
"###解析：前文都在说渡船的优点,所以第一空选体现\"减少\"拥堵的动词,所 以第一空选 B 选项.后文 unfortunately 转折,所以得知这个传统的观念不一 定是对的,所以第二空选 E 选项,第三空根据后文 eagerly pursued the implementation of ferry service in their cities 说明这些市长是被这种 错误的观念迷惑了,所以他们要急切地去做这个事.reduce 减少,misguided 错误的,captivate 吸引. \n***翻译：很多年中,美国人一直对于渡船非常热衷.据说渡船能够在我们长时间 奔波于一辆接一辆的交通工具中舒缓我们绷紧的神经,而且传统的说法也说渡 船能够通过让人少开车而减少拥堵和空气污染.但不幸的是,这个误导人的观 念最近已经吸引了好几个西海岸城市市长的目光,这些市长最终急切地决定一 定要在城市里进行渡船服务的设施建设."]}),

wx.setStorage({key: "306", data: ["307.  Circulatory systems on organisms originated in widely separated epochs, according to the fossil record, and under a broad range of circumstances, the myriad forms they take attest to that_______ of origin.",
{A: 'A.mysteriousness',B: 'B.randomness',C: 'C.ambiguity',D: 'D.heterogeneity',E: 'E.indeterminacy',F: 'F.diversity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：that 同义重复前文的特征 widely separated epochs,所以正确答案 选 DF 选项.heterogeneity 多样性,diversity 差异. \n***翻译：生物的循环系统从很多分离的时代起源,根据化石记录,还有大量的情 况,无数种证明发源地多种多样的方式."]}),

wx.setStorage({key: "307", data: ["308.  Compared to their predecessors, who were more nationalist than feminist in political orientation,Roman women activists of the younger generation are more inclined to_______women\'s rights, often creating organizations focused primarily on women\'s issues.",
{A: 'A.expand',B: 'B.de-emphasize',C: 'C.champion',D: 'D.idealize',E: 'E.downplay',F: 'F.defend',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：often creating organizations focused primarily on women’s issues 体现这些人愿意为女性争取权利,所以正确答案选 CF 选项.champion 捍卫,defend 保护. \n***翻译：和他们的前辈,那些在政治方向上更加民族主义而非女性主义的人们进 行比较,年轻的一代的罗马女性激进分子更加倾向于为女权而奋斗,经常创造 出一些主要关注于女性问题的机构."]}),

wx.setStorage({key: "308", data: ["309.  Individuals, governments, and companies show ample ability to_______themselves by setting goals based on current conditions and then blindly following them even when those conditions change drastically.",
{A: 'A.hamstring',B: 'B.reinvent',C: 'C.promote',D: 'D.revitalize',E: 'E.impair',F: 'F.invigorate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：then blindly following 中的 blindly 体现了个人,政府和公司会 对它们自己造成不好的东西,所以正确答案选 AE 选项.hamstring 使衰弱, impair 损害. \n***翻译：个人,政府,还有公司展示出了大量的能力来损害他们自己,通过根据 现在的状态建立一些目标然后盲目的追随这些目标,甚至是当这些情况已经彻 底改变也是一样坚持."]}),

wx.setStorage({key: "309", data: ["310.  The performer can be_______in his comedy, but he is fundamentally a bighearted person who displays a core sweetness even at his most manic.",
{A: 'A.inflammatory',B: 'B.pedestrian',C: 'C.gloomy',D: 'D.uninspired',E: 'E.puerile',F: 'F.provocative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：even at his most manic 说明表演者是能够引起他的 manic 特征 的,所以正确答案选 AF 选项.inflammatory 煽动性的,provocative 挑衅的.\n***翻译：这个表演者在他的戏剧中十分激动,但他根本上是一个内心明亮的人, 一个就算是在狂躁的时候也能展现出内心的善良."]}),

wx.setStorage({key: "310", data: ["311.With the numerous opponents of the controversial new taxation measure in such a fury, anyone who publicly advocated the measure did not fail to meet with_______usage.",
{A: 'A.politic',B: 'B.severe',C: 'C.sober',D: 'D.respectful',E: 'E.dejected',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题最关键的是知道 usage 有\"对待\"的意思,did not fail 双重 否定等于肯定,所以空格要对应前面的特征 such a fury,对应的选项是 B 选 项.severe 严酷的. \n***翻译：对于新的税收测量政策持反对意见的暴躁的反对者们人数众多,任何一 个公开提倡测量政策的人都会遭到严厉的对待的."]}),

that.setData({progress_percent:31}),wx.setStorage({key: "311", data: ["312. She constantly_______herself for not living up to her own ideas-for not working hard enough or not having motives that were pure enough.",
{A: 'A.exalted',B: 'B.coddled',C: 'C.excoriated',D: 'D.mollified',E: 'E.deluded',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据原因 not living up to her own ideas,not working hard enough or not having motives 可知,她会责备自己,正确答案选 C 选项. excoriate 指责. \n***翻译：她不断地痛斥自己辜负她自己的想法－工作不够努力或没有足纯粹的动 机."]}),

wx.setStorage({key: "312", data: ["313. Proponents of international regulation of environmental issues have always struggled against scientific uncertainty and economic hostility, two obstacles which, form a political standpoint, often have been closely related, as economic hostility toward environmental regulation for economic reasons have (i)_____the considerable uncertainty underlying most environmental challenges to (ii)_____of environmental regulation.",
{A: 'A.resolved',B: 'B.gainsaid',C: 'C.exploited',D: 'D.exaggerate the efficacy',E: 'E.downplay the legitimacy',F: 'F.question the fallibility',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面要证明这两个 obstacles 紧密相关,而且还要体现\"障碍\"的特 征,C 选项合理,因为如果其中一个障碍利用了另外一个障碍,说明两个障碍 有联系,第二空要体现障碍,那么 E 选项最合适.exploit 利用,downplay the legitimacy 对合法性轻描淡写. \n***翻译：国际环境问题法规的支持者通常会与科学的不确定性和经济的敌对做斗 争.这两个阻碍从政治立场上来说是紧密联系的,因为对于存在经济原因的环 境法规的经济敌意已经利用了位于大部分环境挑战之下的重大不确定性来对环 保法规的合法性进行轻描淡写."]}),

wx.setStorage({key: "313", data: ["314. Many scholars have argued that the United States Supreme Court usually (i)_____public opinion in its decisions because it fears that it will (ii)_____if does not; when it does depart from public opinion, it whips up political maelstroms.",
{A: 'A.comments on',B: 'B.hews to',C: 'C.overrides',D: 'D.lose public support',E: 'E.mitigate public anger',F: 'F.create public indifference',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：when it does depart from public opinion, it whips up political maelstroms 说明政府是服从了大众的观点,第一空选 B 选项,第二 空条件句,如果不服从大众的观点,大众就不会支持政府,选 D 选项.hew to 遵守,lose public support 失去大众支持. \n***翻译：很多学者都针对,美国最高法院经常坚守公众的观点是因为它畏惧如果 它不这样做将失去公众的支持.当它离开公众舆论,它将激起政治漩涡."]}),

wx.setStorage({key: "314", data: ["315. Analysis of 47.5-million-year-old fossils from Pakistan has yielded fresh insights into the early ancestors of modern whales. For example, Maiacetus inuus was a land animal (i)_____life in the sea. One Maiacetus innus fossil encased a fetus positioned for a head-first delivery, which is typical of a land mammal and suggests the species gave birth onshore. But it probably spent much of its time (ii) ______________: its big teeth were suited for catching fish, while its flipper-like feet must have been (iii)_____walking.",
{A: 'A.resistant',B: 'B.removed from',C: 'C.adapted to',D: 'D.in the water',E: 'E.fleeing from predators',F: 'F.protecting its young',G: 'G.incompatible with',H: 'H.clumsy for',I: 'I.strengthened by'},
"###解析：在巴基斯坦发现了鲸的化石,说明在那个时候陆地上也存在鲸,所以 第一空选 C 选项,前面说这种动物很可能出现在陆地上,but 转折,说明大部 分时间都是在水里度过的,所以第二空选 D 选项,第三空 flipper-like 的脚在 陆地上行走会很费力,所以第三空选 H 选项,注意第三空不能选 G,既然是水 陆两栖,所以用 incompatible 自相矛盾.adapt to 适应,in the water 在水 中,clumsy for 笨拙的.\n***翻译：从巴基斯坦找到的 4750 万年历史的化石的分析产生了最新的对于现代鲸 鱼早期祖先的新的见解.例如慈母鲸是一种能够适应海里生活的陆地动物.某 个慈母鲸的化石包有一个头朝下分娩的胚胎,这种头朝下的胚胎是陆地哺乳动物的特征而且表明这个物种是在岸上出生的.但是它很可能在水中度过大部分 时间：它的大牙齿是很适合捕鱼的,同时它这种长得像脚蹼状的脚走起路来很 笨拙的."]}),

wx.setStorage({key: "315", data: ["316.  Those who took Clark\'s old-mannered compliance for obsequiousness (i)_____him: his apparent (ii)_____veiled a fervent (iii)_____of the authority that others exercised over him, one that he occasionally expressed by discreetly sabotaging their most important projects.",
{A: 'A.misconstrued',B: 'B.condemned',C: 'C.respected',D: 'D.cynicism',E: 'E.acquiescence',F: 'F.intractability',G: 'G.veneration',H: 'H.justification',I: 'I.detestation'},
"###解析：第二空根据 apparent\"明显的\"得知空格和前面的特征 compliance 取同,所以第二空选 E 选项,第三空根据 veil\"隐藏\"得知选第二空的反义, 所以第三空选 I 选项,那么第一空根据后文的倒推知道,把表面上的服从当成 谄媚是误解了 C,因为实际上他对于权威有强烈的厌恶,所以第一空选 A 选 项.misconstrue 误解,acquiescence 默许,detestation 厌恶. \n***翻译：那些把 C 一成不变的服从当成是谄媚的人一定是误解了他：他表面上的 默许实际隐藏着一种强烈的对于在他身上运用的权威的憎恨,一种他会偶尔通 过小心翼翼去破坏他们重要计划而表达出来的憎恨."]}),

wx.setStorage({key: "316", data: ["317.  In ways large and small, millions of people are taking active steps to_______the medical mainstream, whether by taking herbal remedies for disease or by placing their hopes for a cure in alternative treatment.",
{A: 'A.augment',B: 'B.sidestep',C: 'C.support',D: 'D.vilify',E: 'E.circumvent',F: 'F.endorse',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析： by taking herbal remedies 和 by placing their hopes for a cure in alternative treatment 都能体现这些人避开了主流的医学,所以正 确答案选 BE 选项.sidestep 回避,circumvent 避开. \n***翻译：以或大或小的方式,很多人正在积极地采取措施避开医学主流,或者通 过采用草药治疗疾病,也或者通过用其他的治疗方式来取代他们的希望."]}),

wx.setStorage({key: "317", data: ["318.  Although its gray text blocks and black-and-white illustrations give it a sober mien, this one-stop resource can take the place of a dozen less_______texts.",
{A: 'A.exhaustive',B: 'B.interesting',C: 'C.appealing',D: 'D.original',E: 'E.educational',F: 'F.comprehensive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题关键点是 one-stop,\"一站式的\"体现的是\"全面\"的意思, 所以这里是在拿全面的东西和 less 全面的东西进行比较,所以空格选 one- stop 的同义词,正确答案选 AF 选项.exhaustive 全面的,comprehensive 全 面的. \n***翻译：尽管它的灰色的文本和黑白的插图给了它一种严肃的感觉,这种一站式 的资源却能够取代不全面的文本."]}),

wx.setStorage({key: "318", data: ["319.  The media have constantly disparaged the governor\'s competence and have found a public only too eager to applaud their _______.",
{A: 'A.assiduousness',B: 'B.stupefaction',C: 'C.mockery',D: 'D.incredulity',E: 'E.certitude',F: 'F.derision',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：their 指代的是前面的媒体,所以空格同义重复媒体的态度 disparage,所以正确答案选 CF 选项,mockery 嘲笑,derision 嘲笑. \n***翻译：媒体长期鄙视政府的能力而且已经发现公众太急切而没法去赞扬他们(媒体)的嘲笑."]}),

wx.setStorage({key: "319", data: ["320.  The_______of ophthalmology as a field in the United States from 1820 to 1850 is evident in the opening of at least five eye hospitals during this period, offering new venues for ophthalmic treatment and experimentation.",
{A: 'A.sophistication',B: 'B.retrenchment',C: 'C.burgeoning',D: 'D.resurgence',E: 'E.curtailment',F: 'F.expansion',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说 offering new venues for ophthalmic treatment and experimentation,说明这种眼科在这个时间段是发展迅速的,所以正确答案选 CF 选项.burgeoning 激增,expansion 扩张.\n***翻译：在 1820 年到 1850 年美国眼科学的扩张是很明显的,在这段时间至少五 家眼科医院开张了,能够提供眼科治疗和实验的新场所."]}),

wx.setStorage({key: "320", data: ["321.In his youth, the naturalist and artist John James Audubon was given to_______glamorous tales about himself: he falsely claimed to have studied under a renowned French painter and hinted that he was the heir apparent to the French throne.",
{A: 'A.disavowing',B: 'B.understanding',C: 'C.constraining',D: 'D.obfuscating',E: 'E.concocting',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：falsely claimed 体现了这个人是在编造故事,所以正确答案选 E 选 项.concoct 编造. \n***翻译：在约翰·詹姆斯·奥杜邦年轻的时候,这个博物学家兼画家喜欢编造关于 他自己的令人向往的故事：他虚假地宣称跟一个有名的法国画家学习过,并且 暗示说他是法国王位继承人."]}),

that.setData({progress_percent:32}),wx.setStorage({key: "321", data: ["322. Holston characterized a colonial situation as an aggregation of activities and a conjunction of outcomes that, though     and at times coordinated, were usually diffuse, disorganized, and even contradictory.",
{A: 'A.dubious',B: 'B.chaotic',C: 'C.harmonious',D: 'D.linked',E: 'E.imputed',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题有陷阱,根据 and 前后的并列关系得知空格和 coordinated 取 同,所以很多人就选了 C 选项.但是注意后面有一个 at times,说明 coordinated 要比空格递进,所以正确答案选一个比 coordinated 弱一点的 词,正确答案选 D 选项.linked 有联系的. \n***翻译：霍斯顿把殖民局势描绘为活动的集合和结果的结合,尽管互相关联而且 有时相互协调,但通常是分散的,无序的,甚至是矛盾的."]}),

wx.setStorage({key: "322", data: ["323. In aquatic environments, the herbicide atrazine is more likely to (i)_____developing amphibians when it is highly diluted than when it is much more concentrated, a new study suggests. Although counterintuitive, the finding is (ii)_____some past research on atrazine and studies showing that other hormonally active compounds are most damaging at trace concentrations.",
{A: 'A.supplant',B: 'B.kill',C: 'C.circumvent',D: 'D.unanticipated given',E: 'E.consistent with',F: 'F.undiminished by',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题难点在熟词僻意 trace,trace 在题中是微量的意思.所以第一 空对应的是后文的 most damaging,所以第一空选 B 选项,第二空说明两个研 究是结果是一样的,都是说浓度低的时候更有杀伤力,多以第二空选 E 选项. kill 杀死,consistent with 与...一致. \n***翻译：在水生环境中,除草剂阿特拉津如果被稀释会比浓缩后,更能杀死两栖 动物.尽管和人们所认为的直觉不同,这个结果却和以前很多关于除草剂的研 究结果一致,这些研究结果表明荷尔蒙类化合物在微量时更会有损害性."]}),

wx.setStorage({key: "323", data: ["324. If newspaper consumers are concerned about more than (i)_____and prefer to read news that is consistent with their beliefs, then (ii)_____is not a journalistic flaw, but, rather, a cultivated feature. In a competitive news market, producers can use slant to differentiate their products and stave off price competition.",
{A: 'A.politics',B: 'B.accuracy',C: 'C.expense',D: 'D.bias',E: 'E.sensationalism',F: 'F.inconsistency',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：prefer to read news that is consistent with their beliefs 说 明第一空 more than 后面填入体现客观的意思的词,正确答案选 B,第二空根 据前面的条件可知,既然大家 prefer to read news that is consistent with their beliefs,所以这种主观不是错误,第二空填入体现主观意思的 词,正确答案选 D 选项.accuracy 准确性,bias 偏见. \n***翻译：如果新闻报纸的读者们关注的不只是新闻事件的准确性,而且是倾向于 阅读和他们价值观保持一致的新闻事件的话,那么偏见就不是该报纸新闻撰写 的瑕疵,但更像是一种特点.在相互竞争的新闻市场内,生产商可以用偏见来 区分他们的产品,并且缓解价格."]}),

wx.setStorage({key: "324", data: ["325. There are two opposing theories about mountain formation and climate over the past 40 million years: either the surge of mountain building (i)_____the global cooling or vice versa. The first of these two theories asserts that widespread mountain building cooled (ii)_____mountainsand climate. For example, mountain glaciers tent to be (iii) _______: once established, they increase the reflectivity of the surface, thus lowering temperatures and allowing more ice to form.",
{A: 'A.superseded',B: 'B.halted',C: 'C.caused',D: 'D.disparity between',E: 'E.feedback between',F: 'F.complexity of',G: 'G.unpredictable',H: 'H.static',I: 'I.self-perpetuating'},
"###解析：第一空根据后文例子中说到 thus lowering temperatures,说明第 一个理论说的是造山运动导致了全球变冷,所以第一空选 C 选项,第二空重复 第一空,所以第二空选 E 选项,第三空可以说重复了冒号后面的 established,所以第三空选 I 选项.cause 导致,feedback 反馈,self- perpetuating 自续的.\n***翻译：有两个关于过去 4000 万年山脉形成和气候的相反的理论：也许是造山运 动的浪潮导致了全球变冷,也或许刚好相反.两个理论中的第一个理论断言大 量的造山运动使山脉和气候之间的反馈减少了.例如,山脉冰川会自我保持下 来：一旦被形成,它们就会增加表面的反射率,因此进而降低了温度而且让更 多的冰形成."]}),

wx.setStorage({key: "325", data: ["326.  With the emergence of scientific history-writing in the late nineteenth century, several authors sought to ignore the glowing myths surrounding George Washington and uncover the human being within, but their biographies were still (i)_____enough that Washington remained a marbled and remote figure. Indeed, by the 1920s Washington has become such (ii)_____personage that inevitably someone had to go to the other extreme and try to (iii)_____the legend.",
{A: 'A.ponderous',B: 'B.empirical',C: 'C.laudatory',D: 'D.a deified',E: 'E.an ignored',F: 'F.a misunderstood',G: 'G.debunk',H: 'H.aggrandize',I: 'I.reproduce'},
"###解析：still 说明第一个空格依然重复前面对于 W 的评价,所以第一空对应 glowing,正确答案选 C 选项,第二空根据 such 得知取第一空的同义,所以第 二空选 D 选项,第三空和 had to go to the other extreme 并列,另外一个极 端也就是去贬低 W 这个人,说第三空选 G 选项.laudatory 值得赞扬的, deified 神化的,debunk 揭露…的错误.\n***翻译：随着在 19 世纪晚期科学历史写作的出现,若干作家努力地去忽略那些包 围 GW 的高度赞扬的神秘的事并且找出其中的人类的存在,但是他们的传记仍然 是足够值得称赞的以至于让 W 依然是一个大理石般的且遥远的人物.的确,在 20 世纪 20 年代前 W 已经是一个被尊奉为神的人物以至于必然会有人不得不走 向另外一个极端然后努力地去拆穿这个传说."]}),

wx.setStorage({key: "326", data: ["327.  Aerial viewings of the gigantic stone horse attributed to the Native American Quechuan people fail to_______the considerable artistry required to create the piece: the horse appears crudely constructed unless carefully examined from the ground.",
{A: 'A.reveal',B: 'B.justify',C: 'C.manifest',D: 'D.mitigate',E: 'E.diminish',F: 'F.undercut',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：语义推理,后文说马如果不好好检验的话就会粗制滥造,说明这些空 中观察无法揭示重要的艺术才能,答案选 AC 选项.reveal 揭露,manifest 展 现. \n***翻译：由美洲盖比亚人建造的巨石马,在空中俯瞰的时候,没有能够显示出建 造一个艺术品的时候应该有的艺术性.这匹马看起来是被极其粗糙的建造,除 非是在地面上仔仔细细地观察."]}),

wx.setStorage({key: "327", data: ["328.  The book aims to illuminate how science has changed the meaning of nothingness from  _______ philosophical concept to something we can almost put under a microscope.",
{A: 'A.a tangible',B: 'B.a palpable',C: 'C.a nebulous',D: 'D.a nettlesome',E: 'E.an incontrovertible',F: 'F.a vague',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：from...to...说明空格处选 to 后面 something we can almost put under a microscope 的反义,所以正确答案选 CF 选项.nebulous 模糊的, vague 模糊的. \n***翻译：这本书想要阐释科学是如何已经改变了空洞的含义,从模糊的哲学概念 变成了一些我们能够在微观世界下看到的东西."]}),

wx.setStorage({key: "328", data: ["329.  Few ideas are more_______than the notion that cultures evolve in Darwin fashion; many academics have begun writing about cultural evolution, but few treat the underlying Darwinian logic with the care it deserves.",
{A: 'A.abused',B: 'B.archaic',C: 'C.misused',D: 'D.outdated',E: 'E.divisive',F: 'F.derivative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：few treat the underlying Darwinian logic with the care it deserves 说明这个达尔文的理念本来是好的,但是大家不重视,所以这里的 few ideas 也是一样的,所以正确答案选 AC 选项.abused 错误使用,misused 误用的. \n***翻译：一些关于达尔文进化论的想法比观念更加滥用,很多学院开始写关于文 化进化论的论文,但只有一些对达尔文观点潜在的逻辑给予了它应得的重视."]}),

wx.setStorage({key: "329", data: ["330.  The initial, widely shared pessimism turned out to be _______, because it ignored the many things that could be done with resources left behind.",
{A: 'A.unintelligible',B: 'B.unfathomable',C: 'C.unfounded',D: 'D.unimaginative',E: 'E.unjustified',F: 'F.unimportant',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：because it ignored the many things 说明之前的这种悲观是没有 根据的,所以正确答案选 CE 选项.unfounded 无根据的,unjustified 不合理 的. \n***翻译：原本被广泛分享的厌世情绪被发现是未被证明正确的.因为它忽略了很 多可以用背后的资源完成的事情."]}),

wx.setStorage({key: "330", data: ["331.The space travels described in science fiction stories always used to be epic adventures, in comparison to which current journals in space seem quite _______.",
{A: 'A.mundane',B: 'B.exciting',C: 'C.dramatic',D: 'D.risky',E: 'E.heroic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 in comparison to 得知后面空格和前文的特征取反,前文的特 征是\"epic 史诗般的\",所以正确答案选 A 选项.mundane 平凡的. \n***翻译：科幻小说中描述的太空旅行曾经总是史诗般的冒险,而现在的太空旅行 却看起来很平常."]}),

that.setData({progress_percent:33}),wx.setStorage({key: "331", data: ["332. To criticize a disaster film for being_______is a bit silly, since people do not go to disaster movies to see an honest portrayed of reality.",
{A: 'A.expensive',B: 'B.harrowing',C: 'C.derivative',D: 'D.convoluted',E: 'E.implausible',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：since people do not go to disaster movies to see an honest portrayed of reality 说明\"真实\"不好,那么这里就不应该批评这部电影的 \"不真诚\".正确答案选 E 选项,implausible 不合情理的. \n***翻译：批评灾难片十分不真实是个有点傻的举动,因为人们去看灾难片的时候 并不是为了看现实生活中的真实写照."]}),

wx.setStorage({key: "332", data: ["333. The irony of digital networking is that it can produce more (i)_____than did the geographical confinement it supposedly transcended. As human interactions become (ii)_____physical location, people are less likely to have regular dealings with others who do not share the same values and outlooks.",
{A: 'A.provincialism',B: 'B.diversity',C: 'C.materialism',D: 'D.more determined by',E: 'E.less contingent on',F: 'F.less insensitive to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应 confinement it supposedly transcended,所以选 A 选 项,第二空是解释为什么产生了更多的 provincialism,是因为当人们不局限 与地理位置时,大家却越来越不喜欢跟自己同一个位置的人说话了,所以第二 空选 E 选项.provincialism 狭隘,contingent 取决于. \n***翻译：数字网络的讽刺就是它会产生更多的狭隘性,比起它想要超越的地理限 制.随着人们越来越不受地域限制之后,人们变得不那么可能和那些与自己价 值观和外观不同的人进行常规交流."]}),

wx.setStorage({key: "333", data: ["334. The mood of the times is no longer one of (i)_____over our scientific achievements. Doubts and worries beset technical and scientific specialist, as well as the public at large. I do not consider such worries (ii) _______, though they are often based on intuitive feeling rather than on strictly logical arguments.",
{A: 'A.widening skepticism',B: 'B.uncritical joy',C: 'C.false humility',D: 'D.unfounded',E: 'E.sacrosanct',F: 'F.foreordained',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：Doubts and worries beset technical and scientific specialist 说明不再是不被批评的东西了,第一空选 B 选项,第二空根据 though they are often based on intuitive feeling rather than on strictly logical arguments 让步取反,尽管不认为没有根据,但是确实只是基于直觉. uncritical joy 不加批评的开心,unfounded 没有根据的. \n***翻译：时代的情绪已不再是一种对我们的科学成就不加批判的喜悦.疑虑困扰 着科技专家和广大公众.我不认为这种担忧没有根据的,尽管它们往往是基于 直觉而非严格的逻辑论证."]}),

wx.setStorage({key: "334", data: ["335. Pioneering medical research scientists\' (i)_____claims regarding the (ii)_____new researches make the public wonder their own doctors are not dispensing miracles. There are forces, both external and internal, on scientists that most require them to (iii) _______. Without money, there is no science. Researchers must constantly convince administrators who control tax dollars, investors, and individual donors that the work they are doing will make a difference.",
{A: 'A.modest',B: 'B.inflated',C: 'C.fastidious',D: 'D.serious constraints on',E: 'E.overblown interpretations of',F: 'F.potential benefits of',G: 'G.improvise',H: 'H.oversell',I: 'I.generalize'},
"###解析：句中第三空和第一空是同义重复,外部和内部的力量都要求这些科学 家这么做,而且目的是为了钱,所以第一空选 B,第三空选 H 选项,第二空要 导致\"人们并不认为医生在制造奇迹\",说明第二空是在说研究的正评价,所 以第二空选 F 选项.inflated 夸大的,potential benefits 潜在的益处, oversell 吹嘘. \n***翻译：先锋的医学研究领域的科学家的夸大的关于新研究潜在的益处的言论让 公众惊讶地认为他们的医生不是在制造奇迹.确实存在着外部或者内部的力量 来使得科学家吹嘘.没有钱,也就没有了科学.研究者必须持续让控制税收, 投资人和个人捐助的管理者相信科学家所做的工作是很牛逼的."]}),

wx.setStorage({key: "335", data: ["336.  Despite the occasional (i)_____of their venues, the culture of corporate conferences is a deeply (ii)_____conference, each day consisted of nearly nine hours of continuous lectures and panels enlivened by pleasantries or anything that could be construed as a joke. The only (iii) _______ sensory deprivation of the sessions came from the handsome color slides favored by the corporate presenters.",
{A: 'A.seclusion',B: 'B.opulence',C: 'C.enormity',D: 'D.sycophantic',E: 'E.ascetic',F: 'F.mercenary',G: 'G.allusion to',H: 'H.ramification of',I: 'I.respite from'},
"###解析：despite 说明第一空和第二空取反,第二空由后文的 each day consisted of nearly nine hours of continuous lectures 解释说明,所以 第二空选 E 选项,所以第一空选 B 选项,最后一个空格通过 only 得知需要选取 前文特征的反义,前文特征是 ascetic,所以第三空选 I 选项.opulence 奢 华,ascetic 苦行的,respite from 从…得到缓解. \n***翻译：尽管开会地点偶尔的奢华,但是商务会议的行为方式实际是一个高度苦 行的会议,每天包括将近 9 小时连续的讲座和用客套话或者任何能够被理解成 玩笑而变得生动的讨论小组.唯一从开会的感官剥夺中得到的休息来自于节目 主持人所喜欢的美观的幻灯片."]}),

wx.setStorage({key: "336", data: ["337.  Historically, the depletion of soil\'s nitrogen has been one of the most_______problems faced by farmers: an essential nutrient, nitrogen is quickly leached from soil, and farmers have struggled to find ways to replenish it.",
{A: 'A.capricious',B: 'B.ubiquitous',C: 'C.worrisome',D: 'D.stubborn',E: 'E.intractable',F: 'F.unpredictable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：struggled to find ways to replenish it 说明这个问题比较严 重,正确答案选 DE 选项.stubborn 顽强的,intractable 倔强的. \n***翻译：从历史观点上来讲,土壤中氮养分的消耗是一个农民们面临的最为顽固 的问题之一,作为一个特别重要的养分,氮迅速被土壤过滤,农民们尝试了好 多好多办法去补充氮元素."]}),

wx.setStorage({key: "337", data: ["338.  Scientists should hope the faults in their theories will be_______their peers since the refutation of one hypothesis can free its originator to develop a better one.",
{A: 'A.discerned by',B: 'B.disregarded by',C: 'C.discovered by',D: 'D.ignored by',E: 'E.opaque to',F: 'F.inspiring to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：refutation of one hypothesis 和空格同义重复,所以空格体现 refutation,那就是错误被发现,正确答案选 AC 选项.discern 觉察, discover 发现. \n***翻译：科学家们应该寄希望于他们理论中的问题能够被他们的同事发现,因为 反驳一个假设能够释放它原来的发明者去形成一个更好的假设."]}),

wx.setStorage({key: "338", data: ["339.  Although men still dominate the ranks of full professors in the field of astronomy, the increasing numbers of younger women in the field could_______a change in its gender mix.",
{A: 'A.require',B: 'B.alleviate',C: 'C.block',D: 'D.presage',E: 'E.portend',F: 'F.hinder',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：女性加入这个领域必然预示着性别混合会有改变,正确答案选 DE 选 项.presage 预示,portend 预示. \n***翻译：尽管男人仍然占有航天科学领域中大部分教授的主导位置,在这个领域 中年轻的女性的数量也在逐渐上升,这预示着这个行业中男女比例的一个变 化."]}),

wx.setStorage({key: "339", data: ["340.  An apparent paradox led the scientists to pursue their present line of research. They were struck by the fact that a single mathematics formula can be used to describe physical phenomena that appear to be so _______.",
{A: 'A.rudimentary',B: 'B.interdependent',C: 'C.interrelated',D: 'D.complex',E: 'E.heterogeneous',F: 'F.dissimilar',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：他们 struck by(被震惊)因为一个数学公式就能描述各种各样的 物理现象,空格选 single 反义词,正确答案选 EF 选项.heterogeneous 各种 各样的,dissimilar 不同的. \n***翻译：一个显然的悖论导致科学家们继续他们现在的研究,他们被单独的数学 公式能够用来形容物理现象的,这样一个与众不同的事实震惊了."]}),

wx.setStorage({key: "340", data: ["341.Medieval cathedrals still stand as marvels of architecture, but as far as modern science is concerned, medieval physics and chemistry are simply irrelevant, at best a dead end, at worst the very_______of what science is supposed to be.",
{A: 'A.exemplar',B: 'B.glorification',C: 'C.reflection',D: 'D.dilution',E: 'E.antithesis',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：at best a dead end 说明,at worst 要选一个比 dead end 还要递进 的词,所以根据选项选出正确答案 E.antithesis 对立. \n***翻译：中世纪大教堂仍是建筑的奇迹,但就现代科学而言,中世纪的物理和化 学就是驴唇不对马嘴的了,最好的死胡同,最坏的就被认为是和科学对立."]}),

that.setData({progress_percent:34}),wx.setStorage({key: "341", data: ["342. For the urban researcher, the long lives of ancient cities can provide ample chronological data, making up for the paucity stemming from relative_______of most present-day cities.",
{A: 'A.complexity',B: 'B.formlessness',C: 'C.transparency',D: 'D.diversity',E: 'E.youthfulness',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格要填入一个词作为当前城市的历史资料缺乏的原因,能导致这种 缺乏的原因是 E 选项,城市的年轻导致了资料的缺乏.youthfulness 年轻. \n***翻译：对于这个城市研究者,古城的长寿命能够提供丰富的时间资料,这补偿 了大多数现在的城市因为相对年轻而引起的资料缺乏."]}),

wx.setStorage({key: "342", data: ["343. Britain\'s deteriorating economy after 1945 was (i)_____by politicians who favored the manufacturing sector over the service sector: rather than attempting to (ii)_____the decline of manufacturing, they should have promoted service industries.",
{A: 'A.mishandled',B: 'B.bolstered',C: 'C.forestalled',D: 'D.augment',E: 'E.arrest',F: 'F.escalate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题从最后一句倒推 they should have promoted service industries,他们本应该推动服务业,说明实际上他们推动了制造业,而且也 说明服务业才是这里的正评价,制造业是负评价,所以第一空应该填入负评价 词,第二空填入\"阻止\"的词,注意 decline,所以正确答案选 AE 选项. mishandle 不当地处理,arrest 阻止.\n***翻译：英国 1945 年后的经济倒退是由于偏爱制造业而不喜欢服务业的政客的不 当处理造成的：比起尝试去阻止制造业的衰落,他们本应该促进服务业的发 展."]}),

wx.setStorage({key: "343", data: ["344. The controversy about Alexander the Great\'s personality derives from the fact that our sources are (i) _______, all eyewitness accounts having perished. What remains is, at best, (ii)_____(one history, for instance is based largely on the now-lost memoirs of Alexander\'s alleged half-brother, Ptolemy) and at worst, highly unreliable.",
{A: 'A.outdated',B: 'B.inadequate',C: 'C.abstruse',D: 'D.secondhand',E: 'E.repetitious',F: 'F.deceptive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 having pershed 可知信息来源不充足,第一空选 B 选项,后面是 两个极端：说得好听点可以算间接证据(括号后面的解释也说明是间接的), 说的不好听点就是完全不可信,所以第二空选 D 选项.inadequate 不充足的, secondhand 间接的. \n***翻译：关于亚历山大大帝的性格的争论是源自于我们得到的资源的不充分,所 有亲眼所见的证据都已经灭亡了.唯独剩下来的,最好的情况,是二手的(比 方说,是所谓的亚历山大的同父异母兄弟的模糊回忆),最差的情况,是极其 不可信的."]}),

wx.setStorage({key: "344", data: ["345. Anna Gavalda\'s fiction is appealing largely because of her writing styles, which is certainly(i)_______. It is heavy on dialogue (and light on embellishment) features very short sections (of often only a few sentence) in rapid succession, and in general favors an unadorned directness. Not surprisingly, this style works better in short-story form than in novels, and the story collection I Wish someone Were Waiting for Me Somewhere (ii)_____her attempt to (iii)_____it in novel, as in, for example, Someone I loved.",
{A: 'A.annoying',B: 'B.distinctive',C: 'C.convoluted',D: 'D.is thought to precede',E: 'E.fails in comparison with',F: 'F.impresses considerably more than',G: 'G.undermine',H: 'H.sustain',I: 'I.reject'},
"###解析：既然是因为写作风格而有吸引力,所以这个风格一定是独一无二的, 而且后文的内容也具体阐释了如何独一无二的,所以第一空选 B 选项,第二空 文章说她的风格在短篇小说中效果更好,说明 story collection(就是短篇小 说集)一定是超越了小说,所以第二空选 F 选项,第三空语义题,她想要把短 篇小说集在小说中保持下来,不能是负评价,所以第三空根据三个选项来看只 能是 H 选项.distinctive 与众不同的,impress 让人铭记,sustain 保留. \n***翻译：AG 的小说有吸引力主要是因为他的写作风格,这个风格是独一无二的. 这个风格看重对话(看轻渲染效果),在快速的一连串的内容中突出短的小节(经常只有一句话),并且总体上喜欢一种未加修饰的直截了当.这种风格毫不让人意外地在短篇小说(而不是长篇小说)中有更好的效果,所以故事集《I Wish someone Were Waiting or Me Somewhere》本身比起他想要在小说《Someone I loved》中保持这个故事集的尝试更加让人铭记住了."]}),

wx.setStorage({key: "345", data: ["346.  For Plato the art of music was so (i) moral and political reality that any alteration to music system would necessarily require a corresponding political shift. But two and a half millennia later, when classical music is generally seem merely as a lifestyle accessory, Plato\'s conception seems (ii) . To be sure, there are still people who consider classical music to be of (iii)  cultural importance, but few of them are able to articulate this convincingly.",
{A: 'A.rarely identified with',B: 'B.tenuously connected to',C: 'C.firmly anchored in',D: 'D.apt',E: 'E.absurd',F: 'F.disingenuous',G: 'G.marginal',H: 'H.profound',I: 'I.uncertain'},
"###解析：音乐的变化一定会有相应的政治变化,说明音乐和政治已经紧密联系 在一起了,第一空选 C 选项,后来固定音乐仅仅被当成附属品,说明柏拉图的 conception 不再适用,所以第二空选 E 选项,第三空 still 说明又转回前面说 音乐和政治的紧密联系了,所以第三空选 H 选项.firmly anchored in 牢牢固 定在,absurd 荒谬的,profound 深远的,巨大的. \n***翻译：对柏拉图来说音乐艺术是如此坚实地固定在道德和政治现实中以至于任 何对于音乐系统的变化都一定会需要相应的政治变化.但是 2500 年之后,当古 典音乐普遍被认为仅仅是生活方式的附属品的时候,柏拉图的概念看上去似乎 很荒谬.的确,仍然有把古典音乐当成是有着深远文化影响的人存在,但是他 们中很少有人能够将起令人信服地表达出来."]}),

wx.setStorage({key: "346", data: ["347.  In the northeastern United States, beaver populations had been critically reduced or even         in large areas at the end of nineteenth century; as a result, several states instituted prohibitions on beaver trapping.",
{A: 'A.diminished',B: 'B.extirpated',C: 'C.eliminated',D: 'D.devalued',E: 'E.weakened',F: 'F.underrated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：even 递进关系,所以空格后面选 reduce 的递进,所以正确答案选 BC 选项.extirpate 绝迹,eliminate 消灭.此题 A 选项不对是因为 diminish\"减少\"和 reduce 只能同义,没有递进. \n***翻译：在美国东北部,河狸的数量在十九世纪末期大部分地方已经严重减少甚 至已经快灭绝了.结果,好几个州都颁布了禁止抓捕河狸的法令."]}),

wx.setStorage({key: "347", data: ["348.  The preliminary analysis being on the whole, reassuring its confirmation would_______concerns about the dangers of project.",
{A: 'A.explain',B: 'B.deflate',C: 'C.rationalize',D: 'D.soothe',E: 'E.reflect',F: 'F.hide',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 reassure 可以判断出空格要填入\"消除\"担忧的意思,正确答 案选 BD 选项.deflate 缩小,soothe 平息. \n***翻译：凭借整体上初步的分析,保证这个证实会消除关于项目的担忧."]}),

wx.setStorage({key: "348", data: ["349.  Some kinds of deadly bacteria, including those that cause tetanus, tuberculosis, and botulism, remain_______until something triggers their insidious activity.",
{A: 'A.harmless',B: 'B.innocuous',C: 'C.anomalous',D: 'D.aberrant',E: 'E.efficacious',F: 'F.undetectable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：until=before,在引发了潜在的活动之前细菌是安全的,所以正确答 案选 AB 选项.harmless 无害的,innocuous 无害的. \n***翻译：一些致命细菌(包括那些导致破伤风,结核病和肉毒中毒的细菌)在一 些东西引发了他们潜伏活动之前是无害的."]}),

wx.setStorage({key: "349", data: ["350.  Titan, Saturn\'s largest moon, looks surprisingly _______, even though it is a cold, dimly lit world made from unknown materials.",
{A: 'A.habitable',B: 'B.familiar',C: 'C.forbidding',D: 'D.placid',E: 'E.daunting',F: 'F.recognizable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：取后文 unknown material 反义,正确答案选 BF 选项.familiar 容 易识别的,recognizable 可识别的.(在韦氏里,familiar 有 easily recognized 的意思) \n***翻译：\"泰坦\"(土星最大的卫星)看起来令人惊讶的可辨认,尽管它是一个 很冷,很暗的且由不为人知的物质形成的世界."]}),

wx.setStorage({key: "350", data: ["351.Investors are grateful that the attorney general has stepped in to pursue inquiries into misfeasance in the financial markets, given that the regulators officially charged with policing the industry have been _______.",
{A: 'A.diffident',B: 'B.meticulous',C: 'C.straightforward',D: 'D.implacable',E: 'E.tenacious',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：投资者感激司法部长介入,是因为之前的监管不力,能体现这个意思 的词是 A 选项,这里的 diffident 取\"谨慎羞怯\"的意思. \n***翻译：调查者很感激司法部长涉入来调查金融市场的失职,因为官方管理监督 此行业的监管者之前一直言行谨慎."]}),

that.setData({progress_percent:35}),wx.setStorage({key: "351", data: ["352. Consolidating memory is not instantaneous or even _______: every memory must be encoded and moved from short-term to long-term storage, and some of these memories are, for whatever reason, more vividly imprinted than others.",
{A: 'A.salutary',B: 'B.deliberate',C: 'C.sequential',D: 'D.momentary',E: 'E.inevitable',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：否定递进是弱递进,所以这里的逻辑是\"不是立即发生,甚至都不是 一定发生的\",所以正确答案选 E 选项.inevitable 必然的. \n***翻译：加固记忆不是立即的甚至都不是必然的：每一个记忆必须被编码而且从 短期变成长期的储存,而且一些记忆,不知道什么原因,比其他记忆铭刻得更 加清晰."]}),

wx.setStorage({key: "352", data: ["353. The politician\'s record while in office, though (i) ______________, hardly accounts for her high standard three decades later-a standing all the more (ii)_____because of continuing assaults on her reputation during those years.",
{A: 'A.bewildering',B: 'B.admirable',C: 'C.unappreciated',D: 'D.unusual',E: 'E.regrettable',F: 'F.persistent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 though 可知第一空选 high standard 的同义,注意 hardly 取反 了一次,所以第一空选 B 选项,第二空较难,admirable record 却无法导致高 水准,这件事是很让人感到惊讶的,后文 all the more 是递进这种惊讶,所以 第二空选 D 选项最合适.admirable 令人敬佩的,unusual 不寻常的. \n***翻译：这个政客在从政期间的记录,即使令人钦佩,却也很难导致她三十年之 后的高超水平,这种情况更加不寻常,因为那些年间人们对其名声连续不断的 抨击."]}),

wx.setStorage({key: "353", data: ["354. Although it is not uncommon for journalists to portray political inexperience on the part of public officials as an (i) _______, it was nevertheless surprising when members of the press treated the new senator\'s obvious (ii)_____as an extraordinary virtue.",
{A: 'A.advantage',B: 'B.impediment',C: 'C.exception',D: 'D.nonchalance',E: 'E.acumen',F: 'F.naiveté',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题从第二空入手最好,第二空对应此文描述的特征 political inexperience,所以第二空选 F 选项,第一空要根据逻辑来推理,尽管把 political inexperience 当成优势不是不常见,但是当我们看到把它当成 virtue 的时候我们却还是惊讶了,所以第一空选 A 选项.advantage 优势, naiveté 天真. \n***翻译：尽管对于记者们去描绘政治经验不足作为官员们的优点的情况并不是不 常见,但这个新闻报社的记者仍然对于将这个官员显而易见的天真描绘成了难 得的美德感到很惊讶."]}),

wx.setStorage({key: "354", data: ["355. When a new scientific model emerges, research studies (i)_____that paradigm tend to dominate in the scientific literature: the process of selecting articles for publication is tilted towards positive results. But because the paradigm (ii) _______, the academic incentives shift in the opposite direction: research results are more considered worthy publication when they (iii)_____what has become the established view.",
{A: 'A.tweaking',B: 'B.affirming',C: 'C.controverting',D: 'D.is initially articulated',E: 'E.has become entrenched',F: 'F.is about to be attacked',G: 'G.bolster',H: 'H.circumvent',I: 'I.undermine'},
"###解析：第一空根据 the process of selecting articles for publication is tilted towards positive results,说明挑选的文章倾向于 positive 的, 所以能够 dominate 的文章必然是能够确定这种范例的文章,第二空重复前文的 内容,前文说这种 paradigm 被确认,所以第二空选 E 选项,第三空根据 shift in the opposite direction 得知现在学术作品倾向于去反对已经确立的东西 了,所以第三空选 I 选项.affirm 确认,has become entrenched 已经变得根 深蒂固的,undermine 削弱. \n***翻译：当一个新的科学模型出现时,研究证明了范例倾向于主导科学文章：一 个通过公众关注度选择文章的过程,得到了更积极的结果,但因为范文是根深蒂固的,学术激励能够移向正确的方向：研究结果能够更加被认为值得出版, 当他们削弱关于什么应该被出版的想法时."]}),

wx.setStorage({key: "355", data: ["356.  The historian of ancient science Otto Neugebauer concluded that Babylonian astronomical texts are (i)_____because everything has been eliminated from the astronomy except observations and the mathematical consequences of an initial hypothesis about the fundamental character of the astronomical movements. This judgment cohered with the high level of mathematical theory, which (ii)_____mathematical computation together with empirical observations as (iii)_____of science and denied any role to speculative hypotheses of a strongly theoretical nature.",
{A: 'A.questionable',B: 'B.scientific',C: 'C.limited',D: 'D.repudiated',E: 'E.admitted',F: 'F.confounded',G: 'G.end result',H: 'H.necessary characteristics',I: 'I.discredited path'},
"###解析：except observations and the mathematical consequences 说明这 些天文学的书籍现在更加科学了,第一空选 B 选项,后面说这些书籍现在和数 学计算的理论一致了,所以必须承认数学计算,所以第二空选 E 选项,第三空 根据 denied any role to speculative hypotheses of a strongly theoretical nature 得知是讲 empirical observations 当成了科学必须具备 的东西,所以第三空选 H 选项.scientific 科学的,admit 承认,necessary characteristics 必要的特征.\n***翻译：关于远古科学的历史学家 ON 总结了巴比伦年代的天文学记载是十分科学 化的,因为任何事都被从天文学中消除,除了真实观察和关于宇宙的运动的根 本特点的原始假设的数学计算结果.这样的判断和非常高等级的数学计算理论 一致,这个理论承认数学计算和经验观察一起作为科学研究的必要特点,并且 否认任何一种根据理论特点通过推测产生的假设."]}),

wx.setStorage({key: "356", data: ["357.  The initial, widely shared pessimism turned out to be _______, because it ignored the many things that could be done with resources left behind.",
{A: 'A.unintelligible',B: 'B.unfathomable',C: 'C.unfounded',D: 'D.unimaginative',E: 'E.unjustified',F: 'F.unimportant',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：because it ignored the many things 说明之前的这种悲观是没有 根据的,所以正确答案选 CE 选项.unfounded 无根据的,unjustified 不合理 的. \n***翻译：原本被广泛分享的厌世情绪被发现是未被证明正确的.因为它忽略了很 多可以用背后的资源完成的事情."]}),

wx.setStorage({key: "357", data: ["358.  Despite a tendency to be overtly _______, her poetry does not consist solely of pious sentiments: it often sparks the imagination and provides lively entertainment.",
{A: 'A.preachy',B: 'B.querulous',C: 'C.insincere',D: 'D.sanctimonious',E: 'E.plaintive',F: 'F.disingenuous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复后文的 pious,这里的 pious 当成那种高高在上的说教 意味来理解,选项中 AD 选项都是有这种意思的.preachy 讲道的, sanctimonious 假装虔诚的(有一种高高在上传道解惑的感觉). \n***翻译：尽管有倾向于变的过分说教的可能性,她的诗并不包含单一的说教情 感：它经常能发动出人们的想象力并且提供一个生动的娱乐."]}),

wx.setStorage({key: "358", data: ["359.  Willian Perkins, his_______speaking style notwithstanding, has long been seen as the moderate face of his political party.",
{A: 'A.fiery',B: 'B.genteel',C: 'C.bumbling',D: 'D.unremarkable',E: 'E.affable',F: 'F.impassioned',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：notwithstanding 取反,空格和后面 moderate 取反,正确答案选 AF 选项.fiery 热情的,impassioned 热情的,热情的,热情的(重要的事情说三 遍,以后再把这词译成\"冷静\"的人自己扇自己三耳光) \n***翻译：威廉珀金斯,尽管他的热烈的口吻,居然长久以来被看作是他的政治党 派的稳健的一面."]}),

wx.setStorage({key: "359", data: ["360.  Although in his new book he tends to repeat himself like a_______uncle, McHughen makes a persuasive case for the safety of tinkering with genes to create new foods.",
{A: 'A.taciturn',B: 'B.reserved',C: 'C.prototypical',D: 'D.cantankerous',E: 'E.loquacious',F: 'F.garrulous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复了 repeat himself,所以对应的选项是 EF 选项. loquacious 健谈的,garrulous 喋喋不休的. \n***翻译：尽管在他的新书中他倾向于重复他自己的话,就像是个爱唠叨的大叔一 样,M 仍然讲出了一个有说服性的关于胡乱用基因工程制造新食物的案例."]}),

wx.setStorage({key: "360", data: ["361.Instead of demonstrating the_______of archaeological applications of electronic remote sensing, the pioneering study became, to some skeptics, an illustration of the imprudence of interpreting sites based on virtual archaeology.",
{A: 'A.ubiquity',B: 'B.limitation',C: 'C.promise',D: 'D.redundancy',E: 'E.complexity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：instead of 说明空格和后面的内容要取反,后面的主要评价此是 \"imprudence 不谨慎\",所以真确答案选 C 选项.promise 这里考了熟词僻 意,翻译为\"成功的迹象\". \n***翻译：这个开创性的研究对一些质疑者来说成了一种对用虚拟考古理解遗迹的 草率的说明,而没有展现电子遥感在虚拟考古学上应用的前景."]}),

that.setData({progress_percent:36}),wx.setStorage({key: "361", data: ["362. While the writer was best known for her much-ballyhooed _______, her impact reached far beyond memorable quips.",
{A: 'A.pensiveness',B: 'B.drollness',C: 'C.stoicism',D: 'D.fastidiousness',E: 'E.congeniality',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题考察了同义重复,空格和后文的主要特征\"quips\"是重复的, \"quip 妙语\",所以能构成同义重复的是 B 选项.drollness 滑稽. \n***翻译：尽管这个作家是由于她被高度赞扬的诙谐而闻名,她的影响却远不止令 人印象深刻的俏皮话."]}),

wx.setStorage({key: "362", data: ["363. Contrary to those who fear the impact of invasive species on native plants, the biologists contend that the threat posed to biodiversity by nonnative species is often (i) _______. For instance, a study of garlic mustard, a nonnative plant now thriving in Minnesota\'s oak forests, found that garlic mustard abundance in forest plots was not (ii)_____the number of other plant species there.",
{A: 'A.subtle',B: 'B.uniform',C: 'C.exaggerated',D: 'D.consistent with',E: 'E.related to',F: 'F.sustained by',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：一种人的特征是 fear the impact of invasive species,与之相反 的人的特征应该是认为外来物种没有威胁,或者说威胁很小,所以第一空选 C 选项.第二空用例子证明这个观点,所以要说 mustard 的 abundance 和当地物 种的数量无关才能证明前面的观点,所以第二空选 E 选项.exaggerated 被夸 大的,related to 与...相关.注意此题第一空容易误选 A 选项,subtle 这词 的核心意思是\"不明显的\"或者\"敏锐的\". \n***翻译：和那些害怕外来物种对本地植物影响的人所相反的是,生物学家声称外 来物种对本地物种多样性的威胁通常是被夸大的.比如说,有一个关于蒜芥, 这种并非明尼苏达橡树林土生土长的植物的研究,研究发现蒜芥数量丰富和那 里其他的植物的数量没有任何关系."]}),

wx.setStorage({key: "363", data: ["364. So, perhaps the lesson is that rather than wanting their monarchy to (i)_____its modernized Scandinavian counterparts, the British public cherishes it most when it is most (ii) _______.",
{A: 'A.commend',B: 'B.discount',C: 'C.emulate',D: 'D.egalitarian',E: 'E.anachronistic',F: 'F.regal',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：两个空格联立,不去模仿现代化的同类的国家,反而喜欢最过时的时 候.emulate 模仿,anachronistic 过时的. \n***翻译：因此,可能教训是英国民众在他们的王国最落伍的时候最珍视它,而不 是想让它模仿那些现代化的斯堪的纳维亚的同类国们."]}),

wx.setStorage({key: "364", data: ["365. The notion of film producers as the ogres of the movie business has proved an (i)_____one, but according to The Producers by Tim Adler, it is not always grounded in reality. Attacking what he calls the \"auteur myth\"-the idea of the director as the single purveyor of art in an industry otherwise peopled with (ii) _______-he places at the heart of his book an image of the producer, not the director, as the primary (iii)_____force in the development and production of a movie.",
{A: 'A.accurate',B: 'B.hypocritic',C: 'C.enduring',D: 'D.visionaries',E: 'E.profitmongers',F: 'F.innocents',G: 'G.financial',H: 'H.inertial',I: 'I.creative'},
"###解析：根据后文的 not always grounded,得知第一空同义重复 grounded, 所以第一空选 C 选项,第二空根据 attacking 得知这种 idea 是存在于一个负面 评价中,所以第二空选负评价词,正确答案选 E 选项,第三空根据作者攻击导 演,支持制片人的特点,得知第三空是正评价词,所以正确答案选 I 选项. enduring 持久的,profitmonger 谋利者,creative 创造性的. \n***翻译：将电影制片人当成是电影产业的恶魔的想法由来已久.但是根据 The Producers by Tim Adler 的说法,这在现实中并非总会发生.为了攻击他称之 为\"导演神话论\"(即在电影产业中导演是唯一传递艺术的人,但同时充满了 谋利者),他将制片人而不是导演放到他的书的最核心的部分,将他们当成是 电影产生和发行最具有创造性的力量 ."]}),

wx.setStorage({key: "365", data: ["366.  The (i)_____nature of the candidate\'s comments is calculated. As a long-standing target of critics who regard him as radical, he understands that he needs to be as (ii)_____as possible if he is to overcome those critiques and appear as a (iii)_____leader.",
{A: 'A.opprobrious',B: 'B.platitudinous',C: 'C.pugnacious',D: 'D.innocuous',E: 'E.truculent',F: 'F.supercilious',G: 'G.polarizing',H: 'H.cautious',I: 'I.conciliatory'},
"###解析：评论家认为他是一个激进分子,所以为了战胜这些评论,他必须表现 成激进的反义,所以他故意表现得守旧的,所以第一空选 B 选项,第二空也和 第一空广义同义,所以选 D 选项,第三空和第二空并列关系,所以选 I 选项. platitudious 陈腐的,innocuous 无害的,conciliatory 愿意和解的. \n***翻译：竞选人的评论中守旧的特征是故意的.作为一个长期被那些把他当成激 进分子的评论家的攻击对象,他知道他需要尽量的无害如果他想要战胜这些评 论而且成为一个和解型的领导的话."]}),

wx.setStorage({key: "366", data: ["367.  Joshua Gisemba Bagaka found that the pedagogical results of group projects and other engaged learning activities in Kenyan mathematics classroom were _______; such activities, then, may not be the best way of improving mathematics education.",
{A: 'A.overstated',B: 'B.counterintuitive',C: 'C.mixed',D: 'D.discouraging',E: 'E.inconsistent',F: 'F.inexplicable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：not be the best way of improving mathematics education 说明 对这种方法给予了负评价,所以在选项中找负评价,正确答案选 CE 选项. mixed 矛盾的,inconsistent 不一致的.\n***翻译：JGB 发现小组合作项目和其他在 K 数学教学教室中运用的其他学习活动 得到的教学成果是不一致的,所以这可能并不是个提升数学教学的最好方法."]}),

wx.setStorage({key: "367", data: ["368.  Architects may be more extroverted and therefore the more_______members of a bridge design team, but they are not always the most essential.",
{A: 'A.indispensable',B: 'B.conscientious',C: 'C.reliable',D: 'D.visible',E: 'E.valuable',F: 'F.salient',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和更加外向形成递进关系,更加外向的人应该是更加显著的人, 所以正确答案选 DF 选项.visible 明显的,salient 显著的. \n***翻译：建筑学家可能会更加性格外向,因此是更显著的桥梁设计团队的成员, 但他们并不是其中最必不可少的."]}),

wx.setStorage({key: "368", data: ["369.  Excessive focus on what might have been can cause in us feelings of restlessness and regret, but some scientists are beginning to think that fancying an alternative reality might have  _______ effects as well.",
{A: 'A.subtle',B: 'B.adverse',C: 'C.restorative',D: 'D.pleasurable',E: 'E.unfavorable',F: 'F.tonic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面对于这种事情给予了负评价 restlessness and regret,后面 but 转折,所以后面空格需要填入正评价,所以正确答案选 CF 选项. restorative 促进康复的,tonic 滋补的. \n***翻译：过度关注于曾经可能出现过什么会导致我们感到坐立不安并且后悔,但 是其他一些科学家开始认为幻想一个其他的可能事实可能也会让我们精神振 奋."]}),

wx.setStorage({key: "369", data: ["370.  Apparent flaws in the sculptor\'s work have not_______its respectful reception by most modern critics.",
{A: 'A.determined',B: 'B.controlled',C: 'C.undermined',D: 'D.prevented',E: 'E.overshadowed',F: 'F.precluded',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：语义推理题,明显的错误也没有妨碍受人尊敬的名声,正确答案选 DF 选项.prevent 阻碍,preclude 阻碍. \n***翻译：雕塑家的雕塑上面明显的瑕疵并没有阻碍这尊雕塑在现代评判者中博得 让人尊敬的名声."]}),

wx.setStorage({key: "370", data: ["371.The governor might conceivably find a genuine resolution to the budgetary dilemma, but she may be tempted to engage in a deception: a_______exercise in fiscal prudence.",
{A: 'A.rigorous',B: 'B.sparking',C: 'C.specious',D: 'D.blatant',E: 'E.convincing',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容来解析 deception,所以空格选一个 deception 的同 义词,正确答案选 C 选项.specious 看似正确实际错误. \n***翻译：州长可能能找到一个真正的对预算困境的决议,但她可能会想从事一个 骗局：一个财政审慎中看似正确实际错误的运用."]}),

that.setData({progress_percent:37}),wx.setStorage({key: "371", data: ["372. Without seeming unworldly, William James appeared wholly removed from the_______of society, the conventionality of academy.",
{A: 'A.ethos',B: 'B.idealism',C: 'C.romance',D: 'D.paradoxes',E: 'E.commonplaces',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题最简单的入手方法是看到空格和 the conventionality of academy 是同位语,所以选 conventionality 的同义词,所以正确答案选 E 选 项.还可以把 without 和 unworldly 的双重否定换成肯定,就成了看上去世 俗,但实际远离世俗,也能选出 E 选项.commonplace 寻常的东西. \n***翻译：不是表面上的不谙世事,威廉詹姆斯完全地脱离了社会中寻常的东西, 也就是学术中的因循守旧."]}),

wx.setStorage({key: "372", data: ["373. Convinced of the gravity of her poetry, Voigt must have found the reviews of her most recent collection (i) ______________reading: one amused reviewer thought that it was unrecognizable as poetry but decidedly (ii) ______________.",
{A: 'A.tempting',B: 'B.depressing',C: 'C.thrilling',D: 'D.inspiring',E: 'E.irritating',F: 'F.diverting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题从第二空入手,第二空根据句中的 amused 可以看出诗的特征就 是搞笑,所以第二空选 F 选项,第一空根据 gravity 和 diverting 的对比填出 B 选项,深信严肃,结果发现很搞笑,所以这个评论应该让 Voigt 这个人很沮 丧.depressing 令人沮丧的,diverting 有趣的. \n***翻译：深信她的诗歌的严肃性,Voigt 一定认为对她最近的诗集的评价令人沮 丧：一个被逗乐的评论家认为它不能说是诗歌但确实很有趣."]}),

wx.setStorage({key: "373", data: ["374. The author\'s best-selling book on Virginia Woolf is not (i)_____treatment of her subject; on the contrary, it presents (ii)_____portrait of the novelist, faults and all.",
{A: 'A.an idealized',B: 'B.a comprehensive',C: 'C.a compelling',D: 'D.an unflinching',E: 'E.a slapdash',F: 'F.an erudite',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空和后面的 faults 并列,所以第二空选 E 选项,第一空根据 on the contrary 取反可知选第二空的反义,所以第一空选 A 选项.idealized 完 美的,slapdash 草率的.\n***翻译：这个作者的关于 Virginia Woolf 的畅销书不是对 VW 的一个完美的讨 论；相反的,它呈现了对这个小说家一些草率的描述,还有错误和其他东西."]}),

wx.setStorage({key: "374", data: ["375. The new art museum\'s (i)_____building augurs well for that ambitious institution because it speaks of (ii)_____contemporary architecture on the part of the board of directors that may (iii)_____equal astuteness about contemporary art.",
{A: 'A.nondescript',B: 'B.outstanding',C: 'C.outdated',D: 'D.a discernment about',E: 'E.a hostility toward',F: 'F.an intoxication by',G: 'G.conceal',H: 'H.supplant',I: 'I.promise'},
"###解析：第二空根据后文的 equal astuteness 推知选 astuteness 同义,所以 第二空选 D 选项,第三空则同义重复前文的 speak of,所以第三空选 I 选项, 第一空根据后文特征倒推,后文说这个博物馆谈到洞察力,所以第一空必须体 现 discernment,答案选 B 选项.outstanding 卓越的,discernment 洞察力, promise 承诺. \n***翻译：新的艺术博物馆的卓越的建筑对于这个有雄心的机构来说是好预兆,因 为它谈及了由这些负责人体现出来的当代建筑的洞察力,这些负责人承诺了同 样的关于当代艺术的精明."]}),

wx.setStorage({key: "375", data: ["376.  The modern iron suspension bridge dates from the early nineteenth century, but it did not have (i)_____debut; many early suspension bridges were damaged, if not outright destroyed, by the wind. There were few (ii) _______, however, so the form (iii) _______.",
{A: 'A.a propitious',B: 'B.a conspicuous',C: 'C.an equivocal',D: 'D.obvious  parallels',E: 'E.practical alternatives',F: 'F.unnoticed  instances',G: 'G.declined',H: 'H.inspired',I: 'I.persisted'},
"###解析：many early suspension bridges were damaged 说明这些桥刚出现 的时候遭到了破坏,对应 damaged,第一空选 A 选项,注意 not 取反,第二空 是第一空的结果,被破坏之后,结果只能是选 E 选项,第三空是第二空的结果,没有可替代的,所以这种形式就保留下来了,第三空选 I 选项. propitious 幸运的,practical alternative 实用的其他选择,persist 持 续.\n***翻译：这个现代的铁吊桥源于 19 世纪早期,但是它没有幸运的初次登场.很多 早期的吊桥都被风损坏了,即使不是完全摧毁.然而,几乎没有实用的可替代 的,所以这个形式就保留下来了."]}),

wx.setStorage({key: "376", data: ["377.  It\'s hardly_______the committee calls for: rudimentary competence would be an improvement on the current chaos.",
{A: 'A.accountability',B: 'B.disarray',C: 'C.unruliness',D: 'D.faultlessness',E: 'E.loyalty',F: 'F.perfection',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说基本的能力就能改善混乱,说明委员会没有追求完美,正确答 案选 DF 选项.faultlessness 完美,perfection 完美. \n***翻译：这个委员会要求的绝不是完美,基本的能力就会改善现在的混乱形式."]}),

wx.setStorage({key: "377", data: ["378.  One of the vocalists who auditioned for a leading part in the local production of Sweeney Todd seemed to prefer_______to any attempt at producing a melody; a more unpleasant voice was hard to imagine.",
{A: 'A.warbling',B: 'B.imitating',C: 'C.improvising',D: 'D.shrieking',E: 'E.crooning',F: 'F.caterwauling',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：a more unpleasant voice was hard to imagine 的意思是\"很难想 想一个更难听的声音了\",所以空格要选体现不好听的特征,正确答案选 DF 选 项.shrieking 尖叫,caterwauling 尖叫. \n***翻译：一个在当地版的《理发师陶德》试音中作为领唱者的歌唱者看起来更喜 欢尖叫而不是优美旋律,很难想象一个更难听的声音了."]}),

wx.setStorage({key: "378", data: ["379.  Even if the story now seems a surprisingly innocuous overture to the author\'s later, more fully developed narrations, it_______some of the key traits of those bleaker tales.",
{A: 'A.avoids',B: 'B.belies',C: 'C.undercuts',D: 'D.anticipates',E: 'E.possesses',F: 'F.prefigures',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本文的逻辑是这个故事即使预示了一个 innocuous 的东西,也预示了 一个 bleaker 的东西,所以空格选 overture\"序曲\"的同义,正确答案选 DF 选项.anticipate 预示,prefigure 预示. \n***翻译：就算是这个故事现在看起来对于这个作者后来的,更加深入发展的叙 述,似乎出人意料般的毫无影响,它预示了后来的一些很重要的阴郁故事."]}),

wx.setStorage({key: "379", data: ["380.  While recognizing that recent reports of cyber warfare, phone-hacking scandals, and identity thefts have tended to accent the destructive connotation of the word, Sue Halpern maintains that \"hacking\" is such            term that its meaning nearly always derives from its context.",
{A: 'A.a generic',B: 'B.an inclusive',C: 'C.a positive',D: 'D.a subjective',E: 'E.an affirmative',F: 'F.a technical',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后通过 while 看出让步关系,前面强调了 destructive connotation,后文说 its meaning nearly always derives from its context 说明这个 hacking 还是通用的,不只是负面的,正确答案选 AB 选项. generic 普通的,inclusive 包容的. \n***翻译：当回顾最近的关于网络犯罪的报道,侵入电话中导致的丑闻,参与进来 的罪犯会倾向于强调对于这个世界造成的破坏性的暗示,SH 却保持认为\"侵 入\"是一个包容性很强的词,几乎所有这个词的含义都是源自于它的环境."]}),

wx.setStorage({key: "380", data: ["381.The idea of a \"language instinct\" may seem_______to those who think of language as the zenith of the human intellect and of instincts as brute impulses.",
{A: 'A.jarring',B: 'B.plausible',C: 'C.gratifying',D: 'D.inevitable',E: 'E.conciliatory',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：language as the zenith of the human intellect and of instincts as brute impulses 说明智力和天赋不是同一个东西,所以这里把 智力和天赋合成一个词就是矛盾的,能体现这个意思的选项是 A.jarring 不和谐的,刺耳的. \n***翻译：\"语言本能\"这个概念对那些认为语言是人类智慧的顶点、本能是野蛮 的冲动的人来说可能很刺耳."]}),

that.setData({progress_percent:38}),wx.setStorage({key: "381", data: ["382. The artist is known for making photographs that deal with politically charged subject matter, yet because her art is so evocative and open-ended, it would be wrong to characterize it as _______.",
{A: 'A.polemical',B: 'B.edifying',C: 'C.unobservant',D: 'D.innovative',E: 'E.ambiguous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说了他的艺术是 evocative and open-ended,所以空格如果是 前面的反义词才能得出 it would be wrong,所以空格选 evocative and open- ended 的反义词,open-ended 是开放式结尾的,polemical 有\"强烈支持和反 对\"的意思,也就是\"立场鲜明\",所以正确答案选 A. \n***翻译：这个艺术家因为拍了处理政治指控的主题的照片出名,然而因为她的艺 术是如此的挑逗性和开放式结尾的,因为把它归为立场鲜明的便是错误的做 法."]}),

wx.setStorage({key: "382", data: ["383. Nordhaus predicts that in the future we will increasingly be (i)_____ecological problems like global warming rather than (ii)_____them. We may, for example, make some headway in limiting emissions that contribute to warming, but much of our work will be in adapting to ecological problems and alleviating their effects.",
{A: 'A.managing',B: 'B.analyzing',C: 'C.transcending',D: 'D.solving',E: 'E.addressing',F: 'F.mitigating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应后面的 much of our work will be in adapting to ecological problems and alleviating their effects,所以第一空选 A 选 项.第二空比较难,主要是 DE 选项不好区分,注意 solve 是解决,address 是 处理,我们应该选 manage 递进词,所以 D 程度更深更好.manage 控制,经 营,solve 解决.\n***翻译：Nordhaus 猜测说未来我们将控制更多的生态学问题比如气候变暖而不是 解决他们.比如说,我们可以做一些对于导致气候变暖的行为的限制,但我们 能做的大部分的事情都将是适应这些生态问题并且缓解它们的影响."]}),

wx.setStorage({key: "383", data: ["384. The contemporary trend whereby fashion designers flout mainstream tradition is unique only in its (i) _______; earlier fashion designers experience the same (ii)_____impulse, albeit in a less extreme form.",
{A: 'A.subversiveness',B: 'B.intensity',C: 'C.culpability',D: 'D.indiscriminate',E: 'E.iconoclastic',F: 'F.temperate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空根据 the same 可知是同义重复了前面的态度,前面的态度是 flout mainstream tradition,所以第二空选 E 选项.第一空根据 less extreme form 可知 unique 的是\"程度\",所以第一空选 B 选项.intensity 强 度,iconoclastic 反传统的. \n***翻译：当代潮流,时尚设计无视主流传统.仅仅在强度上独一无二.之前的时 尚设计师经历过同样的打破旧习的冲动,尽管是不那么极端的方式."]}),

wx.setStorage({key: "384", data: ["385. The characters in this comic strip fret about the (i)_____of their \"little counterculture lives\", especially when terrible things are happening in the world, but the cartoonist makes their lives (ii)_____in ways that do not seem (iii)_____at all. Real things happen here-births, deaths, adoptions, affairs, breakups, commitments, ceremonies, civil union-and they matter.",
{A: 'A.unpredictability',B: 'B.arduousness',C: 'C.triviality',D: 'D.stagnate',E: 'E.resonate',F: 'F.compete',G: 'G.outlandish',H: 'H.inconsequential',I: 'I.intangible'},
"###解析：第一空和第三空取同义,第三空和 they matter 取反,第一空和 little counterculture lives 取同,所以根据判断出第一三空体现的特征就 是\"渺小,不重要\",所以第一空选 C 选项,第三空选 H 选项,第二空要选取 一个正评价词,同义重复 they matter,所以第二空选 E 选项.triviality 琐 碎,resonate 有分量,inconsequential 无关紧要的.\n***翻译：连载漫画的角色对于他们\"微小的反主流文化生活\"而感到不安,尤其 是当严重的事情发生的时候,但是漫画家让他们的生活用看上去不是那么无关 紧要的方式拥有了分量.真实的事情在这里发生—出生,死亡,收养,恋爱, 分手,承诺,仪式,公民联盟—二者这些事真的有分量."]}),

wx.setStorage({key: "385", data: ["386.  A certain amount of theoretical frenzy about comics today is (i) ______________. After all, similar frenzies have been in other art forms in periods of their rapid development, for instance, the debates about painting that roiled Renaissance Italy. But such intellectual (ii)_____rarely precedes creative glory. On the contrary, it commonly indicates that an artistic (iii) _______, having been made and recognized, is over, and that a process of increasing strained emulation and diminishing returns has set in.",
{A: 'A.understandable',B: 'B.unprecedented',C: 'C.perplexing',D: 'D.torpor',E: 'E.conservatism',F: 'F.arousal',G: 'G.pitfall',H: 'H.tradition',I: 'I.breakthrough'},
"###解析：既然类似的冲动也曾长期出现在其他艺术形式中,说明一些理论的疯 狂不是什么令人惊讶的事,所以第一空选 A 选项,第二空根据 such 得知是同义 重复了前文的主要特征 frenzy,所以第二空选 F 选项,第三空比较难,注意语 法上先把 having been made and recognized 排开,主体就成了 it commonly indicates that an artistic+空格 is over,前面说疯狂几乎不在 creative glory 前面,说明这种疯狂是不能引起创造力的,所以这个地方表明\"创造 力\"is over,能体现创造力的词是 I 选项.understandable 可以理解的, arousal 冲动,breakthrough 突破. \n***翻译：一定量对于今天漫画杂志的理论的冲动是可以理解的.毕竟,类似的冲 动已经存在于其他艺术形式快速发展过程中很长时间了.例如,扰乱文艺复兴 时期意大利的绘画的争议.但是这种脑力上的冲动很少出现在创造性杰作之 前.相反,他通常表明艺术突破(已经被创造出来而且已经被意识到了)结束 了,而且还表明越来越不自然的模仿和衰减的重现过程."]}),

wx.setStorage({key: "386", data: ["387.  When studying the ancient Greek astronomers, Copernicus realized that despite the intrinsic beauty of many of their arguments, the ancients often made claims that_______logic.",
{A: 'A.refuted',B: 'B.questioned',C: 'C.influenced',D: 'D.swayed',E: 'E.defied',F: 'F.disregarded',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：despite 看出前后转折,意思是尽管言论内在不错,但是违背逻辑, 正确答案选 EF 选项.defy 违抗,disregard 忽视.注意 AB 不选,因为搭配不 对,不是去质疑逻辑.\n***翻译：当研究古希腊航天学家的时候,C 意识到抛去他们的议论中本身的美 感,这些古代学者通常会忽视他们说法中的逻辑."]}),

wx.setStorage({key: "387", data: ["388.  Although Wynne claims to recognize that_______evidence is available to make definitive statement, she offers them nonetheless, arriving at some sweeping generalizations.",
{A: 'A.concrete',B: 'B.finite',C: 'C.insufficient',D: 'D.indirect',E: 'E.conclusive',F: 'F.meager',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：sweeping generalizations 指的是\"笼统的概括\",definitive statement 无法得到是因为证据不足,所以只能做出笼统的概括. insufficient 不充足的,meager 不足的. \n***翻译：尽管韦恩声称要得到明确的答案目前证据还是不足,她仍然给予了他们 笼统的概括."]}),

wx.setStorage({key: "388", data: ["389.  In order to cultivate new repertoire, the music industry is providing a hearing for previously_______ composers.",
{A: 'A.idle',B: 'B.thwarted',C: 'C.celebrated',D: 'D.renowned',E: 'E.anonymous',F: 'F.obscure',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：想要新的剧目,所以必须要找之前不出名的创作家,正确答案选 EF 选项.anonymous 无名的,obscure 无名的. \n***翻译：为了能够培养新的曲目,音乐产业提供了之前并不是很有名的作曲家一 次发表见解的机会."]}),

wx.setStorage({key: "389", data: ["390.  Although many skeptics of the scientific theory_______critiques that have long since been disproved, some of the doubters arguably bring up valid points.",
{A: 'A.overlook',B: 'B.revise',C: 'C.recycle',D: 'D.utilize',E: 'E.neglect',F: 'F.rehash',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从后文的 some of the doubters arguably bring up valid points 看出前面的人没有带来 valid points,所以之前的人只能说在炒冷饭, 不创新,正确答案选 CF 选项.recycle 重新使用,rehash 炒冷饭. \n***翻译：尽管很多对于科学理论重讲的怀疑者评论科学理论一直以来都是反驳 的,抱怀疑态度的人提出了更加有效的观点."]}),

wx.setStorage({key: "390", data: ["391.The medical professor\'s thesis-hardly new, but rarely_______by a faculty members of his distinction-is that patients are more than the sum of their symptoms and systems.",
{A: 'A.discounted',B: 'B.ignored',C: 'C.subverted',D: 'D.underestimated',E: 'E.espoused',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：hardly new 说明这个论文已经存在很久了,但是很少得到支持,空 格选 E 选项逻辑最通顺.espouse 支持,拥护. \n***翻译：医学教授的论文—不是什么新内容,但是几乎没有得到他同样地位的医 疗成员的支持—这个论文的内容是说病人不只是他们的症状和系统的总和."]}),

that.setData({progress_percent:39}),wx.setStorage({key: "391", data: ["392. Even if he wants to serve again-and given his obvious love for the job, the assumption among insiders is that he is more likely to stay than go-there is at least_______his serving another term.",
{A: 'A.impediment to',B: 'B.incentive for',C: 'C.precedent for',D: 'D.benefit in',E: 'E.rationale for',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前文 even if 之后的内容全部都是在描写他连任的有利条件,然后后 面转折,说还是客观存在一些阻碍,符合句子逻辑.正确答案选 A 选项. impediment 阻碍.注意 there is 是客观存在,所以选 E 不合适. \n***翻译：即使他想要继续任职—而且鉴于他对于工作明显的热爱和在圈内人中认 为他更可能留下的假设—但是至少还是会存在他一些继续连任的阻碍."]}),

wx.setStorage({key: "392", data: ["393. Memory-prompt technology such as online birthday reminders does more than enhance our recall abilities; it induces us to (i)_____ever more behaviors to automated processes. Witness the (ii)_____a program that allows us to create computer greeting cards for the entire year in one sitting.",
{A: 'A.delegate',B: 'B.ascribe',C: 'C.liken',D: 'D.controversy over',E: 'E.popularity of',F: 'F.sophistication of',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空考搭配,delegate to 是委托的意思.第二空根据 ever more behaviors 说明这个 program 现在很流行,所以第二空选 E 选项.delegate 委 托,popularity 流行.\n***翻译：memory—prompt 技术,比如在线生日提醒,不仅仅能增强我们的记忆能 力,也同样导致我们更多行为都委托给了自动化流程.看到这样一个程序的流 行,这个程序能允许我们能一次设置就用电脑创建全年的贺卡."]}),

wx.setStorage({key: "393", data: ["394. While people complain about their hectic lives and demanding schedules, one might be justified in suspecting that they are being somewhat (i) _______: compulsive busyness seems to be, for many, a source of (ii) _______.",
{A: 'A.disingenuous',B: 'B.guarded',C: 'C.dilatory',D: 'D.pride',E: 'E.despair',F: 'F.irritation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 justified in suspecting(合理怀疑)说明他们是不真 诚的,后面解释这种不真诚,忙碌对他们来说其实是骄傲的资本,第二空选 D 选项.disingenuous 不真诚的,pride 骄傲. \n***翻译：当人们抱怨他们的生活实在是太忙碌,还有那些强制性的安排时,人们 怀疑他们的言不由衷其实是合理的.强迫性忙碌,对于很多人来说,实际上是 骄傲自豪的来源."]}),

wx.setStorage({key: "394", data: ["395. Applications of the Endangered Species Act (ESA) have fared best in contexts in which habitat condition is closely linked to species condition and the cause of habitat degradation is easily identified. The achievements of the ESA in those contexts, however, have (i)_____that other uses of the act can (ii)_____that record even where such favorable conditions do not (iii) _______.",
{A: 'A.quelled the conviction',B: 'B.presaged the uncertainty',C: 'C.fostered the misconception',D: 'D.mitigate',E: 'E.duplicate',F: 'F.elucidate',G: 'G.vary',H: 'H.pertain',I: 'I.diminish'},
"###解析：此题需要带入的语义成分较重,大概意思是说 ESA 只能在栖息环境和 物种环境练习紧密的时候才能良好运行,所以这些成功的数据会让人错误的以 为说其他不存在上述两个条件的地方使用 ESA 也能成功,但事实上并不是这样 的,正确答案 CEH 选项.foster the misconception 推动了误解,duplicate 复制,pertain 从属于.\n***翻译：ESA 的运用在栖息地环境和物种环境紧密联系和栖息地衰落的原因很容 易被确定的背景下是进行得最好的.ESA 在这些环境下的成就却已经推动了这 样的一种误解,即是说其他对于这种行为的使用方法也能够复制之前的成果, 就算在这些有用的条件并不存在的地方."]}),

wx.setStorage({key: "395", data: ["396.  Scientific papers often (i)_____what actually happened in the course of the investigations they describe. Misunderstandings , blind alleys, and mistakes of various sorts will fail to appear in the final written accounts because (ii)_____is a desirable attribute when transmitting results in a scientific report and would be poorly served by (iii) _______.",
{A: 'A.amplify',B: 'B.misrepresent',C: 'C.particularize',D: 'D.transparency',E: 'E.efficiency',F: 'F.exhaustiveness',G: 'G.a comprehensive historical account',H: 'H.a purely quantitative analysis',I: 'I.an overly superficial discussion'},
"###解析：后文说误解,死胡同和错误没有出现在最终的论文中,说明科学论文 篡改了实际发生的内容,第一空选 B 选项,第二空根据后文说\"would bepoorly served by+第三空格\"和\"第二空格 is desirable\"说明二三空是反 义关系,而且第二空还要导致论文最终写的内容比发生的少,所以第二空选 E 选项,第三空选 G 选项.misrepresent 篡改,efficiency 效率, comprehensive 全面的. \n***翻译：科学论文经常篡改在论文描述的调查过程中实际发生的事情.各种各样 的误解,死胡同和错误最终没有出现在论文中,因为在科学论文中传播结果的 时候,效率是主要追求的属性,而且如果是一个全面的历史记录反而会帮倒 忙."]}),

wx.setStorage({key: "396", data: ["397.  In a number of instances, investors hoping to tap into the region\'s meteoric growth have instead faced problems ranging from unpredictable management practices to outright _______.",
{A: 'A.malfeasance',B: 'B.incompetence',C: 'C.fraudulence',D: 'D.capriciousness',E: 'E.hysteria',F: 'F.impulsiveness',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：unpredictable management practices 和空格都是体现 problems 的,而且 outright 说明空格要递进,所以答案选 AC 选项.malfeasance 渎 职,不法行为,fraudulence 欺诈. \n***翻译：在很多例子中,投资者希望能够进入这个地区,极速的增长,反而面临 从无法预测的管理操作到完全渎职各种问题."]}),

wx.setStorage({key: "397", data: ["398.  To call Kermode the finest English critic of his generation would be a_______compliment, since not many of its population are professionally engaged in literary criticism.",
{A: 'A.sincere',B: 'B.backhanded',C: 'C.paltry',D: 'D.heartfelt',E: 'E.meager',F: 'F.plausible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从事文学评论的人很少,所以说他是最好的这种说法有一定局限性, 所以正确答案选 CE 选项.paltry 无价值的,meager 缺乏的.(此题道理大概 类似我们平时讲的笑话,你跑得最快,虽然比赛只有两个人,还有一个是瘸 子).\n***翻译：讲 K 视为他那个时代中最棒的英国批判学家实在是个不可取的称赞,因 为并那个时期并没有很多人涉足文学批判."]}),

wx.setStorage({key: "398", data: ["399.  Even though the original settlement may not hold up, it at least proves that the deadlock can be broken and that a hitherto_______party is ready to bargain.",
{A: 'A.implacable',B: 'B.unyielding',C: 'C.impeccable',D: 'D.flawless',E: 'E.unqualified',F: 'F.capricious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应前文的 deadlock,之前是僵局,现在可以讨价还价了,正 确答案选 AB 选项.implacable 难和解的,unyielding 不屈的. \n***翻译：尽管最初的解决办法可能不能解决问题,但它,最少,能够证明这个僵 局能够被打破,并且迄今为止这个不屈服的党派已经准备开始讨价还价了."]}),

wx.setStorage({key: "399", data: ["400.  In sharp contrast to the novel\'s scenic realism and precisely characterized figure is its persistent philosophical _______.",
{A: 'A.naturalism',B: 'B.abstraction',C: 'C.generality',D: 'D.impartiality',E: 'E.sincerity',F: 'F.objectivity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后取反,前面特征是 scenic realism and precise characterized figure,所以后面特征选 BC 选项.abstraction 抽象, generality 笼统. \n***翻译：和这个小说中的舞台真实性还有人物的准确描述极度相反的是它固执的 哲学上的抽象笼统的东西."]}),

wx.setStorage({key: "400", data: ["401.Many creative photographers were delighted to find in instant photography a mode that encouraged them to stop viewing photography as_______and start viewing it as something they could handle with spontaneity, even derision.",
{A: 'A.sacrosanct',B: 'B.ephemeral',C: 'C.malleable',D: 'D.egalitarian',E: 'E.autonomous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：stop viewing photography 和 start viewing it as something 能 看出空格和 something 后面的内容是取反,后面的内容是 they could handle with spontaneity, even derision,核心词是\"derision 嘲笑\",所以前面空格要选正评价词,正确答案选 A 选项.sacrosanct 神圣不可改变的. \n***翻译：很多有创意的摄影师很高兴的在即时摄影中发现了一种激励他们的模 式,使得他们停止将摄影视为神圣不可侵犯的并且开始将摄影视为一种他们能 够自然而然掌握的,甚至是可以嘲弄的东西."]}),

that.setData({progress_percent:40}),wx.setStorage({key: "401", data: ["402. Consolidating memory is not instantaneous or even _______: every memory must be encoded and moved from short-term to long-term storage, and some of these memories are, for whatever reason, more vividly imprinted than others.",
{A: 'A.salutary',B: 'B.deliberate',C: 'C.sequential',D: 'D.momentary',E: 'E.inevitable',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：否定递进是弱递进,所以这里的逻辑是\"不是立即发生,甚至都不是 一定发生的\",所以正确答案选 E 选项.inevitable 必然的. \n***翻译：加固记忆不是立即的甚至都不是必然的：每一个记忆必须被编码而且从 短期变成长期的储存,而且一些记忆,不知道什么原因,比其他记忆铭刻得更 加清晰."]}),

wx.setStorage({key: "402", data: ["403. The reclusive clergyman may have lived and died in melancholy, but this doesn\'t seem to have (i)_____his genius in any way. On the contrary, we find ourselves wondering whether his genius wasn\'t (ii)_____in some mysterious way by his mood.",
{A: 'A.influenced',B: 'B.hampered',C: 'C.triggered',D: 'D.served',E: 'E.controlled',F: 'F.identified',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：The reclusive clergyman may have lived and died in melancholy 是负评价,后面转折说明这个负评价没有阻碍他的 genius,所以第 一空选 B 选项,第二空根据 on the contrary 得知要选正评价,注意 whether wasn’t 就是 whether 的意思,所以第二空选 D 选项.hamper 阻碍,serve 帮 助. \n***翻译：这个封闭的牧师既生活又死于忧郁,但这似乎并没有阻碍他的才赋.相 反的,我们发现我们往往会对他的天赋究竟是不是被他的这种情绪帮助了产生 疑惑."]}),

wx.setStorage({key: "403", data: ["404. The museum\'s compelling new architectural exhibition looks at eleven projects around the world that have had major (i)_____impacts despite modest budgets. It is part of (ii)_____in the museum\'s architecture and design department, which in the past has championed architecture\'s artistic value over its real-world consequences.",
{A: 'A.social',B: 'B.aesthetic',C: 'C.critical',D: 'D.an emphasis on theory',E: 'E.a shift in philosophy',F: 'F.a rejection of pragmatism',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：过去支持 artistic value 而不是 real-world consequences,说明 现在的态度改变了,所以第二空选 E 选项,第一空根据 new 可知道是描述现在 的特征,所以现在的重心和过去相反,应该强调 real-world,所以第一空选 A 选项.social 社会地位的,a shift in philosophy 理念的改变. \n***翻译：博物馆新的引人入胜的建筑展着眼于十一个世界各地有着主流社会影响 但花费不高的项目.这是一部分博物馆建筑与设计部门观念的改变,它过去是 \"建筑的艺术价值高于它现实世界重要性\"的拥护者."]}),

wx.setStorage({key: "404", data: ["405. Even the reader acquainted with the outlines of Pushkin\'s biography will be (i) _______ the (ii)_____so vividly conveyed in Binyon\'s biography. Not only was Pushkin\'spersonal correspondence intercepted and his movements (iii) _______, but Tsar Nicholas I\'s decision to oversee Pushkin\'s career obliged Pushkin to submit all his manuscripts for inspection.",
{A: 'A.attracted by',B: 'B.confused by',C: 'C.struck by',D: 'D.suffocating lack of creative freedom',E: 'E.concern for contemporary society',F: 'F.underlying sense of historical change',G: 'G.ignored',H: 'H.monitored',I: 'I.commended'},
"###解析：even 在这里让步,所以空格要选取 acquainted with 的反义,所以 第一空选 C 选项,第二空对应后文的 personal correspondence intercepted,说明这个人没有自由,所以第二空选 D 选项,第三空和 personal correspondence intercepted 并列,所以选 H 选项.struck by 对...感到惊讶,suffocating lack of creative freedom 令人窒息的缺乏创 造性自由,monitor 监视.\n***翻译：就算是熟悉 P 传记的纲要的人也会对 B 传记中如此生动呈现的令人窒息 的缺乏创造性自由感到惊讶.不仅 P 的个人信件被拦截,他的活动被监视,而 且 TNI 监视 P 的事业的行动让 P 只能把所有的手稿上交进行审查."]}),

wx.setStorage({key: "405", data: ["406.  The notion of film producers as the ogres of the movie business has proved an (i)_____one, but according to The Producers by Tim Adler, it is not always grounded in reality. Attacking what he calls the \"auteur myth\"-the idea of the director as the single purveyor of art in an industry otherwise peopled with (ii) _______-he places at the heart of his book an image of the producer, not the director, as the primary (iii)_____force in the development and production of a movie.",
{A: 'A.accurate',B: 'B.hypocritic',C: 'C.enduring',D: 'D.visionaries',E: 'E.profitmongers',F: 'F.innocents',G: 'G.financial',H: 'H.inertial',I: 'I.creative'},
"###解析：根据后文的 not always grounded,得知第一空同义重复 grounded, 所以第一空选 C 选项,第二空根据 attacking 得知这种 idea 是存在于一个负面 评价中,所以第二空选负评价词,正确答案选 E 选项,第三空根据作者攻击导 演,支持制片人的特点,得知第三空是正评价词,所以正确答案选 I 选项. enduring 持久的,profitmonger 谋利者,creative 创造性的. \n***翻译：将电影制片人当成是电影产业的恶魔的想法由来已久.但是根据 The Producers by Tim Adler 的说法,这在现实中并非总会发生.为了攻击他称之 为\"导演神话论\"(即在电影产业中导演是唯一传递艺术的人,但同时充满了 谋利者),他将制片人而不是导演放到他的书的最核心的部分,将他们当成是 电影产生和发行最具有创造性的力量 ."]}),

wx.setStorage({key: "406", data: ["407.  Her attempts to wrest fiction free from traditional constraints like plot and character were never entirely popular with readers; nonetheless, her fiction has had_______influence on critical theory, novel, cinema, and even psychology.",
{A: 'A.a studied',B: 'B.a negligible',C: 'C.a decisive',D: 'D.an unmistakable',E: 'E.an insignificant',F: 'F.a restorative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后转折,所以空格和 never entirely popular with readers 取 反,空格选一个体现正面的词,正确答案选 CD 选项.decisive 毋庸置疑的, unmistakable 毋庸置疑的. \n***翻译：她想要努力让科幻小说不受传统(例如情节和角色)的限制的尝试从来 没有在读者中收到欢迎.然而,她的科幻小说已经有了对于批判理论,小说, 电影甚至是哲学毋庸置疑的影响."]}),

wx.setStorage({key: "407", data: ["408.  The physics graveyard is strewn with the skeletons of failed theories, unexplained effects, and anomalous particles that briefly_______the research spotlight, then rapidly fade from view.",
{A: 'A.douse',B: 'B.intensify',C: 'C.perpetuate',D: 'D.capture',E: 'E.extinguish',F: 'F.secure',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：skeletons of failed theories, unexplained effects, and anomalous particles 这些东西体现了出现过但后来又被否决的理论等,空格 体现曾经出现,rapidly fade from view 体现后来消失,正确答案选 DF 选 项.capture 抓住,secure 获取.(注意 secure 的熟词僻意) \n***翻译：物理学的墓地充满了失败理论,未解释的效力和异常粒子的骨架,这些 东西曾经都短暂抓住过研究的目光,然后快速逃离了视野."]}),

wx.setStorage({key: "408", data: ["409.  The media have constantly disparaged the governor\'s competence and have found a public only too eager to applaud their _______.",
{A: 'A.assiduousness',B: 'B.stupefaction',C: 'C.mockery',D: 'D.incredulity',E: 'E.certitude',F: 'F.derision',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：their 指代的是前面的媒体,所以空格同义重复媒体的态度 disparage,所以正确答案选 CF 选项,mockery 嘲笑,derision 嘲笑. \n***翻译：媒体长期鄙视政府的能力而且已经发现公众太急切而没法去赞扬他们(媒体)的嘲笑."]}),

wx.setStorage({key: "409", data: ["410.  Science is arguably a very high-minded pursuit, but that is not to say that all of its practitioners are _______, as numerous articles alleging overly generous pharmaceutical industry payments to medical researchers have tried to show.",
{A: 'A.conventional',B: 'B.clever',C: 'C.unimpeachable',D: 'D.ingenious',E: 'E.blameless',F: 'F.predictable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复 high-minded,所以正确答案选 CE 选项. unimpeachable 无可指责的,blameless 无可指责的. \n***翻译：科学应该是个高尚的追求,但这并不是说所有的实践者都是无可指责 的,因为众多的文章都在描述过度慷慨的制药业给医疗研究者的高昂的工资."]}),

wx.setStorage({key: "410", data: ["411.Some ethicists worry that a deeper understanding of the brain may be tantamount to       ; if we discover that free will is an illusion of neural circuitry, how will we hold people responsible for their actions?",
{A: 'A.vindication',B: 'B.proscription',C: 'C.ministration',D: 'D.valediction',E: 'E.exculpation',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：if we discover that free will is an illusion of neural circuitry, how will we hold people responsible for their actions 说明 空格要选入一个词表示\"可以不用为行为负责\",那么对应的选项是 E 选项. 注意 AE 选项的区别,vindication 证明清白(不知道是否做了错事),exculpation 开脱罪行(已经做了错事). \n***翻译：一些道德学家担心关于大脑的更深刻的认知相当于开脱罪行,如果我们 发现我们的自由意志只是神经元回路导致的幻觉,我们要怎么对自己的行为负 责呢？"]}),

that.setData({progress_percent:41}),wx.setStorage({key: "411", data: ["412. Instead of demonstrating the_______of archaeological applications of electronic remote sensing, the pioneering study became, to some skeptics, an illustration of the imprudence of interpreting sites based on virtual archaeology.",
{A: 'A.ubiquity',B: 'B.limitation',C: 'C.promise',D: 'D.redundancy',E: 'E.complexity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：instead of 说明空格和后面的内容要取反,后面的主要评价此是 \"imprudence 不谨慎\",所以真确答案选 C 选项.promise 这里考了熟词僻 意,翻译为\"成功的迹象\". \n***翻译：这个开创性的研究对一些质疑者来说成了一种对用虚拟考古理解遗迹的 草率的说明,而没有展现电子遥感在虚拟考古学上应用的前景."]}),

wx.setStorage({key: "412", data: ["413. Partly because of Lee\'s skill at synthesizing (i)_____trends drawn from many fields of study, her theories appeared to present, with uncanny aptness, ideas already (ii)_____in the minds of her contemporaries.",
{A: 'A.superseded',B: 'B.irrelevant',C: 'C.emergent',D: 'D.discredited',E: 'E.well established',F: 'F.half-formulated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后因果关系,所以第一空和第二空要广义取同,所以正确答案选 CF 选项.emergent 新兴的,half-formulated 半成的.\n***翻译：部分是因为 Lee 能综合从许多领域的研究中得出的刚浮现的研究趋势, 她的理论似乎用惊人的能力呈现了同时代认为只是半成品的东西."]}),

wx.setStorage({key: "413", data: ["414. Recent scholarship has questioned the (i)_____of tropical forests around the world. Archaeologists have shown, for example, that the largest contiguous tract of what was thought to be virgin rain forest in the southern Amazon had been transformed into a cultural parkland before European contact, and many of the forest islands in West Africa\'s savanna forest transition zone are (ii)_____as well.",
{A: 'A.diversity',B: 'B.naturalness',C: 'C.sustainability',D: 'D.isolated',E: 'E.endangered',F: 'F.anthropogenic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面的例子中 virgin rain forest 变成了 cultural parkland,说 明第一空质疑的就是 virgin,所以第一空选 B 选项.第二空根据 as well 推出 第二空要选前面的同义,所以第二空选 F 选项.naturalness 自然, anthropogenic 人为的. \n***翻译：最近的学术研究质疑了世界上热带森林的天然性.比如,考古学家表示 最大片连绵不断的南亚马逊的原始热带雨林在欧洲人接触之前其实就已经被变 成了一个文化园地,并且许多西非的亚热带稀树草原森林过渡带的森林岛屿也 是人为的."]}),

wx.setStorage({key: "414", data: ["415. Viewing people as ‘\'social atoms\'\' that obey rather simple rule (which are not unlike the laws of physics), one may discover certain (i) _______. Take, for example, the way channels emerge when people move in crowds. In the midst of initially (ii)_____movements, one person begins to follow another-in an effort to avoid collisions-and streams of movement emerge. As more people join in, there is greater pull on others to join the flow, and the particular channels become (iii) _______.",
{A: 'A.apparent contradictions',B: 'B.unproductive tendencies',C: 'C.lawlike regulations',D: 'D.inflexible',E: 'E.straightforward',F: 'F.chaotic',G: 'G.self-defeating',H: 'H.self-aggrandizing',I: 'I.self-perpetuating'},
"###解析：例子描写了一个人类历史上普遍存在的规律,所以第一空选 C 选项, 第二空根据 in an effort to avoid collisions 推知,最初的运动是导致碰撞 的,所以第二空选 F 选项,第三空越来越多的人加入这个运动中,说明很多渠 道能够自我保存下来了,注意第三空不选 H 是因为第一空那里说的是 lawlike regulations,aggrandize 用于修饰 regulations 不合适.lawlike regulations 类似法律的规定,chaotic 混乱的,self-perpetuating 自续的. \n***翻译：把人类视为服从相当简单的规则(可以说很像物理法则)的社会原子, 所以任何人都可能发现某种类似法律的规定.例如,当人们乱成一团的时候,渠道产生的方法.在最初混乱的活动中,一个人最初是跟着另外一个人(为了 避免碰撞)所以很多的活动分支就出现了.随着越来越多的人加入到这个过程 中来,就有越来越大的推动力让其他人进入这个运动,而且某些渠道就变得自 我维持下来了."]}),

wx.setStorage({key: "415", data: ["416.  Fifty pages of footnotes, some of them presenting quite lengthy bibliographies, suggest that very few pertinent sources on the Black Arts movement in literature have (i)_____Thompson\'s search; (ii) _______, the text makes it clear that the author\'s examination of these sources has been similarly (iii) ______________.",
{A: 'A.eluded',B: 'B.characterized',C: 'C.motivated',D: 'D.moreover',E: 'E.however',F: 'F.consequently',G: 'G.valuable',H: 'H.timely',I: 'I.exhaustive'},
"###解析：五十页的脚注说明资料很全面,所以几乎没有任何资料都能够绕开 T 的研究,所以第一空选 A 选项,第二空根据后文的 clear,说明后面递进了, 有一种\"不仅不能回避,而且还清楚地说明了\"的意味,所以第二空选 D 选 项,第三空根据 similarly 得知空格重复前文的特征,所以第三空选体现\"全 面\"的意思的词,第三空选 I 选项.elude 回避,moreover 此外,exhaustive 全面的. \n***翻译：五十页的脚注(其中一些呈现出相当长的参考文献)表明文学中几乎没 有相关关于黑人艺术运动的资料来源能够回避 T 的研究.此外,这些文字还清 楚地表明作者对于这些资料来源的调查是同样地全面的."]}),

wx.setStorage({key: "416", data: ["417.  The town\'s air was consistently     : depending on the breeze, one might be greeted with the sour effluvia of twenty breweries, choking fumes from the coal factory, or brackish smells from the nearby river.",
{A: 'A.malodorous',B: 'B.toxic',C: 'C.redolent',D: 'D.benign',E: 'E.noisome',F: 'F.anodyne',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 sour effluvia,choking fumes 和 brackish smells,所 以正确答案选 AE 选项.malodorous 难闻的,noisome 恶臭的. \n***翻译：这个城市的空气持续性的恶臭：依靠于微风,人们可能会迎接来自于二 十个啤酒厂的酸臭味,从煤炭工厂来的令人窒息的烟雾还有附近河的微咸的味 道."]}),

wx.setStorage({key: "417", data: ["418.  One of the vocalists who auditioned for a leading part in the local production of Sweeney Todd seemed to prefer_______to any attempt at producing a melody; a more unpleasant voice was hard to imagine.",
{A: 'A.warbling',B: 'B.imitating',C: 'C.improvising',D: 'D.shrieking',E: 'E.crooning',F: 'F.caterwauling',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：a more unpleasant voice was hard to imagine 的意思是\"很难想 想一个更难听的声音了\",所以空格要选体现不好听的特征,正确答案选 DF 选 项.shrieking 尖叫,caterwauling 尖叫. \n***翻译：一个在当地版的《理发师陶德》试音中作为领唱者的歌唱者看起来更喜 欢尖叫而不是优美旋律,很难想象一个更难听的声音了."]}),

wx.setStorage({key: "418", data: ["419.  Some experts estimate that the recreational salmon fishery in British Columbia contributes more to the province\'s economy than the commercial salmon fishery does-a surprising statistic given the political commercial_______of the fishery in the province.",
{A: 'A.naïveté',B: 'B.prominence',C: 'C.supremacy',D: 'D.ingenuousness',E: 'E.salience',F: 'F.resurgence',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：说到 surprising 说明实际情况和预想不一致,尽管商业性质的渔业 显著的地位,但是休闲性质的渔业却贡献更多,所以答案选 BE.prominence 显 赫,salience 显著. \n***翻译：一些专家估算,休闲的鲑鱼业在不列颠哥伦比亚省比商业鲑鱼业对于该 省更加有贡献,这是一个惊人的统计结果,鉴于政治商业渔业的重要性."]}),

wx.setStorage({key: "419", data: ["420.  In 1884, Sewall and Dow agreed to join Roosevelt in the Dakota territory for reasons that appear to have been : Sewell later recalled that Roosevelt guaranteed them a share of anything made in his cattle business.",
{A: 'A.pecuniary',B: 'B.straightforward',C: 'C.economic',D: 'D.selfless',E: 'E.quixotic',F: 'F.altruistic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说 guaranteed them a share 说明这些原因是关于利益方面 的,所以正确答案选 AC 选项.pecuniary 金钱的,economic 有利可图的. \n***翻译：在 1884,S 和 D 同意加入罗斯福在达科塔的领土,原因似乎是关于金钱 利益的：S 后来回忆说,罗斯福保证他们在他的养牛生意上给他们分红."]}),

wx.setStorage({key: "420", data: ["421.Of all her works, this play is the most dependent on the dramatic conventions of the author\'s day: it was both the least_______of her plays and the most commercially successful.",
{A: 'A.experimental',B: 'B.popular',C: 'C.formulaic',D: 'D.lucrative',E: 'E.contemporary',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：dependent on the dramatic conventions 对应 least+空格,所以空 格要选 conventions 的反义,正确答案选 A 选项.experimental 创新的,注意 这里考了这个单词不常见的意思. \n***翻译：在她所有的作品之中,这部戏是最依赖于艺术惯例的,它既是她所有喜 剧中最少创新的,也是其中获得最大商业成功的一部戏."]}),

that.setData({progress_percent:42}),wx.setStorage({key: "421", data: ["422. Carmen\'s affection for her sister, though not _______, was plainly too great to permit a painless departure.",
{A: 'A.unsteady',B: 'B.ambivalent',C: 'C.careless',D: 'D.unbounded',E: 'E.noticeable',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：was plainly too great 和 though 推出 not+空格要取 plainly too great 的反义,所以空格要取 plainly too great 的同义,但不能是完全同 义,所以正确答案选 D 选项.unbounded 无限的,此题 E 选项 noticeable 不选 是因为 noticeable 和 plainly 完全同义,所以自相矛盾了.\n***翻译：Carmen 对于她姐妹的喜爱,尽管不是无限制的,但明显还是太强烈了以 至于无法有无痛苦的离别."]}),

wx.setStorage({key: "422", data: ["423. It can be (i)_____to read Margaret Fuller\'s travel writing, as she produced accounts of her travel that (ii)_____conventions of bourgeois travel narrative, often capitulating to the most well-worn clichés of the genre at precisely the moments when she sought most energetically to cast them off in favor of some new, more passionate mode of discernment.",
{A: 'A.frustrating',B: 'B.enlightening',C: 'C.exciting',D: 'D.challenged',E: 'E.conformed to',F: 'F.established',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题第二空比较容易,同义重复了 capitulating to,所以第二空选 E 选项,第一空根据后文的意思来推,at precisely the moments when 表明正 当她想要丢弃旧东西拿起新东西的时候她却拿起了旧东西,所以这件事是让人 frustrating 的,第一空选 A 选项.frustrating 令人沮丧的,conformed to 遵从. \n***翻译：读玛格丽特的旅行日记会让人十分沮丧.因为她用大量遵从资产阶级旅 行日记来写的,正当她努力地想放弃腐朽的东西拿起新的东,更有激情的认知 模式的时候,她却经常屈服于最腐朽的体裁."]}),

wx.setStorage({key: "423", data: ["424. So, perhaps the lesson is that rather than wanting their monarchy to (i)_____its modernized Scandinavian counterparts, the British public cherishes it most when it is most (ii) _______.",
{A: 'A.commend',B: 'B.discount',C: 'C.emulate',D: 'D.egalitarian',E: 'E.anachronistic',F: 'F.regal',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：两个空格联立,不去模仿现代化的同类的国家,反而喜欢最过时的时 候.emulate 模仿,anachronistic 过时的. \n***翻译：因此,可能教训是英国民众在他们的王国最落伍的时候最珍视它,而不 是想让它模仿那些现代化的斯堪的纳维亚的同类国们."]}),

wx.setStorage({key: "424", data: ["425. Unquestionably, the particular forms that folly and cruelty take in Jane Austen\'s novels are (i)_____the character\'s social milieu, which was also Austen\'s own; but to realize that one\'ssociety motivates people in unfortunate ways is not necessarily to (ii)_____it, for the alternatives, though different, might be no more (iii) _______.",
{A: 'A.shaped by',B: 'B.removed from',C: 'C.unrecognizable in',D: 'D.expose',E: 'E.condemn',F: 'F.rationalize',G: 'G.salutary',H: 'H.corrosive',I: 'I.realistic'},
"###解析：第一空对应后文的 one’s society motivates people in unfortunate ways,说明社会环境导致了 folly 和 cruelty,所以第一空选 A 选项,第二空通过 necessarily 得知是重复前文的评价此 unfortunate,所以 第二空选 E 选项,第三空给出原因,不去谴责这个社会是因为其他的也好不到 哪去,所以第三空选 G 选项.\n***翻译：毋庸置疑,JA 小说中的愚蠢和残忍独特形式是被任务的社会环境塑造 的,A 也正是生活在这样的社会环境中.但是要意识到一个人的社会会用不幸 的方式去调动人们的积极性不是一定要去谴责这个社会,因为其他的选择,尽 管不尽相同,但是却可能不会更有益了.(作者非常明白五十步笑百步的典 故)."]}),

wx.setStorage({key: "425", data: ["426.  While some commentators suggest that abstraction and complexity in scientific research are signs that a given direction is misguided, Lisa Randall, a professor of physics at Harvard, counters that these qualities instead reflect the success of human ingenuity in (i)_____the increasingly(ii)_______ challenges that nature presents. They can, however, make it more (iii)_____to communicate scientific developments, even to colleague.",
{A: 'A.creating',B: 'B.meeting',C: 'C.eschewing',D: 'D.difficult',E: 'E.conspicuous',F: 'F.pragmatic',G: 'G.challenging',H: 'H.unproductive',I: 'I.advantageous'},
"###解析：LR 反对之前的观点,所以第一空要体现人类聪明才智能够克服一下 挑战,所以第一空只能选 B 选项,这里的 meet 要理解为\"应对\",第二空对应 前文的 abstraction and complexity,所以选 D 选项,第三空 however 再一次 转折,所以空格又需要表明一个 abstraction and complexity 造成的负面的评 价,所以选 G 选项最合适.meet 应对,difficult 困难的,challenging 有挑 战性的. \n***翻译：尽管一些评论员认为科学研究中的抽象和复杂表明给定的方向是错误 的,但是一个名叫 LR 的哈佛大学物理学教授却反对说这些性质其实反映了人类 聪明才智在应对自然界呈现的越来越困难的挑战上的成功.然而,它们却让交 流科学发展变得更加有挑战性了,即便是对同事来说也依然这样."]}),

wx.setStorage({key: "426", data: ["427.  Because movie studios, under pressure to generate international sales, have favored big-budget pictures with fantasy plots, the representation of everyday domestic life has largely been  _______ other media, such as television and literature.",
{A: 'A.left to',B: 'B.ceded to',C: 'C.ascribed to',D: 'D.attributed to',E: 'E.substituted for',F: 'F.replaced with',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：电影只关注 big-budget,所以 everyday 的东西都让给了电视和文 学,所以正确答案选 AB.left to 让给,ceded to 让给. \n***翻译：因为电影影棚处于引发国际性销售的压力之下,喜欢大制作的画面以及 幻想一样的情节,所以每天当地的生活的表达被大量的交给了其他的媒介,比 如电视媒体还有文学."]}),

wx.setStorage({key: "427", data: ["428.  In order to cultivate new repertoire, the music industry is providing a hearing for previously_______ composers.",
{A: 'A.idle',B: 'B.thwarted',C: 'C.celebrated',D: 'D.renowned',E: 'E.anonymous',F: 'F.obscure',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：想要新的剧目,所以必须要找之前不出名的创作家,正确答案选 EF 选项.anonymous 无名的,obscure 无名的. \n***翻译：为了能够培养新的曲目,音乐产业提供了之前并不是很有名的作曲家一 次发表见解的机会."]}),

wx.setStorage({key: "428", data: ["429.  It\'s hardly_______the committee calls for: rudimentary competence would be an improvement on the current chaos.",
{A: 'A.accountability',B: 'B.disarray',C: 'C.unruliness',D: 'D.faultlessness',E: 'E.loyalty',F: 'F.perfection',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说基本的能力就能改善混乱,说明委员会没有追求完美,正确答 案选 DF 选项.faultlessness 完美,perfection 完美. \n***翻译：这个委员会要求的绝不是完美,基本的能力就会改善现在的混乱形式."]}),

wx.setStorage({key: "429", data: ["430.  Contrary to certain recent analyses that paint a dire portrait of soil loss from farmland, a new study of surveying data reaching back to the 1930s shows that erosion rates have been steadily_______.",
{A: 'A.intensifying',B: 'B.waning',C: 'C.accelerating',D: 'D.worsening',E: 'E.declining',F: 'F.deteriorating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：contrary to 取反,前面的特征是 dire portrait,所以后面取反必 须是 erosion rates 不存在了,所以空格要选入体现\"消除,减弱\"等词,所 以正确答案选 BE 选项.wane 减弱,decline 衰落. \n***翻译：和一种最近的确切的,描绘悲惨的农地土壤流失的分析所相反的是,一 个研究回 1930 年代新的研究数据表示土地的流失率在稳定减少."]}),

wx.setStorage({key: "430", data: ["431.The science of astronomy was begun by amateurs and today remains dependent on their contributions, which are incisive by virtue of being_______by the a priori assumptions that often vitiate the work of professional research scientists.",
{A: 'A.characterized',B: 'B.unencumbered',C: 'C.supported',D: 'D.contradicted',E: 'E.inspired',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：by virtue of 是\"凭借\"的意思,根据后文的 that often vitiate the work of professional research scientists 得知空格要和 vitiate 取 反,选项能取反的是 BC 选项,但是此题根据语义不能选 C 选项,因为这种 assumptions 不能去支持业余研究者,最多对他们就是没有阻碍而已.正确答案选 B 选项,unencumbered 没有阻碍的. \n***翻译：天文学的研究最早起源于业余爱好者们,直到今天研究成果仍然有赖于 他们的贡献,这些贡献是很尖锐的,因为它不受之前的那些总是会导致专业研 究人员的工作被破坏的假说的阻碍."]}),

that.setData({progress_percent:43}),wx.setStorage({key: "431", data: ["432. Without seeming unworldly, William James appeared wholly removed from the_______of society, the conventionality of academy.",
{A: 'A.ethos',B: 'B.idealism',C: 'C.romance',D: 'D.paradoxes',E: 'E.commonplaces',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题最简单的入手方法是看到空格和 the conventionality of academy 是同位语,所以选 conventionality 的同义词,所以正确答案选 E 选 项.还可以把 without 和 unworldly 的双重否定换成肯定,就成了看上去世 俗,但实际远离世俗,也能选出 E 选项.commonplace 寻常的东西. \n***翻译：不是表面上的不谙世事,威廉詹姆斯完全地脱离了社会中寻常的东西, 也就是学术中的因循守旧."]}),

wx.setStorage({key: "432", data: ["433. The (i)_____to disseminate the vast scientific knowledge of our time to nonscientists shows real (ii)_____the extent of achievements humanity is capable of, like allowing a great work of art to molder in a warehouse.",
{A: 'A.failure',B: 'B.plan',C: 'C.willingness',D: 'D.pretentious regarding',E: 'E.sympathy toward',F: 'F.indifference to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：like allowing a great work of art to molder in a warehouse 说明后面对 achievement 是一种负面的态度,所以第二空选 D 选项,第一空根 据第二空倒推得知也应该是负评价,所以第一空选 B 选项.failure 失败, indifference 冷漠. \n***翻译：将大量我们这个时代的科学知识传播给不是科学家的大众的失败, 显示 了对于人类能取得的伟大成就真正的冷漠, 就像听任一件伟大的艺术品在仓库 中腐烂一样."]}),

wx.setStorage({key: "433", data: ["434. Unlike the elected branches of the United States government, where making personal connection with citizens is (i)_____and almost (ii)_____political efficacy, the United States Supreme Court continues to maintain that its members should communicate with the public almost exclusively through formal opinions-and even then through ceremonial rituals that date back to the nineteenth century.",
{A: 'A.frowned upon',B: 'B.rampant',C: 'C.disregarded',D: 'D.a requirement for',E: 'E.a detriment to',F: 'F.an irrelevance to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题最关键的是要看到 exclusively 一词,这个词说明最高法院接触 公众的途径少,再通过 unlike 可知分支机构接触公众的途径很多,almost 又 是递进关系,所以两个空都体现\"多\",而且前后要递进,所以正确答案选 BD 选项.rampant 疯长的,很多的,requirement 要求. \n***翻译：与美国政府的当选分支,一个与国民私交情况很频繁,甚至几乎成为为 政府效力的前提条件的机构不同,美国最高法院一直坚持其中成员与外界民众 只能通过公共方式进行交流,通过公共意见,或者是从十九世纪开始就有的仪 式."]}),

wx.setStorage({key: "434", data: ["435. A transformative scientific idea that emerged in the eighteenth century was the realization that slow, inexorable geological processes follow the basic laws of physics and chemistry. This seems (i)_____conclusion in hindsight, but its implication-that geological processes in the distant past must have (ii)_____these very same laws-was (iii)_____geologists in the eighteenth and nineteenth centuries.",
{A: 'A.an obvious',B: 'B.a significant',C: 'C.a controversial',D: 'D.followed',E: 'E.preceded',F: 'F.entailed',G: 'G.evident to',H: 'H.overlooked by',I: 'I.revolutionary for'},
"###解析：第一空和第三空根据 but 的转折关系可以推出是反义,第二空重复前 文的 follow,题目意思是说 18 世纪的地质活动遵从这些法则这件事很明显, 但是更早之前的地址活动也遵从这些法则就让人觉得是一个革命性的理论了.三个空格分别选 ADI 选项.obvious 明显的,follow 遵从,revolutionary 革 命性的.\n***翻译：出现在 18 世纪的一个革命性的科学理念是意识到缓慢且不可阻挡的过程 会遵从基本的物理化学法则.这在事后来看是明显的结论,但是它的暗示(在 遥远的过去的地质过程曾经一定遵从同样的法则)对于 18 世纪和 19 世纪的地 质学家来说是革命性的."]}),

wx.setStorage({key: "435", data: ["436.  It is possible for human to go 40 or more hours without sleep and still be able to (i) _______ information acquired at the beginning of the sleepless period. Thus, when we are considering a role for sleep in human memory consolidation, we are referring to a possible role in the (ii) ______________ encoding of information and optimizing of recall, not a (iii)_____of sleep for recalling events of the prior day.",
{A: 'A.legitimize',B: 'B.augment',C: 'C.disgorge',D: 'D.longer-term',E: 'E.acute',F: 'F.qualitative',G: 'G.requirement',H: 'H.surplus',I: 'I.facet'},
"###解析：still 一词表明长期不睡觉还能记住这些信息,能体现\"依然能记 住\"的意思的是 C 选项,第二空根据因果关系,既然我们知道超过 40 小时不睡 觉人们都能发出之前的记忆,说明记忆是很长期的,而不是仅仅回忆昨天发生 的事,句中 the prior day 和第二空也有反义对应,所以第二空选 D 选项,第 三空选 I 选项.disgorge 发出,longer-term 长期的,requirement 要求. \n***翻译：人类超过 40 小时不睡觉而且依然能够发出在无睡眠的前期获取的信息这 件事是有可能的.因此,当我们在考虑睡眠在人类记忆加强中的扮演的角色 时,我们指的是信息编制和回忆的完善的长期过程而不是要求睡觉来回忆前一 天事件."]}),

wx.setStorage({key: "436", data: ["437.  Communicating articulately is typically regarded as an aggressive, persuasive talent, but it can also be protective: it allows a certain_______closeness, conveying proximity while actually maintaining distance.",
{A: 'A.feigned',B: 'B.secretive',C: 'C.dubious',D: 'D.subtle',E: 'E.false',F: 'F.furtive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复后文的 conveying proximity while actually maintaining distance,所以正确答案选 AE 选项,这是一种虚假的亲密. feigned 假装的,false 假惺惺的. \n***翻译：能够发音清晰的交流被视作为典型的,有闯劲的,有说服性的才艺,但 它也能是有保护作用的,它允许了一种特定的假的钦慕感,让与之间的亲近, 但实际上却还是保留着距离."]}),

wx.setStorage({key: "437", data: ["438.  The Chavez Pass archaeological site was initially interpreted as indicative of_______society, since it was thought to have been at the center of a cluster of smaller, contemporary settlements that it presumably controlled.",
{A: 'A.an expansionist',B: 'B.a hierarchical',C: 'C.an urban',D: 'D.a heterogeneous',E: 'E.a diverse',F: 'F.a stratified',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：at the center of a cluster of smaller, contemporary settlements that it presumably controlled 说明这里的 site 是处于中心并 且通知外围,体现的是一种\"分层\"的感觉,正确答案选 BF 选项. hierarchical 分等级的,stratified 分阶层的.\n***翻译： CP 考古学网站一开始被理解为等级制度社会的一种象征.因为它本身 被视为在它完全统治的一群规模较小的当代定居点的中心."]}),

wx.setStorage({key: "438", data: ["439.  Although the essayist\'s arguments did not_______her most perceptive readers, the extreme subtlety of the paints she made explains why she was misinterpreted by most critics of her day.",
{A: 'A.convince',B: 'B.confound',C: 'C.entertain',D: 'D.persuade',E: 'E.perplex',F: 'F.enlighten',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：尽管言论没有让有洞察力的读者怎么样了,却让大部分评论家误解 了,所以其实空格选的是 misinterpret 的广义同义,正确答案选 BE 选项. confound 迷惑,perplex 使困惑. \n***翻译：尽管这个作者的议论并没有混淆她最敏锐的读者,但她描绘出的极端不 明显的内容解释了她为什么被她同时期大部分文学评论家所误解."]}),

wx.setStorage({key: "439", data: ["440.  Architects may be more extroverted and therefore the more_______members of a bridge design team, but they are not always the most essential.",
{A: 'A.indispensable',B: 'B.conscientious',C: 'C.reliable',D: 'D.visible',E: 'E.valuable',F: 'F.salient',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和更加外向形成递进关系,更加外向的人应该是更加显著的 人,所以正确答案选 DF 选项.visible 明显的,salient 显著的. \n***翻译：建筑学家可能会更加性格外向,因此是更显著的桥梁设计团队的成员, 但他们并不是其中最必不可少的."]}),

wx.setStorage({key: "440", data: ["441.The maps in this volume are meant not as guides but as _______: they are designed to make the reader think anew about the city.",
{A: 'A.adornments',B: 'B.references',C: 'C.truisms',D: 'D.provocations',E: 'E.valedictions',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：they are designed to make the reader think anew about the city 对应空格,正确选项是 D 选项.provocation 激怒,挑起,刺激.注意这 里的 provocation 没有用激怒这层意思. \n***翻译：在画卷中的地图并不是为了指引人们,而是为挑起人们一些东西.它被 创造来让人们重新认识这座城市."]}),

that.setData({progress_percent:44}),wx.setStorage({key: "441", data: ["442. Carmen\'s affection for her sister, though not _______, was plainly too great to permit a painless departure.",
{A: 'A.unsteady',B: 'B.ambivalent',C: 'C.careless',D: 'D.unbounded',E: 'E.noticeable',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：was plainly too great 和 though 推出 not+空格要取 plainly too great 的反义,所以空格要取 plainly too great 的同义,但不能是完全同 义,所以正确答案选 D 选项.unbounded 无限的,此题 E 选项 noticeable 不选 是因为 noticeable 和 plainly 完全同义,所以自相矛盾了.\n***翻译：Carmen 对于她姐妹的喜爱,尽管不是无限制的,但明显还是太强烈了以 至于无法有无痛苦的离别."]}),

wx.setStorage({key: "442", data: ["443. Argument may be an overly (i)_____word to apply to the gossamer contrivance that is A Summer of Humming birds. In what seems a self-conscious (ii)_____of its mascot the book flits from one subject or moment in history to another, following the various whims of its author.",
{A: 'A.archaic',B: 'B.imprecise',C: 'C.robust',D: 'D.repudiation',E: 'E.emulation',F: 'F.misrepresentation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空选 gossamer 的反义词,正确答案选 C 选项,第二空对应点是 后面的 flits from one subject or moment in history to another, following the various whims of its author,flits 就能体现 whim 的特 征,所以前后是模仿,正确答案选 E 选项.robust 强壮的,emulation 模仿. \n***翻译：议论文这个词,对于形容 a summer of humming bird 这样一个轻飘飘 的创造来说,恐怕太过强大.在看起来像是自觉对吉祥物的效仿中,这本书轻 快地跳跃于一个又一个主题或历史时刻之间,追随作者的奇思异想."]}),

wx.setStorage({key: "443", data: ["444. The contemporary trend whereby fashion designers flout mainstream tradition is unique only in its (i) _______; earlier fashion designers experience the same (ii)_____impulse, albeit in a less extreme form.",
{A: 'A.subversiveness',B: 'B.intensity',C: 'C.culpability',D: 'D.indiscriminate',E: 'E.iconoclastic',F: 'F.temperate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空根据 the same 可知是同义重复了前面的态度,前面的态度是 flout mainstream tradition,所以第二空选 E 选项.第一空根据 less extreme form 可知 unique 的是\"程度\",所以第一空选 B 选项.intensity 强 度,iconoclastic 反传统的. \n***翻译：当代潮流,时尚设计无视主流传统.仅仅在强度上独一无二.之前的时 尚设计师经历过同样的打破旧习的冲动,尽管是不那么极端的方式."]}),

wx.setStorage({key: "444", data: ["445. Behavior economists found that the more (i)_____options listed on the insurance make people all the more offish to endorse, partly because they hope to (ii)_____some (iii)_____in order to get a measure of peace of mind.",
{A: 'A.lucrative',B: 'B.monotonous',C: 'C.complicated',D: 'D.forgo',E: 'E.dampen',F: 'F.jockey',G: 'G.convolution',H: 'H.detriment',I: 'I.benefit'},
"###解析：第一空和第三空同义重复,所以第一空选 A 选项,第三空选 I 选项, 第二空对应 offish to endorse,所以第二空选 D 选项.lucrative 有利可图 的,forgo 放弃,benefit 利益. \n***翻译：行为经济学家发现越多有利可图的选在列在保险上,就会有越多的人不 愿意去签字,部分因为他们希望放弃一些利益来换取内心的平静."]}),

wx.setStorage({key: "445", data: ["446.  The slow pace of job creation was without precedent for the period of recovery from a recession, but the conditions that conspired to cause the recession were also (i) _______. The stock market declined sharply, and rampant business investment slumped. Then an ensuing spate of scandals (ii)_____public trust in the way companies were run. And yet, despite these powerful (iii)_____to growth, the recession proved surprisingly mild.",
{A: 'A.heartening',B: 'B.atypical',C: 'C.ambiguous',D: 'D.weakened',E: 'E.illuminated',F: 'F.consolidated',G: 'G.counterforces',H: 'H.stimulants',I: 'I.concomitants'},
"###解析：第一空根据 but 得知去 without precedent 的反义,所以第一空选 B 选项,第二空 scandals\"丑闻\"对于公众信任必然是削弱,所以第二空选 D 选项,第三空根据 these 得知取前文的重复内容,所以第三空选 G 选项. atypical 反常的,weaken 削弱,counterforce 反作用力. \n***翻译：如此缓慢的工作创造机会在衰退恢复期是没有先例的,但是能够导致衰 退的条件同样是反常的.股票市场急剧衰退,而且疯长的商业投资骤降.然后 紧随而至的大量丑闻破坏了公众对于公司运行方式的信任.然而,尽管这些强 大抑制成长的反作用力,衰退还是让人惊讶的温和的."]}),

wx.setStorage({key: "446", data: ["447.  Citing the corruption and intrigue that pervaded politics in the city, my colleague the newspaper\'s trove of journalism prizes, declaring that finding great stories in the city must be effortless.",
{A: 'A.slighted',B: 'B.ignored',C: 'C.lauded',D: 'D.disparaged',E: 'E.confounded',F: 'F.commended',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：declaring that finding great stories in the city must be effortless 说明空格要填入我同事对于 journalism prizes 的不屑,正确答案 选 AD 选项.slight 轻视,disparage 贬低. \n***翻译：援引这个城市政治中弥漫的所有阴谋还有贪婪,我的同事轻视这个报社 的新闻报道的奖项,宣称在这个城市中寻找重大的故事并不费力气."]}),

wx.setStorage({key: "447", data: ["448.  When studying the ancient Greek astronomers, Copernicus realized that despite the intrinsic beauty of many of their arguments, the ancients often made claims that_______logic.",
{A: 'A.refuted',B: 'B.questioned',C: 'C.influenced',D: 'D.swayed',E: 'E.defied',F: 'F.disregarded',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：despite 看出前后转折,意思是尽管言论内在不错,但是违背逻辑, 正确答案选 EF 选项.defy 违抗,disregard 忽视.注意 AB 不选,因为搭配不 对,不是去质疑逻辑.\n***翻译：当研究古希腊航天学家的时候,C 意识到抛去他们的议论中本身的美 感,这些古代学者通常会忽视他们说法中的逻辑."]}),

wx.setStorage({key: "448", data: ["449.  Films that critics have slumbered through rarely generate industry excitement, even though the critics\'_______reception may be less the fault of the movie than of its unfortunate time slot near a fatiguing film festival\'s conclusion.",
{A: 'A.somnolent',B: 'B.impartial',C: 'C.lethargic',D: 'D.laconic',E: 'E.befuddled',F: 'F.evenhanded',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 rarely generate industry excitement,而且后文说不是 电影本身的错,说明空格也应该是负评价词,所以答案选 AC 选项.somnolent 打瞌睡的,lethargic 无精打采的. \n***翻译：那些被评判家批判很少能产生行业兴奋的电影,尽管这些评判家不喜欢 这些电影,但这可能并不是电影本身的错,而是时机问题,因为临近一个使人 劳累的电影节."]}),

wx.setStorage({key: "449", data: ["450.  Even though his opponent is currently trying to portray him as a wild-eyed radical, voters will likely reject this charge because it does not_______his moderate political record.",
{A: 'A.defer to',B: 'B.conform to',C: 'C.accede to',D: 'D.argue with',E: 'E.meddle with',F: 'F.square with',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：投票人 likely reject this charge,说明这个 wild-eyed charge 和他现在 moderate 的演讲风格不一致,正确答案选 BF 选项.conform to 符 合,square with 与...一致. \n***翻译：尽管他的对手正在竭尽全力将他描述成为一个眼球充血的激进分子,投 票者可能会回绝这个控诉因为它根本不符合他温和的政治履历."]}),

wx.setStorage({key: "450", data: ["451.Neuroscientists are excited by technological progress that facilitates brain mapping, the most_______ of them comparing their growing abilities to tremendous advances that led to unimaginable success of the Human Genome Project.",
{A: 'A.rigorous',B: 'B.sanguine',C: 'C.punctilious',D: 'D.unorthodox',E: 'E.sophisticated',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：comparing their growing abilities to tremendous advances that led to unimaginable success of the Human Genome Project 说明后面 体现的是一个\"成功\"的特征,所以选项要对应 success,正确答案选 B 选项.sanguine 乐观的. \n***翻译：神经学家对于技术上的进步：能够使用设备扫描脑映射区 ,使得他们非 常激动.这个技术能够成为在神经学上不断进步得到的,能够引发人类基因工 程中难以想象的巨大成功还是十分乐观的."]}),

that.setData({progress_percent:45}),wx.setStorage({key: "451", data: ["452. It seems foolish to refuse the offer of an expedient that is both so_______success and so difficult to create them absent.",
{A: 'A.reminiscent of',B: 'B.lacking in',C: 'C.distinct from',D: 'D.indispensable to',E: 'E.inimical to',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：so difficult to create them absent 与空格并列,所以空格体现 不可或缺,正确答案选 D 选项. \n***翻译：拒绝一个既对成功不可或缺又很难没有它的权宜之计似乎是愚蠢的."]}),

wx.setStorage({key: "452", data: ["453. The genius of the scientific method is that it (i)_____the dictum of Aristotle that the goal of science is knowledge of the ultimate cause of things. True science, we now know, advances human knowledge by (ii)_____ultimate causes and focusing instead on the testing of empirical hypotheses.",
{A: 'A.qualifies',B: 'B.jettisons',C: 'C.affirms',D: 'D.ignoring',E: 'E.predicting',F: 'F.confirming',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 focusing instead on 看出第二空选 focus on 的反义,所以第二 空选 D 选项,第一空和第二空是取同(dictum of Aristotle=ultimate causes),所以第一空选 B 选项.jettison 放弃,ignore 忽略. \n***翻译：科学方法的精神是它摒弃了阿里仕多德认为科学的目标就是为了明白事 物的根本原因.真实的科学,就像我们认为的那样,丰富了人们的知识,通过 忽视事物背后的原因,反而重视完全根据经验得来的假说的试验."]}),

wx.setStorage({key: "453", data: ["454. For decades, economic ideas have been (i)_____political purpose. Economists, for example, have peddled their theories as a way of gaining public prominence or political appointment, while politicians have (ii)_____economic doctrines as possible solutions to the nation\'s social problems.",
{A: 'A.undermined by',B: 'B.inspired by',C: 'C.exploited for',D: 'D.rejected',E: 'E.ignored',F: 'F.promoted',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：Economists, for example, have peddled their theories as a way of gaining public prominence or political appointment 说明政治推 动了经济,第一空对应 peddle,所以第一空选 B 选项.第二空注意 while 是 \"当…时\"的意思,as possible solutions to the nation’s social problems 说明政治家还能帮助经济学说,所以第二空选 F 选项.inspire 推 动,promote 推动.此题能 google 到原文,原文第一空用的是 merchandized by. \n***翻译：几十年以来,经济观点一直是由政治目的而推动的.比如说经济学家将 他们的理论作为得到公众主导力或者政治主张的表达方式,同时那些政客推动 这些经济教条作为他们国家解决问题的方式."]}),

wx.setStorage({key: "454", data: ["455. Several studies (i)_____the assumption that paper cups, because they were made of natural products, were more environmentally (ii)_____than cups made of plastic (polystyrene). Indeed, these studies indicated that the environmental (iii)_____of producing and recycling paper cups were similar to, if not more than, those related to the production, disposal, and recycling of polystyrene cups.",
{A: 'A.corroborated',B: 'B.exploited',C: 'C.dispelled',D: 'D.friendly',E: 'E.hazardous',F: 'F.predictable',G: 'G.benefits',H: 'H.costs',I: 'I.opportunities'},
"###解析：假设说纸杯是天然产品做成的,所以假设的内容是纸杯比塑料杯更好 地保护了环境,所以第二空选 D 选项,后面又说纸杯的生产和循环过程的环境 代价大于等于塑料杯,所以后文想说其实纸杯不如塑料杯,所以第一空这些研 究是反对这个假设的,所以第一空选 C 选项,第三空生产和循环纸杯不可能有 benefits,只能有 costs,所以第三空只能选 H 选项.dispell 排除,friendly 友好的,cost 代价.\n***翻译：好几个研究都否认了这样一个假设,即是说因为纸杯是用天然产品制造 的,所以它们比起塑料(聚苯乙烯)是更有利于环境保护的.确实,这些研究 都表明生产和循环纸杯的环境代价即使不比塑料杯多,也至少和塑料杯一样."]}),

wx.setStorage({key: "455", data: ["456.  For many years, Americans have had a love affair with ferryboats. Ferries are said to relieve our frayed nerves after we\'ve stewed in bumper-to-bumper traffic, and conventional wisdom also says ferries (i)_____congestion and air pollution by getting us out of cars. Unfortunately, this (ii) _______ notion recently has (iii)_____several West Coast mayors, who have in consequenceeagerly pursued the implementation of ferry service in their cities.",
{A: 'A.contribute to',B: 'B.reduce',C: 'C.cover up',D: 'D.provocative',E: 'E.misguided',F: 'F.cynical',G: 'G.captivated',H: 'H.confused',I: 'I.outraged'},
"###解析：前文都在说渡船的优点,所以第一空选体现\"减少\"拥堵的动词,所 以第一空选 B 选项.后文 unfortunately 转折,所以得知这个传统的观念不一 定是对的,所以第二空选 E 选项,第三空根据后文 eagerly pursued the implementation of ferry service in their cities 说明这些市长是被这种 错误的观念迷惑了,所以他们要急切地去做这个事.reduce 减少,misguided 错误的,captivate 吸引. \n***翻译：很多年中,美国人一直对于渡船非常热衷.据说渡船能够在我们长时间 奔波于一辆接一辆的交通工具中舒缓我们绷紧的神经,而且传统的说法也说渡 船能够通过让人少开车而减少拥堵和空气污染.但不幸的是,这个误导人的观 念最近已经吸引了好几个西海岸城市市长的目光,这些市长最终急切地决定一 定要在城市里进行渡船服务的设施建设."]}),

wx.setStorage({key: "456", data: ["457.  In noting that critical and popular opinions about Li\'s art coincided, Chuang           the existence of an exception to her general theory of art criticism, which posits that critics\' views do not intersect with those of the general public.",
{A: 'A.asserted',B: 'B.conceded',C: 'C.acknowledged',D: 'D.doubted',E: 'E.pondered',F: 'F.questioned',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：which posits that critics’ views do not intersect with those of the general public 说明例外(exception)确实存在,所以空格要 选入一个表示\"承认\"的意思,正确答案选 BC 选项.concede 承认, acknowledge 承认.\n***翻译：在提到评论家和大众关于 Li 的艺术的观点一致的时候,C 还是承认了有 对于他的概括性艺术评论理论的例外存在,这个例外指出评论家的观点和普通 大众的观点并不相符."]}),

wx.setStorage({key: "457", data: ["458.  Excessive focus on what might have been can cause in us feelings of restlessness and regret, but some scientists are beginning to think that fancying an alternative reality might have  _______ effects as well.",
{A: 'A.subtle',B: 'B.adverse',C: 'C.restorative',D: 'D.pleasurable',E: 'E.unfavorable',F: 'F.tonic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面对于这种事情给予了负评价 restlessness and regret,后面 but 转折,所以后面空格需要填入正评价,所以正确答案选 CF 选项. restorative 促进康复的,tonic 滋补的. \n***翻译：过度关注于曾经可能出现过什么会导致我们感到坐立不安并且后悔,但 是其他一些科学家开始认为幻想一个其他的可能事实可能也会让我们精神振 奋."]}),

wx.setStorage({key: "458", data: ["459.  As a historical genre, biography is best when _______, a careful reconstruction of the past in all its unfamiliar particularity.",
{A: 'A.introspective',B: 'B.reflective',C: 'C.concrete',D: 'D.concise',E: 'E.meticulous',F: 'F.thorough',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应后文的 careful reconstruction,正确答案选 EF 选项. meticulous 一丝不苟的,thorough 彻底的. \n***翻译：作为历史体裁,传记要一丝不苟才是最好的,一种以人们不熟悉的独特 性来来对于过去仔细的重新构建."]}),

wx.setStorage({key: "459", data: ["460.  Explorers could not build each other\'s knowledge if they could not trust records of previous explorers; thus exploration depended on the_______of those who had gone before.",
{A: 'A.collegiality',B: 'B.endurance',C: 'C.exactitude',D: 'D.meticulousness',E: 'E.eminence',F: 'F.tenacity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说了探索者必要信任前人的记录,所以探索就取决于前人的精 确性了,正确答案选 CD 选项.exactitude 精确性,meticulousness 注重细 节. \n***翻译：研究人员并不能建造每个人的知识如果他们不相信前一个研究人员所记 录的数据,所以研究依赖于前一个已经研究过的研究者得出结论的准确性."]}),

wx.setStorage({key: "460", data: ["461.The science community\'s perennial lament over inadequate budgets has come to seem increasing _______, because government support for science and engineering has never been greater.",
{A: 'A.vital',B: 'B.hopeless',C: 'C.poignant',D: 'D.condescending',E: 'E.disingenuous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题难点在 government support for science and engineering has never been greater 这句话的理解上,has never been greater 的意思是 不能再大,也就是已经很大很给力了,所以前面的 lament 就是不真诚的了,答案选 E 选项.disingenuous 不坦诚的. \n***翻译：科学界常年的抱怨预算不足显得越来越不坦诚,因为科学和工程的政府 支持是前所未有的给力啊."]}),

that.setData({progress_percent:46}),wx.setStorage({key: "461", data: ["462. In modern times, friendship has become a_______relationship: a form of connection in terms of which all are understood and against which all are measured.",
{A: 'A.conciliatory',B: 'B.mercenary',C: 'C.paradigmatic',D: 'D.contentious',E: 'E.supplementary',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题较难,冒号后面说所有都能用这种 connection 而被理解,所有 都能以这种 connection 来衡量,说明这种 connection(就是友谊)是一种参 照的范例,所以正确答案选 C 选项.paradigmatic 典范的. \n***翻译：在现代,友情已经变得范例化：所有(人或事)都能用这种关系来理 解,所有(人或事)都能用这种关系来衡量."]}),

wx.setStorage({key: "462", data: ["463. As he has matured as a scholar, Felmar has come to see the merit of qualification. His conclusions, which early in his career he (i) _______, are now often (ii) _______.",
{A: 'A.stated as absolutes',B: 'B.refused to reveal',C: 'C.backed up extensively',D: 'D.hedged',E: 'E.simplified',F: 'F.reiterated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题注意 qualification 是\"限制\"的意思,既然他看到限制的优 点,所以第二空要对应限制这个特征,D 选项最合适,第一空和第二空对比关 系,选 qualification 的反义词,所以第一空选 A 选项.absolute 断然的, hedged 避免明确表态的. \n***翻译：因为他成熟的像是一位学者一般,菲尔马看到了有所限制的优点,在他 早期工作中认定的不可改变的绝对,现在常常是避免明确表态的."]}),

wx.setStorage({key: "463", data: ["464. Unlike the elected branches of the United States government, where making personal connection with citizens is (i)_____and almost (ii)_____political efficacy, the United States Supreme Court continues to maintain that its members should communicate with the public almost exclusively through formal opinions-and even then through ceremonial rituals that date back to the nineteenth century.",
{A: 'A.frowned upon',B: 'B.rampant',C: 'C.disregarded',D: 'D.a requirement for',E: 'E.a detriment to',F: 'F.an irrelevance to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题最关键的是要看到 exclusively 一词,这个词说明最高法院接触 公众的途径少,再通过 unlike 可知分支机构接触公众的途径很多,almost 又 是递进关系,所以两个空都体现\"多\",而且前后要递进,所以正确答案选 BD 选项.rampant 疯长的,很多的,requirement 要求. \n***翻译：与美国政府的当选分支,一个与国民私交情况很频繁,甚至几乎成为为 政府效力的前提条件的机构不同,美国最高法院一直坚持其中成员与外界民众 只能通过公共方式进行交流,通过公共意见,或者是从十九世纪开始就有的仪 式."]}),

wx.setStorage({key: "464", data: ["465. Schechter is atypically (i)_____the film version of Stephen King\'s horror novel The shining because the qualities for which the majority of other critics have approved it (its artful camera work and so on) get in the way of narrative and render the story less, rather than more, (ii)_____than other films of the same genre. This is not (iii)_____view, and we must be grateful to Schechter for putting it forward.",
{A: 'A.unimpressed with',B: 'B.confused by',C: 'C.enamored of',D: 'D.heartbreaking',E: 'E.comical',F: 'F.terrifying',G: 'G.a commonplace',H: 'H.a superior',I: 'I.an unfamiliar'},
"###解析：get in the way of narrative 说明这个电影已经少了很多原本恐怖 小说的特征,所以第二空选 horror 的同义,所以第二空选 A 选项,第三空说 S 提出这个观点,说明这个观点不是老生常谈,而是很新颖的,第一空则说明 S 对于这个电影是一种负评价,所以第一空选 A 选项.unimpressed with 对... 没有深刻印象,terrifying 恐怖的,commonplace 陈旧的.\n***翻译：S 不寻常地对 SK 的恐怖小说 The shining 的电影版本没有任何印象,因 为大部分其他评论家表扬它(巧妙的摄影技巧等等)的特点是进入了一种叙事诗的风格而且比起同样题材的其他电影更少地将故事表现得令人恐惧.这不是 一个陈旧的观点,我们必须要感谢 S 提出这个观点."]}),

wx.setStorage({key: "465", data: ["466.  Inuit print making is less (i)_____than carving in that it does not have substantial historical precedents, although there are (ii)_____incised carvings on bone or antler, facial tattoo marks or inlay skin work on clothing, mitts and footwear. Carving materials such as stone, bone, antler, wood, and  ivory were (iii) _______, but paper and drawing tools were unknown until introduced by early explorers and missionaries.",
{A: 'A.traditional',B: 'B.prestigious',C: 'C.anomalous',D: 'D.affinities with',E: 'E.objections to',F: 'F.regulations about',G: 'G.available locally',H: 'H.rarely used',I: 'I.virtually interchangeable'},
"###解析：in that it does not have substantial historical precedents 中的 it 指的是 Inuit print making,既然没有先例,说明 Inuit print making 比起 carving 不是那么传统,第一空选 A 选项,第二空让步,前面说两 者不同,但是两者还是有某种联系,第二空选 D 选项,第三空根据 but 前后对 比,paper and drawing tools were unknown until introduced by early explorers and missionaries 说明 carving materials 是取 unknown 的反义, 所以第三空选 G 选项.traditional 传统的,affinity 紧密联系, availability locally 当地能获得.注意此题的 affinity 不要理解成\"喜 爱\"这层意思. \n***翻译：尽管因纽特印刷和在骨头或者鹿角的雕刻,衣服上的面部图案标记和镶 嵌的动物皮有密切联系,但是因纽特印刷比起雕刻更加不传统,因为它没有大 量的历史先例.例如像石头,骨头,鹿角,木头和象牙之类的雕刻材料是在当 地能够获取的,但是纸和绘画材料知道早期的探索者和传教士引入之前都是不 为人知的."]}),

wx.setStorage({key: "466", data: ["467.  The_______nature of the approval process for new drugs suggests that incentives to promote more expeditious decision making may be necessary.",
{A: 'A.pecuniary',B: 'B.commercial',C: 'C.arbitrary',D: 'D.sluggish',E: 'E.capricious',F: 'F.dilatory',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：more expeditious decision making may be necessary 说明之前的 特征是 expeditious 反义,所以现在 expeditious 才变得更加必要了,所以正 确答案选 DF 选项.sluggish 缓慢的,dilatory 拖拉的. \n***翻译：这个新药的审批过程的缓慢本质其实是为了激励更多有意义的迅速的决 定."]}),

wx.setStorage({key: "467", data: ["468.  The critic claims that, contrary to its reputation for _______, the novelist\'s prose is full of opaque language games.",
{A: 'A.scrupulousness',B: 'B.simplicity',C: 'C.mendacity',D: 'D.artlessness',E: 'E.polish',F: 'F.meticulousness',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：contrary 得知空格选 opaque 的反义,正确答案选 BD 选项. simplicity 简单,单纯,artlessness 天真.\n***翻译：这个批判家声称, 和他语言简单的名声相反的是,这个小说家的散文中 有大量的模糊的文字游戏."]}),

wx.setStorage({key: "468", data: ["469.  Not only is the advent of bookless or largely bookless libraries too large and powerful a change to be _______, it also offers too many real advantages for it to be considered a tragedy.",
{A: 'A.understood',B: 'B.averted',C: 'C.foreseen',D: 'D.forestalled',E: 'E.endured',F: 'F.anticipated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：这句话是倒装,正常语序是 the advent of bookless or largely bookless libraries is not only too large and powerful a change to be,too…to…的意思是\"如此以至于不…的\",如此大如此有力的一个改 变必然是不能阻止,正确答案选 BD 选项.avert 防止,forestall 预先阻止. \n***翻译：出现缺少书籍,或者大量的缺少书籍,不仅是如此大而且有力的改变也 不能及时阻止的,它被认为是一个悲剧的时候还提供了太多真正的优势."]}),

wx.setStorage({key: "469", data: ["470.  Her attempts to wrest fiction free from traditional constraints like plot and character were never entirely popular with readers; nonetheless, her fiction has had_______influence on critical theory, novel, cinema, and even psychology.",
{A: 'A.a studied',B: 'B.a negligible',C: 'C.a decisive',D: 'D.an unmistakable',E: 'E.an insignificant',F: 'F.a restorative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后转折,所以空格和 never entirely popular with readers 取 反,空格选一个体现正面的词,正确答案选 CD 选项.decisive 毋庸置疑的, unmistakable 毋庸置疑的. \n***翻译：她想要努力让科幻小说不受传统(例如情节和角色)的限制的尝试从来 没有在读者中收到欢迎.然而,她的科幻小说已经有了对于批判理论,小说, 电影甚至是哲学毋庸置疑的影响."]}),

wx.setStorage({key: "470", data: ["471.Even those observes who are the most_______about genetic privacy issues would have to concede that genetic discrimination is rare: there have only been two cases of any notoriety.",
{A: 'A.sanguine',B: 'B.zealous',C: 'C.candid',D: 'D.objective',E: 'E.apathetic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：would have to concede that genetic discrimination is rare 说 明这里是一个对比关系,不得不承认,所以空格填入正面的极端词,B 选项最 好.zealous 热情的. \n***翻译：即便是观察那些对基因隐私问题最狂热的人都不得不承认基因歧视是罕 见的：只有过两例臭名昭著的案例."]}),

that.setData({progress_percent:47}),wx.setStorage({key: "471", data: ["472. Many creative photographers were delighted to find in instant photography a mode that encouraged them to stop viewing photography as_______and start viewing it as something they could handle with spontaneity, even derision.",
{A: 'A.sacrosanct',B: 'B.ephemeral',C: 'C.malleable',D: 'D.egalitarian',E: 'E.autonomous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：stop viewing photography 和 start viewing it as something 能 看出空格和 something 后面的内容是取反,后面的内容是 they could handle with spontaneity, even derision,核心词是\"derision 嘲笑\",所以前面 空格要选正评价词,正确答案选 A 选项.sacrosanct 神圣不可改变的. \n***翻译：很多有创意的摄影师很高兴的在即时摄影中发现了一种激励他们的模 式,使得他们停止将摄影视为神圣不可侵犯的并且开始将摄影视为一种他们能 够自然而然掌握的,甚至是可以嘲弄的东西."]}),

wx.setStorage({key: "472", data: ["473. The description of humans as having an internal clock is not a (i) ______________. Or rather, it is-you do not have a tiny watch in your cerebellum-but it also refers to (ii) _______, a specialized bundle of cells that regulates cyclical processes.",
{A: 'A.euphemism',B: 'B.cliché',C: 'C.metaphor',D: 'D.an elusive psychological phenomenon',E: 'E.a standard literary trope',F: 'F.a real biological feature',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空通过 it is—you do not have a tiny watch in your cerebellum 推出第一空选 C,第二空同义重复 a specialized bundle of cells that regulates cyclical processes,所以第二空体现了 cyclical 的 特点,所以能够对应的选项是 F 选项.metaphor 象征,real biological feature 真正的生物特征. \n***翻译：关于人类有内部的生物钟的说法并不是一个隐喻,你的小脑中并没有一 个小小的表—但这同样却也是一种真实的生物的特点,一群专门控制周期性流 程的细胞."]}),

wx.setStorage({key: "473", data: ["474. The author of this biography gives an accurate and (i)_____account of the subject\'slife story, but all the carefully assembled detail fails to compensate for the general lack of (ii) _______ in her writing.",
{A: 'A.exhaustive',B: 'B.glib',C: 'C.selective',D: 'D.specificity',E: 'E.veracity',F: 'F.vivacity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应后面的 carefully assembled,所以选 C 最合适,第二空 lack of 说明出现了前面没有出现的特征,specificity 对应了前面的 detail,veracity 对应前面的 accurate,所以只有 F 选项是缺乏的. selective 精心挑选的,vivacity 活泼. \n***翻译：这个传记的作者给出一个准确而且有选择的关于这个人生命的叙述.但 这些小心翼翼挑选的细节的集合却没有能够补偿写作中普遍缺乏活泼这一特 点."]}),

wx.setStorage({key: "474", data: ["475. Firebaugh and Beck contend that economic development improves the overall well-being of people within developing countries. However, other scholars emphasize the (i)_____of this view, empirically demonstrating that while economic development does in fact contribute to the well- being of the population of developing countries, the magnitude of development\'s positive effects on well-being has (ii) _______. In other words, these scholars suggest that (iii)_____economic development and human well-being is taking place in developing countries.",
{A: 'A.falsity',B: 'B.arbitrariness',C: 'C.limitation',D: 'D.been greatly underestimated',E: 'E.not yet been measured',F: 'F.decreased over time',G: 'G.a decoupling of',H: 'H.an inversion of',I: 'I.a decline in'},
"###解析：第一空根据 however 得知要选体现负面评价的词,AC 待选,后文是 让步句,先承认了 F 和 B 观点的合理性,再去说这种相互关系减弱了,所以第 一空只能选 C 选项,第二空通过 while 让步逻辑得知,填入减弱,答案选 F 选 项,第三空根据前文推出,经济的发展和人民的福利之间的关系是越来越弱, 所以对应的选项是 G 选项.limitation 局限,decreased over time 随时间递 减,decouple 联系消失.\n***翻译：F 和 B 认为在发展中国家经济发展能够提升人类总体的福利.然而,其 他学者强调了这个观点的局限性,这些学者经验性地表明尽管经济发展确实能 够带来了发展中国家人们的福利,但是对于人类的发展程度的积极影响已经随 着时间越来越少了.换句话说,这些学者表明在发展中国家经济发展和人类福 利之间不再有任何联系了."]}),

wx.setStorage({key: "475", data: ["476.  Applications of the Endangered Species Act (ESA) have fared best in contexts in which habitat condition is closely linked to species condition and the cause of habitat degradation is easily identified. The achievements of the ESA in those contexts, however, have (i)_____that other uses of the act can (ii)_____that record even where such favorable conditions do not (iii) _______.",
{A: 'A.quelled the conviction',B: 'B.presaged the uncertainty',C: 'C.fostered the misconception',D: 'D.mitigate',E: 'E.duplicate',F: 'F.elucidate',G: 'G.vary',H: 'H.pertain',I: 'I.diminish'},
"###解析：此题需要带入的语义成分较重,大概意思是说 ESA 只能在栖息环境和 物种环境练习紧密的时候才能良好运行,所以这些成功的数据会让人错误的以 为说其他不存在上述两个条件的地方使用 ESA 也能成功,但事实上并不是这样 的,正确答案 CEH 选项.foster the misconception 推动了误解,duplicate 复制,pertain 从属于.\n***翻译：ESA 的运用在栖息地环境和物种环境紧密联系和栖息地衰落的原因很容 易被确定的背景下是进行得最好的.ESA 在这些环境下的成就却已经推动了这 样的一种误解,即是说其他对于这种行为的使用方法也能够复制之前的成果, 就算在这些有用的条件并不存在的地方."]}),

wx.setStorage({key: "476", data: ["477.  Shifting Fortunes take a conventional approach to American union history by simply explaining the reasons behind union growth and decline in the nineteenth andtwentieth centuries: it is a chronologically and thematically_______study and nothing more.",
{A: 'A.complicated',B: 'B.confined',C: 'C.multifarious',D: 'D.onerous',E: 'E.circumscribed',F: 'F.taxing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格与 nothing more 并列,所以空格是 nothing more 同义,正确答 案选 BE 选项.confined 受限制的,circumscribed 局限的. \n***翻译：凭借简单地解释了 19 世纪和 20 世纪公会发展和衰落背后的原因,SF 采 取了传统的方式来接近美国公会历史.它是一个时序上和主题上都是受限的研 究而且啥也没有."]}),

wx.setStorage({key: "477", data: ["478.  A clever form of diplomacy involves subtly inducing the other party to propose your preference so that your_______their requests appears as the granting of concession.",
{A: 'A.accession to',B: 'B.inattention to',C: 'C.subversion of',D: 'D.abnegation of',E: 'E.repudiation of',F: 'F.acquiescence to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：结果是 as the granting of concession,所以空格要体现 concession 的意思,正确答案选 AF 选项.accession to 加入,acquiescence to 默许. \n***翻译：外交的一种聪明的形式包含了不明显地引起另一党提出你的偏好,这样 你对于他们的请求表示默许就是一种让步."]}),

wx.setStorage({key: "478", data: ["479.  Scientist reported last month on a sign of relative solar _______; the solar wind, a rush of charged particles continually spewed from the Sun at a million miles an hour, had diminished to its lowest level in 50 years.",
{A: 'A.quiescence',B: 'B.turbulence',C: 'C.isolation',D: 'D.calm',E: 'E.remoteness',F: 'F.instability',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 had diminished to its lowest level in 50 years,所 以空格选体现\"lowest\"的词,正确答案选 AD 选项.quiescence 静止,calm 平静. \n***翻译：科学家们上个月报道了一个太阳静止的迹象；太阳风,太阳表面一小时 行进百万里的不断扫过的一群带电粒子,已经削减到其五十年内的最低量."]}),

wx.setStorage({key: "479", data: ["480.  The author takes issue with the ideological blinders that have distorted much migration research, especially_______modernization theorists and others for their untested assumptions of an immobile preindustrial past.",
{A: 'A.undermining',B: 'B.citing',C: 'C.castigating',D: 'D.chastising',E: 'E.endorsing',F: 'F.commending',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：especially+空格递进前文的态度,前文的态度是 take issue with\"与…争论\",所以空格选 CD 选项.castigate 严厉批评,chastise 责 备.\n***翻译：作者和意志形态的眼罩争论,这些眼罩曲解了大部分移民研究,尤其是 批评了现代化理论家和其他人,因为他们对于一个静止的前工业历史未经检验 的假设."]}),

wx.setStorage({key: "480", data: ["481.In one theory, as people learn things throughout the day, connections between neurons get strengthened, but during sleep then all synapses are weakened, tenuous connections are  _______ and only the strongest bonds could remain.",
{A: 'A.reinforced',B: 'B.reproduced',C: 'C.replaced',D: 'D.stimulated',E: 'E.severed',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 only the strongest bonds could remain 就可以推出,空格要 选一个体现这些脆弱的连接不再存在的意思,所以正确答案选 E 选项.severed 被切断的,原形 sever,注意不要把这个词当成 severe. \n***翻译：有一个理论说随着人们一整天的学习,神经元间的连接被加强,但睡觉 的时候所有的突触都被削弱,微弱的连接被切断,只有最强的连接能留下."]}),

that.setData({progress_percent:48}),wx.setStorage({key: "481", data: ["482. While the writer was best known for her much-ballyhooed _______, her impact reached far beyond memorable quips.",
{A: 'A.pensiveness',B: 'B.drollness',C: 'C.stoicism',D: 'D.fastidiousness',E: 'E.congeniality',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题考察了同义重复,空格和后文的主要特征\"quips\"是重复的, \"quip 妙语\",所以能构成同义重复的是 B 选项.drollness 滑稽. \n***翻译：尽管这个作家是由于她被高度赞扬的诙谐而闻名,她的影响却远不止令 人印象深刻的俏皮话."]}),

wx.setStorage({key: "482", data: ["483. Although she admitted that her airport expansion plan had recently collapsed, the governor (i)_____the significance of the failure, pointing out that competing economic development proposals are now more (ii) _______.",
{A: 'A.minimized',B: 'B.touted',C: 'C.acknowledged',D: 'D.tenuous',E: 'E.complicated',F: 'F.important',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据让步填入 collapse 反义,所以填入\"降低了\"影响,第 一空选 A 选项,第二空注意 competing 是\"矛盾\"的意思,所以这个经济计划 是负评价,所以第二空是递进前文的 collapse,所以选 D 选项.minimize 最小 化,tenuous 脆弱的. \n***翻译：尽管州长承认她的机场扩建计划黄了,但是她把这个失败的重大程度降 到最低,而且她指出矛盾的经济发展计划现在才是更加站不住的."]}),

wx.setStorage({key: "483", data: ["484. The reclusive clergyman may have lived and died in melancholy, but this doesn\'t seem to have (i)_____his genius in any way. On the contrary, we find ourselves wondering whether his genius wasn\'t (ii)_____in some mysterious way by his mood.",
{A: 'A.influenced',B: 'B.hampered',C: 'C.triggered',D: 'D.served',E: 'E.controlled',F: 'F.identified',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：The reclusive clergyman may have lived and died in melancholy 是负评价,后面转折说明这个负评价没有阻碍他的 genius,所以第 一空选 B 选项,第二空根据 on the contrary 得知要选正评价,注意 whether wasn’t 就是 whether 的意思,所以第二空选 D 选项.hamper 阻碍,serve 帮 助. \n***翻译：这个封闭的牧师既生活又死于忧郁,但这似乎并没有阻碍他的才赋.相 反的,我们发现我们往往会对他的天赋究竟是不是被他的这种情绪帮助了产生 疑惑."]}),

wx.setStorage({key: "484", data: ["485. The research on otters\' environmental requirements is surprisingly (i) _______. One reason for this has to do with the estimation of how much they use different areas. Doing so may be (ii)_____in some kinds of terrain, such as Shetland where the Eurasian otters are active in daytime and have clear individual markings. There it is possible to identify the individuals over stretches of coast of a few kilometers and to see what kinds of coast they use. However, the field conditions are(iii)_______.",
{A: 'A.straightforward',B: 'B.controversial',C: 'C.difficult',D: 'D.quite problematic',E: 'E.relatively simple',F: 'F.largely unnecessary',G: 'G.routine',H: 'H.deceptive',I: 'I.exceptional'},
"###解析：estimation of how much they use different areas 说明这个研究 比较难,第一空选 C 选项,第二空根据 clear individual markings 得知在有 一些地方还是很简单的,所以第二空选 E 选项,第三空说明这个地方只是一个 例外的,一般的地方都没有这种条件,所以第三空选 I 选项.difficult 困难 的,relatively simple 相对简单,exceptional 例外的. \n***翻译：关于水獭的环境需求的研究是让人惊讶的困难.其中的一个原因是不得 不去处理关于它们多大程度地使用不同区域的估计.这样做可能在某些地形会 相对简单,例如 S 这个地方(在那个地方,欧洲水獭白天很活跃而且有明显的 个体标志).在那个地方识别出好几公里海岸线上的水獭个体而且观察它们使 用何种海岸线是可能的.然而,这种地理条件确实是例外的."]}),

wx.setStorage({key: "485", data: ["486.  Even the reader acquainted with the outlines of Pushkin\'s biography will be (i) _______ the (ii)_____so vividly conveyed in Binyon\'s biography. Not only was Pushkin\'spersonal correspondence intercepted and his movements (iii) _______, but Tsar Nicholas I\'s decision to oversee Pushkin\'s career obliged Pushkin to submit all his manuscripts for inspection.",
{A: 'A.attracted by',B: 'B.confused by',C: 'C.struck by',D: 'D.suffocating lack of creative freedom',E: 'E.concern for contemporary society',F: 'F.underlying sense of historical change',G: 'G.ignored',H: 'H.monitored',I: 'I.commended'},
"###解析：even 在这里让步,所以空格要选取 acquainted with 的反义,所以 第一空选 C 选项,第二空对应后文的 personal correspondence intercepted,说明这个人没有自由,所以第二空选 D 选项,第三空和 personal correspondence intercepted 并列,所以选 H 选项.struck by 对...感到惊讶,suffocating lack of creative freedom 令人窒息的缺乏创 造性自由,monitor 监视.\n***翻译：就算是熟悉 P 传记的纲要的人也会对 B 传记中如此生动呈现的令人窒息 的缺乏创造性自由感到惊讶.不仅 P 的个人信件被拦截,他的活动被监视,而 且 TNI 监视 P 的事业的行动让 P 只能把所有的手稿上交进行审查."]}),

wx.setStorage({key: "486", data: ["487.  While normal floods resulting from usual monsoon rainfall are_______the growth of crops, recently there has been an increase in the frequency of high-intensity floods that do not have such welcome effects.",
{A: 'A.conducive to',B: 'B.hindered by',C: 'C.devastating for',D: 'D.deleterious for',E: 'E.essential for',F: 'F.indispensable to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应后面的 such welcome effects,所以正确答案选 EF 选项, essential 必要的,indispensable 不可或缺的.此题 A 选项也对,但是没有同 义词不选. \n***翻译：尽管源于通常季风降雨的正常洪水对于庄家的生长是不可或缺的,但是 最近高强度洪水的频率有所增加,而这种洪水并没有这种受欢迎的效果."]}),

wx.setStorage({key: "487", data: ["488.  The difficulty of reforming electoral politics is not lack of the right tools but the need to put them into the hands of impartial agents: the goal should be to build capacity while _______.",
{A: 'A.expediting',B: 'B.constraining',C: 'C.facilitating',D: 'D.deterring',E: 'E.exacerbating',F: 'F.lamenting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：困难之处不是缺乏正确的工具而是需要把这些工具放到有公正的实施 人手中说明在进行改革的同时还要注意一些别的东西,正确答案选 BD 选项. constrain 限制,deter 威慑. \n***翻译：改革政治的困难之处不是缺乏正确的工具而是需要把这些工具放到有公 正的实施人手中：目标应该是实现最大值的同时有所威慑."]}),

wx.setStorage({key: "488", data: ["489.  That guild of experts has always appraised the economic stimulation plan as bootless, while the advocates of the policy do not take their_______evaluation for granted.",
{A: 'A.tendentious',B: 'B.meticulous',C: 'C.detracting',D: 'D.indifferent',E: 'E.ubiquitous',F: 'F.deprecatory',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：their 指代的是前文的 experts,所以空格同义重复专家的态度 bootless,所以正确答案选 CF 选项.detracting 贬低的,deprecatory 反对 的. \n***翻译：那个协会的专家经常评价经济刺激计划是误用的,然而政策的支持者不 认为他们的贬低是理所当然的."]}),

wx.setStorage({key: "489", data: ["490.  In noting that critical and popular opinions about Li\'s art coincided, Chuang_______the existence of an exception to her general theory of art criticism, which posits that critics\' views do not intersect with those of the general public.",
{A: 'A.asserted',B: 'B.conceded',C: 'C.acknowledged',D: 'D.doubted',E: 'E.pondered',F: 'F.questioned',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：which posits that critics’ views do not intersect with those of the general public 说明例外(exception)确实存在,所以空格要 选入一个表示\"承认\"的意思,正确答案选 BC 选项.concede 承认, acknowledge 承认.\n***翻译：在提到评论家和大众关于 Li 的艺术的观点一致的时候,C 还是承认了有 对于他的概括性艺术评论理论的例外存在,这个例外指出评论家的观点和普通 大众的观点并不相符."]}),

wx.setStorage({key: "490", data: ["491.One baffling aspect of the novel is its capacity to generate emotional power from a plot that lacks the most elementary _______: readers must accept not an occasional coincidence, but a continuous stream of them.",
{A: 'A.synergy',B: 'B.continuity',C: 'C.naivety',D: 'D.premise',E: 'E.credibility',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：句子提到 its capacity to generate emotional power from a plot 是一件 baffling 的事情,说明小说缺乏一个正评价的东西,冒号后面的 内容又说明这个东西是 coincidence,那么能够对应的选项最好是 E 选项.credibility 可靠性. \n***翻译：这个小说的一个令人困惑的方面是它从一个缺少最基础的可信度的情节 来产生情感力量的能力：读者必须接受的不是一个偶尔的巧合,而是一连串的 巧合."]}),

that.setData({progress_percent:49}),wx.setStorage({key: "491", data: ["492. Though humanitarian emergencies are frequent features of television news, such exposure seldom_______the public, which rather seems resigned to a sense of impotency.",
{A: 'A.paralyzes',B: 'B.demoralizes',C: 'C.assuages',D: 'D.galvanizes',E: 'E.exasperates',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：which rather seems resigned to a sense of impotency 说明 seldom+空格=resigned,所以空格选 resigned 的反义,正确答案选 D 选项. galvanize 激励. \n***翻译：尽管新闻报道中的人道主义危机是时常发生的,这样的曝光很少刺激公 众,反而有种看似无力的感觉."]}),

wx.setStorage({key: "492", data: ["493. Partly because of Lee\'s skill at synthesizing (i)_____trends drawn from many fields of study, her theories appeared to present, with uncanny aptness, ideas already (ii)_____in the minds of her contemporaries.",
{A: 'A.superseded',B: 'B.irrelevant',C: 'C.emergent',D: 'D.discredited',E: 'E.well established',F: 'F.half-formulated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后因果关系,所以第一空和第二空要广义取同,所以正确答案选 CF 选项.emergent 新兴的,half-formulated 半成的.\n***翻译：部分是因为 Lee 能综合从许多领域的研究中得出的刚浮现的研究趋势, 她的理论似乎用惊人的能力呈现了同时代认为只是半成品的东西."]}),

wx.setStorage({key: "493", data: ["494. Research into butterfly could have (i)_____implications, since knowledge of their optical and thermal properties may be (ii)_____controlling the behavior of computer chips, which likewise consist of finely structured thin film.",
{A: 'A.ecological',B: 'B.aesthetic',C: 'C.technological',D: 'D.tantamount to',E: 'E.germane to',F: 'F.advance by',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应 controlling the behavior of computer chips,所以 选 C 选项,第二空根据 likewise consist of finely structured thin film 得知两者之间有紧密联系,所以第二空选 E 选项.technological 技术的, germane to 与...相关. \n***翻译：关于蝴蝶的调查研究有技术性的暗示,因为承认它们光学和热血上的特 点可能能与掌控电脑芯片：一种因蝴蝶翅膀而特意做成完美结构的薄片的物 质,可能有着密切联系."]}),

wx.setStorage({key: "494", data: ["495. Viewing people as ‘\'social atoms\'\' that obey rather simple rule (which are not unlike the laws of physics), one may discover certain (i) _______. Take, for example, the way channels emerge when people move in crowds. In the midst of initially (ii)_____movements, one person begins to follow another-in an effort to avoid collisions-and streams of movement emerge. As more people join in, there is greater pull on others to join the flow, and the particular channels become (iii) _______.",
{A: 'A.apparent contradictions',B: 'B.unproductive tendencies',C: 'C.lawlike regulations',D: 'D.inflexible',E: 'E.straightforward',F: 'F.chaotic',G: 'G.self-defeating',H: 'H.self-aggrandizing',I: 'I.self-perpetuating'},
"###解析：例子描写了一个人类历史上普遍存在的规律,所以第一空选 C 选项, 第二空根据 in an effort to avoid collisions 推知,最初的运动是导致碰撞 的,所以第二空选 F 选项,第三空越来越多的人加入这个运动中,说明很多渠 道能够自我保存下来了,注意第三空不选 H 是因为第一空那里说的是 lawlike regulations,aggrandize 用于修饰 regulations 不合适.lawlike regulations 类似法律的规定,chaotic 混乱的,self-perpetuating 自续的. \n***翻译：把人类视为服从相当简单的规则(可以说很像物理法则)的社会原子, 所以任何人都可能发现某种类似法律的规定.例如,当人们乱成一团的时候, 渠道产生的方法.在最初混乱的活动中,一个人最初是跟着另外一个人(为了 避免碰撞)所以很多的活动分支就出现了.随着越来越多的人加入到这个过程中来,就有越来越大的推动力让其他人进入这个运动,而且某些渠道就变得自 我维持下来了."]}),

wx.setStorage({key: "495", data: ["496.  In this single volume, Kenny aims to survey for the general reader all of ancient philosophy; understandably, space in such a book is (i) _______, and he is not to be faulted for minor omissions.However, Kenny would have added significantly to his book\'s value had he more effectively(ii)_____the influence of ancient philosophy on the subsequent tradition. As it is, newcomers to the subject will have little (iii)_____the afterlife enjoyed by ancient philosophy in the period 1600-1750.",
{A: 'A.at a premium',B: 'B.hard to fill',C: 'C.taken for granted',D: 'D.overlooked',E: 'E.signaled',F: 'F.prevented',G: 'G.sense of',H: 'H.devotion to',I: 'I.aversion to'},
"###解析：因为只有一本书,要写完这么多东西,空间十足珍贵,所以第一空选 A 选项,第二空虚拟语气,如果他按空格这么做了,他本来就可以增加这本书 的价值,所以第二空选 E 选项,第三空根据第二空的虚拟语气推理,最终的结 论是 K 没有去传达,所以新来的人对于 afterlife(subsequent tradition) 没有任何了解.\n***翻译：仅在这一卷中,K 想要为读者调查所有的古代哲学.可以理解的是,在 这样一本书中空间是非常珍贵的,而且他不应该因为小的遗漏而被指责.然 而,如果 K 能够更有效地传达古代哲学对于后来传统的影响的话,他本来可以 大大增加这本书的价值.然而,新入这个主题的人几乎不了解 1600-1750 年之 间被古代哲学津津乐道的来生(对应的就是 subsequent tradition)."]}),

wx.setStorage({key: "496", data: ["497.  The ambassador\'s critical remarks seemed to be less a product of_______and more the careless utterances of a fatigued or undisciplined individual.",
{A: 'A.intensity',B: 'B.optimism',C: 'C.purposefulness',D: 'D.design',E: 'E.confidence',F: 'F.caution',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：less 和 more 看出空格和后面 more 之后的特征取反,所以空格找 careless 反义词,正确答案选 CD 选项.purposefulness 目的性,design 目的 性. \n***翻译：大使的批判性的评论看上去更少的是一种故意的行为而更多的是一个筋 疲力经或者不守纪律的个体的一种粗心言论."]}),

wx.setStorage({key: "497", data: ["498.  In sharp contrast to the novel\'s scenic realism and precisely characterized figure is its persistent philosophical _______.",
{A: 'A.naturalism',B: 'B.abstraction',C: 'C.generality',D: 'D.impartiality',E: 'E.sincerity',F: 'F.objectivity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后取反,前面特征是 scenic realism and precise characterized figure,所以后面特征选 BC 选项.abstraction 抽象, generality 笼统. \n***翻译：和这个小说中的舞台真实性还有人物的准确描述极度相反的是它固执的 哲学上的抽象笼统的东西."]}),

wx.setStorage({key: "498", data: ["499.  Individuals, governments, and companies show ample ability to_______themselves by setting goals based on current conditions and then blindly following them even when those conditions change drastically.",
{A: 'A.hamstring',B: 'B.reinvent',C: 'C.promote',D: 'D.revitalize',E: 'E.impair',F: 'F.invigorate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：then blindly following 中的 blindly 体现了个人,政府和公司会 对它们自己造成不好的东西,所以正确答案选 AE 选项.hamstring 使衰弱, impair 损害. \n***翻译：个人,政府,还有公司展示出了大量的能力来损害他们自己,通过根据 现在的状态建立一些目标然后盲目的追随这些目标,甚至是当这些情况已经彻 底改变也是一样坚持."]}),

wx.setStorage({key: "499", data: ["500.  The cat known to researchers as M-120-beefy, audacious, and apparently smart enough to spot a free lunch-is perhaps the world\'s least_______lynx: the scientists catch him several times a year.",
{A: 'A.intelligent',B: 'B.evasive',C: 'C.fearless',D: 'D.furtive',E: 'E.elusive',F: 'F.intrepid',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the scientists catch him several times a year 表明这种 lynx 很容易被抓住,所以正确答案选 BE 选项.evasive 逃避的,elusive 难以抓住 的.\n***翻译：被研究者称为 M-120 的猫—粗壮大胆而且明显很聪明能够看出免费午餐—可能是世界上最容易被抓住的猞猁：科学家一年会抓住他好几次."]}),

wx.setStorage({key: "500", data: ["501.Since many African farmers face a soil fertility problem, providing funding for fertilizer seems_______; closer examination of the data raises some troubling questions, however.",
{A: 'A.imprudent',B: 'B.expensive',C: 'C.unimpeachable',D: 'D.modern',E: 'E.worrisome',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过因果关系能判断出土地肥料面临问题,那么提供资金就是正确 的,而且从后文的转折能得出填 troubling questions 的反义词,正确答案选 C 选项.unimpeachable 毋庸置疑的. \n***翻译：因为很多美国农民正在面临土地肥力的问题,给肥料提供经费看似成为 了无可指责的事情,然而,近期的检测和数据却带来了新的问题."]}),

that.setData({progress_percent:50}),wx.setStorage({key: "501", data: ["502. Having regarded Marcus relationship to their boss as entirely _______, Jo was flabbergasted when Marcus publicly made clear his objections to some changes the boss was introducing.",
{A: 'A.professional',B: 'B.sycophantic',C: 'C.prosaic',D: 'D.dissident',E: 'E.collegial',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：Jo 对于 M 反对他的老板感到惊讶,说明 M 平时不反对老板,所以正 确答案选 B 选项.sycophantic 谄媚的.\n***翻译：J 之前将 M 和他上司的关系视为完全的谄媚,J 对于 M 公开对其领导的一 些改变持反对意见而大吃一惊."]}),

wx.setStorage({key: "502", data: ["503. There are far too many (i)_____in the report, such as incorrect date (albeit on (ii)_____points), inconsistency between the text and related tables, and discrepancies between the citations and the references.",
{A: 'A.unsupported generalizations',B: 'B.stylistic infelicities',C: 'C.little errors',D: 'D.numerous',E: 'E.minor',F: 'F.perplexing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文 such as 的举例推出第一空选 incorrect,inconsistency 和 discrepancy 的同义,所以 C 选项最合适,第二空 albeit 转折,对应点在第一 空的 little 上面,选 little 同义词.little errors 小错误,minor 小的,次 要的. \n***翻译：这篇报告当中有太多小错误,比如时间错误(尽管是小错误点),文字 和表格之间的不一致,还有引用和参考的差异."]}),

wx.setStorage({key: "503", data: ["504. The physical (i)_____seen in the remains of soldiers who fought in the fifteenth-century battle of Towton is unsurprising, given the (ii)_____origins of the men who took the battlefield that day.",
{A: 'A.decay',B: 'B.strength',C: 'C.diversity',D: 'D.disparate',E: 'E.unknown',F: 'F.controversial',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因果关系第二空取第一空的同义词,正确答案选 CD 选项.diversity 差异,disparate 不同的.\n***翻译：十五世纪 Towton 战场上遗留下来的军人的体质差异不足为奇,因为参加 这场战争的军人们来自不同的地方."]}),

wx.setStorage({key: "504", data: ["505. Many popular musicians have (i)_____new digital technologies that allow them unprecedented control over their music. These musicians use computers to (ii)_____and modify their songs, resulting in a level of musical precision often unattainable naturally. Of course, though, as is often the case with new technologies, some traditionalists (iii)_____these developments.",
{A: 'A.incorporated',B: 'B.synthesized',C: 'C.alleviated',D: 'D.energize',E: 'E.delineate',F: 'F.recast',G: 'G.balk at',H: 'H.revel in',I: 'I.retaliate'},
"###解析：use computers 说明第一空选 incorporated,第二空和 modify 并 列,所以 F 选项最合理,第三空根据让步关系推知有些人是\"反对\"的态度, 正确答案选 G 选项.incorporate 加入,recast 改写,balk at 拒绝接受. \n***翻译：很多著名的音乐家都加入了新的数字音乐技术,这个前所未有的技术能 够使他们完全掌控他们的音乐.这些音乐家用电脑去改写并调整他们的歌曲, 从而达到音乐上的准确,但却很难做到自然,当然了,这是新技术常常带来的 问题,一些比较传统的认识很排斥这些进步."]}),

wx.setStorage({key: "505", data: ["506.  Campus-wide discussion on academic integrity can be (i)_____by the fact that faculty and students tend to define cheating in (ii)_____ways. Even when they concur on what cheating means, faculty and students often assign different levels of severity to specific violations. These differences can serve as a major (iii)_____the creation of a commonly accepted set of standards of integrity that are consistently applied to all academic work within the campus community.",
{A: 'A.expedited',B: 'B.obscured',C: 'C.hampered',D: 'D.disparate',E: 'E.conventional',F: 'F.rigid',G: 'G.indictment of',H: 'H.impediment to',I: 'I.metaphor for'},
"###解析：Even when they concur 说明第二空选 concur 的反义词,所以第二 空选 D 选项,再根据第二空倒推第一空,方式不同导致 discussion 收到阻碍, 第一空选 C 选项,第三空取第一空的同义词,正确答案选 H 选项.hamper 阻 碍,disparate 不同的,impediement 阻碍. \n***翻译：整个校园范围内的关于学业诚实性的讨论可能会被工作人员还有学生将 作弊定义为各种各样不同的方式而受到阻碍.甚至当他们描述作弊到底意味着什么,工作人员和学生定义的严重等级也是不同的.这样的差异会导致严重的 阻碍,阻碍关于作弊的大家能够统一接受的标准的建立,这个标准能够一直运 用于大学校园内的学术工作中."]}),

wx.setStorage({key: "506", data: ["507.  Origin, distribution, and habitat are included in the book for some but not all of the plants; offering this information for each species would have given readers a clearer appreciation of the differences between_______and introduced species.",
{A: 'A.endemic',B: 'B.native',C: 'C.seasonal',D: 'D.rare',E: 'E.unusual',F: 'F.dominant',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题考察了对比关系,非常简单,直接找 introduced species 的反 义词,正确答案选 AB 选项.A 当地的,B 本地的. \n***翻译：部分但不是全部的植物的起源、分布和栖息地被写进这本书中,提供给 读者关于本地植物和外来植物不同之处的清晰介绍."]}),

wx.setStorage({key: "507", data: ["508.  Some have argued that naming scientific discoveries after the people who make them can_______ scientific progress, because the nomenclature lacks useful clarity, having no relationship to the underlying principles that govern nature.",
{A: 'A.hamper',B: 'B.abet',C: 'C.instigate',D: 'D.obscure',E: 'E.nullify',F: 'F.impede',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过后文的 lacks useful clarity 和 having no relationship to the underlying principle that govern nature 得出空格要填入一个引起负 评价的东西,正确答案选 AF 选项.hamper 阻碍,impede 阻碍. \n***翻译：一些人认为以发明者名字命名科学创造会阻止科学进步,因为这种与创 造背后主旨无关的命名法既不实用也不明晰."]}),

wx.setStorage({key: "508", data: ["509.  Each of the country\'s 26 sates and most of its more than 2,000 municipalities have their own police forces,_______communication and making it difficult to establish a coordinated law- enforcement strategy.",
{A: 'A.establishing',B: 'B.impeding',C: 'C.hampering',D: 'D.launching',E: 'E.obscuring',F: 'F.preventing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：每个州有自己的警力,必然导致阻碍沟通,正确答案选 BC 选项. impeding 阻碍,hampering 阻碍.F 不选是因为 prevent 表示\"阻止\"的意思 加宾语时一定有 prevent from. \n***翻译：这个国家的二十六个州,其中多余两千的自治市,每一个地方都有其自 己的警力部署,这就导致了沟通和建立统一协调的法律的实施的阻碍."]}),

wx.setStorage({key: "509", data: ["510.  Although there is an incredible diversity of microbes across the body of each individual, the fact that specific body sites tend to host a few specific bacteria indicates that the body\'s microflora are not______________distributed.",
{A: 'A.haphazardly',B: 'B.uniformly',C: 'C.effectively',D: 'D.heterogeneously',E: 'E.functionally',F: 'F.randomly',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：a few specific bacteria 说明 microflora 的分布不是随机的,而 是 specific 的,所以正确答案选 AF 选项.haphazardly 随意地,randomly 随 机地. \n***翻译：尽管每个生物身上的微生物存在着惊人的差异,这个关于每个特定的生 物生物被一些特定的细菌寄居的事实显示了生物体身上的微生物群不是不规则 分配的."]}),

wx.setStorage({key: "510", data: ["511.Some ambitious lawyers are willing to work on Supreme Court cases without charge in an effort to gain _______; they believe that this increased cachet will help them succeed in the future.",
{A: 'A.wisdom',B: 'B.certitude',C: 'C.prestige',D: 'D.integrity',E: 'E.humility',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：同义重复,通过 this increased cachet 能推出空格选 cachet 的同 义词,所以正确答案选 C 选项.prestige 威望. \n***翻译：一些野心勃勃的律师愿意为最高法院无偿工作,以此得到声望.他们相 信自己的声名大噪可以帮助他们在将来获得成功."]}),

that.setData({progress_percent:51}),wx.setStorage({key: "511", data: ["512. The author\'s unfortunate predilection for mannered turns of phrase and complicated metaphors had a tendency to_______her work\'s straightforward themes.",
{A: 'A.propitiate',B: 'B.accentuate',C: 'C.augment',D: 'D.occlude',E: 'E.presage',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：turns of phrase and complicated metaphors 必然对于 straightforward 的东西会有阻碍,正确答案选 D 选项.occlude 挡住. \n***翻译：这个作者不幸的偏爱矫揉造作的大串词组和复杂的修辞手法阻碍了她的 作品直抒主题."]}),

wx.setStorage({key: "512", data: ["513. The councilman was a highly respected, even (i)_____member of society, so when he was accused of fraud, people were (ii) _______.",
{A: 'A.venerated',B: 'B.obscure',C: 'C.unassuming',D: 'D.stunned',E: 'E.elated',F: 'F.gullible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空递进 respected,所以正确答案选 A 选项,第二空根据前文推 知,议员欺骗的事情大家不会相信,所以第二空选 D 选项.venerated 崇敬 的,stunned 惊讶的. \n***翻译：这个议员十分受人尊敬,甚至可以算作备受尊敬的社会成员,所以当他 因为诈骗而被起诉时,人们都震惊了."]}),

wx.setStorage({key: "513", data: ["514. (i)_____may sound like the (ii)_____novelty seeking, but in fact the latter can coexist with and balance that stick-to-it virtue strong-willed Victorians so promoted.",
{A: 'A.ambition',B: 'B.creativity',C: 'C.persistence',D: 'D.antithesis of',E: 'E.foundation for',F: 'F.precursor to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从后文的 the latter can coexist 的可以退出第二空选 coexist 的 反义词,所以选 D 选项,第一空和后文的 stick-to-it 同义重复,所以第一空 选 stick-to-it 同义词,正确答案 C 选项.persistence 坚持不懈, antithesis 对立物. \n***翻译：坚持不懈听起来像是追求新奇事物的对立面,但事实上后者可以和前者 共同存在,并且平衡坚持和顽强的维多利亚时期的人所宣传的那种坚毅的美 德."]}),

wx.setStorage({key: "514", data: ["515. Compared to Earth over most of its 4 to 6-billion-year history, the world we live in today is quite (i) _______. Of course, it is human nature to regard the world that we are used to as (ii) _______. The oceans, prairies, and mountain chains-even the air we breathe-seem the norm and therefore (iii) ______________.",
{A: 'A.bountiful',B: 'B.atypical',C: 'C.stable',D: 'D.invaluable',E: 'E.permanent',F: 'F.corrupted',G: 'G.eternal',H: 'H.precious',I: 'I.endangered'},
"###解析：注意题目中的 world that we are used to 指的是过去的世界而不是 现在,所以第一空和第二空是反义关系,所以第一空选 B 选项,第二空选 E 选 项,第三空和 norm 平行,所以第三空选 G 选项,而且第二空和第三空是同义关 系.atypical 不典型的,permanent 永恒的,eternal 永恒的. \n***翻译：比起地球 40 到 60 亿年的历史,我们现在所居住的世界是相当的不寻 常.的确,人类的天性就是把我们所熟悉的世界当成是永恒的.海洋,大草 原,山脉—甚至是我们呼吸的空气—都看起来很规范而且因此是永恒的."]}),

wx.setStorage({key: "515", data: ["516.  Leo Tolstoy wrote many works of nonfiction and professed (i)_____these explorations of ethics and religion compared with his novels and short stories. The fiction writer in him, however, was hard to (ii) _______. Handi Murdd is a short novel with the breadth and power of an epic, with vivid characterization and intense storytelling that sweep the reader away. While the reader senses the moral concerns of the tale\'s creator, the novel is a far cry from the (iii)_____of Tolstoy\'s nonfiction.",
{A: 'A.a preference for',B: 'B.an aversion to',C: 'C.an indifference toward',D: 'D.suppress',E: 'E.identify',F: 'F.incite',G: 'G.didacticism',H: 'H.fluidity',I: 'I.creativity'},
"###解析：第一空和 wrote many works of nonfiction 并列,所以应该是对于 这种 nonfiction 的热爱,第一空选 A 选项,however 转折,后面说其实内心中 的 fiction 也是很难压制住的,所以第二空选 D 选项,第三空注意 a far cry from 是\"与…相差甚远\"的意思,所以第三空和 moral concerns 取同,所以 选 G 选项.preference 偏爱,suppress 压制,didacticism 说教主义.\n***翻译：列夫·托尔斯泰写了很多非小说作品而且声称比起小说和短篇小说,他对 于这些道德和宗教的的探索有一种偏好.然而,他内心中的小说作家却是很难 压制住的.Handi Murdd 是一篇有着史诗般知识宽博和力量的短篇小说,还有 很生动的描绘和紧张的讲故事情节,这些东西会卷走读者.尽管读者能够意识 到这个故事创作人的道德担忧,但是这部小说却和托尔斯泰非小说中的说教主 义相差甚远."]}),

wx.setStorage({key: "516", data: ["517.  Changes made to ecosystems in order to achieve a goal, such as food production or flood control, often_______significant unforeseen trade-offs between other important products and services the ecosystems provide.",
{A: 'A.predict',B: 'B.delay',C: 'C.foretell',D: 'D.obscure',E: 'E.yield',F: 'F.engender',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：语义补全题目,填入一个动词能够体现 changes 产生的动作即可,这 些改变是为了生态系统而做的,所以后文填入一个\"引起\"的意思的词. \n***翻译：为了生态系统而做的为了实现一个目标的改变,例如食物生产或者洪水 控制,都会产生重大的无法预见的在生态系统提供的重要产品和服务之间的交 易."]}),

wx.setStorage({key: "517", data: ["518.  One big challenge with placebo responses is that they are _______: people given the same inert pill or potion may show wildly different reactions, and the effects can vary widely according to each person\'s illness.",
{A: 'A.capricious',B: 'B.illusory',C: 'C.unpredictable',D: 'D.chimerical',E: 'E.marginal',F: 'F.ephemeral',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：同样的药片和药剂,效果却不一样,说明这种药物的反应是不确定 的,能够对应的选项是 AC 选项.capricious 变化无常的,unpredictable 无法 预计的. \n***翻译：安慰剂反应的一个巨大质疑就是这些反应是易变的：给了同样的惰性药 片或者药剂的人可能表现出完全不同的反应,而且根据每个病人的病情还会形 成巨大差异."]}),

wx.setStorage({key: "518", data: ["519.  The Chicago journal known as Poetry has been the launching pad for many poets since its_______ in 1913; among them, T. S. Eliot, Gwendolyn Brooks, and John Ashbery.",
{A: 'A.extraction',B: 'B.foundation',C: 'C.partnership',D: 'D.employment',E: 'E.revival',F: 'F.inception',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：语义题,launching pad for many poets since 和 in 1913 能看出 空格需要的意思是\"成立\",正确答案选 BF 选项.foundation 创建, inception 开始.\n***翻译：那个叫诗歌的芝加哥杂志自从 1913 年被创建时就成为了很多诗人的起跳 板,在这些诗人中,有 T.S.Eliot,Gwendolyn Brook 和 John Ashbery."]}),

wx.setStorage({key: "519", data: ["520.  Although most land snails are _______, the giant African snail is a notable exception; it can be 15 inches long and weigh 2 pounds.",
{A: 'A.gargantuan',B: 'B.juvenile',C: 'C.functional',D: 'D.diminutive',E: 'E.responsive',F: 'F.minuscule',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：giant African snail 是一个例外,说明正常的 snail 都很小,所 以正确答案选 DF 选项.diminutive 极小的,minuscule 非常小的. \n***翻译：虽然大多数的陆地蜗牛都是身材矮小的,但非洲大蜗牛却是个值得注意 的例外.它可以长到 15 英尺长,重两磅."]}),

wx.setStorage({key: "520", data: ["521.The company\'s steering committee, reluctant to be held any specific commitments, released a strategic plan that was deliberately _______.",
{A: 'A.unpopular',B: 'B.repetitive',C: 'C.stringent',D: 'D.inflexible',E: 'E.nebulous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：reluctant to be held any specific commitments 说明空格选 specific 的反义词,正确答案选 E 选项.nebulous 模糊的. \n***翻译：公司的督导委员会,不情愿给出任何具体承诺,于是故意给出了一个含 糊不清的策略."]}),

that.setData({progress_percent:52}),wx.setStorage({key: "521", data: ["522. Gladys took a_______approach to problem solving, so when the committee needed ideas on how to create more low-cost public transportation, she suggested they study what worked well in other cities with similar needs.",
{A: 'A.benign',B: 'B.pragmatic',C: 'C.compliant',D: 'D.rarefied',E: 'E.dogmatic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说她回去参考别的城市的情况,符合这个语义的只有 B 选项. pragmatic 务实的.\n***翻译：G 选择了一种非常务实的处理问题的方式,所以当委员会问她有没有办 法能够建造更多价格低廉的公共交通工具时,她建议他们学习其他有相同需要 的城市的方法."]}),

wx.setStorage({key: "522", data: ["523. Knowing how (i)_____she was at work, her colleagues were surprised at her (ii) _______ throughout the dinner.",
{A: 'A.dependable',B: 'B.diffident',C: 'C.diligent',D: 'D.timidity',E: 'E.assertiveness',F: 'F.punctiliousness',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 surprised 得知前后两个特征是反义关系,答案选 BE 选项. diffident 不自信的,assertiveness 自信. \n***翻译：知道她平时在工作的时候是多么的不自信,所以他的同事们很惊讶于她 在晚餐中表现出来的自信."]}),

wx.setStorage({key: "523", data: ["524. Fears that the recent sharp rise in oil prices is an indication that oil is running out appear to be (i) _______. The Middle East still contains vast oil supplies. Furthermore, even if new oil finds elsewhere have been (ii)_____than in the past, substantial quantities of oil can be profitably stripped from tar and shale.",
{A: 'A.contagious',B: 'B.unfounded',C: 'C.sagacious',D: 'D.less frequent',E: 'E.more accessible',F: 'F.less publicized',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：The Middle East still contains vast oil supplies 说明这些恐 惧是错误的,第一空选 B 选项,根据后文的让步关系推出第二空选一个体现石 油的发现并不多的意思,所以正确答案选 D 选项.unfounded 无根据的,less frequent 不频繁的. \n***翻译：最近油价快速上涨推出油正在用尽的这些恐惧看起来是没有根据的.中 东仍然包含大量的石油供给.另外,就算在别的地方的新油的发现已经在过去 越来越不常见了,大量的油能够高利润地从沥青和页岩中剥夺."]}),

wx.setStorage({key: "524", data: ["525. Twenty years ago, when the book was first published, most reviewers dismissed the author\'s predictions as (i) _______. Sometimes people (ii)_____their errors: those same reviewers today, comparing the predictions with actual events, acknowledge how (iii)_____the author was.",
{A: 'A.insightful',B: 'B.judicious',C: 'C.alarmist',D: 'D.persevere in',E: 'E.recognize',F: 'F.complicate',G: 'G.mistaken',H: 'H.prescient',I: 'I.pessimistic'},
"###解析：从 error 推出 20 年前这些人是反对这个 author 的,所以 C 选项 alarmist 最能体现,第二空体现出他们现在知道自己的错误,选一个体现\"意 识到\"的意思,选 E 选项,第三个空格选一个正评价体现 author 的 predictions 是对的,所以选 H 选项.alarmist 危言耸听的,recognize 意识 到,precient 有预见性的. \n***翻译：二十年前,当这本书出版时,大部分读者谴责作者的语言是危言耸听. 有时候人们意识到他们的错误：正是这些人现在通过对比这些语言和实际情 况,他们开始承认这个作者是多么的有前瞻性."]}),

wx.setStorage({key: "525", data: ["526.  Keith Haring\'s cartoonish art became even more (i)_____than Andy Warhol\'s much-reproduced soup cans when, in 1986, he opened his own store, the Pop Shop, to sell licensed Haring merchandise. The public loved the souvenirs; the critics (ii)_____what they saw as his betrayal of artistic integrity. Haring claimed that these critics misunderstood his (iii)_____to take art beyond galleries and museums, and thus to give a wider audience the opportunity to experience art.",
{A: 'A.commercial',B: 'B.traditional',C: 'C.expert',D: 'D.fostered',E: 'E.decried',F: 'F.anticipated',G: 'G.failed plan',H: 'H.financial need',I: 'I.sincere need'},
"###解析：sell licensed Haring merchandise 体现出 KH 卡通艺术的商业化, 第一空选 A 选项.第二空通过 betrayal of artistic integrity 得出空格是负 评价,第三空通过 misunderstood 得知选正评价,所以选 I 选项.commercial 商业化的,decry 谴责,sincere need 真诚的需求.\n***翻译：相比于 AW 大量生产的汤罐,KH 的漫画艺术变得越来越商业化,他在 1986 年建造了自己的第一间店铺去贩卖经过许可的 Haring 商品.大众很喜爱 的纪念品；在批判家眼里是对于他艺术正直性的背叛.H 声称这些批判学家误 解了他在画廊和博物馆之外的真实需求,而且给了更广大的受众一个机会去体 验艺术."]}),

wx.setStorage({key: "526", data: ["527.  As the biography makes plain, the scientist led_______sort of life, rarely remaining in one place for long.",
{A: 'A.an enigmatic',B: 'B.an idiosyncratic',C: 'C.an itinerant',D: 'D.a cautious',E: 'E.a peripatetic',F: 'F.a circumspect',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应后文的 rarely remaining in one place for long,所以 正确答案选 CE 选项.itinerant 巡回的,peripatetic 巡回工作的. \n***翻译：正如传记所清楚表现的那样,科学家过着一种巡回式的生活,很少长时 间留在一个地方."]}),

wx.setStorage({key: "527", data: ["528.  There is a revelation on almost every page of this book, and the author\'s prose is_______in the best possible way: blunt, sweet, off-kilter, and often quite funny.",
{A: 'A.eloquent',B: 'B.austere',C: 'C.somber',D: 'D.awkward',E: 'E.solemn',F: 'F.ungainly',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面对空格进行了解释说明,后面明显是负面评价,所以答案选 DF 选项.awkward 笨拙的,ungainly 笨拙的. \n***翻译：在这本书的每一页上几乎都有揭露的内容,而且作者的散文就算在最好 的可能方式中也是笨拙的：直言不讳,痛快,有失水准,而且经常很可笑."]}),

wx.setStorage({key: "528", data: ["529.  The potential reduction in water lost from the proposed reservoir from evaporation is  _______ inconsequential: even the minimum projected reduction would save enough water to furnish the needs of a Denver-sized municipality.",
{A: 'A.nearly',B: 'B.comparatively',C: 'C.scarcely',D: 'D.rarely',E: 'E.hardly',F: 'F.relatively',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面说就算最小量的减少量也会节约出足够多的水来提供给 D 大 小的市区的需求,说明这种减少还是有很大重要性的,inconsequential 是不 重要的意思,所以选两个否定副词,正确答案选 CE 选项.scarcely 几乎不, hardly 几乎不. \n***翻译：从计划中的水库中由于蒸发而导致的水量的可能减少量不是不重要的： 就算是最小的减少量也会节省出足够的水来提供给像丹佛这样大小城市的需 求."]}),

wx.setStorage({key: "529", data: ["530.   _______ the notion that attention is a limited resource, scientists have found lots of evidence that drivers with cell phones drives slower and are more apt to miss important details than drivers who drive solely on the road.",
{A: 'A.Controverting',B: 'B.Buttressing',C: 'C.Questioning',D: 'D.Bolstering',E: 'E.Perpetuating',F: 'F.Refuting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说打电话的司机比不打电话的司机开得更慢,更容易错过重要 标志,说明注意力确实是有限的,所以空格填入一个表示加强的意思的词,正 确答案选 BD 选项.buttress 支持,bolster 支持. \n***翻译：支持了这样一个理念：注意力是有限的资源.科学家已经发现大量的证 据表明拿着手机的司机比单纯开车的司机开车更慢而且更容易错过重要细节."]}),

wx.setStorage({key: "530", data: ["531.As the release of the annual report drew near, it was clear that more than a few employees suspected the company was on the verge of bankruptcy; the belief was throughout the organization.",
{A: 'A.omniscient',B: 'B.abject',C: 'C.pervasive',D: 'D.estimable',E: 'E.specious',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：more than a few employees suspected the company was on the verge of bankruptcy 表明很多员工都相信了这个事实,所以对应的选项是 C. pervasive 普遍的. \n***翻译：当年终报告即将被发放的时候,很清楚的是不少的员工开始怀疑自己的 公司濒临破产,这个想法在整个团队都很普遍."]}),

that.setData({progress_percent:53}),wx.setStorage({key: "531", data: ["532. The automation of many of the functions performed at the factory, although initially inspiring_______ in many of the company\'s employees, has had none of the deleterious effects forecast either within and beyond the organization.",
{A: 'A.indifference',B: 'B.optimism',C: 'C.ambition',D: 'D.arrogance',E: 'E.trepidation',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：none of the deleterious effects 说明空格和 deleterious 重复, 找 deleterious 同义词,正确答案选 E 选项.trepidation 惊恐,恐慌. \n***翻译：工厂里执行功能的自动化,尽管一开始造成了公司中很多员工的惶恐不 安,但却没有发生任何预期中会发生的那种有害的的现象."]}),

wx.setStorage({key: "532", data: ["533. The claim that large budget deficits significantly depress private investment and thereby hurt future wages and living standards is (i) _______; in reality, the (ii)_____effects of budget deficits are tiny.",
{A: 'A.fallacious',B: 'B.incomprehensible',C: 'C.incontrovertible',D: 'D.adverse',E: 'E.unforeseen',F: 'F.ameliorate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从后面的 in reality 的内容推出前面的说法是不对的,所以第一空 选 A 选项,第二空 effects 就是指的前文的这些负面的 effects,所以选体现 负评价的词,正确答案选 D 选项.fallacious 谬误的,adverse 不利的. \n***翻译：关于庞大预算会大大抑制私人投资,从而会伤害未来工资和生活水平的 说法是错误的,现实上,这个预算产生不好的影响是很渺小的."]}),

wx.setStorage({key: "533", data: ["534. The small errors of fact in the work are not sufficient to allow one to (i)_____Johnson\'s main thesis, but their cumulative effect is to make the reader (ii)_____of the quality of his research.",
{A: 'A.dismiss',B: 'B.endorse',C: 'C.decipher',D: 'D.skeptical',E: 'E.credulous',F: 'F.appreciative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 small errors 选出 A 选项,第二空根据 but 转折得知后 面空格选负评价,正确答案选 D 选项.dismiss 驳回,skeptical 怀疑的. \n***翻译：作品中的事实的小错误不足够让一个人驳回 J 的主要论文,但是他们的 累积效应会让读者怀疑研究的质量."]}),

wx.setStorage({key: "534", data: ["535. Even though intelligence may be quite (i) _______, and even though scientists may have made frustratingly (ii)_____progress in understanding it, many experts on intelligence still think that the potential (iii)_____of the quest to understand intelligence make it worth continuing. For instance, a brain-based understanding of intelligence may help teachers design strategies for educating children more effectively.",
{A: 'A.useful',B: 'B.neglected',C: 'C.complex',D: 'D.little',E: 'E.rapid',F: 'F.extensive',G: 'G.intellectual impediments',H: 'H.practical values',I: 'I.financial rewards'},
"###解析：frustratingly 对应第一空,正确答案选 C,因为复杂,所以第二空 选令人沮丧地小的进步,第二空选一个体现\"少\"的词,正确答案选 D 选项, 第三空通过后面的例子知道说的是 intelligence 的实际运用价值,所以正确答 案选 H 选项.complex 复杂的,little 几乎没有,practical value 实用价 值. \n***翻译：尽管智商可能会比较复杂,甚至科学家们对此的研究也只有令人沮丧的 一点点而已,研究智商的很多学者仍认为研究智商的实用价值让智商研究只得 继续.比如,以大脑为基础的对于智商的研究能够给老师提供更加有效的教育 学生的策略."]}),

wx.setStorage({key: "535", data: ["536.  While the Prime Minister\'s long-standing reputation for (i)_____practical power may (ii)_____his recently stated willingness to devolve real power to regional assemblies and local governments, it certainly does not (iii)_____his doing it.",
{A: 'A.centralizing',B: 'B.overseeing',C: 'C.exploring',D: 'D.render inevitable',E: 'E.be based on',F: 'F.raise doubts about',G: 'G.require',H: 'H.allow',I: 'I.preclude'},
"###解析：long-standing reputation 和 recently stated willingness 取 反,所以第一空选 devolve real power to regional assemblies and local governments 的反义,所以选 A 选项,第二空体现前面的对比关系,所以第二 空选 F 选项,第三空根据 while 让步关系,得知尽管有这个矛盾存在,但是并 不会阻碍他的行为,所以第三空选 I 选项.\n***翻译：尽管这个首相的长期以来要集中力量的名声可能会给他带来关于他最近 要真正下放权力到区域政府这一想法带来疑问,但他一向的声名并不阻碍他下 放权力."]}),

wx.setStorage({key: "536", data: ["537.  Although a dedicated reader of the book can_______a brief of chronology of Chappell\'s life, the book is nevertheless not a real biography of Chapelle.",
{A: 'A.mass',B: 'B.obtain',C: 'C.overlook',D: 'D.excuse',E: 'E.forgo',F: 'F.glean',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the book is nevertheless not a real biography of Chapelle 说 明前面体现 real 的特征,所以空格选 BF 选项.obtain 获取,glean 搜集. \n***翻译：尽管一本书的专一的读者会获取 Chapelle 生活的简要的年代记录,但是 这本书却不是一本真正的 Chapelle 的传记."]}),

wx.setStorage({key: "537", data: ["538.  In their quest for kinder cutting, physicians increasingly rely on endoscopic surgery, replacing large scalpels and clamps with cameras and_______tools that snake into the body through tiny holes.",
{A: 'A.flexibility',B: 'B.rigidity',C: 'C.magnitude',D: 'D.suppleness',E: 'E.enormity',F: 'F.precision',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：定语 that snake into the body through tiny holes 体现了空格的 特征,所以对应的正确答案选 AD 选项.flexibility 柔韧,suppleness 柔韧. \n***翻译：在追求更温柔的切割的时候,医生更多地依靠内窥镜手术法,用相机和 能够通过小洞进入身体的柔软的工具替代解剖刀和夹具."]}),

wx.setStorage({key: "538", data: ["539.  The university\'s once_______department of economic history has lost prestige and transmogrified into a department of management and marketing.",
{A: 'A.respected',B: 'B.slighted',C: 'C.pretentious',D: 'D.gigantic',E: 'E.venerable',F: 'F.snubbed',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：lost prestige and transmogrified into a department of management and marketing 说明大学曾经的特征是 prestige,空格选 prestige 同义词.正确答案是 AE 选项.respected 受人尊重的,venerated 收 到尊重的. \n***翻译：这个大学曾经收到尊敬的经济历史系已经失去了名望而且惊人地变为了 管理和市场系."]}),

wx.setStorage({key: "539", data: ["540.  Travel writers have a special burden of forming_______story-that is, one with a beginning, middle, and end-out of the unformed moments that make up the act of traveling.",
{A: 'A.a compelling',B: 'B.a coherent',C: 'C.an original',D: 'D.a serious',E: 'E.an orderly',F: 'F.an innovative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：解释说明,空格和 one with a beginning, middle, and end 取同 义,所以正确答案选 BE 选项.coherent 连贯的,orderly 井然有序的. \n***翻译：旅行作者有一种特殊的组成连贯的故事的责任,那也就是说要从组成旅 行的各种不完整的瞬间中选出一个有开头,中间和结尾的故事."]}),

wx.setStorage({key: "540", data: ["541.Like all general models, island biogeography theory is_______reality, capturing just a few important elements of a system while ignoring many others.",
{A: 'A.an adjunct to',B: 'B.an improvement on',C: 'C.a mirror of',D: 'D.a corollary to',E: 'E.a simplification of',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：capturing just a few important elements of a system while ignoring many others 体现了这个理论的不完整性,正确答案选 E 选项. simplification 简化. \n***翻译：就想所有的通用的模型,岛屿生态地理学理论是真实情况的简化,只抓 住了一些重要的系统元素缺忽视了很多其他的东西."]}),

that.setData({progress_percent:54}),wx.setStorage({key: "541", data: ["542. The restaurant often experience a decline in business after holiday seasons, for potential customers attempt to be more_______to balance out their former celebratory indulgences.",
{A: 'A.abstemious',B: 'B.loyal',C: 'C.unsophisticated',D: 'D.blithe',E: 'E.indolent',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：balance out 是平衡,抵消的意思,既然是去抵消庆祝时的放纵,所 以空格应该是填入放纵的反义,也就是\"节约\"的意思,所以正确答案选 A 选 项.abstemious 有节制的. \n***翻译：饭店经常在节后会经历一段时间生意下滑,因为很多潜在的客户都想要 更加节制一点来平衡在过节期间庆祝时的浪费."]}),

wx.setStorage({key: "542", data: ["543. Just as different human groups have different kinds of musical traditions, different groups of whales have different dialects evident in their songs, and it is possible for one group to influence the (i)_____of another. It has been documented more than once that a group of whales will(ii)_______ its own tunes and adopt the new songs of an unfamiliar group.",
{A: 'A.tastes',B: 'B.diversity',C: 'C.organization',D: 'D.create',E: 'E.abandon',F: 'F.perpetuate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 adopt the new songs 推出第二空选\"丢弃\"的意思,第一空根 据 abandon its own tunes 推出影响的是\"爱好,品味\",所以第一空选 A 选 项最合适.taste 爱好,abandon 放弃. \n***翻译：正像是不同的人类组织有不同的音乐习俗,有证据证明不同的鲸鱼群在 唱歌时都有不同的口音,而且也可能使得一组鲸鱼影响另一组鲸鱼的爱好.研 究不止一次证明一组鲸鱼可能会放弃它们原来的声调而采用不熟悉的群体的新 歌声."]}),

wx.setStorage({key: "543", data: ["544. Any number of mysteries to which individual scholars of Athenian history have devoted whole careers are addressed by Ober, and mostly successfully. This will cause some (i)_____among scholars who have worked for years on a particular problem only to see another scholar suddenly (ii)_____it.",
{A: 'A.chagrin',B: 'B.complacency',C: 'C.hubris',D: 'D.prolong',E: 'E.exacerbate',F: 'F.resolve',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：例题是来解释后面的道理,所以第二空对应 are addressed by Ober,所以正确答案选 F 选项,第一空根据语义推理,这样的情况会引起一个 负面的情绪,最合适的选项是 A 选项.chagrin 失望,resolve 解决. \n***翻译：任何数量的雅典历史的独立学者已经付出毕生心血的神话都被 Ober 处理 了,而且大部分都成功了.这将会在那些已经在某一个问题上研究了很多年却 只能看到另外一个学者突然解决了它的学者中带来一些失望."]}),

wx.setStorage({key: "544", data: ["545. Wolosky claims that Ella Wheeler Wilcox joined other women poets such as Julia Ward Howe, Frances Harper, and Charlotte Perkins Gilman in critiquing materialism and possessive individualism. Wolosky\'s description (i)_____the poetry of Gilman, Howe, and Harper, but it is not entirely (ii)_____in the case of Wilcox, who hardly (iii)_____the materialism of her time. Rather, Wilcox seems to have embraced the amassing of private property.",
{A: 'A.fits',B: 'B.conflates',C: 'C.misinterprets',D: 'D.apt',E: 'E.puzzling',F: 'F.uncommon',G: 'G.reflected',H: 'H.countenanced',I: 'I.impugned'},
"###解析：第一二空取同义词,能够构成同义的是 AD 选项,第三空 who 指的是 Wilcox,既然 Wolosky 的描述和 Wilcox 不一致,说明 Wilcox 是支持物质主义 的,也就是不会去指责物质主义,所以第三空选 I 选项.fit 适合,apt 适合, impugn 质疑.\n***翻译：Wolosky 声称 Wilcox 加入了其他女性诗人的阵营,例如 JWH,FH 和 CPG,她们都会去批评物质主义和占有欲强的个人主义.Wolosky 的描述和 CPG,JWH 和 FH 一致,但是和 Wolcox 的情况不完全一致.Wilcox 不会去责备她 所在时代的物质主义,相反,她似乎已经欣然接受了大量私人财产."]}),

wx.setStorage({key: "545", data: ["546.  What she disliked in the fictions of some of her peers was the excessive (i) _______. In her novel, by contrast, she was marked by a (ii) _______: she always (iii) _______.",
{A: 'A.explicitness',B: 'B.deviousness',C: 'C.divergence',D: 'D.ebullience',E: 'E.reticence',F: 'F.introspection',G: 'G.keeps some details undisclosed',H: 'H.ends the book with a bleak note',I: 'I.draws on unusual sources'},
"###解析：第一空和第二空反义关系,所以答案选 AE 选项,第三空解释第二 空,所以第三空和第二空取同义,所以第三空选 G 选项.explicitness 直言不 讳,reticence 缄默不语,keep some details undisclosed 让一些细节不公 开. \n***翻译：在一些她的同龄人的小说中她不喜欢的是过度的直言不讳.相反,在她 自己的小说中,他有一种明显的缄默不语：她经常会让一些细节不公开."]}),

wx.setStorage({key: "546", data: ["547.  There are many ways in which rat brains and human brains are _______. Indeed, rat brains are often used as generalized models for all mammalian brains, including our own.",
{A: 'A.identical',B: 'B.analogous',C: 'C.mysterious',D: 'D.comparable',E: 'E.adaptable',F: 'F.inexplicable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：rat brains are often used as generalized models 说明老鼠和人 类的大脑有相似的地方,正确答案选 BD 选项.analogous 类似的,comparable 相似的. \n***翻译：鼠脑和人脑从很多方面上来讲是相似的,鼠脑经常被用来作为笼统的人 脑研究模型."]}),

wx.setStorage({key: "547", data: ["548.  Space is often referred to as the final frontier, as the only realm of which humankind has still to gain substantial understanding, yet the ocean realm is another vast area about which our knowledge is _______.",
{A: 'A.erroneous',B: 'B.confusing',C: 'C.frustrating',D: 'D.rudimentary',E: 'E.delusive',F: 'F.sketchy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说人类 gain substantial understanding,后面 yet 转折了, 说明空格要选 substantial 的反义,所以正确答案选 DF 选项.rudimentary 基 本的,sketchy 粗略的. \n***翻译：宇宙经常被称为最后的边界,作为人类的唯一一个领域,仍然需要获得 更大的理解,另外海洋也是另一个,我们的知识还很初级的广袤的领域."]}),

wx.setStorage({key: "548", data: ["549.  The occasional minor errors, while annoying, do not_______the basic scholarship or the valuable contribution of this book.",
{A: 'A.support',B: 'B.uphold',C: 'C.expose',D: 'D.explain',E: 'E.vitiate',F: 'F.impair',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 while annoying 推出空格选一个负评价词,正确答案选 EF 选 项.vitiate 损坏,impair 损害. \n***翻译：偶尔的小错误,尽管很讨人厌,并不会损害这本书中的基础学识和宝贵 贡献."]}),

wx.setStorage({key: "549", data: ["550.  In American art the line between the good and the goods is not a hard-and-fast boundary, for in a commercial society the membrane that separates spirit and store is always _______.",
{A: 'A.porous',B: 'B.clogged',C: 'C.permeable',D: 'D.unwavering',E: 'E.steady',F: 'F.imaginary',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应前文的 not a hard-and-fast boundary,hard-and-fast 的意思是一成不变,所以正确答案选 AC 选项.porous 多孔的,permeable 可渗 透的. \n***翻译：在美国艺术中,好东西和货物自建的界限并不是一成不变的,因为对于 一个商业社会来讲,分离态度和存货之间的\"薄膜\"始终是可渗透的."]}),

wx.setStorage({key: "550", data: ["551.Needing an advocate who would be both precise and succinct, they rejected McLintock, whose inveterate_______would automatically preclude meeting those requirements.",
{A: 'A.punctiliousness',B: 'B.concision',C: 'C.cautiousness',D: 'D.imperturbability',E: 'E.prolixity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：填入 both precise and succinct 的反义词,正确答案选 E 选项, prolixity 冗长. \n***翻译：他们需要一个言辞简单明了而且准确倡导者,他们排除了 MCL,因为这 个人惯于讲话冗长这一点直接阻碍了达到他们需求的标准."]}),

that.setData({progress_percent:55}),wx.setStorage({key: "551", data: ["552. Baker set a new standard for explaining difficult art in language the public could understand; consequently, her books remain exemplars of_______in art-historical analysis.",
{A: 'A.fashion',B: 'B.rigor',C: 'C.lucidity',D: 'D.erudition',E: 'E.grandiosity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题比较简单,空格对应上文的 explaining difficult art in language the public could understand,很明显选一个表示\"清晰易懂\"的 词,正确答案选 C 选项.lucidity 明白易懂. \n***翻译：贝克设立了新的能够用语言使众人听懂复杂艺术的新标准,因此,她的 新书中就保留着清楚解释艺术史的分析的例子."]}),

wx.setStorage({key: "552", data: ["553. He was a leader about whom the country\'s people felt (i) _______: both (ii)_____and reviling him.",
{A: 'A.ambivalent',B: 'B.complacent',C: 'C.indifferent',D: 'D.ignoring',E: 'E.understanding',F: 'F.adulating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：两个空格联系求解,第一空填入矛盾,第二空填入 revile 的反义 词.正确答案选 AF 选项.ambivalent 矛盾的,adulating 阿谀奉承. \n***翻译：她就是那个让整个国家人民感觉很矛盾的国家领导人,人们既奉承他又 责骂他."]}),

wx.setStorage({key: "553", data: ["554. Fables often endure due to their (i) _______, often telling one simple narrative, based around one character. This is both by design, because direct statements are more easily remembered than florid ones, and by accident, as fables are passed from teller to teller, (ii)_____details fall away, leaving only the essential story.",
{A: 'A.bombast',B: 'B.objectivity',C: 'C.simplicity',D: 'D.superfluous',E: 'E.requisite',F: 'F.apocryphal',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：often telling one simple narrative 说明第一空选 simple 的反义 词,正确答案选 C 选项,第二空根据 leaving only the essential story 说明 选 essential 的反义,正确答案选 D 选项.simplicity 简单,superfluous 多 余的. \n***翻译：寓言都因为它们的简单而遵循着统一模式,通常都是讲述一个简单的故 事,基于一个人物.就设计而言,这种简单性是因为直接叙述的比修饰很多的 故事更容易被人们记住,就事件简单而言,那是因为寓言中过多的细节会随着 口口相传而被遗留,只留下其中最重要的故事情节."]}),

wx.setStorage({key: "554", data: ["555. To pay for the extra spending under this international poverty plan, each American would have to contribute less than the cost of buying a premium cup of coffee once a week. But financial aid is not (i) _______, and even if the funding recommended here were to (ii) _______, the grandest objectives may well remain unfulfilled. Nonetheless, carefully targeted aid can reward responsible governments, (iii)_____individual initiative, and alleviate suffering. Many will think that\'s worth of a cup of coffee.",
{A: 'A.an impediment',B: 'B.a panacea',C: 'C.a malady',D: 'D.be insufficient',E: 'E.recede',F: 'F.materialize',G: 'G.obviate',H: 'H.temper',I: 'I.encourage'},
"###解析：前面说每一个美国人去支持国际扶贫计划,第一空根据 but 知道这个 计划不是一个完美的东西,选 B 选项,第二空让步,即便这个计划成功了,也 会有不好的地方,所以选 F 选项,第三空和 reward,alleviate 并列,找正评 价词,所以选 I 选项.panacea 万能药,materialize 实现,encourage 鼓励. \n***翻译：为了支付国际减贫计划的额外开支,每一个美国人都应该贡献出比一杯 溢价咖啡还要便宜的价格.但财政措施并不是万能药,并且即使资金建议在这 里能够实现,宏伟的目标可能仍未实现.然而,那些小心谨慎有针对性的援助 还可以奖励负责的政府,鼓励个人的主动性,并且减轻痛苦.很多人认为这笔 钱的支出比单纯买一杯咖啡要有意义得多."]}),

wx.setStorage({key: "555", data: ["556.  Gravitational waves-ripples in the geometry of space-time-are analogous to electromagnetic waves. The challenge in trying to observe these waves directly is that they are extremely weak. To make waves large enough to be (i) _______, the most (ii)_____events in the universe are required: supernova explosions, the formation of black holes, or the collision of stars. Even so, the effects are (iii) _______. The geometry changes so little that a distance of several kilometers changes by less than the diameter of a proton.",
{A: 'A.detectable',B: 'B.usable',C: 'C.explicable',D: 'D.obvious',E: 'E.subtle',F: 'F.violent',G: 'G.masked',H: 'H.disastrous',I: 'I.minuscule'},
"###解析：第一空根据 make waves large enough 知道目的是想要让引力波被发 现,所以第一空选 A 选项,第二空重复 large enough,所以第二空选 F 选项,第三空根据 even so 的转折,得知效果取第二空的反义,所以第三空选 I 选 项.detectable 可觉察的,violent 剧烈的,minuscule 小的. \n***翻译：引力波(时空几何中的波动)是和电磁波非常类似的.观察这些波的挑 战在于它们非常的弱.为了让波足够大到能够被发现,需要宇宙中最猛烈事件 发生：超新星爆炸,黑洞形成,或者恒星碰撞.即便这样,效果还是非常小 的.时空几何改变得如此小以至于几千米的距离变得不及一个质子的直径长 度."]}),

wx.setStorage({key: "556", data: ["557.  Although the four microclimates, observed over the three years, show very similar overall trends, suggesting spatial_______in the rock surface temperature regime, relative humidity and surface wetness data show clear differences.",
{A: 'A.invariability',B: 'B.superiority',C: 'C.perception',D: 'D.homogeneity',E: 'E.resemblance',F: 'F.immutability',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：尽管表现出了 similar 的总体趋势,表明有一些同质的东西存在,空 格选 similar 的同义词,正确答案选 DE 选项.homogeneity 同质, resemblance 相似. \n***翻译：尽管这四个小气候(在过去的三年中被观测到的)表现出了非常类似的 总体趋势,表明在岩石表面温度体系中存在空间的相似度,但是相对湿度和表 面潮湿的资料却表现出了明显的区别."]}),

wx.setStorage({key: "557", data: ["558.  Because chemistry\'s position as one of the natural sciences has long seemed    , historians have generally treated the foundation of chemical professorship as an inevitable component of the progression of universities.",
{A: 'A.manifest',B: 'B.impregnable',C: 'C.relevant',D: 'D.predictable',E: 'E.germane',F: 'F.self-evident',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：历史学家把化学教授头衔的基石当成是大学进步的必要组成部分,这 明显地告诉我们化学的地位很高,所以空格对应的答案是 AF 选项.manifest 明显的,self-evident 不证自明的. \n***翻译：因为化学作为自然科学的地位已经长期看起来不证自明,所以历史学家 普遍把化学教授头衔的基石当成是大学进步的必要组成部分."]}),

wx.setStorage({key: "558", data: ["559.  Her apparent_______her background and ancestry seems unconceivable in an age when people tend to think of themselves to exhaustion.",
{A: 'A.rejection of',B: 'B.deference to',C: 'C.unfamiliarity with',D: 'D.dishonesty with',E: 'E.ignorance of',F: 'F.fixation on',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：在一个人们都会费劲地去思考自己的身世的时代,看起来难以置信的 事情是一个人对自己的背景和世系不了解,正确答案选 CE 选项. unfamiliarity 不熟悉,ignorance 无知. \n***翻译：她明显的对于她的背景和身世的不了解在一个人们去筋疲力尽地去思考 他们自己的时代看起来是难以想象的."]}),

wx.setStorage({key: "559", data: ["560.  For parents, the pleasure of letting children choose which book to read aloud together is not always _______: I well remembered my inner groans when my child would constantly pick my least favorite book from the shelf.",
{A: 'A.intangible',B: 'B.enduring',C: 'C.impalpable',D: 'D.unalloyed',E: 'E.ephemeral',F: 'F.unqualified',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面说当孩子选了自己不喜欢的书的时候其实还是比较不爽(groan)的,说明前面的那件事不是绝对的,所以正确答案选 DF 选项. unalloyed 纯粹的,unqualified 绝对的. \n***翻译：对于父母来说,让孩子选择哪本书来大声朗读的愉悦并不总是绝对的: 我清楚地记得当我的孩子总是从书架上选择我不喜欢的书的时候我内心的不 满."]}),

wx.setStorage({key: "560", data: ["561.The macromolecule RNA is common to all living beings, and DNA, which is found in all organisms except some bacteria, is almost as _______.",
{A: 'A.mercurial',B: 'B.amorphous',C: 'C.ubiquitous',D: 'D.manifest',E: 'E.exiguous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前文的 common to all living beings 和后文的 in all organisms 都能体现出\"多\"的特征,能体现多的是 C 选项.ubiquitous 无处不在的. \n***翻译：RNA 大分子对所有生物体都是常见的,而且在除了细菌之外所有生物体 都发现的 DNA 也几乎是同样无处不在."]}),

that.setData({progress_percent:56}),wx.setStorage({key: "561", data: ["562. Notwithstanding that the_______of local branch banks has been so much predicted, in most countries the number of branch banks has increased over the past decade.",
{A: 'A.resurgence',B: 'B.proliferation',C: 'C.demise',D: 'D.profitability',E: 'E.reorganization',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据后文说 the number of branch banks has increased over the past decade 和 notwithstanding 的让步说明之前的状态是 increase 的反义 词,正确答案选 C 选项.demise 死亡. \n***翻译：尽管这个当地分支银行的死亡是意料之中的,但在大部分国家,分支银 行的数量在过去的几十年间一直是增长的."]}),

wx.setStorage({key: "562", data: ["563. There are something like 1,400 seed banks around the world, which guard samples of crop plants ranging from alfalfa to yams. But this agricultural archive is (i)_____as a result of war, storms, scant money, and bad management, particularly in the world\'s most (ii)_____places.",
{A: 'A.eroding',B: 'B.expanding',C: 'C.stabilizing',D: 'D.secure',E: 'E.turbulent',F: 'F.cosmopolitan',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 war, storms, scant money, and bad management 这些 负评价词得知选负评价动词,所以选 A 选项,第二空根据 particularly 知道是 递进,所以后面选一个负评价词,比前面的 war, storms, scant money, and bad management 更递进,所以 E 选项最合适.erode 损害,turbulent 混乱 的.\n***翻译：在世界上有大约 1400 个种子库,它们会保护农作物的样本,从苜蓿到山 药.但是这个农业档案馆因为战争,风暴,资金短缺和不善管理被破坏了,尤 其是因为在世界上最混乱的地方."]}),

wx.setStorage({key: "563", data: ["564. Recent years have seen a disheartening string of revelations in which everyday items once considered (i)_____are found to contain (ii)_____chemicals.",
{A: 'A.ubiquitous',B: 'B.innocuous',C: 'C.insalubrious',D: 'D.benign',E: 'E.complex',F: 'F.baneful',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：a disheartening string of revelations 告诉我们两个空格是反义 关系,而且第二空最好是负评价来体现 disheartening,所以正确答案的搭配 是 BF 选项.innocuous 无害的,baneful 有害的. \n***翻译：这些年的研究已经看到一连串让人沮丧的真相：日常被认为无害的物体 被发现其实包含有害的化学物."]}),

wx.setStorage({key: "564", data: ["565. Parker\'s model of human affairs reflects (i)_____outlook, in stark contrast to the generally (ii)_____premises that her colleagues in the economics department adopt in their work. Accordingly, her conclusions (iii)_____theirs.",
{A: 'A.a sanguine',B: 'B.an introspective',C: 'C.a technical',D: 'D.pessimistic',E: 'E.theoretical',F: 'F.distinctive',G: 'G.are somewhat more accessible than',H: 'H.are not so sunny as',I: 'I.diverge markedly'},
"###解析：根据 in stark contrast to 推出第一空格和第二空格是反义关系, 所以正确答案选 AD 选项,第三空根据前面句子的结论推出两种观点是对立的, 所以选体现\"对立\"特征的词.sanguine 乐观的,pessimistic 悲观的, diverge markedly 强切反差.\n***翻译：P 的人类事务的模型反映了一个乐观的观点,这个观点和他在经济部门 的同事在作品中采用的悲观的前提是相反的.因此,她的结论和她同事们的结 论是截然不同的."]}),

wx.setStorage({key: "565", data: ["566.  Those who took Clark\'s old-mannered compliance for obsequiousness (i)_____him: his apparent (ii)_____veiled a fervent (iii)_____of the authority that others exercised over him, one that he occasionally expressed by discreetly sabotaging their most important projects.",
{A: 'A.misconstrued',B: 'B.condemned',C: 'C.respected',D: 'D.cynicism',E: 'E.acquiescence',F: 'F.intractability',G: 'G.veneration',H: 'H.justification',I: 'I.detestation'},
"###解析：第二空根据 apparent\"明显的\"得知空格和前面的特征 compliance 取同,所以第二空选 E 选项,第三空根据 veil\"隐藏\"得知选第二空的反义, 所以第三空选 I 选项,那么第一空根据后文的倒推知道,把表面上的服从当成谄媚是误解了 C,因为实际上他对于权威有强烈的厌恶,所以第一空选 A 选 项.misconstrue 误解,acquiescence 默许,detestation 厌恶. \n***翻译：那些把 C 一成不变的服从当成是谄媚的人一定是误解了他：他表面上的 默许实际隐藏着一种强烈的对于在他身上运用的权威的憎恨,一种他会偶尔通 过小心翼翼去破坏他们重要计划而表达出来的憎恨."]}),

wx.setStorage({key: "566", data: ["567.  In Schaller\'s contradictory introduction to the book, she alternately applauds and  _______ humankind\'s role in animal conservation.",
{A: 'A.authorizes',B: 'B.endorses',C: 'C.denounces',D: 'D.discloses',E: 'E.relates',F: 'F.lambasts',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和 applaud 一起体现 contradictory 的意思,所以选 applaud 的 反义词,正确答案选 CF 选项.denounce 谴责,lambast 批评.\n***翻译：在 S 对于这本书的矛盾的介绍中,他交错地表扬和批评人类在动物保护 中的角色."]}),

wx.setStorage({key: "567", data: ["568.  The company is so old-fashioned and opposed to innovation that it can seem downright _______.",
{A: 'A.antediluvian',B: 'B.flighty',C: 'C.archaic',D: 'D.chauvinistic',E: 'E.capricious',F: 'F.patronizing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：old-fashioned and opposed to innovation 直接对应空格,所以答 案选 AC 选项.antediluvian 陈旧的,archaic 过时的. \n***翻译：这个公司实在是太过时了,并且停止创新,使得它显得异常远古."]}),

wx.setStorage({key: "568", data: ["569.  The central idea of the worldview known as \"consilience\" is that all tangible phenomena are based on material process that are ultimately reducible, however long and_______the sequences, to the laws of physics.",
{A: 'A.facile',B: 'B.ethereal',C: 'C.tortuous',D: 'D.superficial',E: 'E.convoluted',F: 'F.protracted',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：找 long 的广义同义,所以正确答案选 CE 选项.tortuous 曲折的, convoluted 错综复杂的. \n***翻译：被人们称之为\"一致\"的世界观的核心是指所有有形现象都基于能被最 终还原为物理定律的物质过程,无论这个过程由多么漫长而曲折."]}),

wx.setStorage({key: "569", data: ["570.  Although evolutionary psychologists do not seem quite as imperialist in their intellectual ambitions as their sociobiologist forebears of the 1970s, they tend, in some critics\' view, to be no less_______in their claims.",
{A: 'A.abashed',B: 'B.arrogant',C: 'C.impetuous',D: 'D.hubristic',E: 'E.narcissistic',F: 'F.diffident',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：让步关系,前面说 not imperialist,所以后文应该找 imperial 的 特征,no less 双重否定表示肯定,所以后面就算 imperial 的广义同义,正确 答案选 BD 选项.arrogant 傲慢的,hubristic 傲慢的.\n***翻译：尽管 1970 年代的进化心理学家比起社会生物学家的鼻祖来说在知识上的 野心看起来不太狂妄,但是在一些批判学者眼里,他们经常所说的话语未必不 是傲慢的."]}),

wx.setStorage({key: "570", data: ["571.By the early nineteenth century, education in the United States had  become_______affair: almost every town provided free schools for young children, and many were in the process of building high schools.",
{A: 'A.an analytical',B: 'B.a civic',C: 'C.a contested',D: 'D.a trivial',E: 'E.an exclusive',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：almost every town provided free schools for young children, and many were in the process of building high schools 体现出教育已经 成为全民的事务,所以空格选 B 选项.civic 市民的.\n***翻译：在 19 世纪早期为止,美国的教育已经成为了一个全民的事务：几乎每一个镇都为孩童提供免费的教育,而且很多地方都在修建高中."]}),

that.setData({progress_percent:57}),wx.setStorage({key: "571", data: ["572. His_______character enables him to work with people who often hold sometimes even conflict views.",
{A: 'A.choleric',B: 'B.intransigent',C: 'C.officious',D: 'D.irenic',E: 'E.prudent',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格很明显选 conflict 反义,正确答案选 D 选项.irenic 和好的. \n***翻译：他爱好和平的性格能够使他和那些有时候甚至有着冲突观点的人一起工 作."]}),

wx.setStorage({key: "572", data: ["573. The scientist\'s motivation for (i)_____a ban on the addictive food cannot be called (ii) _______. He himself had a patent for the substitution for the addictive food.",
{A: 'A.advocating',B: 'B.opposing',C: 'C.conceding',D: 'D.altruistic',E: 'E.solem',F: 'F.effective',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：双空联系,后面说这个科学家自己有食品添加剂替代物的专利,说明 他支持禁止食品添加剂的行为并不是无私的.正确答案选 AD 选项,advocate 支持,altruistic 无私的. \n***翻译：这个科学家支持禁止食品添加剂的动机不能被认为是无私的.他自己有 一个食品添加剂替代物的专利."]}),

wx.setStorage({key: "573", data: ["574. Since the field of quantum mechanics is often considered to be (i) _______, it was surprising to find it attracts so much (ii)_____interest.",
{A: 'A.abstruse',B: 'B.unconventional',C: 'C.interdisciplinary',D: 'D.cursory',E: 'E.technical',F: 'F.general',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 surprising 看出两个空格取反,正确答案选 AF 选项.abstruse 深奥的,general 普遍的. \n***翻译：因为量子物理领域经常被认为是深奥难懂的,所以很惊讶地发现它吸引 了如此广泛的关注."]}),

wx.setStorage({key: "574", data: ["575. To many newspapers readers now, this book published in 1953 is (i) _______. It is filled with references to some people whose ideas seemed (ii)_____at that time, but are rarely viewed as (iii)_____persons now.",
{A: 'A.refreshingly inspired',B: 'B.somewhat dated',C: 'C.excessively angry',D: 'D.unfashionable',E: 'E.dutiable',F: 'F.important',G: 'G.ignoble',H: 'H.prolific',I: 'I.seminal'},
"###解析：at that time 和 now 的时间对比是这个题的关键,所以根据 but 得 知第二空和第三空是同义关系(注意第三空前有 rarely),所以第二空选 F 选 项,第三空选 I 选项,所以第一空得知这本书一定是过时了.dated 过时的, important 重要的,seminal 重要的. \n***翻译：对于很多现在的报纸读者来说,这本书在 1953 年出本的书是有一些过时 的.它充满了一些人的引用内容,这些人的想法在当时有着重要意义,但是这 些人在现在很少被认为是有重要意义的."]}),

wx.setStorage({key: "575", data: ["576.  Unambiguous texts can allow their readers to (i)_____them quickly, but ambiguous texts can have the attractive (ii)_____of multiple possible interpretations, all of which can be considered equally (iii) _______, and none of which is the single true meaning.",
{A: 'A.misunderstand',B: 'B.comprehend',C: 'C.complicate',D: 'D.stigma',E: 'E.blemish',F: 'F.allure',G: 'G.valid',H: 'H.frank',I: 'I.inveterate'},
"###解析：清晰的文字必然让读者迅速理解,所以第一空选 B 选项,不清晰的文 字却 have the attractive+空格,所以空格一定是一个正评价的词,所以第二 空选 F 选项,第三空根据 multiple possible interpretations 得知想表达的 意思是所有的理解都可以同等地被认为合理的,但是却没有一个又是真正唯一 的解释.comprehend 理解,allure 引诱,valid 合理的. \n***翻译：清晰的文字能够让读者快速理解,但是模糊的文字也可以有若干种可能 解释的这样一种吸引人的诱惑,在这些解释中所有的都可以同等地被认为合理 的,但是却没有任何一个是唯一的真正的意思."]}),

wx.setStorage({key: "576", data: ["577.  Although the company still loses the occasional lawsuit, the litigation threat that once seemed so_______ has become quite manageable.",
{A: 'A.burdensome',B: 'B.pedestrian',C: 'C.sporadic',D: 'D.mundane',E: 'E.promising',F: 'F.onerous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：once seemed+空格和后面的 quite manageable 取反,所以正确答案 选 AF 选项.burdensome 沉重的,onerous 费力的. \n***翻译：尽管这个公司仍然会输掉这个偶然的诉讼,但曾经看起来如此沉重的诉 讼威胁已经变得相当容易控制了."]}),

wx.setStorage({key: "577", data: ["578.  The concept of increasing complexity of organisms has_______history among evolutionary biologists, and yet many laypeople would unhesitatingly say that the pattern applies to the history of life on Earth.",
{A: 'A.an illustrious',B: 'B.a sordid',C: 'C.a curious',D: 'D.a contentious',E: 'E.a distinguished',F: 'F.a fraught',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和后文 laypeople 的说法取反,laypeople 说这种方式适用地球 所有的生命,所以空格选体现\"与众不同\"特征的词,所以正确答案选 AE 选 项.illustrious 卓越的,distinguished 卓越的. \n***翻译：有机组织越来越复杂的概念在进化生物学家中有着卓越的历史,然而很 多外行人会毫不犹豫地说这种模式适用于地球生命的历史."]}),

wx.setStorage({key: "578", data: ["579.  The story lines of silent dramas may often have been _______, yet within those basic narrative outlines, the true artists among silent-film actors could express emotional shadings that have no analogue in spoken language.",
{A: 'A.implausible',B: 'B.incredible',C: 'C.conventional',D: 'D.elemental',E: 'E.rudimentary',F: 'F.confusing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和 could express emotional shadings that have no analogue in spoken language 取反,所以正确答案选 DE 选项.elemental 基 础的,rudimentary 初级的. \n***翻译：无声喜剧的故事主线可能经常是很初级的,但是在那些基本的叙事梗概 中,真正的无声电影演员中的艺术家会表达出情感的细微差别,而且这些差别 在语言中没有类似物."]}),

wx.setStorage({key: "579", data: ["580.  The candidate seeks to depict his opponent as being _______, as one who is simply unable to make a decision and stand his ground.",
{A: 'A.inconstant',B: 'B.cowardly',C: 'C.opportunistic',D: 'D.petty',E: 'E.capricious',F: 'F.spiteful',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：unable to make a decision and stand his ground,说明这人立 场不坚定,答案选 AE 选项.inconstant 易变的,capricious 善变的. \n***翻译：这个竞选人努力地去将对手描绘成善变的,就像一个不能做决定而且不 能坚持立场的人."]}),

wx.setStorage({key: "580", data: ["581.The jury\'s verdict was such a surprise that the populace rioted in the streets; nothing less than a reversal of the verdict could_______them.",
{A: 'A.mollify',B: 'B.emulsify',C: 'C.denigrate',D: 'D.petrify',E: 'E.disabuse',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：nothing less than 是至少的意思,空格选一个表示消除的词符合语 义,正确答案选 A 选项.mollify 平息. \n***翻译：这个陪审团的裁决太令人吃惊,以至于民众在街道上开始了暴乱.没有 什么能够安抚这些民众的心,除非判决结果变成相反的."]}),

that.setData({progress_percent:58}),wx.setStorage({key: "581", data: ["582. We often regard natural phenomena like rainfall as mysterious and unpredictable; although for short time spans and particular places they appear so, in fact on a truly global scale, nature has been a model of _______.",
{A: 'A.reliability',B: 'B.diversity',C: 'C.complexity',D: 'D.plasticity',E: 'E.discontinuity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 although 推知空格是选前面 mysterious and unpredictable 的 反义,那么正确答案选 A 选项.reliability 准确性. \n***翻译：我们经常将自然现象,比如降雨,视作神秘而又难以预测的,尽管对于 很短的一段时间喝空间内来说是这样的,但实际上对于整个的全球范围来说, 自然一直是以可靠的模式运行."]}),

wx.setStorage({key: "582", data: ["583. There has been great enthusiasm in the United States for reducing fossil fuel dependence by increasing production of biofuels from crops such as corn and switchgrass, but this (i)_____about biofuels potential should be (ii)_____by a realistic appraisal of the costs and challenges of biofuel production.",
{A: 'A.forbearance',B: 'B.exuberance',C: 'C.obduracy',D: 'D.tempered',E: 'E.delineated',F: 'F.exacerbated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空通过 this 得出是重复上文的 enthusiasm,正确答案选 B 选 项.第二空根据后文的 costs 和 challenges 得知,这种热情有阻碍,所以第二 空选 D 选项.exuberance 热情洋溢,tempered 减缓,调和. \n***翻译：在美国,人们对于通过增加使用玉米和柳枝稷制作的生物燃料从而减少 石油以来抱有极大的热情,但使用生物燃料潜能的热情应该因为现实的关于经 费和实施困难的测评变得缓和下来."]}),

wx.setStorage({key: "583", data: ["584. According to Dr. Edith Widder, measuring the level of pollutants in sediment provides a more accurate and robust indication of an estuary\'s health than does measuring the level of chemicals in the water, since pollution in water is (i) _______, but pollution in sediment is (ii) _______.",
{A: 'A.declining',B: 'B.manageable',C: 'C.transient',D: 'D.significant',E: 'E.persistent',F: 'F.detectable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：沉淀中的污染物比水中的化学物提供的资料更好,说明水里的污染是 短期的,沉淀的污染是长期的.正确答案选 CE 选项.transient 短暂的, persistent 持续存在的.\n***翻译：根据 ED 博士,测量沉积物中的污染指数提供了一个比直接测量水中化学 元素含量等级更加准确的,更强有力的关于河口健康征兆的数据,因为水污染 是瞬态的,但沉积物中的污染却是持续的."]}),

wx.setStorage({key: "584", data: ["585. Compared with, say, the precision of a skein of geese winging its way across the autumn sky in a V formation, the seasonal marches of grazers across the Serengeti seem (i)   , and at times even (ii)          . But, in fact, years of careful observation by scientists have shown that there is(iii)_______ those migrations of zebras, wildebeests, and Thomson\'s gazelles.",
{A: 'A.disorganized',B: 'B.purposeful',C: 'C.massive',D: 'D.illusionary',E: 'E.overwhelming',F: 'F.chaotic',G: 'G.feats a tendency toward aggression in',H: 'H.an undeniable grandeur to',I: 'I.a definite order to'},
"###解析：通过 at time even 得知第二空是第一空的递进,又通过 but in fact 得知第三空是前两空的反义,所以根据这个逻辑选出正确答案 AFI 选项. disorganized 无组织的,chaotic 混乱的,definite order 明显的秩序. \n***翻译：和一群秋天在天空排成 V 字型的鹅比起来,在 Serengeti 的食草动物的 季节性迁徙看上去是无组织的,有时候甚至是混乱的.但是事实上,科学家多 年的仔细观察已经表明在斑马,牛羚和 Thomson 的瞪羚的迁徙中确实有明显的 秩序."]}),

wx.setStorage({key: "585", data: ["586.  Biologists have little (i)_____drawing the link between the success of humanity and human(ii)_______. Indeed, many biologists claim that this attribute, the ability to (iii) _______, or, to put it more sharply, to make individuals subordinate their self-interest to the needs of the group, lies at the root of human achievement.",
{A: 'A.consensus regarding',B: 'B.compunction about',C: 'C.justification for_______F . uniqueness',D: 'D.resilience',E: 'E.sociability',G: 'G.reflect',H: 'H.communicate',I: 'I.cooperate',F: 'N/A'},
"###解析：第二空和第三空是同义词,重复 make individuals subordinate their self-interest to the needs of the group,所以第二空选 E 选项,第 三空选 I 选项,根据 Indeed 这个词的语气发现生物学家在人类成功和人类合作之间得出的联系确实是存在的,所以生物学家从来没有后悔过做出了这样的联 系,所以第一空答案选 B 选项. \n***翻译：生物学家几乎不会后悔在人类成功和人类交际之间得出的联系.确实, 很多生物学家都说这种能力,也就是合作的能力,或者更加准确地说就是使个 人把自己的利益服从于团体的需求的这种能力,是人类伟大成就的根基."]}),

wx.setStorage({key: "586", data: ["587.  Given the_______of solid case studies of environment degradation, this new study adds very little to our knowledge of the field.",
{A: 'A.erroneousness',B: 'B.plethora',C: 'C.surfeit',D: 'D.inaccuracy',E: 'E.rigor',F: 'F.outcome',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：this new study adds very little to our knowledge of the field 说明类似的研究已经很多了,所以正确答案选 BC 选项.plethora 过多, surfeit 过多. \n***翻译：鉴于环境恶化的坚实的研究已经太多了,所以这个新的研究几乎没有增 加我们对于这个领域的知识."]}),

wx.setStorage({key: "587", data: ["588.  Although his original mission was a failure, Russian botanist Michael Friedrich Adams achieved an unexpected_______when he found, by chance, the carcass of a woolly mammoth.",
{A: 'A.conclusion',B: 'B.upheaval',C: 'C.triumph',D: 'D.bombshell',E: 'E.success',F: 'F.venture',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过让步关系很容易看出,后面的空格选 failure 的反义词,正确答 案选 CE 选项.triumph 胜利,sucess 成功. \n***翻译：尽管他原来的任务失败了,当俄罗斯植物学家 MFA 偶然发现一具长毛猛 犸象的尸体时,他获得了一个意想不到的成果."]}),

wx.setStorage({key: "588", data: ["589.  The medical researchers replied to the charge that their proposed new treatment was_______by demonstrating that it in fact observed standard medical practices.",
{A: 'A.deleterious',B: 'B.untested',C: 'C.unorthodox',D: 'D.expensive',E: 'E.intricate',F: 'F.unconventional',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：charge 是指责的意思,这里说最后证明它实际符合标准的医学方 法,说明之前的 charge 想说它违背了标准的方法,也就是异端学说.正确答案 选 CF 选项.unorthodox 异端的,unconventional 不传统的.另外,此题的 observe 是遵守的意思. \n***翻译：医疗研究者们回应关于他们提议的新治疗方法不正统是通过证明这个方 法实际上是遵守了标准的医学操作."]}),

wx.setStorage({key: "589", data: ["590.  Because experience had convinced her that Hector was both self-seeking and avaricious, she rejected the possibility that the motivation behind his donation had been wholly _______.",
{A: 'A.redundant',B: 'B.frivolous',C: 'C.egotistical',D: 'D.ephemeral',E: 'E.altruistic',F: 'F.benevolent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因为她已经相信 H 是自私贪婪的,所以她不会认为 H 是无私的,取 self-seeking 和 avaricious 的反义词,正确答案选 EF 选项.altruistic 无私 的,benevolent 慈善的.\n***翻译：因为经验已经向她证实 Hector 不仅是追逐私利的,还是贪婪的,她否认 了他捐赠背后的目的是因为对别人好的可能性."]}),

wx.setStorage({key: "590", data: ["591.The inconspicuous location and lack of striking vistas that characterize the villa reflect the  _______ aspect of its creator\'s personality.",
{A: 'A.volatile',B: 'B.grandiose',C: 'C.gregarious',D: 'D.self-effacing',E: 'E.imperious',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：inconspicuous location and lack of striking vistas 和空格同 义重复,找 inconspicuous 和 lack of striking 同义词,正确答案选 D 选项. self-effacing 不出风头的. \n***翻译：这个别墅的不显眼的地理位置和缺乏突出的景观反映出了它的创造者的 自我影响个性."]}),

that.setData({progress_percent:59}),wx.setStorage({key: "591", data: ["592. Since many prehistoric tools were made of materials, such as wood, bone, and antler, that tend to decay quickly, these archaeological specimens are_______their stone counterparts.",
{A: 'A.cruder than',B: 'B.derived from',C: 'C.found with',D: 'D.rarer than',E: 'E.similar to',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说了木头,骨头,鹿角做的工具容易腐蚀,结果必然是这些工具 相比于石头工具更少. \n***翻译：因为很多史前的工具都是由例如木头,骨头和鹿角做成的,它们容易很 快腐蚀,所以这些考古的样本就相比于石头做的工具更少了."]}),

wx.setStorage({key: "592", data: ["593. As the pace of the trial (i)     , the wait at the beginning of the day became less interminable, and the attorneys\' requests to suspend proceeding for private conferences with the judge, almost invariably granted early on, were routinely (ii)          .",
{A: 'A.slowed',B: 'B.materialized',C: 'C.accelerated',D: 'D.rebuff',E: 'E.repeated',F: 'F.recounted',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：等待不再那么无休止的说明审判的速度加快了,所以第一空选 C 选 项,第二空取 almost invariably granted early on 的反义,以前是同意,那 么现在应该是不同意,所以第二空选 D 选项.accelerate 加速,rebuff 拒绝. \n***翻译：随着审判的节奏加快,在白天开始时候的等待变得不再那么无休止了, 而且律师要求暂停进程来和法官进行私人会议这件事,已经总是被同意的,现 在却总是被拒绝了."]}),

wx.setStorage({key: "593", data: ["594. Managers who categorically squelch insights from low-tiered employees run the obvious hazard of (i)        creativity; conversely, these very same managers are more likely to (ii)        any ideas that flow down from the top brass.",
{A: 'A.fomenting',B: 'B.smothering',C: 'C.sparking',D: 'D.unquestioningly embrace',E: 'E.arbitrarily denounce',F: 'F.conditionally approve',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：完全镇压下属的观点必然会抑制创造性,第一空选 B 选项. conversely 取反,得出这些同样的经理却对上级言听计从,正确答案选 D 选 项.smothering 抑制,unquestionably embrace 毫无疑问地接受. \n***翻译：那些果断地压制底层员工看法的经理们的明显危险是他们会扼杀创造 力.相反的,这样的经理对于高层的意见却是毫无疑问的接受."]}),

wx.setStorage({key: "594", data: ["595. A bird\'s feathers would seem to be a (i)_____design for protecting a bird from attack by microscopic organisms. They create a warm, moist space next to the skin that could be an ideal incubator for spores. Wild birds rarely (ii)_____skin diseases, however. The chemicals in the sebum include an array of antibacterial and antifungal agents that allow the bird\'s skin to (iii) _______.",
{A: 'A.perfect',B: 'B.typical',C: 'C.poor',D: 'D.contract',E: 'E.overcome',F: 'F.notice',G: 'G.stay healthy',H: 'H.become irritated',I: 'I.recover quickly'},
"###解析：既然是对于孢子来说完美的孵化场所,那么羽毛对于鸟类来说是不好 的,所以第一空选 C 选项,第二空考察熟词僻意,contract 有\"感染\"的意 思,第三空体现抗细菌和抗真菌,所以选 G 选项.poor 不好的,contract 感 染,stay healthy 保持健康. \n***翻译：鸟类的羽毛看起来似乎是一个不好的防止鸟类被微型有机体攻击的设 计.它们创造了一个靠近皮肤温暖潮湿的空间,这个空间对于孢子是一个完美 的孵化场所.然而,野生鸟类却几乎不得皮肤病.在皮脂中的化学物包括大量 的抗细菌和抗真菌的药剂,这些东西能让鸟类的皮肤保持健康."]}),

wx.setStorage({key: "595", data: ["596.  The skin of the poison dart frog contains deadly poisons called batrachotoxins. But the (i) _______ of the toxins has remained an enigma, as the frog does not (ii)_____them. Now an analysis suggests that the melyrid beetle is the source. Collected beetle specimens all contained batrachotoxins, suggesting that these beetles are (iii)_____by the frogs.",
{A: 'A.effect',B: 'B.origin',C: 'C.purpose',D: 'D.pressure',E: 'E.produce',F: 'F.suffer from',G: 'G.eaten',H: 'H.neutralized',I: 'I.poisoned'},
"###解析：第一空对应点在 melyrid beetle is the source 这里,说明这个题 研究的主题是 source,所以第一空答案选 B 选项,既然说这种毒的来源是神秘 的事,说明这个毒本身不是这种青蛙产生的,所以第二空选 E 选项,第三空说找到了原因,实际上来自于甲壳虫,说明这些甲壳虫被青蛙吃掉了,所以第三 空选 G 选项.origin 来源,produce 生产,eat 吃. \n***翻译：毒箭蛙的皮肤包含致死的毒物,叫做蟾毒素.但这个毒素的起源一直都 是个谜,因为这种青蛙并不是自己生成毒素,现在,有一种分析认为 melyrid 甲虫是毒素的来源.所有收集来的甲虫都含有这样的毒素,告诉我们这些虫子 可能被毒箭蛙吃了."]}),

wx.setStorage({key: "596", data: ["597.  Far from_______innovations, as the patent system was designed to do, the patenting of concepts such as gene sequences gives individuals and corporations a legal choke to hold over ideas that should be useful to all.",
{A: 'A.spurring',B: 'B.recognizing',C: 'C.codifying',D: 'D.acknowledging',E: 'E.fostering',F: 'F.cataloging',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：hold over 是\"拖延\"的意思,far from 说明空格选后文的反义,所 以正确答案选 AE 选项.spur 促进,foster 推动. \n***翻译：不是像这个专利系统被发明想要做的去激励人们创新,这个专利概念例 如基因组合给了个人和组织一个阻碍来拖延那些应该被用于一切的理念."]}),

wx.setStorage({key: "597", data: ["598.  The 1840s were_______time for young women beginning to study science, particularly astronomy, in 1847 Maria Mitchell discovered the Nantucket comet, the first of several important astronomical discoveries of the era.",
{A: 'A.a favorable',B: 'B.an awkward',C: 'C.a perilous',D: 'D.a hazardous',E: 'E.an improbable',F: 'F.an auspicious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文的解释说明在那个时代天文发现多,所以空格选正评价词,正确 答案选 AF 选项.favorable 有利的,auspicious 吉利的.\n***翻译：19 世纪 40 年代对于开始研究科学的年轻女性来说是幸运的,尤其是天 文学,在 1847 年 Maria Mitchell 发现了 N 彗星,这是那个时代若干重大天文 发现的其中之一."]}),

wx.setStorage({key: "598", data: ["599.  To keep the museum\'s admission lines moving, security inspections are considerably _______.",
{A: 'A.thorough',B: 'B.annoying',C: 'C.cursory',D: 'D.casual',E: 'E.irritating',F: 'F.methodical',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：要是入场的人流流动起来,检查就得快,所以检查就得马虎,正确答 案选 CD 选项.cursory 粗略的,casual 随意的. \n***翻译：为了让博物馆入场队伍流动起来,安全检查人员相当多地非常粗略."]}),

wx.setStorage({key: "599", data: ["600.  The evil of class and race hatred must be eliminated while it is still_______state; otherwise, it may grow to dangerous proportions.",
{A: 'A.an amorphous',B: 'B.an overt',C: 'C.a rudimentary',D: 'D.a threatening',E: 'E.an independent',F: 'F.an embryonic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 otherwise, it may grow to dangerous proportions 推出目 前还处于初始阶段,对应点是 grow,正确答案 CF 选项.rudimentary 早期的, embryonic 萌芽期的. \n***翻译：尽管种族和阶级制度还只是雏形,但种邪恶的族制度和阶级制度还是应 该被消灭,否则将它将增长到十分危险的境地."]}),

wx.setStorage({key: "600", data: ["601.There are no_______criteria of excellence in art: works that once were ignored or even reviled now fetch millions of dollars at auction, while those that were most highly praised in their day now languish in storage.",
{A: 'A.subjective',B: 'B.dubious',C: 'C.transitory',D: 'D.immutable',E: 'E.uncontroversial',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过冒号后面的解释描写了很多变化的事物,所以前文就是没有不变 的东西,正确答案选 D 选项.immutable 不可改变的. \n***翻译：对于衡量艺术出色之处我们没有一个不变的标准,那些曾经被忽略甚至 是遭到嘲讽谩骂的艺术作品如今在拍卖中可以竞价到上百万美金,相反,曾经 在其被创作的时期受到高度赞扬的艺术作品如今却被随意放置."]}),

that.setData({progress_percent:60}),wx.setStorage({key: "601", data: ["602. The pupil had a reputation for obduracy, but the teacher found her to be, on the contrary, quite_______.",
{A: 'A.zealous',B: 'B.astute',C: 'C.tractable',D: 'D.efficient',E: 'E.amusing',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：on the contrary 得知空格和 obduracy 取反,所以正确答案选 C 选 项.tractable 顺从的. \n***翻译：这个小学生有一个非常固执的名声,但是老师却发现他其实相当顺从."]}),

wx.setStorage({key: "602", data: ["603. Because reading on the Web entails quickly scanning and sorting through a deluge of information, many wonder if our level of engagement with the text (i)_____or if the ability to read closely and carefully is one that can be (ii)_____if we simply spend more time immersed in a book.",
{A: 'A.irreparably compromised',B: 'B.tentatively disrupted',C: 'C.permanently restored',D: 'D.fully reactivated',E: 'E.further degraded',F: 'F.summarily disregarded',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 or 可以推知,or 前后是两个相反的状态,根据选项推知 AD 选 项搭配最为合理.irreparably compromised 不可恢复地破坏,fully reactivated 完全恢复. \n***翻译：因为在网页上阅读要求快速浏览和挑选大量信息,所以很多人怀疑是否 我们对于文本的专注程度会不可恢复地破坏或者说我们近距离仔细阅读的能力 是一种能够完全重新恢复的能力如果我们花更多的时间在书本里."]}),

wx.setStorage({key: "603", data: ["604. The benefits offered by information technology do not (i)_____the need for individual reasoning; for example, Internet user should not allow the reasoning process to be (ii)_____the mere accumulation raw data.",
{A: 'A.disguise',B: 'B.signal',C: 'C.diminish',D: 'D.preceded by',E: 'E.supplemented with',F: 'F.supplanted by',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文例子解释前文道理,所以双空联立求解,前面选 C 选项,没有减 少需求,后面选 F 选项,没有被取代,搭配合理.diminish 减少,supplant 取 代. \n***翻译：信息技术带来的好处并没有减少对个人推理的需求：例如,网民不应该 让单单原始数据的堆叠取代推理的过程."]}),

wx.setStorage({key: "604", data: ["605. Evidence has been accumulating since the 1930s that reducing an animals energy intake below its energy expenditure extends the life span and delays the (i)_____of age-related diseases in rats, dogs, fish, and monkeys. Such results have inspired thousands of people to (ii)_____in the hope of living longer, healthier lives. They have also led to a search for drugs that (iii)_____the effects of calorie restriction without the pain of actually going on a diet.",
{A: 'A.diagnosis',B: 'B.onset',C: 'C.treatment',D: 'D.eat healthier foods',E: 'E.put up with constant hunger',F: 'F.take vitamin supplements',G: 'G.undermine',H: 'H.mimic',I: 'I.delay'},
"###解析：第一空与 extends the life span,说明空格应该填入一个负面的 词,和 delay 一起构成一个正评价,所以选 B 选项,第二空根据因果关系判断 出人们会去节食,所以选 E 选项,第三空和第二空并列,需要选一个词来描述 药物和节食的作用一样,那么最好的选择是 H 选项.\n***翻译：从子 20 世纪 30 年代,关于减少能量摄入到能量消耗水平之下会延长寿 命而且推迟老鼠,狗,鱼和猴子与年龄相关的疾病的发作的证据一直在增加. 这些结果已经促使很多人去长期节食,因为他们想活得更长,更健康.它们还 导致了去研究那种能够效仿热量限制的效果且没有任何疼痛的药物."]}),

wx.setStorage({key: "605", data: ["606.  Although Uruk in southern Mesopotamia has been (i)_____as being both the first city and the model for later cones, at least two sites in northern Mesopotamia have yielded clear evidence of urbanization long before the existing evidence from Uruk, and other discoveries indicate that some of the (ii)_____early urbanism were invented not in southern Mesopotamia but in the north. These findings have led some archaeologists to (iii)_____a serious reconsideration about when and where the first cities arose.",
{A: 'A.established',B: 'B.contested',C: 'C.presented',D: 'D.defining features of',E: 'E.derivative aspects of',F: 'F.traditional theories about',G: 'G.evaluate',H: 'H.ignore',I: 'I.propose'},
"###解析：让步关系,前面说最早的发现是说城市产生于南部 M,所以第一空表 示之前的发现,正确答案选 A 选项,第二空选一个能用来证明城市起源的特 征,那么 D 选项最合适,第三空根据 reconsideration,说明有些学生已经开 始要\"提出\"这种 reconsideration 了,所以第三空选 I 最合适.established 确定的,defining features 明显特征,propose 提出.\n***翻译：尽管在南部 M 的 U 已经被确认为既是第一个城市,也是第一个后来圆锥 的模型,但是至少两个在北部 M 的地方已经有明确的证据表明早于 U 这个地方 的城市化已经存在,而且其他发现也表明早期 都市生活的明显特征不是在南部 M 创造的而是在北部.这些发现已经让一些考 古学家去提出一个严肃的关于第一批城市出现的时间和地点的重新考虑."]}),

wx.setStorage({key: "606", data: ["607.  Many people remember a time when cutting-edge architects, who are these days treated like celebrities, had_______relationship with the public: for much of the 1960s, big new buildings in cities were often cause for hostility, not celebration.",
{A: 'A.an antagonistic',B: 'B.an inimical',C: 'C.an autocratic',D: 'D.a symbiotic',E: 'E.an indifferent',F: 'F.an apathetic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过冒号后面的 big new buildings in cities were often cause for hostility, not celebration 看出建筑师和大众的关系是敌对的,正确答 案选 AB 选项.antagonistic 敌对的,inimical 不友好的. \n***翻译：许多人记得当前沿的建筑师,就是那些现在被当作名人的建筑师,曾经 和公众有着不友好的关系,1960 年代的大部分时期,当新的大建筑在城市中被 建造的时候,公众们对于这些建筑的态度通常充满敌意,而不是欣赏."]}),

wx.setStorage({key: "607", data: ["608.  It is surprising to see such a child that is at his sixteenth manifest a great measure of _______, for he delivers too cogent, brilliant a speech among adults.",
{A: 'A.maturity',B: 'B.precociousness',C: 'C.convolution',D: 'D.nefariousness',E: 'E.naïveté',F: 'F.ingenuousness',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：十六岁的孩子表现出成熟的特征才会让人感到惊讶,所以正确答案选 AB 选项.maturity 成熟,precociousness 早熟.注意早熟不是贬义词,只是 体现时间早. \n***翻译：对于一个年仅十六岁的孩子,他表现出了让人惊讶的,在他这个年纪难 得一见的成熟稳重,因为他在成年人中仍做了太令人信服,精妙绝伦的演讲."]}),

wx.setStorage({key: "608", data: ["609.  People from one community always take each other as_______since they automatically classify the others as their family line.",
{A: 'A.acquaintance',B: 'B.consort',C: 'C.neighborhood',D: 'D.kinfolk',E: 'E.relative',F: 'F.patron',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因果关系,空格对应后文的 family line,找同义词,所以正确答案 选 DE 选项.kinfolk 亲属,relative 亲戚. \n***翻译：从同一个团体来的人总是会把对方当作很亲近的人,因为他们会自然而 把对方归类成为自己的亲属."]}),

wx.setStorage({key: "609", data: ["610.  The juxtaposition of fertile alluvial soils originating in the Andes with the infertile inland soils of central Amazon Basin is one example of_______of the soil conditions that can be found in the tropics.",
{A: 'A.intractability',B: 'B.heterogeneity',C: 'C.incompatibility',D: 'D.disparateness',E: 'E.instability',F: 'F.fragility',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：The juxtaposition of fertile alluvial…with the infertile 体现的是一种对比的关系,所以能体现这个关系的是 BD 选项.heterogeneity 多种多样,disparateness 迥然不同.\n***翻译：Andes 起源的肥沃的冲积土和亚马逊腹心盆地的不肥沃的内地土的并置 是一个在热带中能被发现的土壤有差异的情况的例子."]}),

wx.setStorage({key: "610", data: ["611.Because the critic thought that the mark of great literature was grandiosity and elegance not to be found in common speech, writers seeking his approbation_______the vernacular.",
{A: 'A.exploited',B: 'B.embraced',C: 'C.misapplied',D: 'D.considered',E: 'E.eschewed',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：题目中 common speech=vernacular,既然在普通的演讲中找不到 grandiosity 和 elegance,那么需求称赞的作者们会放弃方言,正确答案选 E 选项.eschew 避免. \n***翻译：因为评论家认为伟大文学的标志是宏伟和优雅,而且它们是在普通的演 讲中找不到的,因为寻求称赞的作家们会避免方言."]}),

that.setData({progress_percent:61}),wx.setStorage({key: "611", data: ["612. Due to the many_______in his committee presentation, Mark\'s advisor suggested that he revise his work and practice in front of a mirror before presenting it to the entire department.",
{A: 'A.facilities',B: 'B.jeremiads',C: 'C.gaffes',D: 'D.obloquies',E: 'E.exploits',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：顾问建议他在镜子面前演练,说明他的 presentation 做得不好,选 负评价词即可,正确答案 C 选项.gaffes 失礼. \n***翻译：因为他在理事会演讲上的众多不慎言行,马克的顾问建议他在演讲前对 着镜子练习,去修改他的稿子."]}),

wx.setStorage({key: "612", data: ["613. From time to time, all scientific disciplines encounter observations that do not fit the theories of the day. At first such observations tend to be treated as (i) _______, but those scientists (ii) _______ them sometimes discover that they have to abandon established principles in order to account for the new findings.",
{A: 'A.anomalies',B: 'B.discoveries',C: 'C.harbinger',D: 'D.averse to scrutinizing',E: 'E.willing to investigate',F: 'F.unable to acknowledge',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应的是 do not fit the theories of the day,所以应该 是异常的东西,选 A 选项,第二空说这些科学家必须要放弃已经形成的原理, 说明这些科学家还是愿意去研究这些异常的东西的,所以第二空选 E 选项. anomaly 异常,willing to investigate 愿意去仔细调查. \n***翻译：一直以来,所以的科学学科都会经历一些和当时的理论不符合的观察结 果.最初这些观察结果被当成是异常,但是那些愿意去调查这些异常结果的科 学家们有时候会发现他们不得不放弃已经形成的原理才能来解释这些新的发 现."]}),

wx.setStorage({key: "613", data: ["614. Despite dispute between the sisters lasted all summer, Megan remained (i)_____and Laruen was equally (ii) _______.",
{A: 'A.intransigent',B: 'B.feckless',C: 'C.munificent',D: 'D.indolent',E: 'E.uncompromising',F: 'F.taciturn',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 equally 得知两个空格取同义,所以正确答案选 AE 选项. intransigent 不妥协的,uncompromising 不妥协的. \n***翻译：尽管姐妹之间的争论持续了整个夏天,M 依然固执己见而 L 也同样毫不 妥协."]}),

wx.setStorage({key: "614", data: ["615. The motives of many major investors in Pop Art have arguably been to a large extent, (i) _______. These collectors demonstrate and enhance their power over the art market by establishing seemingly arbitrary works of art as priceless. This phenomenon reveals that (ii)_____is not(iii)_______ of truth or beauty, but simply a trick of investment capital.",
{A: 'A.visionary',B: 'B.ambiguous',C: 'C.self-aggrandizing',D: 'D.value',E: 'E.virtuosity',F: 'F.originality',G: 'G.a product',H: 'H.an inversion',I: 'I.a limitation'},
"###解析：第一空对应 demonstrate and enhance their power,这些人通过一 些方法实现自我扩张,第二空解释前文的道理,前面说其实是这些投资人让一 些很随意的东西变得很值钱,所以说明价值根本不是真实和美丽的体现,只是 一些人在控制而已,所以正确答案选 CDG 选项.self-aggrandizing 自我扩 张,value 价值,product 产物. \n***翻译：在波普艺术中很多主要投资者的动机可以说在很大程度上是自我扩张 的.这些收集者通过确立看似武断的作品为无价之宝来表现而且提高了他们对 于艺术市场的控制能力.这个现象表明价值不是真实和美丽的产物,相反只是 资本投资的骗术而已."]}),

wx.setStorage({key: "615", data: ["616.  China\'s rapidly growing population is the main threat facing large carnivores in the People\'s Republic. Increasingly, policies aimed at limiting population growth have been (i) _______; nevertheless, the country\'s vast size and the isolation of many of its regions mean that human populations in areas where large carnivores still occur (ii) _______. This human pressure has(iii)_____the South China tiger.",
{A: 'A.modified',B: 'B.deemphasized',C: 'C.implemented',D: 'D.could start to decline',E: 'E.can grow unchecked',F: 'F.have stabilized',G: 'G.celebrated',H: 'H.doomed',I: 'I.bypassed'},
"###解析：aimed at limiting population growth 得知这些政策已经颁布了, 第一空选 C 选项,第二空根据 nevertheless,得知这些政策尽管实施了,但是效果不好,所以人口还是在快速增加,第二空选 E 选项,第三空 human pressure 一定是负面的动词,所以第三空选 H 选项.implement 实施,can grow unchecked 不加约束的增长,doom 使…在劫难逃. \n***翻译：中国快速增加的人口是让这个国家大型肉食生物面临的最大威胁.越来 越频繁的关注于限制人口增长的政策已经被执行了.但是这个国家巨大的面积 和很多地区的隔离意味着存在肉食动物的地区的人口数量会无限制地增加.这 种人口压力已经让华南虎在劫难逃了."]}),

wx.setStorage({key: "616", data: ["617.  Although most scientists hold that quantum theory and the theory of general relativity ought to be intimately connected, the theories have remained stubbornly _______.",
{A: 'A.consistent',B: 'B.unlinked',C: 'C.self-contradictory',D: 'D.estranged',E: 'E.arbitrary',F: 'F.congruent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 although intimately connected 很简单推出空格选 connected 的反义词,所以正确答案选 BD 选项.unlinked 没有联系的,estranged 疏远 的. \n***翻译：尽管大部分科学家坚称量子理论和广义相对论本应该是紧密连接的,但 这两个理论却始终如一地毫无联系."]}),

wx.setStorage({key: "617", data: ["618.  One big challenge with placebo responses is that they are _______: people given the same inert pill or potion may show wildly different reactions, and the effects vary widely according to each person\'s illness.",
{A: 'A.capricious',B: 'B.illusory',C: 'C.unpredictable',D: 'D.chimerical',E: 'E.marginal',F: 'F.ephemeral',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：同样的药片和药剂,效果却不一样,说明这种药物的反应是不确定 的,能够对应的选项是 AC 选项.capricious 变化无常的,unpredictable 无法 预计的. \n***翻译：安慰剂反应的一个巨大质疑就是这些反应是易变的：给了同样的惰性药 片或者药剂的人可能表现出完全不同的反应,而且根据每个病人的病情还会形 成巨大差异."]}),

wx.setStorage({key: "618", data: ["619.  The_______of biographies of antebellum capitalists is particularly striking in contrast with the abundance of life stories of industrialists in later eras.",
{A: 'A.brevity',B: 'B.banality',C: 'C.utility',D: 'D.paucity',E: 'E.triteness',F: 'F.dearth',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：in contrast with the abundance,说明空格选 abundance 的反义 词,正确答案选 DF 选项.paucity 缺乏,dearth 缺乏. \n***翻译：战前资本家的传记的缺乏和后来工业家的生活故事的丰富形成了强烈对 比."]}),

wx.setStorage({key: "619", data: ["620.  He was one of the most powerful chess players over and one of the most _______; at the height of his fame he all but dropped out of chess, entering into a self-imposed exile.",
{A: 'A.perplexing',B: 'B.creative',C: 'C.troubled',D: 'D.infuriating',E: 'E.enigmatic',F: 'F.imaginative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：he all but dropped out of chess 和 one of the most powerful chess players 体现出一种让人琢磨不透的感觉,正确答案选 AE 选项. perplexing 让人迷惑的,enigmatic 难以捉摸的. \n***翻译：他时最强大的象棋选手之一而且是最让人迷惑的人之一；在它的荣誉高 度上她几乎退出了象棋,进入一个自我强加的流放."]}),

wx.setStorage({key: "620", data: ["621.Anthropologist Jane Goodall was_______in her determination to anthropomorphize the animals she observed with such empathy, and so resisted her editors\' attempt to recast her descriptions in more dispassionate language.",
{A: 'A.fickle',B: 'B.stalwart',C: 'C.solicitous',D: 'D.pretentious',E: 'E.whimsical',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：so resisted 体现了 JG 的坚定,正确答案选 B 选项.stalwart 坚定 的.\n***翻译：人类学家 JG 的非常坚定地赋予她用同情观察的动物以人性,而且如此抵制她编辑想要用更加不带感情的语言改写她的描述的企图."]}),

that.setData({progress_percent:62}),wx.setStorage({key: "621", data: ["622. Although New York exhilarated him, even at first Leger\'s reaction to it was not _______: he was initially bothered by its stunning verticality.",
{A: 'A.unspontaneous',B: 'B.unintentional',C: 'C.unqualified',D: 'D.unhopeful',E: 'E.uninterested',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：not+空格对应前面的 exhilarate 取反义,或者可以说 not+空格和 bothered 取同义,所以正确答案选 C.unqualified 不受限制的. \n***翻译：尽管纽约让他很兴奋,但在最初 Leger 对于纽约的反应不是没有限制 的：他最初因为纽约惊人的垂直设计感到烦扰."]}),

wx.setStorage({key: "622", data: ["623. While in their consideration of the unique way athletics and academics are combined in United States universities, Markovits and Rensmann do not (i)_____Gumbrecht\'s idealizing vision of the compatibility of college athletics with the intellectual missions of institutions of higher learning, neither do they regard college athletics as (ii) _______: they believe that big-time sports have a rightful place in university life.",
{A: 'A.fully endorse',B: 'B.intentionally recapitulate',C: 'C.entirely misconstrue',D: 'D.indispensable',E: 'E.venal',F: 'F.profitable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题较难,要从最后冒号之后入手,这里说运动有一个合理合法的地 位,说明运动是正评价,所以根据 neither do 得出第二空选负评价,所以选 E 选项.那么第一空根据 do not...neither...这个语法得知选正评价,正确答 案 A 选项.总体的大意就是既不说好,也不说坏.fully endorse 完全认可, venal 贪污的. \n***翻译：当他们在考虑美国大学中学者和运动员们奇特的结合方式时,M 和 R 两 人并不完全认可 G 关于大学运动员和高等院校中知识者的使命的理想话的想 象,他们也没有将大学运动员看作惟利是图的人,他们认为一流的体育运动员 大学生活中有一个合法的位置."]}),

wx.setStorage({key: "623", data: ["624. The description of humans as having an internal clock is not a (i) ______________. Or rather, it is-you do not have a tiny watch in your cerebellum-but it also refers to (ii) _______, a specialized bundle of cells that regulates cyclical processes.",
{A: 'A.euphemism',B: 'B.cliché',C: 'C.metaphor',D: 'D.an elusive psychological phenomenon',E: 'E.a standard literary trope',F: 'F.a real biological feature',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空通过 it is—you do not have a tiny watch in your cerebellum 推出第一空选 C,第二空同义重复 a specialized bundle of cells that regulates cyclical processes,所以第二空体现了 cyclical 的 特点,所以能够对应的选项是 F 选项.metaphor 象征,real biological feature 真正的生物特征. \n***翻译：关于人类有内部的生物钟的说法并不是一个隐喻,你的小脑中并没有一 个小小的表—但这同样却也是一种真实的生物的特点,一群专门控制周期性流 程的细胞."]}),

wx.setStorage({key: "624", data: ["625. Human-caused disturbances, such as habitat destruction and the introduction of nonnative species, are among the leading causes of plant and animal population declines. Most populations are affected by a combination of adverse human pressures, each of which is in itself insufficient to (i)_____a population crash. Therefore, studies of population declines that (ii)_____individual factors and thus (iii)_____potential interactions may lead to improper management of declining species.",
{A: 'A.delay',B: 'B.trigger',C: 'C.offset',D: 'D.integrate',E: 'E.focus on',F: 'F.ignore',G: 'G.exaggerate',H: 'H.overlook',I: 'I.anticipate'},
"###解析：第二空和第三空并列关系,individual 和 interaction 是反义,所 以二三空取反,再根据 affected by a combination of adverse human pressures 得出正确答案选 EH 选项,也就是说不应该只关注个体,而应该关注 相互之间的关系,第一空根据语义推理选 B 选项,单一的压力不能引起数量下 滑,和后文对应.trigger 引起,focus on 关注,overlook 忽略. \n***翻译：正如栖息地破坏和外地物种的引进这些人类引起的混乱是最主要的动植 物数量下降的原因.大部分物种都被各种不利的人类的压力而影响,而且每一 种压力本身是不足够引起物种数量下滑.因此,关注个体因素而因此忽略潜在的相互影响的物种数量减少的研究可能得出不准确的对于减少的物种的控制和 管理方法."]}),

wx.setStorage({key: "625", data: ["626.  Movement from bottom to top, from poor to rich, was rare, even movement from poor to middle class was (i)_____. Statistical analysis of trends in occupation, income, and property ownership, Thernstrom wrote, \"yielded rather (ii)_____conclusions about social mobility in nineteenth-century America.\" So we might expect Thernstrom to be suspicious now of claims that differences in class could be (iii)_____if only the public schools did a better job.",
{A: 'A.an anomaly',B: 'B.a cinch',C: 'C.a conjecture',D: 'D.multifaceted',E: 'E.pessimistic',F: 'F.unsophisticated',G: 'G.distinguished',H: 'H.misapprehended',I: 'I.obliterated'},
"###解析：第一空选 rare 的广义同义,正确答案选 A 选项,第二空根据第一空 的 rare 和 anomaly 得知空格是负评价形容词,所以选 E 选项,第三空的言论必 须是正评价言论,所以 T 才会去怀疑,所以第三空格选 I 选项.anomaly 异 常,pessimistic 悲观的,obliterate 消除. \n***翻译：从底部到顶部,从穷人到富人的运动是很少的,即使是从穷人到中产阶 级的运动也是不常见的.T 写到：在职业,收入和财产方面的趋势资料分析产 生了关于十九世纪美国社会流动性相当悲观的结论.因此我们会预期到 T 现在 会去怀疑那些说只要公众教育做得更好,阶级之间的差距就能够被消除的言 论."]}),

wx.setStorage({key: "626", data: ["627.  A small degree of_______is always desirable in a published diary. A sense of authenticity is seldom worth the diarist\'s questionable grammar or careless phrasing.",
{A: 'A.characterization',B: 'B.emendation',C: 'C.documentation',D: 'D.revision',E: 'E.substantiation',F: 'F.individualization',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说专栏作者有问题的语法和粗心的短语是无法配得上可靠性,说 明在专栏中需要适当的修改,所以正确答案选 BD 选项.emendation 修改, revision 修改. \n***翻译：在出版的专栏中少量的修改是明智的选择.专栏作者充满问题的语法和 粗心的短语是配不上可靠的特征的."]}),

wx.setStorage({key: "627", data: ["628.  In his heyday, Sonny Bono\'s role in public was _______: he was an accomplished lyricist, a mayoral success story, delegate from Palm Springs, and the husband of an internationally acclaimed vocalist.",
{A: 'A.protean',B: 'B.versatile',C: 'C.pedestrian',D: 'D.prominent',E: 'E.circumscribed',F: 'F.illustrious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面解释了这个人的多种身份,所以应该是一个全能的人,正确 答案选 AB 选项.protean 多才多艺的,versatile 多才多艺的. \n***翻译：在他的全盛时期,SB 在公众的角色是多面的：他是一个有成就的歌词作 者,一个成功的市长,一个从 PS 来的代表人,而且是一个国际著名乐曲家的丈 夫."]}),

wx.setStorage({key: "628", data: ["629.  Criticized for decades of overproduction in their signature line of derivative goods, Rectangle Record has satiated the market with a_______of repackaged old CDs, which interferes with its ability to innovate and produce new albums.",
{A: 'A.dearth',B: 'B.glut',C: 'C.deficiency',D: 'D.surfeit',E: 'E.abundance',F: 'F.profusion',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：interferes with its ability to innovate and produce new albums 说明重新包装的老 CD 太多了,而且 satiate 一词也能说明过多,正确 答案选 BD 选项.glut 过多,surfeit 过多. \n***翻译：因为几十年大量的非原创内容的签名档受到批评,RR 这个公司已经用过 多的重新包装的 CD 满足了这个市场,这会影响它创新和制作新专辑的能力."]}),

wx.setStorage({key: "629", data: ["630.  His political view, harking back to the turmoil in the 1934, is a_______with no bearing on the present.",
{A: 'A.prototype',B: 'B.pretense',C: 'C.paradigm',D: 'D.relic',E: 'E.contradiction',F: 'F.vestige',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：with no bearing on 的意思是与…无关,这里说与现在无关,所以 应该选 present 的反义,正确答案选 DF 选项.relic 遗迹,vestige 遗迹. \n***翻译：他能够追溯到 1934 年混论时期的政治观是一个与当前无关的遗迹罢了."]}),

wx.setStorage({key: "630", data: ["631.Discussions of impending water shortages are often couched in apocalyptic rhetoric, yet if the language is somewhat , the basic message is sound: water is indeed scarce and growing scarcer.",
{A: 'A.abstract',B: 'B.complacent',C: 'C.ambiguous',D: 'D.unfamiliar',E: 'E.overblown',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：同义重复文中的 couched in apocalyptic rhetoric,正确答案选 E 选项.overblown 过分的. \n***翻译：关于即将发生的水资源短缺经常被表达成世界末日一样的夸张,但即使 这些话说的有些过分,但基本的信息还是正确的：水资源的确短缺且正在变得 更加短缺."]}),

that.setData({progress_percent:63}),wx.setStorage({key: "631", data: ["632. Medieval cathedrals still stand as marvels of architecture, but as far as modern science is concerned, medieval physics and chemistry are simply irrelevant, at best a dead end, at worst the very_______of what science is supposed to be.",
{A: 'A.exemplar',B: 'B.glorification',C: 'C.reflection',D: 'D.dilution',E: 'E.antithesis',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：at best a dead end 说明,at worst 要选一个比 dead end 还要递进 的词,所以根据选项选出正确答案 E.antithesis 对立. \n***翻译：中世纪大教堂仍是建筑的奇迹,但就现代科学而言,中世纪的物理和化 学就是驴唇不对马嘴的了,最好的死胡同,最坏的就被认为是和科学对立."]}),

wx.setStorage({key: "632", data: ["633. In the years prior to the Civil War, Philadelphia\'s African American press encourage readers to be vaccinated against smallpox. This journalistic campaign was initially (i) _______, appealing to readers sense of communal duty, and became even more (ii)_____once the war started, as smallpox outbreaks began to occur on Philadelphia\'s outskirts.",
{A: 'A.hortatory',B: 'B.ineffective',C: 'C.widespread',D: 'D.controversial',E: 'E.urgent',F: 'F.inopportune',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：even more 能看看出前后两个空格有递进关系,appearing to 说明刚 开始只是一种劝告,吸引大家做这件事,后来变得紧急了,符合这个递进关系 的是 AE 选项.hortatory 劝告的,urgent 紧迫的. \n***翻译：在内战开始的前几年,美国费城非裔美国人新闻社鼓励读者们接种天花 疫苗.这项宣传运动本来是为了激起人们的公众责任感知,后来战争开始后甚 至变得更加紧迫起来,因为费城的郊区已经出现了天花感染病例."]}),

wx.setStorage({key: "633", data: ["634. A hallmark of certain nineteenth-century mystery novels was the reform agenda of their authors, who ostensibly sought to expose economic injustice while depicting the seamy underside of urban life. In reality, however, these claims to a radical political agenda were often (i)     meant to give lurid thrillers the appearance of (ii)          .",
{A: 'A.authentic',B: 'B.complicated',C: 'C.disingenuous',D: 'D.escapist appeal',E: 'E.high-minded purpose',F: 'F.gripping suspense',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面有 ostensibly 和 in reality 的对比关系,所以第一空选体现这 个对比关系的词,正确答案选 C 选项.第二空想指出这些恐怖小说的虚假意 图,只是想让这些恐怖小说有一种高尚的外表. \n***翻译：一个特定的十九世纪悬疑小说的特点就是他们作者的革命章程,这些作 者表面上努力揭露经济上的不公平同时描述龌蹉的底层城市生活.但事实上, 这些激进的政治章程通常都是虚假的,意在给予恐怖小说一种高尚的目标."]}),

wx.setStorage({key: "634", data: ["635. So (i)_____is the reputation of the country\'s police for corruption and other forms of (ii) _______ that it has become a kind of tradition that every newly appointed police chief pledges to (iii) ______________ the force.",
{A: 'A.persisted',B: 'B.paralyzing',C: 'C.unfounded',D: 'D.indolence',E: 'E.incompetence',F: 'F.criminality',G: 'G.contradict',H: 'H.reform',I: 'I.reward'},
"###解析：通过 corruption 和第二空的并列知道第二空选负评价词,所以选 F 选型,又通过 it has become a kind of tradition 得知第一空选一个表示这 种现象持久的词,那么正确答案选 A,第三空根据常识判断新上任的官员一定 会发誓驱除这种势力,选 H 选项.A 持久的,F 犯罪,H 改革. \n***翻译：这个国家警察贪污和其他的犯罪名声如此持久以至于每一个新任命的警 察局长承诺改革这件事已经成为了一种传统了."]}),

wx.setStorage({key: "635", data: ["636.  The wealthy donor was known for his annual acts of (i)   throughout the community, but even more (ii) was the fact that he was willing to get his hands dirty and serve the needy through hard physical labor as well as through (iii)           and gifts.",
{A: 'A.quality',B: 'B.legacy',C: 'C.largesse',D: 'D.laudable',E: 'E.inexpressible',F: 'F.disquieting',G: 'G.effort',H: 'H.endowments',I: 'I.handiwork'},
"###解析：通过 wealthy donor 推出第一空选 C 选项,第二空比第一空递进,所 以选一个比较强的正评价词,第三空和 gifts 并列,只能选 H 选项.largesse 慷慨,laudable 值得称赞的,endowments 捐赠.\n***翻译：这个富裕的捐款人因为他每年一次的慷慨解囊在整个社区很出名,但是 更值得令人赞美的是他不仅仅捐赠施舍,他不仅亲自参与重体力劳作去服务别 人,而且还通过这些捐赠和礼物."]}),

wx.setStorage({key: "636", data: ["637.  As a critic, Nelson is noteworthy for her _______: rather than presenting fully formed pronouncements, she is willing to let us watch as she works out her ideas.",
{A: 'A.generosity',B: 'B.humility',C: 'C.integrity',D: 'D.modesty',E: 'E.eloquence',F: 'F.rhetoric',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过冒号判断出,空格的内容是通过后文进行解释说明,后文说她愿 意让别人看她如何阐释这个问题,说明此人比较谦逊.正确答案选 BD 选项. humility 谦逊,modesty 谦虚.\n***翻译：作为一个批判学家,Nelson 因为她的谦逊而引起大家注意：她很乐意让 我们看到她阐释她的想法,而不是直接表现已经完全成型的宣言."]}),

wx.setStorage({key: "637", data: ["638.  Although in the mid-1970s nuclear power seemed poised for a still greater role in energy supply, in fact the_______of its prestige had already begun.",
{A: 'A.evaluation',B: 'B.waning',C: 'C.defense',D: 'D.undermining',E: 'E.ebbing',F: 'F.vindication',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：本题前后是让步关系,尽管 70 年代核动力的地位稳定,通过让步得 知后面要填入 poised 的反义词,所以正确答案选 BE 选项.B 衰落,E 衰落.注 意 D 选项是破坏的意思,语义不符合.\n***翻译：尽管在 1970 年代中旬,核能仍是能源供应当中的很大,但事实上,核能 的声望已经渐渐开始减小."]}),

wx.setStorage({key: "638", data: ["639.  The women\'s rights movement has been mostly_______in the Middle East, but it is likely that activists will be newly galvanized by the political upheavals currently sweeping the region.",
{A: 'A.subverted',B: 'B.quiescent',C: 'C.interminable',D: 'D.bootless',E: 'E.abeyant',F: 'F.feckless',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：but newly galvanized 说明在之前这个运动是停止了一段时间,正 确答案选 BE 选项. \n***翻译：女权运动在中东大部分地区已经中止了,但是很有可能这些活动家会被 最近横扫这个地区的动乱重新激发出来."]}),

wx.setStorage({key: "639", data: ["640.  Beatified by the Catholic Church in 1765, Italian cleric Ludovico Sabbatini is_______each year on the day of his death, June 11.",
{A: 'A.pledged',B: 'B.evoked',C: 'C.deified',D: 'D.venerated',E: 'E.honored',F: 'F.christened',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：取 beatified 的广义同义,正确答案选 DE 选项.venerate 推崇, honor 推崇.deify 感情色彩过重不选.\n***翻译：在 1765 年由天主教教会福礼,意大利教士 LS 每年在他生日六月十一号 时都会被纪念."]}),

wx.setStorage({key: "640", data: ["641.The physical layout of the laboratory, although well adapted to the research being pursued when it was built, was not _______, making a thorough redesign necessary before a proposed new experimental program could be undertaken.",
{A: 'A.compromised',B: 'B.imprecise',C: 'C.convoluted',D: 'D.ubiquitous',E: 'E.plastic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：making a thorough redesign necessary 说明实验室之前没有改变 过,再根据空格前面的 not,得出空格选体现改变意思的词,正确答案选 E. plastic 可塑的,能变化的. \n***翻译：实验室的物理布局,尽管一开始建造之时能够满足所有研究所需,但不 能改造,这使得在一个新的实验项目开始之前制定一个重新设计是完全有必要 的."]}),

that.setData({progress_percent:64}),wx.setStorage({key: "641", data: ["642. Within the field of emotional intelligence research, disagreements remain about whether emotional intelligence can be learned and strengthened or is_______characteristic.",
{A: 'A.an expressed',B: 'B.an inborn',C: 'C.an invented',D: 'D.a cultivated',E: 'E.a perceptible',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题逻辑非常简单,空格和 learned and strengthened 取反义词, 正确答案选 B 选项.inborn 天生的. \n***翻译：在情商研究的领域中,关于情商究竟是后天加强学习的还是先天具有的 特征仍存在争议."]}),

wx.setStorage({key: "642", data: ["643. Though McDonough discusses (i)_____the filmmaker\'s aesthetic principles, it is the description of the (ii) _______, the very vulgarity of the director\'s films, rather than McDonough\'s learned discourses on the aesthetics of the film, that makes the book so entertaining.",
{A: 'A.inaccurately',B: 'B.superficially',C: 'C.adroitly',D: 'D.subtle ingenuity',E: 'E.absolute discretion',F: 'F.flagrant crassness',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题从第二空先入手,第二空和 the very vulgarity 是同义重复, 所以第二空选 F 选项,第一空根据 though 知道选第二空的反义,所以正确答案 选 C 选项.adroitly 巧妙地,flagrant crassness 臭名昭著的愚钝. \n***翻译：尽管 M 熟练地讨论了制片人美学原则,但正是这些臭名昭著的愚钝,也 就是导演电影的粗俗的东西而不是 M 的博学的关于电影美学的谈话,它们让这 本书如此让人愉快的."]}),

wx.setStorage({key: "643", data: ["644. In our daily lives, we often (i)_____our separate identities: you can have one identity at work and another online, for example. Such (ii)_____disappear in certain circumstances, however, resulting in a cross-pollination of our different selves.",
{A: 'A.renounce',B: 'B.merge',C: 'C.compartmentalize',D: 'D.uncertainties',E: 'E.correlations',F: 'F.boundaries',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：you can have one identity at work and another online 对应第 一空,所以正确答案选 C 选项,第二空是同义重复,对应第一空的同义词,正 确答案选 F 选项.compartmentalize 区分,boundary 界限. \n***翻译：在我们的日常生活中,我们经常区分我们的各自的身份：例如,你能在 工作上有一个身份,在网上有一个身份.这种界限在某些情况却消失了,导致 了我们不同的自我的跨界沟通."]}),

wx.setStorage({key: "644", data: ["645. (i)_____have often shrilled that Australia\'s Great Barrier Reef is dying, a result of agricultural runoff from the (ii)_____Queensland coast. In truth, the preservation of the reef (iii) _______, a combination of active government intervention and the beneficial effects of responsible tourism.",
{A: 'A.apologists',B: 'B.optimists',C: 'C.scaremongers',D: 'D.long-abandoned',E: 'E.over-farmed',F: 'F.well-preserved',G: 'G.is based on an impracticality',H: 'H.remains a matter of controversy',I: 'I.is something of a success story'},
"###解析：从 in truth 开始前后转折,所以第三空选正评价词,所以选 I 选 项.而第二空选一个导致 runoff 的原因,最佳答案选 E 选项,根据后文的内容 推出第一空的消息是不真实的,所以第一空选 C 选项.scaremonger 危言耸听 者,over-farmed 过度耕种的,is something of a sucess story 在某种意义 上是成功. \n***翻译：危言耸听者经常说澳大利亚的大堡礁正在灭亡,这是由于昆士兰海岸过 度农业化而造成的.事实上,对这些珊瑚礁的保护措施是个成功的案例,它结 合了政府的积极配合和由负责任的游人们的有益效果."]}),

wx.setStorage({key: "645", data: ["646.  Industry sponsored scientific research on chemical safety often (i) ______________. Media reports regularly imply that industry support of scientific work is alone sufficient to (ii)_____that research. Even though the source of funding has been determined to be a less significant cause of bias than other factors, industry support suffices, in the minds of many people, to (iii)____________the credibility of scientific work.",
{A: 'A.uncovers risks',B: 'B.elicits skepticism',C: 'C.promotes innovation',D: 'D.fund',E: 'E.vindicate',F: 'F.invalidate',G: 'G.adopt',H: 'H.vitiate',I: 'I.bolster'},
"###解析：从 even though the source of funding has been determined to be a less significant cause of bias than other factors 看出资金(也就是产业支持)对于研究来说是负评价,所以此题的解题要点是三个空格都选负 评价词,所以正确答案选 BFH 选项.elicits skepticism 引起怀疑, invalidate 证明…错误,vitiate 损害. \n***翻译：产业支持的化学安全相关的科学研究经常会引起怀疑,媒体的报到经常 表明产业支持科学研究单独就能足够去破坏那个研究.尽管资金的来源比起别 的因素已经被认为是一个不怎么重大的导致这种偏见的原因,但是产业支持在 很多人心中已经足够损害科学研究的可信度."]}),

wx.setStorage({key: "646", data: ["647.  What they see in Jimenez is the one candidate capable of decisive leadership, in stark contrast to Diaz, whose team in office has been marred by _______.",
{A: 'A.defensiveness',B: 'B.corruption',C: 'C.irresolution',D: 'D.vacillation',E: 'E.belligerence',F: 'F.pugnacity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 decisive 和 in stark contrast to 推知空格选 decisive 的反 义词,正确答案选 CD 选项.irresolution 犹豫不决,vacillation 踌躇. \n***翻译：大家在 J 身上看到了作为参选人的决断能力,和 D 形成鲜明对比,D 的 团队在整个办公室中,声名被优柔寡断而变差."]}),

wx.setStorage({key: "647", data: ["648.  The research informing Gregory\'s book on vegetarianism in Victorian England appears to be_______, with a great deal of revealing detail on display and more than a third of the text taken up with footnotes.",
{A: 'A.uneven',B: 'B.excessive',C: 'C.exhaustive',D: 'D.mixed',E: 'E.inconsistent',F: 'F.comprehensive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：with a great deal of revealing detail on display and more than a third of the text taken up with footnotes 说明这个研究非常详 细,正确答案选 CF 选项.exhaustive 详细的,comprehensive 全面的. \n***翻译：Geogory 的书中关于在维多利亚时期的英格兰的素食主义的研究是很详 尽全面的,里面有大量的细节,还有占了超过三分之一的注脚文本."]}),

wx.setStorage({key: "648", data: ["649.  He was a man of few words,_______around all but his closest friends.",
{A: 'A.laconic',B: 'B.garrulous',C: 'C.ascetic',D: 'D.taciturn',E: 'E.tempestuous',F: 'F.ambiguous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：对应 a man of few words,选体现\"话少\"的意思,正确答案选 AD 选项.laconic 谈吐简洁的,taciturn 沉默寡言的. \n***翻译：他是一个寡言少语的男人,除了在他最亲近的朋友身边他话都很少."]}),

wx.setStorage({key: "649", data: ["650.  There are many insights in the essay collected in Observations on modernity, but they are embedded in a dense English translation of a dense German original that may make many of them_______ to most readers.",
{A: 'A.vapid',B: 'B.inaccessible',C: 'C.sagacious',D: 'D.banal',E: 'E.distressing',F: 'F.opaque',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：dense English translation of a dense German original 的东西 会让大部分读者读不懂,正确答案选 BF 选项.inaccessible 难理解的, opaque 难懂的. \n***翻译：这篇被收录进现代性观察里面的文章中有很多深刻的见解,但是他们都 被嵌入进一种浓重的英文翻译气息以及浓重的来自于德国的发源,使得这些见 解对于众多读者来说很难理解."]}),

wx.setStorage({key: "650", data: ["651.The cognitive flexibility of successful fictional detectives is often_______by their cultural ambivalence: detectives\' intellectual acumen, it seems, exists in direct proportion to their uneasy place in society.",
{A: 'A.amplified',B: 'B.highlighted',C: 'C.spurred',D: 'D.matched',E: 'E.negated',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格去后文 in direct proportion to 的同义,最合适的是 D 选项, matched 匹配的. \n***翻译：成功的科幻侦探的认知的灵活性经常和他们的文化矛盾性匹配：侦探的 智力敏锐看上去和他们在社会的不安的地位成比例."]}),

that.setData({progress_percent:65}),wx.setStorage({key: "651", data: ["652. Barry was a skilled _______: though his arguments were completely flawed, they were clever- sounding enough to deceive everyone who heard them.",
{A: 'A.sophist',B: 'B.scholar',C: 'C.quibbler',D: 'D.doctrinaire',E: 'E.pedant',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的说明他能用言语欺骗人,能够对应的选项是 A 选项. sophist 诡辩者.\n***翻译：Barry 是一个熟练的诡辩者：尽管他的言论是完全错误的,他却听起来 足够聪明地去欺骗每一个听到这些言论的人."]}),

wx.setStorage({key: "652", data: ["653. If the candidate wins the election now that rivals within his own party have (i) him in a campaign that was (ii) without their help, he will be mightily indebted to these self-styled saviors.",
{A: 'A.rallied',B: 'B.separated from',C: 'C.undermined',D: 'D.foundering',E: 'E.effective',F: 'F.improving',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空要导致竞选人取胜,所以正确答案选 A 选项合适,第二空根据 without their help 取第一空反义,所以正确答案选 D 选项.rally 团结, founder 失败. \n***翻译：如果竞选人因为他自己的政党团结他而获取胜利,而且如果没有他们的 帮助竞选人就会失败,他可能会感激这些自封的救星."]}),

wx.setStorage({key: "653", data: ["654. In the popular conception, (i)_____is inextricably tied up with (ii) _______: doing something truly creative, we are inclined to think, requires the freshness and energy of youth. Orson Welles made his masterpiece, Citizen Kane, at twenty-five, and Mozart wrote his breakthrough Piano concerto no.9 at twenty-one.",
{A: 'A.progress',B: 'B.genius',C: 'C.destiny',D: 'D.serendipity',E: 'E.precocity',F: 'F.dedication',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面的例子都是在说在年纪很小的时候有些人就有了很大的成就,所 以对应的两个答案是 BE 选项.genius 天赋,precocity 早熟. \n***翻译：在普遍的想法中,天赋是分不开地和早熟有密切联系：我们经常这样 想,即做一些确实有创造力的事情要求精力充沛和年轻的动力.OW 在 25 岁的 时候就创作了他的大作 CK,M 在 21 岁的时候就谱写了他的突破性钢琴曲 concerto no.9."]}),

wx.setStorage({key: "654", data: ["655. Communal feeding is a remarkable behavioral aspect of this generally solitary animal. It is also misunderstood behavior and one of the reasons that Tasmanian devils have a bad reputation. Far from being a (i)        , communal devil feeding is (ii)           and purposeful, and is described as(ii)_______ behavior. The screaming and apparent fighting is an elaborate combination and variety of vocalizations and postures by which order is maintained.",
{A: 'A.free-for-all',B: 'B.rarity',C: 'C.necessity',D: 'D.structured',E: 'E.vicious',F: 'F.infrequent',G: 'G.innate',H: 'H.acquired',I: 'I.ritualized'},
"###解析：第一空和第二空通过 far from being 取反,第二空和 purposeful 并 列,所以第二空选 D 选项,所以第一空选 purposeful 的反义词,所以正确答案 选 A 选项.第三空根据 elaborate 和 by which order is maintained 推出选 I 选项.free-for-all 对所有自由的,structured 有组织的,ritualized 程序 化的. \n***翻译：共同进食是这个普遍独立动物的非常让人惊讶的行为方式.它同样还是 被误解的行为而且是 T 恶魔有一个坏名声的原因.不是对所有都自由的,这些 共同进食的恶魔是有组织的而且是有目的的,而且被描述成一种程序化的行 为.尖叫和明显的打架是一种精心策划的结合和不同发音和姿态,通过这些声 音和姿态能够保持秩序."]}),

wx.setStorage({key: "655", data: ["656.  The research on otters\' environmental requirements is surprisingly (i) _______. One reason for this has to do with the estimation of how much they use different areas. Doing so may be (ii)_____in some kinds of terrain, such as Shetland where the Eurasian otters are active in daytime and have clear individual markings. There it is possible to identify the individuals over stretches of coast of a few kilometers and to see what kinds of coast they use. However, the field conditions are(iii)_______.",
{A: 'A.straightforward',B: 'B.controversial',C: 'C.difficult',D: 'D.quite problematic',E: 'E.relatively simple',F: 'F.largely unnecessary',G: 'G.routine',H: 'H.deceptive',I: 'I.exceptional'},
"###解析：estimation of how much they use different areas 说明这个研究 比较难,第一空选 C 选项,第二空根据 clear individual markings 得知在有 一些地方还是很简单的,所以第二空选 E 选项,第三空说明这个地方只是一个例外的,一般的地方都没有这种条件,所以第三空选 I 选项.difficult 困难 的,relatively simple 相对简单,exceptional 例外的. \n***翻译：关于水獭的环境需求的研究是让人惊讶的困难.其中的一个原因是不得 不去处理关于它们多大程度地使用不同区域的估计.这样做可能在某些地形会 相对简单,例如 S 这个地方(在那个地方,欧洲水獭白天很活跃而且有明显的 个体标志).在那个地方识别出好几公里海岸线上的水獭个体而且观察它们使 用何种海岸线是可能的.然而,这种地理条件确实是例外的."]}),

wx.setStorage({key: "656", data: ["657.  It is not unusual for American eduction leaders to hold up another nation as a model for school reform: in the mid-nineteenth century, such figures_______the professionalism and structure of the Prussian school system.",
{A: 'A.envied',B: 'B.imitated',C: 'C.hailed',D: 'D.augmented',E: 'E.acclaimed',F: 'F.enhanced',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面重复前文的内容,空格对应 hold up,hold up 在这里是拿 来做例子的意思,所以正确答案选 CE 选项.hail 称赞,acclaim 称赞. \n***翻译：对于美国教育先驱来说,能够将其他国家的教育模式作为雏形进行重改 是不是不常见的,在十九世纪中,这些人物称赞了普鲁士学校系统的专业性和 结构性."]}),

wx.setStorage({key: "657", data: ["658.  In her career as an editor, she pruned and shaped many a writer\'s_______prose into crisp lucidity.",
{A: 'A.wayward',B: 'B.transparent',C: 'C.errant',D: 'D.urbane',E: 'E.elegant',F: 'F.incisive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：找 crisp lucidity 的反义词,正确答案选 AC 选项.wayward 难以控 制的,errant 不定的. \n***翻译：在她作为编辑的职业生涯中,她删掉而且改变了很多作家的无规律的 诗,把它们变得非常精明扼要的清晰."]}),

wx.setStorage({key: "658", data: ["659.  Philby secretly loathed the host of the party that he was attending, but it seemed_______to say so publicly.",
{A: 'A.recondite',B: 'B.tactless',C: 'C.clever',D: 'D.malign',E: 'E.deft',F: 'F.impolitic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：虽然不愿意,但是公开说出来还是不明智的,正确答案选 BF 选项. tactless 不妥当的,impolitic 不明智的.\n***翻译：P 私下里厌恶这个他正在参加的聚会的主持人,但是如果公开说出来是 不妥当的."]}),

wx.setStorage({key: "659", data: ["660.  In American Indian art, the supposed distinction between modern and traditional was fabricated by critics, and when artists have control over interpretation of their own work, the distinction appear, happily, to have been _______.",
{A: 'A.eliminated',B: 'B.reinforced',C: 'C.put to rest',D: 'D.intensified',E: 'E.recognized',F: 'F.established',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说这种 distinction 是被捏造出来的,所以后来如果艺术家能 够自己控制翻译的话他们就会消除这种 distinction,所以正确答案选 AC 选 项.eliminate 消除,put to rest 使停止. \n***翻译：在美国印第安艺术中,这种想象中在现代和传统之间的区别是被评论家 捏造出来的,而且当艺术家能够控制他们自己的作品的翻译之后,这种区别就 很愉快地被消除了."]}),

wx.setStorage({key: "660", data: ["661.Reading chunks of Shapiro\'s verse in one sitting, it must be said, exposes the_______nature of his writing: scads of poems are too glancing to strike a nerve, scarcely worth a second reading.",
{A: 'A.jejune',B: 'B.esoteric',C: 'C.corrosive',D: 'D.finicky',E: 'E.indiscreet',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：解释说明,取后文的同义,很多诗篇都太粗略以至于引不起读者的共 鸣,根本不值得花一秒钟去阅读说明找负评价,所以正确答案选 A 选项.A 枯 燥乏味的.\n***翻译：坐着读 Shapiro 的大篇幅的诗,不得不说,暴露出了诗人写作里天生的枯燥无味：很多诗篇都太粗略以至于引不起读者的共鸣,根本不值得花一秒钟 去阅读."]}),

that.setData({progress_percent:66}),wx.setStorage({key: "661", data: ["662. The painter\'s problem, like that of an author whose early literary masterpiece exhausts the themes it embodies, is how to_______his first highly acclaimed efforts with works of comparable significance and presence.",
{A: 'A.combine',B: 'B.illuminate',C: 'C.realize',D: 'D.amend',E: 'E.follow',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 masterpiece 得知之前这个画家成功过,那么现在的问题是延续 这种成功.正确答案选 E 选项.follow 再续. \n***翻译：就像一个早期的文学著作耗尽了其中包含的主题的作家一样,这个画家 的问题是他将怎样再续他最初高度收到好评的作品的重大影响."]}),

wx.setStorage({key: "662", data: ["663. Harper\'s draw, while (i)_____in the United States for years, has remained (ii)_____in London, where the public greets virtually every work with unabashed enthusiasm.",
{A: 'A.in eclipse',B: 'B.unrivaled',C: 'C.unchanged',D: 'D.controversial',E: 'E.unsurpassed',F: 'F.unexceptional',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 while 判断出两个空格是反义词,后文的 where the public greets virtually every work with unabashed enthusiasm 表明第二空填入 enthusiasm 的同义,所以第二空选 E 选项,所以第二空选 A 选项合适.in eclipse 衰退,unsurpassed 不可超越的.\n***翻译：在美国很多年来 H 的逐渐失去地位,但在伦敦,一个众人用不难为情的 热情方式去欢迎任何一种职业的地方,他却依然存在吸引力."]}),

wx.setStorage({key: "663", data: ["664. Even if the merits of the proposal are (i) _______, faculty members may be reluctant to (ii) _______, given their fear of offending the group that champions it.",
{A: 'A.unparalleled',B: 'B.dubious',C: 'C.obvious',D: 'D.demur',E: 'E.approve',F: 'F.acquiesce',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 given their fear of offending the group that champions it 能推出第二个空是他们不愿意去反对,第二空选 D 选项,那么第一空根据让 步关系推出这个提议没有正评价,所以选 B 选项.dubious 值得怀疑的,demur 反对. \n***翻译：即使这个建议的优点并不确定,教员们也不愿提出异议,因为他们害怕 得罪那些支持这个提议的人."]}),

wx.setStorage({key: "664", data: ["665. Until now, old snapshots and home movies faded and crumbled and were eventually (i) _______. Only a few precious mementos were preserved and passed along. But as photography moves into the digital realm, family albums and home videos see capable of (ii) _______: our capacity to store them is, for all practical purposes, approaching the infinite. Is such a transformation a good thing? The natural world teaches us that (iii)_____are vital to ecological health. Does a similar principle apply to communal memory?",
{A: 'A.archived',B: 'B.discarded',C: 'C.reproduced',D: 'D.transmission',E: 'E.immortality',F: 'F.revolution',G: 'G.death and decay',H: 'H.predator and prey',I: 'I.reproduction and renewal'},
"###解析：only a few precious mementos were preserved and passed along 说明第一空选体现\"消失\"的意思的词,正确答案选 B 选项,后文 but 暗示第 二空选第一空的反义词,所以正确答案选 E 选项,第三空解释前两个空格的关 系,前文说了\"消失\"和\"不朽\",所以能对应的选项是 G 选项.discard 抛 弃,immortality 不朽,death and decay 死亡和腐朽. \n***翻译：直到现在,旧的快照和家庭电影变得褪色,逐渐崩溃,最终被丢弃,只 有几个珍贵的纪念品能够保存,传承下来.但是当摄影步入了数字时代,家庭 相册和家庭影音能够永久保存,我们想要去储存这些回忆的容量,因为各种实 际的目的,都在慢慢接近于无限.这样的转变是好的事情么？大自然教给我 们,生老病死是生态健康必不可少的一部分.这样简单的原则是否应该运用于 人们的记忆中？"]}),

wx.setStorage({key: "665", data: ["666.  In medieval Europe, watermills were more (i)_____than windmills. It is true that windmills could be built virtually anywhere, whereas watermills (ii) ______________. However, watermills\' greater capacity and reliability provided a better (iii)_____the money required to build the mill.",
{A: 'A.problematic',B: 'B.profitable',C: 'C.versatile',D: 'D.were suitable only for certain locations',E: 'E.inspired a variety of new technologies',F: 'F.required a good deal of upkeep',G: 'G.source of',H: 'H.adjunct to',I: 'I.return on'},
"###解析：第二空根据 whereas 推知选 anywhere 反义,所以第二空选 D 选项, 第三空水磨的大容量和可靠性更容易回本,所以第三空选 I 选项,第一空对应 the money,选 B 选项.profitable 获利的,were suitable only for certain locations 只能在某些地方合适,return 回本. \n***翻译：中世纪的欧洲,水磨比起风车更加能够产生利益.确实风车能够被修到 任何地方,然后水磨只能在某些地方修建.然而,水磨更大的动能和可靠性能 够提供一个更好的修磨坊的钱的回本途径."]}),

wx.setStorage({key: "666", data: ["667.  Despite the general_______of Roman archaeological studies toward the major cities and their monuments, archaeology has contributed much to a better understanding of rural developments in Roman territory.",
{A: 'A.openness',B: 'B.indifference',C: 'C.hostility',D: 'D.animus',E: 'E.bias',F: 'F.orientation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：让步关系,后面说更好地理解了乡村地区,所以空格是体现关注城 市,所以正确答案选 EF 选项.bias 偏爱,orientation 倾向. \n***翻译：尽管罗马考古研究对于大城市和纪念碑的普遍的倾向,考古学对于一个 更好的理解罗马领土的乡村地区发展贡献得很多."]}),

wx.setStorage({key: "667", data: ["668.  Our mass media are much more fascinated by bad ideas or the failure of good ones than by successes: we drown in bad news-tales of how things went wrong--but we have only the most_______ discussion on how they might go right.",
{A: 'A.incisive',B: 'B.tantalizing',C: 'C.trenchant',D: 'D.cursory',E: 'E.illusory',F: 'F.perfunctory',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：对比关系,我们沉迷于坏新闻,所以我们对如何变好的讨论是不充足 的,答案选 DF 选项.cursory 粗略的,perfunctory 敷衍的. \n***翻译：我们的大量媒体更关注于一些坏新闻或者是好人的失败而不是成功：我 们沉迷于坏新闻中—事情如何变坏—但是我们仅仅对于我们如何变好有一些粗 略的讨论."]}),

wx.setStorage({key: "668", data: ["669.  A few decades ago the idea of animal morality would have been met with  : however, recent research suggests that animals not only act altruistically but also have the capacity for empathy, forgiveness, trust, and reciprocity.",
{A: 'A.derision',B: 'B.resentment',C: 'C.dismissal',D: 'D.conviction',E: 'E.ridicule',F: 'F.certainty',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：however 后文说动物无私,原谅,信任,互惠,所以之前对于动物道 德一定是负评价,正确答案选 AE 选项.derision 嘲笑,ridicule 嘲笑. \n***翻译：几十年前动物道德的理念可能会遇到嘲笑：然而,最近的研究表明动物 不仅很无私而且有同情,原谅,信任和互惠的能力."]}),

wx.setStorage({key: "669", data: ["670.  At first, most of the famous fairy tales seem so implausible and so irrelevant to contemporary life that their_______is hard to understand.",
{A: 'A.universality',B: 'B.persistence',C: 'C.appeal',D: 'D.ephemerality',E: 'E.survival',F: 'F.transience',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：如此难以置信如此和当代生活无关,所以这种东西还能传下来是很 难理解的一件事,正确答案选 BE 选项.persistence 持续存在,survival 持续 存在. \n***翻译：一开始,大部分的童话故事看起来都是这么的难以置信并且和真实生活 毫无关系,以至于它们的持续流传实在是让人难以理解."]}),

wx.setStorage({key: "670", data: ["671.The presidents\' cordial greeting may seem to be a small gesture of friendliness, but it is not without_______in the heretofore stifled atmosphere of the society\'s meetings.",
{A: 'A.significance',B: 'B.impertinence',C: 'C.nostalgia',D: 'D.precedent',E: 'E.triviality',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：but 前后转折,所以后面的特征是前面 small 的反义词,not without 双重否定等于肯定,所以后面选 small 的反义词,正确答案选 A 选 项.significance 重大,重要. \n***翻译：总统的亲切问候也许可以看作一个友好的小举动,但它对于气氛窒息一 般的社会会议并不是没有重大意义的."]}),

that.setData({progress_percent:67}),wx.setStorage({key: "671", data: ["672. The purpose of accounts of the Amazons for their male Greek recorders was _______, to teach both male and female Greeks that all-female groups, formed by withdrawal from traditional society, are destructive and dangerous.",
{A: 'A.deceptive',B: 'B.didactic',C: 'C.pre-cautious',D: 'D.vengeful',E: 'E.reflective',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格选 to teach 的同义,所以答案选 B 选项.didactic 说教的. \n***翻译：对于 Amazons for their male Greek 的记录者所做的记录的目的是说教 式的,想要教会男性和女性的希腊人所有的女性群体(由传统社会的撤退而形 成)是有破坏性而且是危险的."]}),

wx.setStorage({key: "672", data: ["673. Whatever the acknowledged (i)_____of the market and the merits of considering ways to (ii)_____them, implementing public policies toward this end entail the inevitable risk that those policies will simply create new deficiencies even as they address old ones.",
{A: 'A.attractions',B: 'B.shortcomings',C: 'C.complexities',D: 'D.remedy',E: 'E.enhance',F: 'F.restore',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：create new deficiencies even as they address old ones 说明前 面的市场的特征就是对应 old ones,这里的 ones 指的是 deficiencies,所以 第一空选 deficiencies 的同义词 B 选项,第二空根据 ways to  them, 通过句意推知选一个体现\"改正\"的意思的词,正确答案选 D 选项. shortcoming 缺点,remedy 纠正. \n***翻译：不管这个市场被承认的缺点和考虑改变这些缺点的方式的好处,在这个 方向执行公共政策会有不可避免的风险,风险就是这些政策会简单地带来新的 缺陷就算它们能够解决旧的问题."]}),

wx.setStorage({key: "673", data: ["674. Research note that wolves\' otherwise strongly hierarchical society is marked by occasional displays of populist (i) _______: if a pack leader proves a too-snappish tyrant, subordinate wolves will (ii)_____the top cur.",
{A: 'A.umbrage',B: 'B.expiation',C: 'C.torpor',D: 'D.collectively overthrow',E: 'E.eventually placate',F: 'F.quickly appraise',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：双空联立,如果头狼太暴君,下属会反抗,这就是一种民粹主义的愤 怒,所以正确答案选 AD 选项.umbrage 愤怒,collectively overthrow 联合起 来推翻. \n***翻译：研究表明狼在其他情况下的强烈的等级制度社会有着明显的民粹主义的 愤怒：如果狼群首领表现出急躁的暴君特征,下属们会联合起来推翻它的统 治."]}),

wx.setStorage({key: "674", data: ["675. The motives of many major investors in Pop Art have arguably been to a large extent (i) _______. These collectors demonstrate and enhance their power over the art market by establishing seemingly arbitrary works of art as priceless. This phenomenon reveals that (ii)_____is not(iii)_____of truth or beauty, but simply a trick of investment capital.",
{A: 'A.visionary',B: 'B.ambiguous',C: 'C.self-aggrandizing',D: 'D.value',E: 'E.virtuosity',F: 'F.originality',G: 'G.a product',H: 'H.an inversion',I: 'I.a limitation'},
"###解析：第一空对应 demonstrate and enhance their power,这些人通过一 些方法实现自我扩张,第二空解释前文的道理,前面说其实是这些投资人让一 些很随意的东西变得很值钱,所以说明价值根本不是真实和美丽的体现,只是 一些人在控制而已,所以正确答案选 CDG 选项.self-aggrandizing 自我扩 张,value 价值,product 产物. \n***翻译：在波普艺术中很多主要投资者的动机可以说在很大程度上是自我扩张 的.这些收集者通过确立看似武断的作品为无价之宝来表现而且提高了他们对 于艺术市场的控制能力.这个现象表明价值不是真实和美丽的产物,相反只是 资本投资的骗术而已."]}),

wx.setStorage({key: "675", data: ["676.  Not all paleontologists agree that connections between the continents were (i)_____just after the extinction of the dinosaurs. Some hold the view that North America, Asia, and South America had (ii)_____immediately following the dinosaur extinction, pointing to (iii)_____between ancient kinds of mammals that existed on all three continents at this time in support of their argument.",
{A: 'A.significant',B: 'B.permanent',C: 'C.limited',D: 'D.lasting differences',E: 'E.extensive contacts',F: 'F.trivial likeness',G: 'G.similarities',H: 'H.intermediaries',I: 'I.hostilities'},
"###解析：前两个空根据\"不是所有人…有些人….\"得知是反义关系,所以选 CE 选项,第三空是解释第二空的,所以应该说这些种类之间有大量相似,所以 选 G 选项.limited 有限的,extensive contacts 大量练习,similarity 类 似. \n***翻译：不是所有的古生物学家都同意在恐龙灭绝之后大陆之间的联系是有限 的.有一些人认为北美,亚洲,南美在恐龙灭绝不久之后有大量的联系,同时 他们指出在这个时期活在三个大陆在古代哺乳动物是有很多相似地方来支持他 们的言论."]}),

wx.setStorage({key: "676", data: ["677.  Because archaeology explores the most profound changes in human history by means of a grossly incomplete record; it has invited the sort of bold, imaginative interpretation in which speculation too easily becomes_______evidence.",
{A: 'A.replaced by',B: 'B.constrained by',C: 'C.untethered from',D: 'D.divorced from',E: 'E.substituted for',F: 'F.constricted by',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：grossly incomplete record 和 bold, imaginative interpretation 说明推论和证据很容易被分开,正确答案选 CD 选项.untethered from 不被束 缚的,divorced from 与…分离的. \n***翻译：因为考古学上用来探索最深刻的在人类历史上的变化是基于及其不完整 的记录,这就需要大胆且富有想象力的解释来进行理解,这些猜测因为没有足 够的证据容易变得与现实脱离."]}),

wx.setStorage({key: "677", data: ["678.  During the eighteenth century, improvements in their material circumstances did not necessarily mean expanded independence for women elite families and, arguably, the social conventions of gentility_______more of their time and energy.",
{A: 'A.provided',B: 'B.justified',C: 'C.demanded',D: 'D.granted',E: 'E.exacted',F: 'F.rationalized',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：not necessarily mean expanded independence 说明女性仍然不独 立,所以后文空格要选一个动词体现女性无法独立,所以正确答案选 CE 选项. demand 强烈要求,exact 强求. \n***翻译：十八世纪,她们的物质环境改善并不一定意味着为妇女精英家庭有更多 的独立,可以说,这个社会的礼仪传统要求她们付出更多的时间和精力."]}),

wx.setStorage({key: "678", data: ["679.  For certain economists, \"pure\" economic theory, that is, economic theory_______a specific social structure, is impossible, much like a concept of anatomy that investigates no specific species.",
{A: 'A.attuned to',B: 'B.abstracted from',C: 'C.derived from',D: 'D.divorced from',E: 'E.sensitive to',F: 'F.analyzed in',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 like a concept of anatomy that investigates no specific species 的类比关系,看出空格应该选 investigate no 的同义词,所以正确答 案选 BD 选项.abstracted from 与…分离,divorced from 与…分离. \n***翻译：对于一些特定的经济学家,\"纯\"经济理论,即与某种特定的社会构架 剥离开来的经济理论,是不可能的,因为这就像在调查非特定物种的解剖学概 念."]}),

wx.setStorage({key: "679", data: ["680.  The professor\'s habitual air of_______was misleading front, concealing amazing reserves of patience and a deep commitment to his students\' learning.",
{A: 'A.cordiality',B: 'B.irascibility',C: 'C.disorganization',D: 'D.conviviality',E: 'E.diffidence',F: 'F.exasperation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：concealing amazing reserves 说明表面上的是 reserve 的反义, 所以正确答案选 BF 选项.irascibility 易怒,exasperation 恼怒. \n***翻译：这个教授脾气暴躁的说法是个被人误解的一面,这隐藏了他背后的有耐 心和对学生的学习付出了巨大的贡献."]}),

wx.setStorage({key: "680", data: ["681.The often-cited parallels between human communities and insect colonies are _______: the cooperation found among social insects is essentially due to the insects genetic ties, while humans often collaborate with non-relatives.",
{A: 'A.superficial',B: 'B.obvious',C: 'C.hackneyed',D: 'D.contradictory',E: 'E.uncanny',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面是描述了一个有错误的发现,所以前文找对应这种错误的选 项,正确答案 A 选项.A 肤浅的. \n***翻译：常常被引用的,将人类群体和昆虫部落视为同等的说法实际上是肤浅 的,社会性昆虫之间的合作共赢十分依赖于昆虫间的基因关系,而人们却经常 和不是自己亲戚的人进行合作."]}),

that.setData({progress_percent:68}),wx.setStorage({key: "681", data: ["682. In the nineteenth century, geology became so respected among middle-class Britons that the science came to be seen as_______a yardstick by which other disciplines measured their scientific rigor and imaginative power.",
{A: 'A.accessible',B: 'B.derivative',C: 'C.pragmatic',D: 'D.empirical',E: 'E.paradigmatic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文的 a yardstick by which other disciplines measured their scientific rigor and imaginative power 可以看出空格填入一个\"标准尺 码\"的同义词,正确答案选 E 选项.paradigmatic 典范的. \n***翻译：在十九世纪,地质学在英国中层阶级中变得十分值得敬重,科学变成了 作为示范的衡量标准,用来衡量其他学科的科学严谨性和想象力."]}),

wx.setStorage({key: "682", data: ["683. Throughout much of the twentieth century, common scientific sense seemed to dictate that animals could not make a choice based on rational or aesthetic criteria. Such choices were(i)_____the mental capacity of humans. Scientists who (ii)_____this animal-human cognitive division were often accused of anthropomorphism.",
{A: 'A.reserved for',B: 'B.inconsistent with',C: 'C.similar to',D: 'D.accepted',E: 'E.transgressed',F: 'F.exacerbated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：动物没有这种能力,但是人有,所以第一空选 A 选项,第二空注意 anthropomorphism 是拟人的意思,如果违反了这个差别的人一定是把动物拟人 了,所以第二空选 E 选项.\n***翻译：在 20 世纪大部分时间,普遍的科学知识似乎表明动物不能基于理性和美 学的标准来做选择,然而这些选择却能够为人类保留.违反这个动物人类认知 区别的科学家经常会被指控拟人的罪名."]}),

wx.setStorage({key: "683", data: ["684. For many adults, the adolescent years occupy (i)_____place in the memory, which to some degree is even quantifiable: give a grown adult a series of random prompts and cues, odds are he or she will recall (ii)_____number of memories from adolescence.",
{A: 'A.a peripheral',B: 'B.a privileged',C: 'C.an arbitrary',D: 'D.a disproportionate',E: 'E.a modest',F: 'F.an uncertain',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空 quantifiable 递进,所以选量化的递弱词,答案选 B 更合 适,第二空根据第一空填,既然是特殊的,所以青春期的记忆是不成比例的. privileged 特殊的,disproportionate 不成比例的. \n***翻译：对于很多成年人来说,青春期在记忆中占据了特殊的地位,在某种程度 上甚至是可以量化的：给一个成年人一系列的随机提示和线索,很有可能他或 者她会回忆出不成比例的青春期时期的记忆."]}),

wx.setStorage({key: "684", data: ["685. Company historians tend to focus on either the company itself or company leaders, the latter being (i)_____by writers who think (ii)_____is important, the former favored by writers who think company heads are actually (iii) _______.",
{A: 'A.rehashed',B: 'B.misrepresented',C: 'C.preferred',D: 'D.leadership',E: 'E.organization',F: 'F.function',G: 'G.influential',H: 'H.interchangeable',I: 'I.uncontrolled'},
"###解析：前两个空联立,认为领导力重要的人必然更喜欢公司的领导,而喜欢 公司本身的作家一定认为公司领导是可以互换的,重要的是公司本身,正确答 案选 CDH 选项.prefer 喜欢,leadership 领导力,interchangeable 可交换 的. \n***翻译：公司历史学家倾向于关注公司本身或者公司的领导,后者更被一些作家 喜欢,这些作家认为领导力是很重要的,前者被那些认为公司领导实际上是可 以换的人喜欢."]}),

wx.setStorage({key: "685", data: ["686.  Publisher, publicist, and broadcasters love anniversaries, those occasions when historical events become (i)_____in (ii)_____culture of celebration. On such occasions patriotic sentiment and national pride wrapped in the panoply of history to manufacture a mythical past that is serviceable for public (iii) _______.",
{A: 'A.elusive moments',B: 'B.marketable artifacts',C: 'C.raging controversies',D: 'D.an authentic',E: 'E.a commercial',F: 'F.an elitist',G: 'G.consumption',H: 'H.scrutiny',I: 'I.censure'},
"###解析：三空联立,主要说的是这些纪念日现在都被用于商业目的,所以三空 取同即可,答案 BEG 选项.marketable artifact 有市场的人工作品, commercial 商业化的,consumption 消费.\n***翻译：出版人,推介人员和播音员都喜欢纪念日,这些历史事件的特别时刻在 商业化的文化庆祝中变成一种有市场的人工产品.在这些时刻爱国情感和国家 的骄傲包裹在华丽的历史服饰之下,用来生产可用于公众消费的神秘过去."]}),

wx.setStorage({key: "686", data: ["687.  Rebecca West\'s book Black Lamb and Grey Falcon is a singularity_______achievement, 1,100 pages that meld the genres of travel narratives, autobiography, historical analysis, and philosophical meditation.",
{A: 'A.evanescent',B: 'B.petty',C: 'C.polymathic',D: 'D.incongruous',E: 'E.encyclopedic',F: 'F.fleeting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文 meld the genres of travel narratives, autobiography, historical analysis, and philosophical meditation 说明这本书的全面, 所以正确答案选 CE 选项.polymathic 全面的,encyclopedic 广博的. \n***翻译：RW 的书 Black Lamb and Grey Falcon 是一个突出的全面的成就,有 1100 页而且融合了旅行叙事诗,自传,历史分析和哲学思考."]}),

wx.setStorage({key: "687", data: ["688.  She expected her book to be _______, but in fact few of her readers disagreed with its premise that street art, long considered a mere sideshow entertainment, deserved to be regarded as high art.",
{A: 'A.controversial',B: 'B.dramatic',C: 'C.impressive',D: 'D.acclaimed',E: 'E.provocative',F: 'F.popular',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说很少不同意她,but 转折,说明本身她认为她的书会引起争 议,所以正确答案选 AE 选项.controversial 引起争议的,provocative 引起 争议的. \n***翻译：她期望她的书是会引起争议的,但是实际上她的读者很少不同意他的前 提,即街头艺术(长期被认为仅仅是杂耍娱乐活动)值得被当成是高等艺术."]}),

wx.setStorage({key: "688", data: ["689.  Researchers have recorded around 60 separate behaviors for worker honeybees, a number that seems to_______the achievements of many mammals: even the versatile bottlenose dolphin only performs about twice the number a worker honeybee manages.",
{A: 'A.approximate',B: 'B.eclipse',C: 'C.reflect',D: 'D.compound',E: 'E.outdo',F: 'F.echo',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面拿哺乳动物最厉害的来进行比较,说明工蜂的行为已经超越 了很多普通哺乳动物,正确答案选 BE 选项.eclipse 超越,outdo 超过. \n***翻译：研究者记录了工蜂 60 个独立行为,这个数量超过了很多哺乳动物的能 力：就算是多才多艺的宽吻海豚也仅仅能够表现工蜂两倍的完成能力."]}),

wx.setStorage({key: "689", data: ["690.  Despite its best efforts to stimulate sales, the bookselling business remains far from _______, for it has high fixed costs in wages and rent, and falling prices make these ever harder to spur.",
{A: 'A.effective',B: 'B.healthy',C: 'C.innovative',D: 'D.robust',E: 'E.stingy',F: 'F.parsimonious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：尽管很大的努力,但是销售还是远远不好,far from 取反,所以空 格选正面评价词,正确答案选 BD 选项.healthy 强劲的,robust 强劲的. \n***翻译：尽管尽了最大的努力来刺激销售,但是书籍销售仍然不强劲,因为它有 很高的工资和租金的固定成本,而且降价让这些东西更难去推动了."]}),

wx.setStorage({key: "690", data: ["691.One might expect someone of such  views to have a comparably dour personality, but people who have worked with her talk about how she uses her considerable charm to convince people that she is right.",
{A: 'A.forbearing',B: 'B.convoluted',C: 'C.felicitous',D: 'D.astringent',E: 'E.hyperbolic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题同义重复 dour,选 dour 的广义同义词,dour 有\"严厉的\"意 思,所以正确答案选 D 选项.astringent 尖刻的,严格的. \n***翻译：一个人可能会认为像她这样给出如此尖酸观点的人有一种严格的性格, 但是和她一起工作的人们却描述她是如何利用自己的亲和力去说服别人她是对 的."]}),

that.setData({progress_percent:69}),wx.setStorage({key: "691", data: ["692. Some species camouflage patterns may be _______, granting those species a higher chance of survival in a heterogeneous environment.",
{A: 'A.plastic',B: 'B.subtle',C: 'C.singular',D: 'D.consistent',E: 'E.imitable',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因果关系,动物有更高的存活几率是因为伪装方法多变,正确答案选 A 选项.plastic 可变的,可塑的. \n***翻译：一些物种的伪装术十分多变,使得这些物种能在各种环境下有很高的存 活机会."]}),

wx.setStorage({key: "692", data: ["693. In the discussions on international patent law, many (i)_____issues will probably be pushed far into the future. This cautious approach makes diplomatic sense, since attempts over the past 15 years to reach international agreements on patents have (ii)_____just such sensitive issues.",
{A: 'A.contentious',B: 'B.stimulating',C: 'C.subjective',D: 'D.approached',E: 'E.articulated',F: 'F.foundered on',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应题目最后的 just such sensitive issues,能称为敏感 的话题的只能是 A 选项,第二空选负评价动词,因为前面已经说了把争议搁置 是 diplomatic 的,所以 15 年来想达成一致都是失败的,选 F 选项. contentious 有争议的,foundered on 失败. \n***翻译：在关于国际性专利法的讨论中,很多可能会引起争执的问题被搁置了, 这一谨慎之举是非常明智的,因为过去的十五年中人们尝试着就专利问题在国 际上达成共识,但在这些非常敏感的问题上都失败了."]}),

wx.setStorage({key: "693", data: ["694. The report is admittedly (i)_____: it is intended to suggest new lines of research rather than to deal with the subject in a (ii)_____manner.",
{A: 'A.sketchy',B: 'B.exculpatory',C: 'C.flippant',D: 'D.cavalier',E: 'E.deceptive',F: 'F.thorough',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：suggest new lines of research 和第一空解释说明,所以第一空选 A 选项,第二空通过 rather than 推知选第一空的反义词,正确答案选 F 选 项.sketchy 粗略的,thorough 彻底的. \n***翻译：这个报告十分的粗略,它意欲介绍研究中的新论点而不是用彻底深刻的 述说这个研究."]}),

wx.setStorage({key: "694", data: ["695. Cynics will dismiss the race between Richard and Gorman as two equally dull candidates. However, the notion that the two leaders are (i)_____does not meet them, for they are as different as can be. Richard is (ii)_____and is fastidious of her appearance. So one could hardly accuse her of being either taciturn or (iii) _______.",
{A: 'A.interchangeable',B: 'B.uncritical',C: 'C.competent',D: 'D.condescending',E: 'E.loquacious',F: 'F.blunted',G: 'G.unkempt',H: 'H.reticent',I: 'I.adherent'},
"###解析：后文主要想强调两个 leader 之间不同,所以说他们是可互换的就是 不适合的,第一空选 A 选项,第二空和 taciturn 取反,第三空和 fastidious of her appearance 取反,答案选 EG 选项,整体意思就是说她话多讲究外表, 所以不能指责她沉默寡言和不讲究.\n***翻译：愤世嫉俗者会把在 R 和 G 之间的竞赛鄙视为两个同样呆滞的竞选人.然 而,两个领导是可互换的这个说法并不符合,因为他们是非常不同.R 是话多 的而且是非常讲究外表.因此任何人都不能指责她是沉默寡言和不整洁的."]}),

wx.setStorage({key: "695", data: ["696.  People love to talk about their commutes to and from work: those with an easy commute tend to (i) _______, while those who hate their commute think and speak of it as a core affliction, like a chronic illness. Once you raise the subject, the testimonies pour out, and, if your ears are tuned to it, you begin overhearing commute talk everywhere. People who are normally (ii)_____may, when describing their commutes, be unexpectedly(iii)_____divulging the intimate details of their lives.",
{A: 'A.grumble',B: 'B.commiserate',C: 'C.gloat',D: 'D.inattentive',E: 'E.garrulous',F: 'F.circumspect',G: 'G.candid in',H: 'H.economical in',I: 'I.flustered about'},
"###解析：第一空和 think and speak of it as a core affliction 取反,所 以答案选 C 选项,第二空和第三空联立,通过 normally 和 unexpectedly 得知 两个空格取反,所以选 FG 选项.gloat 幸灾乐祸,circumspect 谨慎的, candid in 对...坦白.\n***翻译：人们喜欢讨论他们上下班的通勤情况：那些上下班容易的人倾向于幸灾 乐祸,而那些讨厌上下班通勤的人不仅认为,而且还表达说这就是一个主要的 苦难,就像慢性病一样.一旦你开始了这个话题,各种证词就涌现出来了,如 果你的耳朵对准这类消息,你就开始整天听到关于通勤的聊天.那些正常情况 下很谨慎的人们在描述通勤的时候可能会意料之外的非常真诚地去吐露他们生 活中这些私密的细节."]}),

wx.setStorage({key: "696", data: ["697.  Every illness is a story, and when Annies began it was characterized by the kinds of  _______ details that mean nothing until seen in hindsight.",
{A: 'A.salient',B: 'B.unexceptional',C: 'C.conspicuous',D: 'D.suggestive',E: 'E.abundant',F: 'F.nondescript',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题同义重复,对应 nothing,正确答案选 BF 选项.unexceptional 普通的,nondescript 无特征的.\n***翻译：每个病症都有不同的表现,当 Annies 这种病开始时它被描述成一些平常 的表现,这些表现没有任何值得在意的细节,在事后被发现之前什么也没有."]}),

wx.setStorage({key: "697", data: ["698.  Peoples decisions about childbearing depend on innumerable personal consideration and societal factors, yet even knowing this, demographers are often _______: their projections of birth rates frequently turn out to be embarrassingly at odds with reality.",
{A: 'A.sanguine',B: 'B.flummoxed',C: 'C.inconsistent',D: 'D.overconfident',E: 'E.heartened',F: 'F.confounded',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过冒号后面的解释说明内容倒推出空格选一个 at odds with 的广 义同义词,那么正确答案选 BF 选项.flummoxed 困惑的,confounded 困惑的. \n***翻译：人们对于分娩的决定依赖于人们自己数不清的考虑和社会因素,尽管人 口统计学家知道这个,他们得到的真实统计数据结果尴尬地奇怪时,他们还是 很困惑."]}),

wx.setStorage({key: "698", data: ["699.  The brain has become, for many people,_______the biological machinations of the self, and the self-knowledge promised by neuroscience has ignited a hunger to understand how new findings weigh in on age-old questions.",
{A: 'A.tantamount to',B: 'B.synonymous with',C: 'C.implicated in',D: 'D.divorced from',E: 'E.detached from',F: 'F.subservient to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：同义重复,空格对应后文的 promised by neuroscience,说明人们 已经有这个习惯(毕竟科学都是这么说的)来把大脑就当成是一种 biological machinations of the self,正确答案选 AB 选项.tantamount to 等同于, synonymous with 同义的. \n***翻译：大脑对于很多人来说已经变得等同于自我的生物规划了,而且这种由神 经科学保证的自我认识已经激起一种饥渴来理解新的发现是如何加入到和老套 的问题的辩论中去的."]}),

wx.setStorage({key: "699", data: ["700.  Although scientific progress leads to constant revision of ideas, one observation that has remained_______over the years is that there are a lot of insects in the world: some 950,000 species have been identified.",
{A: 'A.robust',B: 'B.significant',C: 'C.strong',D: 'D.perplexing',E: 'E.confounding',F: 'F.obscure',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面尽管有 revision of ideas,但是还是有没有改变的东西,所 以空格选 revision 的反义,正确答案选 AC 选项.robust 强壮的,strong 强壮 的. \n***翻译：尽管科学研究进程意味着不断修正想法,一种几年来仍然有效的观察数 据显示,世界上有很多很多的昆虫,其中 950000 种类已经被认定."]}),

wx.setStorage({key: "700", data: ["701.The monitoring is not _______: on the contrary, the defendant and his or her attorney are required to be given notice of the governments listening activities.",
{A: 'A.obtrusive',B: 'B.circumspect',C: 'C.surreptitious',D: 'D.adroit',E: 'E.meticulous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：on the contrary 后面的内容与前面的空格取反,后文说政府会通 知,说明这个监视不是秘密进行的,所以正确答案选 C 选项.surreptitious 鬼鬼祟祟的. \n***翻译：这个监听并不是秘密进行的,相反,辩护方和律师会被通知政府的监听 行动."]}),

that.setData({progress_percent:70}),wx.setStorage({key: "701", data: ["702. When studying human history, one must be aware that the_______between historical periods are arbitrary; certainly none of the people alive at the time were aware of a shift from one era to another.",
{A: 'A.judgements',B: 'B.ideologies',C: 'C.innovations',D: 'D.demarcations',E: 'E.episodes',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 certainly none of the people alive at the time were aware of a shift from one era to another 能推出空格需要填入一个体现无 法感受不同时代转移的特征,那么正确答案选 D 选项.demarcation 界限. \n***翻译：当人们学习人类史时,他们应该明白每个历史时期之间的界限是十分随 意的,可以肯定的是在那时生活的人们不会感受到时期和时期之间的变化."]}),

wx.setStorage({key: "702", data: ["703. Memoirs are inherently (i) _______, but Larry McMurtry\'s volume of reminiscences about his life with books-not as a novelist but as a reader and bookstore owner-is especially (ii) _______: nearly every page sounds a note of farewell to an age of books that he sees as passing.",
{A: 'A.unreliable',B: 'B.wistful',C: 'C.self-serving',D: 'D.whimsical',E: 'E.ungracious',F: 'F.valedictory',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过冒号后面的内容推出第二空的核心意思是 farewell,所以第二 空选 F 选项.第一空根据 but 得知要选 farewell 的反义词,所以第一空选 B 选 项.wistful 依依不舍的,valedictory 告别的. \n***翻译：回忆本质上是依依不舍的,但 LM 关于他的生活和书的回忆录的口吻,我 作为读者和书店老板而不是小说家的角度上来讲,像是在做告别一般,几乎每 一页都看起来像是在对之前看的书进行告别."]}),

wx.setStorage({key: "703", data: ["704. Federal efforts to regulate standards on educational achievements have been met by (i) _______ from the states; local governments feel that government imposition represents an undue infringement on their (ii) _______.",
{A: 'A.receptivity',B: 'B.intransigence',C: 'C.compromise',D: 'D.autonomy',E: 'E.legislation',F: 'F.comportment',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：government imposition 和 undue infringement 都说明地方没有按 照联邦的规定来办事,所以第一空选 B 选项,第二空根据语义填写 government imposition 导致的结果,结果是干涉了地方的自治. \n***翻译：联邦很努力去调整教育成就的标准,但却遭到了其他州的不妥协,当地 政府感觉这个标准的实行过度地侵犯了他们的自主权."]}),

wx.setStorage({key: "704", data: ["705. A minor criticism of the book, which is (i)_____an understanding of the difficulty of doing direct research in Hong Kong\'s, is that So relied on secondary sources to tell the story of Hong Kong\'s political development, with previous histories of the period (ii)_____his research. Given So\'s(iii)_____many of the players in Hong Kong politics, it is surprising that he did not use interviews and other forms of direct research to delve further into the motivations, strategies, and tactics of participants.",
{A: 'A.attributable to',B: 'B.exacerbated by',C: 'C.tempered by',D: 'D.largely debunked by',E: 'E.obviating the need for',F: 'F.playing a large role in',G: 'G.deference to',H: 'H.estrangement from',I: 'I.proximity to'},
"###解析：第一空后文说直接研究 HK 有困难,所以这个批评应该是能够被减 弱,第二空既然 S 的目的是来讲述 HK 的政治发展,所以之前的历史时期也会重 要,第三空的关键词是 surprising,既然说没有用采访等直接的形式去研究这 件事很让人惊讶,说明他所做的事就是直接的形式,那么 I 选项最合适. tempered by 被…减弱,play a large role in 占很重要的地位,proximity to 临近. \n***翻译：这本书的一个微小的批评(这种批评因为理解直接对于香港的研究的困 难而减弱)就是 S 他依靠一些间接信息来讲述香港政治发展的故事,有这段时 期之前的历史在他的研究中占重要角色.鉴于 S 接近很多香港政治的重要参与 者,所以他没有使用采访和其他直接形式的研究来钻研政治参选人的动机,策 略,战术是很让人惊讶的."]}),

wx.setStorage({key: "705", data: ["706.  Recent proposals for fixing the climate have taken the form of large-scale geoengineering projects such as launching mirrors into space to reflect solar radiation away from Earth, undertakings that are vastly more (i)_____than anything a nineteenth-century rainmaker could have cooked up. What is unclear, as one looks back at the history of weather modification research, is whether this resourceful ambition will be (ii) _______, or if, by contrast, it serves to make the scientific community\'s (iii)_____that much more devastating.",
{A: 'A.effective',B: 'B.enterprising',C: 'C.accessible',D: 'D.anticipated',E: 'E.challenged',F: 'F.productive',G: 'G.avidity',H: 'H.impotence',I: 'I.resignation'},
"###解析：第一空根据前文的例子可以得知是比之前的求雨法师更加正评价的项 目,所以答案选 B 选项,根据 by contrast 我们得知第二空和第三空取反,第 三空后面有 much more devastating,所以我们知道第三空是负面评价,第二 空是正面评价,所以答案选 F 和 H 选项.enterprising 有魄力的,有进取心 的,productive 富有成效的,impotence 无能. \n***翻译：最近关于确定气候的提议已经采取了大规模地质工程学的项目,例如发 射镜子到太空来使太阳辐射远离地球,这是一些比起 19 世纪求雨法师更有魄力 的项目.当一个人回顾气候修订研究的历史时,不确定的地方是是否这个组织 多磨的雄心会是有成效的,或者相反,是否他让这个科学界的无能更加有毁灭 性."]}),

wx.setStorage({key: "706", data: ["707.  We do not always use words in accordance with their dictionary definitions, for meaning often fluctuates with context: that does not mean, however, that we are completely_______in how we use language.",
{A: 'A.rote',B: 'B.unconstrained',C: 'C.irrational',D: 'D.unpredictable',E: 'E.free',F: 'F.methodical',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：虽然单词的意思会变,但是并不意味我们完全在用词上面是没有限制 的,正确答案选 BE 选项.unconstrained 不受限的,free 自由的. \n***翻译：我们使用单词的时候不会经常根据字典的定义,因为单词的意思会因为 上下文而改变：但这并不意味着我们在使用语言的时候是完全不受限制的."]}),

wx.setStorage({key: "707", data: ["708.  Today the chair of task force in charge of revising the psychiatric diagnostic manual is  _______ post-people work for years to position themselves as candidates-but in the early 1970s, descriptive psychiatry was a backwater.",
{A: 'A.a coveted',B: 'B.an arduous',C: 'C.a taxing',D: 'D.a lucrative',E: 'E.an enviable',F: 'F.an influential',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说 20 世纪 70 年代早期,精神病诊断是落后状态,所以根据 but 推知前面应该说这个职位是很好的,所以正确答案选 AE 选项.coveted 梦寐以 求的,enviable 羡慕的. \n***翻译：今天负责修订精神病诊断手册的特遣部队的主席是让人羡慕的职位—工 作很多年才获得竞选人席位的人—但是在 20 世纪 70 年代早期,诊断精神病是 处于落后状态."]}),

wx.setStorage({key: "708", data: ["709.  The astronomer admits that his interpretation of so-called Population III stars is_______at present since no one has yet done any real calculations to see if it holds up under closer scrutiny.",
{A: 'A.spurious',B: 'B.speculative',C: 'C.predictive',D: 'D.conjectural',E: 'E.fabricated',F: 'F.implausible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应后文 if it holds up under closer scrutiny,说明这个 理解是不确定的,推测的,正确答案选 BD 选项.speculative 推测性的, conjectural 推测的.\n***翻译：天文学家承认他对于所谓的 Population III stars 的理解在目前是推测 性的,因为没有人做过真正的计算来看是否它能够在进一步的检验之下保持下 来."]}),

wx.setStorage({key: "709", data: ["710.  Excessive focus on what might have been can cause in us feelings of restlessness and regret, but some scientists are beginning to think that fancying an alternative reality might have  _______ effects as well.",
{A: 'A.subtle',B: 'B.adverse',C: 'C.restorative',D: 'D.pleasurable',E: 'E.unfavorable',F: 'F.tonic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面对于这种事情给予了负评价 restlessness and regret,后面 but 转折,所以后面空格需要填入正评价,所以正确答案选 CF 选项. restorative 促进康复的,tonic 滋补的. \n***翻译：过度关注于曾经可能出现过什么会导致我们感到坐立不安并且后悔,但 是其他一些科学家开始认为幻想一个其他的可能事实可能也会让我们精神振 奋."]}),

wx.setStorage({key: "710", data: ["711.Although his friends insisted that his black garb was simply depressing, Peter felt just the opposite-that it gave him an air of upbeat,_______maturity.",
{A: 'A.melancholic',B: 'B.wearisome',C: 'C.salacious',D: 'D.aghast',E: 'E.urbane',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和 upbeat 并列关系,所以找正评价词修饰 maturity 即可,所以 正确答案选 E 选项.urbane 温文尔雅的. \n***翻译：尽管他的朋友们坚持认为她的黑色衣服让人感觉很沮丧,皮特仍然有相 反的想法,这给了他一种乐观的气氛和温文儒雅的成熟感."]}),

that.setData({progress_percent:71}),wx.setStorage({key: "711", data: ["712. The actor\'s performance was so absurdly_______that Gwen felt a little ashamed to have to resort to tissues in the final scene.",
{A: 'A.proficient',B: 'B.unfeasible',C: 'C.seditious',D: 'D.maudlin',E: 'E.accommodating',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：Gwen 非常羞愧去用了纸巾,说明这个空格必然和哭相关,而且 absurdly 刚好解释了后文的 ashamed,正确答案 D 选项.maudlin 伤感的. \n***翻译：这个演员的表演是如此荒唐的伤感,以至于格温觉得自己在最后一场用 纸巾擦泪水有点可耻."]}),

wx.setStorage({key: "712", data: ["713. To contrast the demeanor of Austen\'s clergy-man brothers James and Henry with that of Mr. Collins, the much-abused figure of fun in Pride and Prejudice, is instructive, for where the Austen brothers were properly (i)_____to their social superiors and benevolent to their dependents, the odious Mr. Collins was invariably (ii)_____to his betters, fawning in particular on his patron, Lady Catherine de Burgh.",
{A: 'A.differential',B: 'B.similar',C: 'C.jejune',D: 'D.derivative',E: 'E.sycophantic',F: 'F.atypical',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空非常好做,通过 fawning in particular on his patron 推出 第二空选 fawning 的同义词,正确答案选 E 选项,第一空取 invariably sycophantic 反义,所以正确答案选 A 合适.differential 有差异的, sycophantic 谄媚的.\n***翻译：对比奥斯丁做为神职人员的兄弟 J 和 H 的行为与 MC(在傲慢与偏见中肆 意滥用的娱乐角色)的行为是有好处的,在奥斯丁兄弟非常合理有区别对待社 会上层而且对于抚养者和蔼的时候,龌蹉的 MC 总是一成不变地讨好他的上级, 尤其谄媚他的赞助人 Lady Cartherine de Burgh."]}),

wx.setStorage({key: "713", data: ["714. The company president\'s reputation for unflappability could easily be understood upon observing her (i)_____performance during a particularly (ii)_____board meeting.",
{A: 'A.supercilious',B: 'B.histrionic',C: 'C.composed',D: 'D.productive',E: 'E.contentious',F: 'F.lifeless',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空同义重复前文的 reputation for unflappability,第二空根 据语义填写一个能够体现主席\"镇定\"特征的场景,contentious 最合适.正 确答案选 CE 选项.composed 镇静的,contentious 引起争议的. \n***翻译：在看到她在一次充满争议的董事会议时她的镇定时,这个公司的主席遇 事沉稳的声名可以很容易被理解."]}),

wx.setStorage({key: "714", data: ["715. Women in the mining towns of the American West were strictly stereotyped into neat categories of public and private, good and bad, but the 100 intrepid female prospectors in Zanjani\'s book managed to (i)_____those categories. In addition to providing documentation that demolishes the all-male version of prospecting, Zanjani uses the examples of her female loners to (ii)_____some of the (iii)_____generalizations about Euro-American women as uniformly nurturant and sociable pioneers.",
{A: 'A.inhabit',B: 'B.reveal',C: 'C.confound',D: 'D.puncture',E: 'E.invent',F: 'F.perpetuate',G: 'G.accurate',H: 'H.facile',I: 'I.unknown'},
"###解析：第一空根据 but 得知选之前 neat categories 的反义,所以应该是取 分类不明确,所以第一空选 C 选项,第二空注意 loners 和 sociable 是反义, 所以第二空要选体现削弱,破坏的东西,那么 D 选项最合适,第二空既然是削 弱这种说法,那么第三空应该选负评价的词,所以选 H 选项合适.confound 证 明...错误,puncture 削弱,facile 肤浅的. \n***翻译：在美国西部矿镇的女性是严格被分为清楚的类型：公共的和私人的,好 的和坏的.但是在 Z 的书中 100 个无惧的女性勘探者成功让这些分类混乱了. 除了提供了彻底打败了纯男性勘探的记录之外,Z 还用了一些女性独来独往者 来削弱了一些肤浅的总结：即欧美女性是相同抚养的而且是好交际的先锋者."]}),

wx.setStorage({key: "715", data: ["716.  The usual (i)_____spending public monies on scientific projects is that such projects have the potential to make our lives healthier, safer, and more productive. However, the fact that science – even \"pure\" science – can strengthen democracy and promote public participation in the political process is hardly ever (ii) _______. It should be Scientific literacy (iii)_____democracy, and this is an important ancillary benefit of the promotion of science.",
{A: 'A.argument against',B: 'B.rationale for',C: 'C.precedent for',D: 'D.denied',E: 'E.mentioned',F: 'F.gainsaid',G: 'G.stifles',H: 'H.energizes',I: 'I.disregards'},
"###解析：后文说科学能够让人们生活更好,所以第一空就是说花钱在科学的原 因或者推动力,所以第一空选 B 选项,第二空通过 however 转折了,科学其实还能推动民主,但是从来没有提到过,所以第二空选 E 最合适,第三空通过 this is an important ancillary benefit of the promotion of science 说 明科学确实是促进民主了,所以第三空选 H 选项.rationale 根本原因, mention 提及,energize 使…活跃. \n***翻译：在科学项目中花费公共资金的常见根本原因就是这些项目有能力去让我 们的生活更加健康,更加安全,更加高效.然而,科学(甚至是纯粹的科学) 能够加强民主而且能够推动公众参与政治活动的事实几乎没有再被提到过.应 该是科学的专业能力推动民主,而且这是一个附加的重要的推动科学的好处."]}),

wx.setStorage({key: "716", data: ["717.  The territory\'s tradition of simple and low taxes, combined with a comparatively easygoing government, has earned it the_______of its citizens and is widely seen as a main reason for its stunning rise to prosperity.",
{A: 'A.opprobrium',B: 'B.vituperation',C: 'C.attention',D: 'D.dismissal',E: 'E.approbation',F: 'F.adulation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过后文的 widely seen as a main reason for its stunning rise to prosperity 明显看出空格是一个正评价词,所以正确答案选 EF 选 项.approbation 赞同,adulation 吹捧. \n***翻译：这个领土上简化降低税收的传统,结合着相较而言很随和的政府,为它 迎来了当地居民的认可,并且成为了该城市变得异常繁荣的原因."]}),

wx.setStorage({key: "717", data: ["718.  Although the parents do not think highly of the educational system \"as a whole\", they fail to treat teachers with_______equally.",
{A: 'A.consideration',B: 'B.veneration',C: 'C.lucubration',D: 'D.opprobrium',E: 'E.reverence',F: 'F.disdain',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 equally 看出空格是前面态度的同义重复,前面说 do not think highly of,所以正确答案选 DF 选项.opprobrium 谴责,disdain 鄙 视. \n***翻译：虽然父母很难认为教育系统是一个整体,他们不能用同样的鄙夷态度对 待老师们."]}),

wx.setStorage({key: "718", data: ["719.  Economic growth has been identified as a_______for poor countries to eradicate poverty, but this prescription also triggers great environmental concerns.",
{A: 'A.panacea',B: 'B.refuge',C: 'C.remedy',D: 'D.heaven',E: 'E.culprit',F: 'F.recipe',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：this prescription 和空格是同义重复关系,所以空格选 prescription 的同义词.正确答案选 AC 选项.panacea 万能药,remedy 治 疗. \n***翻译：经济增长已经被确认成为一个让贫困国家消除贫困的补救办法,但是这 个办法也会导致更大的环境问题."]}),

wx.setStorage({key: "719", data: ["720.  In mathematics, judgments about the validity of proofs are mediated by peer-reviewed journals; to ensure _______, reviewers are carefully chosen by journal editors, and the identity of scholars whose papers are under consideration are kept secret.",
{A: 'A.timelessness',B: 'B.originality',C: 'C.fairness',D: 'D.comprehensiveness',E: 'E.objectivity',F: 'F.novelty',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：reviewers are carefully chosen by journal editors 说明这种 同行评议期刊要确保一种公平,所以认真选人,正确答案选 CE 选项.fairness 公平,objectivity 客观性. \n***翻译：在数学中,关于证明的有效性的评论被同行评议的期刊调解.为了确保 公平,评判者被这个期刊的编辑小心选择出来,并且那些论文被讨论的学者的 名字是被隐瞒的."]}),

wx.setStorage({key: "720", data: ["721.During the Renaissance, history was thought to be _______: it supplied instances of good and bad behavior in the past, thus informing the ethical precepts of the present.",
{A: 'A.amoral',B: 'B.subjective',C: 'C.superfluous',D: 'D.exemplary',E: 'E.progressive',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：supplied instances of good and bad behavior in the past, thus informing the ethical precepts of the present 说明历史有一种示范 性的特征,所以正确答案选 D 选项.exemplary 可作楷模的. \n***翻译：在文艺复兴时,历史被认为是有示范性的,它提供了过去好的和坏的的 例子并且在现在形成了道德箴言."]}),

that.setData({progress_percent:72}),wx.setStorage({key: "721", data: ["722. History teaches us that science is not_______enterprise; indeed, it is quite the opposite, a motley assortment of tools designed to safeguard researchers against their own biases.",
{A: 'A.an opportunistic',B: 'B.an anomalous',C: 'C.a haphazard',D: 'D.a collective',E: 'E.a monolithic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：opposite, a motley assortment of tools 推出空格要选 motley assortment 的反义,正确答案选 E 选项.monolithic 单一的. \n***翻译：历史教会我们,科学并不是一个单一的整体,事实上,它是相反的,多 种多样的,被创造出来用于保证科学家们的研究成果不受他们自己偏见认知控 制的工具."]}),

wx.setStorage({key: "722", data: ["723. In the 1980s, many historians sounded urgent calls for (i)_____in American historical writing, as longer and longer monographs on smaller subjects were being written-dazzling studies, but pieces of a puzzle no one was putting together. This scholarship was not illuminating the central themes of history but (ii) _______.",
{A: 'A.indulgence',B: 'B.detail',C: 'C.synthesis',D: 'D.obscuring',E: 'E.criticizing',F: 'F.celebrating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：as longer and longer monographs on smaller subjects were being written 说明历史学家追求的是简约,能体现简约的是 C 选项,第二空 根据 not...but...的结构得知选 illuminating 的反义词,D 选项合适. synthesis 合成,obscuring 复杂难懂的.\n***翻译：在 1980 年代,很多历史学家都很着急合并美国历史的文章,随着越来越 长的关于很小主题的题材被撰写,但每一篇碎片却没有人组合在一起.这种学 术研究并不是在阐明那段时期的历史主题,反而是使其变得难以理解."]}),

wx.setStorage({key: "723", data: ["724. There has been (i)_____elephant\'s fabled mental capacities until recently, when these behavioral observations have begun to be (ii)_____by brain science. MRI scans of an elephant\'s brain suggest that even relative to its overall size it has a large hippocampus, the component in the mammalian brain linked to memory and an important part of its limbic system, which is involved in precessing emotions.",
{A: 'A.surprising credence given to',B: 'B.a widespread dismissal of',C: 'C.only anecdotal evidence for',D: 'D.buttressed',E: 'E.anticipated',F: 'F.overwhelmed',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空格对应 fabled,那么答案选 C 选项,第二空从后文的解释能 够看出,科学已经证实了这种说法,说明这种说法不再是道听途说的了,所以 选 D 选项合适.anecdotal 道听途说的,buttress 支持,证实. \n***翻译：直到最近才有关于大象有传说中的心理能力的传闻证据.当这些行为的 观察已经开始由脑科学支持.MRI 扫描大象的大脑,得到的结果显示就算和整 个身体比起来它们的海马体都很大,海马体这个长在哺乳动物大脑中的部分和 记忆还有边缘系统中一部分很重要的部分相连接,此边缘系统和迸发情绪相 关."]}),

wx.setStorage({key: "724", data: ["725. The limitations of human attention cause us to miss much of what goes on around us. The real problem here is that we are often (i)_____these limitations: we think that we see the world as it really is, but our ostensibly reliable visual experience (ii)_____striking mental (iii) _______.",
{A: 'A.impatient with',B: 'B.unaware of',C: 'C.distracted by',D: 'D.belies',E: 'E.unifies',F: 'F.dispels',G: 'G.feats',H: 'H.images',I: 'I.lapses'},
"###解析：第一空根据 problem 知道填入一个负评价动词,所以选 B 选项最合 适,第二空和第三空解释说明,体现看到的和实际的区别的动词,所以第二空 选 D 选项,第三空要选 reliable 的反义词,三个选项中 I 最合适.unaware of 没有意识到,belie 掩饰,lapse 失误. \n***翻译：人类注意力的限制导致我们没有注意到我们身边发生的很多事.真正的 问题在于我们通常不知道有这些限制的存在,我们以为我们了解的世界就是真 实的,我们表面上看似可靠的视觉经验掩盖了我们惊人的判断失误."]}),

wx.setStorage({key: "725", data: ["726.  Most advocates of space exploration by the United States would not explicitly associate spaceflight with (i) ______________, yet that belief, Launius and McCurdy write, is among the roots of arguments (ii)_____human spaceflight. Throughout United States history there has been (iii) _______-seek utopia-on the frontier, and many space advocates have used that notion to make their case for exploring and settling space.",
{A: 'A.entertainment',B: 'B.irrationality',C: 'C.utopia',D: 'D.questioning',E: 'E.analyzing',F: 'F.prompting',G: 'G.a hostile region fit only for the most self-reliant',H: 'H.the ideal location for one to better oneself',I: 'I.a paradise corrupted by European civilization'},
"###解析：最后面说 many space advocates have used that notion to make their case for exploring and settling space,这说明第二空要选表示\"推 动\"意思的词,第二空选 F 选项,第一空对应后文的\"seek utopia\",所以第 一空选 C 选项.第三空是整个题目的结论,就是 utopia 其实是对 spaceflight 是有推动作用的,所以 H 选项最合适. \n***翻译：美国空间探索的大部分推动者不会直言不讳地把航天飞行和乌托邦(理 想化)联系在一起,但是正如 L 和 M 所写的那样,这个想法是很多推动人类航 天飞行的根基,在整个美国的历史中,已经存在在前沿的完美的提高自身的地 方—寻找乌托邦—而且很多航天推动者已经使用这个理念来完成他们的探索空 间的任务."]}),

wx.setStorage({key: "726", data: ["727.  The sociologist argued that criminal behavior is an impermanent condition because it is the result of cyclical forces operating through_______factors, not the manifestation of deeply rooted personal characteristics.",
{A: 'A.contingent',B: 'B.alarming',C: 'C.circumstantial',D: 'D.proliferating',E: 'E.unsustainable',F: 'F.intensifying',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：和 manifestation of deeply rooted personal characteristics 取 反,所以答案选 AC 选项.contingent 偶然的,circumstantial 偶然的. \n***翻译：这个社会学家认为犯罪行为是一个临时的状况,因为它是通过一些偶然 的循环力量的结果而不是深深根植在个人性格中的表现."]}),

wx.setStorage({key: "727", data: ["728.  British critics covering African American musicians performing in London in the 1910s had little idea how to distinguish what was authentic African American music from what was _______, but they knew such a distinction existed.",
{A: 'A.eclectic',B: 'B.genuine',C: 'C.derivative',D: 'D.spurious',E: 'E.legitimate',F: 'F.specious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格取 authentic African American music 反义,所以正确答案选 DF 选项.spurious 伪造的,specious 虚假的.\n***翻译：在 20 世纪 10 年代在伦敦表演美报导美国黑人音乐家的英国评论家几乎 不知道如何去边真正的美国黑人音乐和伪造的,但是他们知道这样的一个区别 是确实存在的."]}),

wx.setStorage({key: "728", data: ["729.  Any antimatter in our part of the universe is necessarily_______because of the overwhelming preponderance of ordinary matter, by which antimatter is quickly annihilated.",
{A: 'A.short-lived',B: 'B.nebulous',C: 'C.scarce',D: 'D.concrete',E: 'E.substantial',F: 'F.ephemeral',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说通过普通物质,反物质会被消灭,所以反物质的存在一定是短 暂的,正确答案选 AF 选项.short-lived 短暂的,ephemeral 短暂的. \n***翻译：在我们宇宙的任何反物质都一定是短暂的,因为普通物质这样一个压倒 性的优势,凭借普通物质反物质很快被消灭."]}),

wx.setStorage({key: "729", data: ["730.  There are great_______in countries\' greenhouse gas emissions, especially in per capita terms: while the United States and China are similar in aggregate emissions, United States per capita emissions are a huge multiple of China\'s.",
{A: 'A.distortions',B: 'B.disparities',C: 'C.fluctuations',D: 'D.advances',E: 'E.variances',F: 'F.vacillations',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容说明在人均排放量上,美国远大于中国,所以空格 要体现\"远大于\",所以正确答案选 BE 选项.disparity 差异,variance 不 同. \n***翻译：关于国家温室气体释放有很大的不同,尤其是在人均问题上,因为美国 和中国在释放总数上很相似,但美国的人均释放量却是中国的很多倍."]}),

wx.setStorage({key: "730", data: ["731.Many legislators who helped Roosevelt shape the New Deal_______the fact that emerging social problems affected every segment of the population; nonetheless, they often acted with a view to aiding only their own constituents.",
{A: 'A.disregarded',B: 'B.bemoaned',C: 'C.ignored',D: 'D.disputed',E: 'E.downplayed',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说他们只帮助自己的选民,再通过让步关系得出前面空格是他们 明白社会问题是能影响整体选民的,正确答案选 B 选项.bemoan 抱怨,哀叹. \n***翻译：很多帮助过罗斯福设立罗斯福新政的议员们都对于新出现的社会问题会 影响每一个人口群体这个事实进行抱怨,但他们往往只是对自己的部门采取行 动."]}),

that.setData({progress_percent:73}),wx.setStorage({key: "731", data: ["732. One thing both authors have in common is a striking amount of _______: they claim to know how massive institutions, some of them richly endowed, all of them central to American society and culture, should be reshaped.",
{A: 'A.hubris',B: 'B.propriety',C: 'C.bias',D: 'D.prescience',E: 'E.indolence',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容说他们说话有种夸大的感觉,能对应这种特征的只能 是 A 选项.hubris 傲慢自大. \n***翻译：极其自命清高是每个作家都具有的共同特点,他们声称知道那些,全部 都处于美国文化社会中心的,一部分拥有得天独厚的条件的庞大机构,都应该 如何重塑."]}),

wx.setStorage({key: "732", data: ["733. The novel\'s heroine shows a remarkable (i)_____to worship at the altar of youth; in her world, youth is (ii) _______, while age, by contrast, confers competence and wisdom.",
{A: 'A.disinclination',B: 'B.desire',C: 'C.tendency',D: 'D.incredulous',E: 'E.sagacious',F: 'F.callow',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：while age, by contrast, confers competence and wisdom 说明这 里对成熟是正评价,对年轻是负评价,所以第一空选负评价 A 选项,第二空依 然选负评价 F 选项.disinclination 不情愿,callow 稚嫩无经验的. \n***翻译：小说的女主人公表现出了对于崇拜年轻的一种厌恶；在她的世界中,年 轻是缺乏经验的,然而成熟却意味着胜任力和智慧."]}),

wx.setStorage({key: "733", data: ["734. The humor in this play derives from its (i) _______. The new production, however, inexplicably goes in the opposite direction; it is so (ii)_____that the audience does not even seem to realize that the play is supposed to be a comedy.",
{A: 'A.verbal nimbleness',B: 'B.political allusions',C: 'C.deadpan dialogue',D: 'D.accessible',E: 'E.plodding',F: 'F.implausible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 goes in the opposite direction 推出前后空格选反义词,通过 the audience does not even seem to realize that the play is supposed to be a comedy 得出第二空选负评价,所以能够搭配的选项是 AE 选项. verbal nimbleness 文字上的聪明,plodding 单调乏味的. \n***翻译：这出戏中的幽默源自于其字面上的聪明,可这出新的戏剧,令人费解的 是,居然在向着相反的方向走,这出戏实在是太乏味了,以至于观众们甚至没 有意识到这出戏本来应该是喜剧."]}),

wx.setStorage({key: "734", data: ["735. Recently released statistics on the prevalence of heart disease in the United States, while(i)_______, nevertheless reflect a decline from heights reached in the 1960s, before health officials began publicly (ii)_____people to guard against heart disease.",
{A: 'A.definitive',B: 'B.sobering',C: 'C.implausible',D: 'D.entreating',E: 'E.defying',F: 'F.absolving',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：nevertheless reflect a decline 说明前面的空格填入一个负评价 词,B 选项最合适.第二空需要选官方的动作,动作要体现官方让人去抗击心 脏病,正确答案选 D 选项.sobering 严肃的,entreat 恳求. \n***翻译：最近公布的美国心脏病患病率统计数字,虽然令人警醒,但反映出相较 于 1960 年代的高峰还是降低了一些,因为在 1960 年代以前健康机构还并没有 公众宣传呼吁人们预防心脏疾病."]}),

wx.setStorage({key: "735", data: ["736.  Cultures can shape attitudes and beliefs in ways that (i)_____conscious awareness or control; in other words, cultural orientations may develop form processes that do not entail (ii) _______ participation, and cultures may pervade subtle psychological dynamics in ways that individuals may not be able to (iii) _______. Thus, theories and tools developed to study implicit cognition may increase our understanding of the complex interplay between culture and individuals.",
{A: 'A.operate outside of',B: 'B.tend to facilitate',C: 'C.may not alter',D: 'D.active',E: 'E.random',F: 'F.rote',G: 'G.report',H: 'H.maintain',I: 'I.condone'},
"###解析：in other words 说明分号前后两个句子是同义重复,不一定需要参 与也就是说可以在外部进行,所以第一空选 A 选项,第二空看搭配,三个选项 只有 active 合适,第二空选 D 选项,第三空对应点在 implicit 上,既然是 implict,说明个人是无法去表达出来的,所以第三空选 G 选项.\n***翻译：文化能够通过在自觉意识或控制之外运作的方式来塑造态度和信仰.换 句话说,文化方向能够形成形式过程(这种过程不一定要积极的参与)而且文 化能够用个体可能不能报告的方式来弥漫不明显的心理动态.因此,为研究内 隐认知而形成的理论和工具可能会增加我们对于文化和个体之间复杂的相互作 用的理解."]}),

wx.setStorage({key: "736", data: ["737.  Although people often describe the correct trajectory for a thrown or moving object, their efforts to explain that trajectory in terms of physics can reveal_______understanding of the forces acting on the object.",
{A: 'A.a naïve',B: 'B.a subtle',C: 'C.a fallacious',D: 'D.an unsophisticated',E: 'E.a nuanced',F: 'F.a fresh',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 although 得知空格和前文评价取反,前文是 correct,所以空 格选负评价即可,正确答案选 AD 选项.naive 幼稚的,unsophisticated 天真 的. \n***翻译：尽管人们经常能够描述正确的抛或者移动物体的轨道,但是他们用物理 学解释这种轨道的努力只能揭露非常天真的对于物体受力的理解."]}),

wx.setStorage({key: "737", data: ["738.  Appearing in the midst of so many equivocal comments, this unambiguous statement, whatever its intrinsic merit, plainly stands out as _______.",
{A: 'A.anomalous',B: 'B.arcane',C: 'C.irrelevant',D: 'D.superfluous',E: 'E.unusual',F: 'F.esoteric',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：句中的 equivocal 和 unambiguous 构成反义,所以在如此多的含糊其 辞的言论中,清晰的言论是异类,所以正确答案选 AE.A 异常的,E 不寻常 的. \n***翻译：出现在众多模棱两可的言论之中,这个意思清楚的声明,无论其固有的 价值是什么,显然成为了异常言论."]}),

wx.setStorage({key: "738", data: ["739.  For decades, Pluto seemed to be the mysteriously_______planet: it was first thought to be about as large as Earth, but, subsequently, measurements had it smaller and smaller.",
{A: 'A.morphing',B: 'B.appearing',C: 'C.dwindling',D: 'D.orbiting',E: 'E.contracting',F: 'F.emerging',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过后面的解释说明能够看出空格对应点是 smaller and smaller, 正确答案选 CE 选项.dwindling 减少,contracting 收缩. \n***翻译：很多年来,冥王星似乎成为了一个神秘缩小的星球：起初它被认为如同 地球一般大,但随着测量的越来越准确,它的尺寸也变得越来越小."]}),

wx.setStorage({key: "739", data: ["740.  Science is arguably a very high-minded pursuit, but that is not to say that all of its practitioners are _______, as numerous articles alleging overly generous pharmaceutical industry payments to medical researchers have tried to show.",
{A: 'A.conventional',B: 'B.clever',C: 'C.unimpeachable',D: 'D.ingenious',E: 'E.blameless',F: 'F.predictable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复 high-minded,所以正确答案选 CE 选项. unimpeachable 无可指责的,blameless 无可指责的. \n***翻译：科学应该是个高尚的追求,但这并不是说所有的实践者都是无可指责 的,因为众多的文章都在描述过度慷慨的制药业给医疗研究者的高昂的工资."]}),

wx.setStorage({key: "740", data: ["741.Since the deficit predicament is fundamentally a long-term problem, the legislature\'s     short- term approaches has actually compounded the difficulty in each succeeding year, eroding the state credit rating in the process.",
{A: 'A.vexation regarding',B: 'B.skepticism about',C: 'C.addiction to',D: 'D.wariness of',E: 'E.demonization of',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 since...得知长期解决方案才是好的,再根据后文说短期解决 方法搀和了很多困难得知,立法者是一直在使用短期方法解决赤字问题,对应 的正确答案选 C 选项.addiction 沉溺. \n***翻译：因为赤字困境从根本上来讲是一个长期问题,立法机关沉溺于提供的短 期办法实际上已经加重了其后每年会发生的困难,在这个过程中破坏了国家信 用评级."]}),

that.setData({progress_percent:74}),wx.setStorage({key: "741", data: ["742. His_______speaking style notwithstanding, William Perkins has long been seen as the moderate face of his political party.",
{A: 'A.genteel',B: 'B.mundane',C: 'C.affable',D: 'D.captivating',E: 'E.vehement',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：notwithstanding 尽管,所以空格和后面取反,后文 moderate face 表明了一个温和的特征,所以正确答案选 E.vehement 激烈的. \n***翻译：他的演讲风格尽管还是激烈,WP 长期以来一直被他所属的政党看作是温 和的人."]}),

wx.setStorage({key: "742", data: ["743. I knew well, from experience with hundreds of hired crew members on her boats, how (i) _______ attitudes can be: how one negative influence can impel an otherwise (ii)_____member of a crew to quit.",
{A: 'A.insipid',B: 'B.infectious',C: 'C.innocuous',D: 'D.untested',E: 'E.captious',F: 'F.contented',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据冒号后面的内容推出要选一个体现 influence 的意思的 词,正确答案选 B,第二个空根据 impel 推出选 nagative 的反义词,所以最佳 答案是 F 选项.infectious 传染性的,contented 满足的. \n***翻译：从在船上成百上千个员工的经验中我确切地知道这种有感染性的态度能 够带来什么：一种负面的影响是如何能够推动一个其他满足的员工退出的."]}),

wx.setStorage({key: "743", data: ["744. The question whether children like sweetener or not is (i) _______. Of course children like sweetener, which is (ii)_____to sellers, since children\'s taste will not change once they are used to a certain brand.",
{A: 'A.debated',B: 'B.decided',C: 'C.overlooked',D: 'D.a pragmatic solution',E: 'E.a commercial advantage',F: 'F.an idealistic conception',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：of course 告诉我们第一空的问题答案是确定无疑的,所以选 B 选 项,第二空根据后文的解释能看出对于卖家来说这是一件好事,所以选 E 选 项.decided 确定的,commercial advantage 商业有利条件. \n***翻译：孩子是否喜欢甜食的问题是确定的.当然孩子喜欢甜食了,这件事对于 卖家来说是一个商业优势,因为一旦孩子适应了某个品牌,他们的品味不会变 化."]}),

wx.setStorage({key: "744", data: ["745. The new drug was useful, but unfortunately its effect was largely (i)_____rather than (ii) _______.",
{A: 'A.placatory',B: 'B.palliative',C: 'C.addictive',D: 'D.immediate',E: 'E.curative',F: 'F.mollifying',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 rather than 得知两个空格取反,正确答案选 BE 选项. palliative 缓和的,curative 能治病的. \n***翻译：新药是有用的,但是不幸的是它的效果很大程度上是缓和的而不是治疗 疾病的."]}),

wx.setStorage({key: "745", data: ["746.  In adolescence, (i)_____interactions are crucial in forging a self-identity. To be sure, this process often plays out in (ii)_____as a means of defining and shoring up the sense of self. Kids will seek out like-minded companions, and spurn others who seem different. But when kept within reasonable bounds, this in-group (iii)_____generally evolves into a more mature friendship pattern.",
{A: 'A.adult',B: 'B.wide-ranging',C: 'C.peer',D: 'D.cliquish social behavior',E: 'E.dramatic changes in personality',F: 'F.heightened sociability',G: 'G.alienation',H: 'H.clustering',I: 'I.competition'},
"###解析：句中的第一空和第二空是同义关系,对应点在后文的例子 Kids will seek out like-minded companions,说明两个空格都填入 like-minded(志趣 相投的)同义,所以第一空选 C 选项,第二空选 D 选项,第三空根据 this 得知 同义重复前文的特征,所以第三空选 like-minded companions 的同义,所以选 H 选项.peer 同伴,cliquish social behavior 小集团式的社交行为, cluster 聚集.\n***翻译：在青春期,同伴交往对于建立自我认知是非常关键的.的确,这个过程 经常呈现出小集团的社交行为来作为一种定义和加固自我意识的方式.孩子会 去寻找志趣相投的伙伴,而且拒绝那些与众不同的人.但是当被局限在一个合 理的边界之内时,这个组群内部的聚集就普遍会演变成一个更加成熟的友谊."]}),

wx.setStorage({key: "746", data: ["747.  Experiments show that it is shockingly easy to elicit a sense of_______among a group of strangers: just tell them they\'ll be working as a team, and they immediately start working as a team.",
{A: 'A.dominance',B: 'B.hierarchy',C: 'C.obedience',D: 'D.solidarity',E: 'E.camaraderie',F: 'F.optimism',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的 just tell them they’ll be working as a team, and they immediately start working as a team 推出特征是团结,所以正确答案 选 DE 选项.solidarity 团结,camaraderie 同志情谊. \n***翻译：实验发现,激发出一群陌生人之间的团结友谊的简单程度令人震惊,告 诉他们他们现在要以团体开始工作,他们就会结合成团体."]}),

wx.setStorage({key: "747", data: ["748.  Typefaces, in one sense, are just like styles of shoes: they_______because different people have different tastes and identities and because both creators and users value novelty for its own sake.",
{A: 'A.bemuse',B: 'B.converge',C: 'C.proliferate',D: 'D.abound',E: 'E.evolve',F: 'F.coincide',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据后文的不同的人有不同的品味推出,正确答案选 CD 选项. proliferate 激增,abound 大量存在. \n***翻译：字体,从一个角度上来说,就像鞋子的样式,它们的数量因为不同人有 不同的审美和用途而迅速猛增,也因为不管是字体的发明人还是使用者都对新 奇的字体有自己欣赏的理由."]}),

wx.setStorage({key: "748", data: ["749.  It\'s a sign of John Dramani Mahama\'s maturity as a writer that he is willing to consider his country\'s future so _______: his memoir is appealingly honest, given to clear-eyed assessments rather than exaggerated accounts of achievements.",
{A: 'A.cheerfully',B: 'B.dispassionately',C: 'C.insightfully',D: 'D.evocatively',E: 'E.analytically',F: 'F.blithely',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面对空格进行解释说明,空格对应词是 clear-eyed assessments,所以正确答案选 CE 选项.insightful 有深刻见解地, analytically 分析地.\n***翻译：JDM 这个作家的成熟表现在于他愿意为自己的国家做出深刻地思考和分 析.他的自传是显而易见的诚实,给出了能辩是非的功过评价,而非一味夸大 事件和功劳."]}),

wx.setStorage({key: "749", data: ["750.  The action in Zadie Smith\'s novel On Beauty is mediated by an unabashedly_______narrator who does not hesitate to inform us, as once upon a time the narrators of novels were wont to do, how we behave in general and how society usually works.",
{A: 'A.knowing',B: 'B.obtrusive',C: 'C.conspicuous',D: 'D.antiquated',E: 'E.mysterious',F: 'F.secretive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过后文的 does not hesitate to inform us 能够推出这个 narrator 的特征就是直白,正确答案选 BC 选项.obtrusive 惹眼的, conspicuous 引人注意的.\n***翻译：ZS 的小说 OB 的情节被一个毫不脸红地惹眼的叙述者调解了,这个叙述 者毫不犹豫地告诉我们普遍的行为方法和社会通常的运转方式,就像曾经所有 小说的叙述者习惯做的那样."]}),

wx.setStorage({key: "750", data: ["751.Like her literary heroine, George Eliot, Barbara Kingsolvers is an old-fashioned _______, deeply curious about all branches of human learning.",
{A: 'A.prodigy',B: 'B.polymath',C: 'C.tyro',D: 'D.ante',E: 'E.philistine',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 deeply curious about all branches of human learning 能够 推出答案只能选 B 选项.polymath 博学者.\n***翻译：就像她的文学英雄 GE,BK 是个守旧的博学者,对于任何人类学的分支都有深重好奇心的人."]}),

that.setData({progress_percent:75}),wx.setStorage({key: "751", data: ["752. Physicists\' opinions diverge on whether the unexpected phenomena that can occur in systems more complex than individual particles represent new physical principles, or whether the principles involved are _______, in that they rely, albeit in an extremely complicated way, on known physical principles.",
{A: 'A.extraneous',B: 'B.inexpressible',C: 'C.derivative',D: 'D.heterogeneous',E: 'E.uncorrelated',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：or whether 表明空格是和前面的 new physical principles 取反 义,所以找一个能体现\"旧\"的意思的词,所以正确答案选 C 选项. derivative 衍生的,非原创的. \n***翻译：物理学家们的意见分歧在于是否可以说明一个系统比单个粒子发生的意 外现象要更复杂地表了一个新的物理原理,又或者是所涉及的原则就是陈旧 的,因为他们依赖于已知的物理原则,尽管是一种极端复杂的方式."]}),

wx.setStorage({key: "752", data: ["753. In reviewing cases decided by lower courts, Supreme Court justices search for precedents to justify their arguments. Reliance on precedent (i)_____judicial restraint: the precedent (ii)_____a judge\'s ability to determine the outcome of a case in a way that he or she might choose if there were no precedent.",
{A: 'A.promotes',B: 'B.compromises',C: 'C.promulgates',D: 'D.establishes',E: 'E.constrains',F: 'F.prioritizes',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空对应前文的 judicial restraint,使用先例来审案子会造成 法官在没有先例时的无能,第一空那就一定是导致了这种司法的限制.promote 导致,constrain 限制.\n***翻译：在回顾一些较低级法院审判的案件时,最高法院的正义寻求先例来证明 他们的言论合理.依靠先例导致了司法限制：先例限制了法官用一种如果没有 先例他或者她可能选择的方式来决定案件结果的能力."]}),

wx.setStorage({key: "753", data: ["754. To abolish the existence of nation-states is neither feasible nor desirable; but insofar as there are collective interests that transcend national boundaries, the (i)        of nation-states must be (ii)           to international institutions.",
{A: 'A.sovereignty',B: 'B.traditions',C: 'C.genealogy',D: 'D.subordinated',E: 'E.attributable',F: 'F.analogous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：insofar as 是因为的意思,既然大家有共同超越国家边界的利益, 所以民族国家的主权一定会屈从于国际机构之下的,正确答案选 AD 选项. sovereignty 主权,be subordinated to 服从于…. \n***翻译：废除民族国家的存在既不是可行的也不是可取的,但是因为有共同的超 越国家边界的利益,所以民族国家主权一定会服从国际机构."]}),

wx.setStorage({key: "754", data: ["755. World demand for oil had been intensified, but it slackened because China\'s surge in oil consumption had (i) _______. Moreover, high oil price had themselves started to act as a short-term (ii)_____the global economy, thus further dampening demand.",
{A: 'A.spread',B: 'B.commenced',C: 'C.slowed',D: 'D.spur to',E: 'E.drag on',F: 'F.panacea for',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空选 slacken 同义,所以第一空选 C 选项,第二空根据 thus further dampening demand 得知对经济是负面的动词,所以第二空选 E 选项. slow 减缓,drag on 对...的阻碍. \n***翻译：世界对油的需求量增大,但由于中国消费油的增速变缓,世界对油的需 求量下降.此外,高油价开始变成了对全球经济的一个短期累赘,因此进一步 抑制需求."]}),

wx.setStorage({key: "755", data: ["756.  Most capuchin monkey conflict involves such a (i)_____repertoire of gestural and vocal signals that it is difficult for researchers to tease apart the meanings of the individual signals. This(ii)_______ is (iii)_____by the fact that many signals seem to shift in meaning according to the context in which they are produced and the developmental stage of the individuals producing them.",
{A: 'A.precise',B: 'B.rich',C: 'C.straightforward',D: 'D.problem',E: 'E.opportunity',F: 'F.oversight',G: 'G.augmented',H: 'H.ameliorated',I: 'I.anticipated'},
"###解析：很难去梳理每一个信号的意义表明 repertoire of gestural and vocal signals 比较多,所以第一空选 B 选项,第二空通过 this 得知取前面的 同义,所以第二空选 D 选项,第三空根据 many signals seem to shift inmeaning according to the context 说明这个问题更加严重了,所以第三空选 G 选项.rich 丰富的,problem 问题,augment 增加. \n***翻译：大部分僧帽猴的斗争包括如此丰富的手势和声音的信号的表现形式以至 于研究者很难去梳理每一个信号的意义.这个问题被继续增大,因为很多信号 似乎会根据它们被产生的环境和产生这些信号的个体的发展阶段而改变意思."]}),

wx.setStorage({key: "756", data: ["757.  Since the data we have analyzed are so _______, it would be hazardous to draw a definite conclusion.",
{A: 'A.copious',B: 'B.overwhelming',C: 'C.abundant',D: 'D.meager',E: 'E.paltry',F: 'F.uncertain',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因果关系,导致无法得出确定结论的原因是我们分析的资料少,所以 正确答案选 DE.D 缺乏的,E 微不足道的. \n***翻译：因为我们已经分析的数据太少,得出一个肯定的结论将会有风险."]}),

wx.setStorage({key: "757", data: ["758.  The phrase \"bread and circuses\" refers to early Roman politicians\' plans to_______the votes of the poor by handing out cheap food and entertainment.",
{A: 'A.belie',B: 'B.surmount',C: 'C.secure',D: 'D.control',E: 'E.cherish',F: 'F.earn',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过给穷人提供食物和娱乐设施,目的是为了得到穷人的投票,空格 选得到,因此正确答案选 CF 选项.secure 获取,earn 获得,注意 secure 考察 了熟词僻意. \n***翻译：\"面包和马戏\"这个词来源于早期罗马政客为了保护贫民投票的权利的 计划,因此给贫穷的人们发放便宜的食物和娱乐机会."]}),

wx.setStorage({key: "758", data: ["759.  They applaud the musicals of the 1930s and 1940s, whose plethora of stars, jokes, dances witty dialogue, and general gaiety make today\'s offering seem_______by comparison.",
{A: 'A.cheerless',B: 'B.vacuous',C: 'C.mirthful',D: 'D.insincere',E: 'E.gloomy',F: 'F.jovial',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 by comparison 看出空格选前文 stars, jokes, dances witty dialogue, and general gaiety 的反义,选项中 AE 可以和 gaiety 取反,正确 答案选 AE 选项.cheerless 阴郁的,gloomy 忧郁的.\n***翻译：他们很欣赏 1930 年代和 1940 年代的音乐剧,其中丰富的明星,笑话, 舞蹈,还有机智的对话使得今天的音乐剧看起来显得有些阴郁."]}),

wx.setStorage({key: "759", data: ["760.  It may not seem like a big deal for produce distributors to mix together soybeans from different farms, but a growing number of buyers are willing to pay a premium for soybeans the_______of which is know: they like to know exactly where their food came from.",
{A: 'A.purity',B: 'B.output',C: 'C.heterogeneity',D: 'D.origin',E: 'E.yield',F: 'F.provenance',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过冒号后的 they like to know exactly where their food came from 得知空格选体现\"来源\"的词,所以正确答案选 DF 选项.origin 起 源,provenance 起源. \n***翻译：将不同农场的黄豆混杂在一起提供给经销商并不是什么大事,但现在有 很大一部分数量正在增长的买主,他们愿意去付定金买那些有来源的黄豆,他 们希望能够知道他们的食物都是从哪儿来的."]}),

wx.setStorage({key: "760", data: ["761.In an ironic twist, the recent_______of the reductive observational methods that have enabled science to progress for four centuries may turn out to be science\'s biggest step forward.",
{A: 'A.introduction',B: 'B.validation',C: 'C.acceptance',D: 'D.standardization',E: 'E.questioning',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 ironic 推出空格要和后面的 science’s biggest step forward 取反,后面是正评价,所以前面填入一个负评价词即可,正确答案选 E 选项.questioning 质疑. \n***翻译：这是一个戏剧性的转折,最近对于那些能够使科学家连续四个世纪进步 的还原观测方法的质疑最终被证明是科学家向前迈的最大一步."]}),

that.setData({progress_percent:76}),wx.setStorage({key: "761", data: ["762. Even though the municipal government was not totally_______the positive review of the charter, the mayor nevertheless decided to veto the laws.",
{A: 'A.garrulous about',B: 'B.enthusiastic about',C: 'C.sanguine about',D: 'D.approbatory to',E: 'E.unsympathetic with',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：转折之后是否决,所以转折之前是不否决=不是不同情,所以正确答 案选 E 选项,unsympathetic with 对...不同情. \n***翻译：尽管市政府对于这个章程的正面的观点不是完全不同情,但是市场却还 是决定要投票否决这些法律."]}),

wx.setStorage({key: "762", data: ["763. The virtual absence of cougars from late prehistoric faunas in the North American Great Basin (i)_____a general scarcity of carnivores from these sites: bobcats, coyotes, and badgers are routinely found, and even such historically (ii)_____carnivores as bears and wolves are found as well.",
{A: 'A.largely parallels',B: 'B.does not reflect',C: 'C.is a consequence of',D: 'D.widespread',E: 'E.rare',F: 'F.representative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文列举了很多食肉动物被发现,说明缺乏美洲狮不代表缺乏食肉动 物,第二空递进,就算是以前很少发现的熊和狼都被发现了,正确答案选 BE 选 项.does not reflect 并不反映,rare 稀缺的. \n***翻译：后期北美大盆地史前动物群中实际上美洲狮的缺乏并不反映出在这些地 方普遍缺乏食肉动物：红猫,北美野狼和獾是经常被发现的,而且甚至是历史 上如此稀少的像熊和狼这些食肉动物也被发现了."]}),

wx.setStorage({key: "763", data: ["764. Internet in creating handheld computers is fueled by the desire to shrink the size of the electronic circuitry and to create exceptionally small mechanical systems. At this scale, however, physical (i)_____poses unique challenges. Machining, positioning, and assembling parts by hand are easy at macroscopic scales but at minute scales they are far from (ii) _______.",
{A: 'A.deterioration',B: 'B.manipulation',C: 'C.durability',D: 'D.subtle',E: 'E.inflexible',F: 'F.routine',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空指的就是后文的 machining, positioning, and assembling 三个动作,对应的选项是 B 选项,第二空对比了宏观和微观的区别,宏观比较 容易,所以微观上是不容易的,far from 否定意思,所以正确答案选 F 选项. manipulation 操控,routine 常规的. \n***翻译：在制造手提电脑中,因特网被想要缩小电子系统和创造极其小的驱动系 统而被推动了.然后在这个范围中,身体控制却有了独特的挑战.用手来制 造,拜访和组装部分是在宏观上容易的,但是在非常小的尺度上它们远不是常 规的."]}),

wx.setStorage({key: "764", data: ["765. The introductions to each section, written by the editors of the anthology, provide useful background material, but they do not provide analysis of the articles. Because the articles are in many senses the editors\' personal favorites, it is probably (i)_____to expect more such criticism would be as (ii)_____as the articles themselves.",
{A: 'A.juvenile',B: 'B.paradoxical',C: 'C.unrealistic',D: 'D.biased',E: 'E.complex',F: 'F.informative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：双空联立,因为文章是体现编辑的个人喜好,所以这些文章能够提供 大量有用信息是不现实的,最多就是体现个人主观的偏见.unrealistic 不现 实的,informative 提供有用信息的. \n***翻译：对于每个部分的介绍(由选集的编辑写的)提供了有用的北京材料,但 是他们没有提供文章的分析.因为文章在很大程度上是编辑个人喜好,所以预 期更多这样的评论会和文章本身一样提供大量有用信息很可能是不现实的."]}),

wx.setStorage({key: "765", data: ["766.  Given children\'s active fantasy lives, one might think of truthfulness as (i)_____virtue in young children, but it turns out that lying is the more (ii)_____skill. A child who is going to lie must recognize the truth, intellectually conceive of an alternate reality, and be able to convincingly sell that new reality to someone else. Therefore, lying (iii)_____cognitive development and social skills in a way that honesty simply does not.",
{A: 'A.an instinctive',B: 'B.an acquired',C: 'C.a conscious',D: 'D.advanced',E: 'E.practical',F: 'F.mundane',G: 'G.undermines',H: 'H.forgoes',I: 'I.demands'},
"###解析：鉴于孩子爱幻想的生活,真实(幻想的反义)对于孩子来说就不是天 生的,所以第一空选 B 选项,第二空 the more 得知空格要比第一空更加递进, 所以答案选 D 选项,第三空根据后文中说到撒谎比说真话更难的叙述,推出第三空选体现\"要求\"的意思的词,所以第三空答案选 I 选项.acquired 后天 的,advanced 先进的,demand 要求. \n***翻译：鉴于孩子活跃的幻想生活,一个人可能会认为诚实对于小孩来说是一种 后天习得的美德,但是事实证明撒谎是更加先进的一个既能.想要撒谎的孩子 必须认识到什么是事实,再机智地构建一个供替换的事实,而且能够令人信服 地去让人接受这个新的事实.因此,撒谎要求诚实没有具备的认知的形成和社 会技能."]}),

wx.setStorage({key: "766", data: ["767.  The book reaffirms the idea that Africans on the continent have not stopped_______or responding to their own creations; in fact, African creative agents have ushered in their own modern forms rooted in traditional ideas.",
{A: 'A.exposing',B: 'B.detecting',C: 'C.absorbing',D: 'D.noticing',E: 'E.generating',F: 'F.originating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：their own creations 对应空格,所以正确答案选 EF 选项. generate 产生,带来,originate 发明,产生. \n***翻译：这本书又一次证实了非洲人没有停止创作也没有停止对他们自己的创作 物进行反馈,事实上,非洲有创造力的代理人迎来了它们自己的在传统观念上 形成的新想法."]}),

wx.setStorage({key: "767", data: ["768.  Flash floods are common in desert regions and were widespread before the evolution of trees and woodland soils; in contrast, flash floods are_______in woodlands, where floodwaters, impeded by trees, form ponds.",
{A: 'A.overshadowed',B: 'B.redirected',C: 'C.obscured',D: 'D.precluded',E: 'E.mitigated',F: 'F.abated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 flash floods are common 和后文的 in contrast 推出后文的空 格要和 common 取反,所以正确答案选 EF 选项.mitigated 缓和的,abated 减 少的. \n***翻译：骤发洪灾在沙漠地区十分常见,并且在土壤进化成树木和林地的土壤之 前就已经很广泛存在了,相反的是,在林木地区,暴洪会被树木和池塘所减 缓."]}),

wx.setStorage({key: "768", data: ["769.  A formal floods resulting from usual monsoon rainfall are_______the growth of plants, recently there has been an increase in the frequency of highly intensified floods that do not have such welcome effects.",
{A: 'A.conducive to',B: 'B.hindered by',C: 'C.devastating for',D: 'D.deleterious to',E: 'E.essential for',F: 'F.indispensable to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：such welcome effects 说明空格选一个体现 welcome 的意思的广义 同义词,正确答案选 EF 选项.essential 完全必要的,indispensable 不可或 缺的. \n***翻译：因为正常季风降水引起的洪水对于植物的生长是必要的,最近这种剧烈 的洪水的频率有所增加,而这种洪水却没有之前那种受欢迎的效果."]}),

wx.setStorage({key: "769", data: ["770.  Those who read Empson\'s correspondence for the first time may be disappointed that so much of it is professional rather than personal, but the distinction in this case is       : every letter bears the full stamp of Empson\'s personality.",
{A: 'A.unambiguous',B: 'B.artificial',C: 'C.significant',D: 'D.spurious',E: 'E.clear-cut',F: 'F.unique',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说他的信件是 professional rather than personal,后面的 冒号说 bears the full stamp of personality,说明这种 distinction 是虚 假的,distinction 翻译成差别.所以选 BD 选项.artificial 虚假的, spurious 虚假的.\n***翻译：那些第一次读 E 的信件的人会很失望地发现信件的很大一部分是专业性 的而不是个人的,但是这种差别在这个例子中是假的：每一封信都拥有 E 的完 全人格印记."]}),

wx.setStorage({key: "770", data: ["771.By deliberately dripping paint on their canvases, expressionists affirmed that paint is not  _______ entity, something merely to be moved where the artist please, but rather a material possessing a fluid energy that the painter attempts to control.",
{A: 'A.an immutable',B: 'B.an expressive',C: 'C.a vital',D: 'D.a passive',E: 'E.a kinetic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：not+空格就是对应前文的 deliberately,所以空格选 deliberate 的 反义词,正确答案选 D 选项.passive 被动的. \n***翻译：通过故意地将颜料滴到画布上面,表现主义作家坚信颜料并不是被动的 物体,不是只能被移动到艺术家喜欢的位置,而是一种具有画家尝试去控制的 流动能量的物质."]}),

that.setData({progress_percent:77}),wx.setStorage({key: "771", data: ["772. It is often argued that psychoanalysis, which was_______at that stage of the eighteenth century, provided the main filter by which death could be looked at, but it has now been largely replaced by medicine, which provides both a mindset and practical measures by which death may be cheated, and in terminal illness, approached, formulating a process called medicalization.",
{A: 'A.predominant',B: 'B.pompous',C: 'C.precarious',D: 'D.elegant',E: 'E.mundane',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 main filter,而且和 replaced by 取反,所以正确答案选 A 选项.predominant 主导的.\n***翻译：经常认为精神分析(在 18 世纪时期处于主导地位)提供了主要的过滤 器,通过它能够看到死亡,但是现在它已经被医学取代了,医学提供观念模式 和实际方法,通过这些模式和方法死亡可能被躲避,而且在不治之症中,能够 被接近,形成了一个叫医学化的过程."]}),

wx.setStorage({key: "772", data: ["773. Reviews written by music critic and composer Stephenson were hardly (i) : musicians who performed his music could count on sympathetic coverage, while those who ignored him were held to (ii)           standards.",
{A: 'A.disinterested',B: 'B.lucid',C: 'C.conventional',D: 'D.exacting',E: 'E.minimal',F: 'F.accepted',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：表演他音乐的人可以指望讨人喜欢的报道而忽略他的人只能被他所设 定的严格的标准给否决,所以体现出这个人不客观的特征,正确答案选 AD 选 项.disinterested 公正的,exacting 严格的.\n***翻译：由音乐评论家和作曲家 Stephenson 写的评论几乎不是公正的：演奏他音 乐的音乐家们指望讨人喜欢报道,而那些忽视他的人被严格的标准抑制."]}),

wx.setStorage({key: "773", data: ["774. The laser has been widely utilized in many industries such as the packaging industry, CD player manufacturing, and all sorts of commonplace articles; however, the (i)_____of the laser doesn\'t mean the laser can only be used in (ii)_____ways.",
{A: 'A.rare extermination',B: 'B.sporadic usage',C: 'C.everyday presence',D: 'D.assorted',E: 'E.pedestrian',F: 'F.pointless',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空指的是前文说激光在常见的物品中使用,所以选 C 选项对应 commonplace,第二空根据句意得知,激光经常出现并不意味着激光只能出现在 这种平淡无奇的方式中,第二空选 E 选项.everyday presence 日常出现, pedestrain 平淡无奇的. \n***翻译：激光已经被广泛地在很多领域使用,例如包装工业,CD 制造工业和所有 的常见的物品中.然而,激光的常见并不意味这激光只能用于一些平淡无奇的 方式中."]}),

wx.setStorage({key: "774", data: ["775. The strategists who created the European Unions practiced piecemeal social engineering. Recognizing that perfection is (i) _______, they set limited objectives and then mobilize the political will for a small step forward knowing full well that when they achieved it, its (ii)_____would become apparent and necessitate further measures.",
{A: 'A.unattainable',B: 'B.salubrious',C: 'C.bromidic',D: 'D.potential',E: 'E.inadequacy',F: 'F.mutability',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说设定有限目标,每次前进一小步,说明他们知道完美是不可能 的,第二空根据 necessitate further measures 说明又出现了新的问题,所以 答案选 AE 选项.unattainable 不可获得的,inadequacy 不足. \n***翻译：创造欧盟的战略家们执行着零碎的社会工程.意识到完美是不可获得的 之后,他们设立有限的目标然后鼓动政治意愿前进一小步,同时清除地知道当 他们实现目标之后,它的不足会变得很明显而且有采取进一步措施的必要."]}),

wx.setStorage({key: "775", data: ["776.  laws protecting intellectual property are intended to stimulate creativity, yet some forms of creative work have never enjoyed legal protection-a situation that ought to be of great interest. If we see certain forms of creative endeavor (i)_____as a result of uncontrolled copying, we might decide to (ii)_____intellectual property law. Conversely, if unprotected creative work (iii)_____in the absence of legal rules against copying, we would do well to know how such flourishing is sustained.",
{A: 'A.languishing',B: 'B.proliferating',C: 'C.diversifying',D: 'D.jettison',E: 'E.extend',F: 'F.relax',G: 'G.declines in originality',H: 'H.manages to thrive',I: 'I.openly invites imitation'},
"###解析：uncontrolled copying 会对 creative endeavor 产生负面的影响, 所以第一空选 A 选项,第二空根据前面的条件来推,前面说会产生负面影响, 所以现在必须有这种法律,所以第二空选 E 选项,第三空同义重复 suchflourishing,所以正确答案选 H 选项.languish 失去活力,extend 延伸, manage to thrive 成功繁荣. \n***翻译：保护脑力财富的法律想要激励创新,然而一些形式的创新作品从来没有 享受到法律的保护,这是一个应当引起关注的事情.如果我们看到某些创新的 努力因为不受控制的盗版而失去活力的话,我们可能会决定扩展脑力财富法 律.相反,如果没有受到保护的创新作品在缺乏防止盗版的法律中成功繁荣的 话,我们应当努力地去知道这种繁荣该如何维持."]}),

wx.setStorage({key: "776", data: ["777.  Analysis for the structural feather that were thought to_______kinship between the two species prompted an investigation that dispelled that presumption and revealed that the two share a family history.",
{A: 'A.signify',B: 'B.underrate',C: 'C.point to',D: 'D.preclude',E: 'E.rule out',F: 'F.exaggerate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：dispelled that presumption and revealed that the two share a family history 说明之前的 presumption 是说这两个物种之间没有 share a family history,所以正确答案选 DE 选项.preclude 排除,rule out 排除. \n***翻译：关于能够排除两个物种之间的亲缘关系的羽毛构架的分析提供了一个调 查,这个调查消除了以往的推定,并且揭露了了两个种族共享的家族的历史."]}),

wx.setStorage({key: "777", data: ["778.  The book captures the_______of several politicians who spoke publicly of old-time virtues in order to mask private vices.",
{A: 'A.probity',B: 'B.dissemblance',C: 'C.opportunism',D: 'D.rectitude',E: 'E.ingenuousness',F: 'F.duplicity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：spoke publicly of old-time virtues in order to mask private vices 体现了政治家\"伪装,欺骗\"的的特征,正确答案选 BF 选项,dissemblance 虚伪,duplicity 欺骗. \n***翻译：这本书描述了几个虚伪的政治家,他们公开宣称旧时代的美德是为了掩 饰个人的缺陷."]}),

wx.setStorage({key: "778", data: ["779.  Baker was struck by the amount of_______she saw at the renowned medical facility; for all their experience, the physicians could not seem to agree on the correct diagnosis for any given patient.",
{A: 'A.discordance',B: 'B.contention',C: 'C.quackery',D: 'D.nepotism',E: 'E.indecision',F: 'F.cronyism',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：could not seem to agree on the correct diagnosis for any given patient 说明这些员工一直在争议,所以正确答案选 AB 选项. discordance 冲突,contention 争论.\n***翻译：Baker 因她在知名药物制造商看到的不和受到了巨大的冲击；尽管他们 有经验,但那些药剂师似乎不会在任何病人的正确诊断上达成一致."]}),

wx.setStorage({key: "779", data: ["780.  There are great_______in countries\' greenhouse gas emissions, especially in per capita terms: while the United States and China are similar in aggregate emissions, United States per capita emissions are a huge multiple of China\'s.",
{A: 'A.distortions',B: 'B.disparities',C: 'C.fluctuations',D: 'D.advances',E: 'E.variances',F: 'F.vacillations',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容说明在人均排放量上,美国远大于中国,所以空格 要体现\"远大于\",所以正确答案选 BE 选项.disparity 差异,variance 不 同. \n***翻译：关于国家温室气体释放有很大的不同,尤其是在人均问题上,因为美国 和中国在释放总数上很相似,但美国的人均释放量却是中国的很多倍."]}),

wx.setStorage({key: "780", data: ["781.She demonstrates a great extent of _______, as she has traveled to many more countries and places around the world than any of her kindred.",
{A: 'A.perfidiousness',B: 'B.peregrination',C: 'C.jubilation',D: 'D.sagaciousness',E: 'E.conspicuousness',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面内容解释说明空格,主要体现 travel,正确答案选 B 选项. peregrination 长途旅行. \n***翻译：她证明她有过大量的长途旅行,因为她比起她家人已经旅游去过世界上 更多的国家和地方."]}),

that.setData({progress_percent:78}),wx.setStorage({key: "781", data: ["782. People who are reluctant to oppose a court nominee straightforwardly on ideological grounds often search for any sort of peccadillo to serve as a_______their opposition.",
{A: 'A.mitigation of',B: 'B.violation of',C: 'C.predictor of',D: 'D.reparation for',E: 'E.pretext for',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：不支持候选人的人们找他的过失一定是想去支持自己的反对立场,正 确答案选 E 选项.pretext 借口. \n***翻译：那些不愿意去直接反对法官候选人的意识形态立场的人们经常寻找各种 的过失来作为他们的反对的借口."]}),

wx.setStorage({key: "782", data: ["783. Britain\'s Queen Victoria, however (i)_____she had been at the beginning of her reign, was politically much more (ii)_____by the end of her time on the throne, as she resigned herself to the emergence of an increasing powerful electorate that prevented her from stubbornly insisting on getting her own way in matters of state.",
{A: 'A.naïve',B: 'B.personable',C: 'C.obdurate',D: 'D.powerful',E: 'E.arbitrary',F: 'F.malleable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：however 推出两个空格取反,后文的解释说她允许阻碍她固执的选民 出现,说明第二空选是固执的反义,那么第一空填固执的同义最好,正确答案 选 CF 选项.obdurate 固执的,malleable 易受影响的. \n***翻译：英国女王维多利亚,无论她在她的统治期有多么的固执,她在政治上却 是比她之前的王者更加易受影响,因为她允许越来越有权利的全体选民的出 现,这些人阻止她固执地坚持她处理事务的方式."]}),

wx.setStorage({key: "783", data: ["784. Earlier discussions with neighboring countries (i)_____due to the government\'s failure to alter policies that those countries find objectionable. Moreover, there is every reason to (ii)_____the success of further talks, since the government if anything different, more intransigent.",
{A: 'A.commenced',B: 'B.advanced',C: 'C.foundered',D: 'D.doubt',E: 'E.undermine',F: 'F.anticipate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：政府没有改变邻国讨厌的政策,所以早期的讨论失败了,所以第一空 选 C 选项,第二空说政府更加固执了,则推出进一步的讨论也是不太现实的, 所以第二空选 D 选项.founder 失败,doubt 怀疑. \n***翻译：早期对于邻国的讨论失败了,因为政府没有改变邻国反感的政策.另 外,有理由去怀疑进一步讨论的成功,因为政府如果要说有什么区别的话,那 就是更加固执了."]}),

wx.setStorage({key: "784", data: ["785. To get founding and tenured positions, medical researchers have to get their work published in well-regarded journals, where rejection can climb above 90 percent. Not surprisingly, the studies that tend to make the grade are those that make (i)_____claims. But while coming up with such (ii)_____claims is relatively easy, getting the data to bear them out is another matter. When studied rigorously, the great majority of these claims (iii) ______________.",
{A: 'A.well-supported',B: 'B.eye-catching',C: 'C.small-scale',D: 'D.practical',E: 'E.orthodox',F: 'F.striking',G: 'G.yield contradictory evidence',H: 'H.require extensive analysis',I: 'I.support conventional beliefs'},
"###解析：通过第二空之前的 such 我们可以推知第一二空是同义关系,所以正 确答案选 BF 选项,第三空转折,和前面的 relatively easy 取反,所以正确答 案选 G 选项.eye-catching 吸引眼球的,striking 吸引人的,yield contradictory evidence 产生矛盾的证据. \n***翻译：为了得到创始和终身教授职位,医疗研究者不得不让他们的作品在一些 非常被认可的杂志中出版,在这些地方拒发率高达 90.毫不意外,想要做这 个评分等级的研究是那些做了吸引人眼球的言论.但是想到这些吸引人的言论 是相对容易的,但是让这些资料来证明它们的有理性却是另外一回事.当被严 格研究的时候,大部分的言论产生了矛盾的证据."]}),

wx.setStorage({key: "785", data: ["786.  As the study of the foundation of western Shanghai reveals, there was a sense of elegance in the refined, simple lines that characterized the entire row, bereft of the exuberant, emphatic, assertive, ornament that constituted the latest British architectural fashion, which expressed its detestation of Plalladianism and neoclassicism-London\'s Regent Street then being regarded as abhorrent-calling it the product of a (i)_____\"shopocracy\". The (ii)_____of Western architectural taste-oscillating between simplicity and ornamental (iii) _______-must have bemused Chinese observers who had long accepted that both approaches were valid and could co-exist.",
{A: 'A.superficial',B: 'B.quintessential',C: 'C.disdained',D: 'D.impermanence',E: 'E.eternality',F: 'F.subtlety',G: 'G.profundity',H: 'H.modesty',I: 'I.exuberance'},
"###解析：第一空对应 abhorrent,正确答案选 C 选项,第二空对应 oscillating,所以体现变化,答案选 D 选项,第三空和 simplicity 取反,所 以答案选 I 选项.disdained 鄙视,impermanence 无常性,exuberance 繁茂.\n***翻译：正如\"西方的上海\"基金会研究所揭露的那样,有一种优雅在这些精致 简单的线条中,这些线条描绘了整排,剥夺了热情洋溢,坚定,确信,这是组 成最新英国建筑风格的装饰,这种风格表达出对帕拉第奥主义和新古典主义的 厌恶—伦敦的 RS 街道之后被当成是令人憎恶的—并称之为被蔑视的\"躯体\"的 产物.西方建筑风格的无常性(一直在简洁和装饰繁茂之间摆动)使中国的观 察者感觉困惑,但是他们已经在很长时间内适应并接受了两种有效且共存的风 格."]}),

wx.setStorage({key: "786", data: ["787.  Church, Nussbaum, Waldman, and Wills have written very different books-Nassbaum and Wills range both farther and deeper-but each one of the four strives for       , wanting to save us from the errors of partisans and zealots.",
{A: 'A.concision',B: 'B.evenhandedness',C: 'C.frankness',D: 'D.trustworthiness',E: 'E.succinctness',F: 'F.impartiality',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过后文的 wanting to save us from the errors of partisans and zealots,这几个人追求的是公平,也就是 partisans and zealots 的反义 词,所以正确答案选 BF.evenhandedness 公平,impartiality 公平. \n***翻译：C,N,WA,WI 这四个人写得书非常不同,N 和 WI 两个人的书更加耗费精 力,更长远也更深刻,但这四个人中的每一个都努力寻求公平,想让我们远离 偏袒者和狂热者的错误."]}),

wx.setStorage({key: "787", data: ["788.  Given that the department director was such a feeble contributor, sitting silently at important policy meetings and usually deferring to low-level aides, it was surprising that he had such a reputation for _______.",
{A: 'A.magnanimity',B: 'B.perspicacity',C: 'C.impartiality',D: 'D.detachment',E: 'E.benevolence',F: 'F.discernment',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 surprising 得知空格选前面 feeble,silently,deferring to low-level aides 说明这个空格选正评价词,所以正确答案选 BF 选项. perspicacity 洞察力,discernment 洞察力. \n***翻译：因为部长是如此一个虚弱的贡献者,经常安静地坐在重要的政治会议 上,而且经常听从下属的帮助,他能有观察力敏锐的声名实在是太令人吃惊 了."]}),

wx.setStorage({key: "788", data: ["789.  Between the late 1800s and early 1900s, various institutional structures emerged that set researchers in scientific fields apart as a professional class and moderated disputes by  _______ some kinds of knowledge as real science.",
{A: 'A.differing',B: 'B.sanctioning',C: 'C.mischaracterizing',D: 'D.censuring',E: 'E.reprehending',F: 'F.endorsing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格要选 moderated disputes 的手段,那么想要消除争议,就只能 承认这些东西是真正的科学,正确答案选 BF 选项.sanction 同意,endorse 认 可.\n***翻译：在 19 世纪后期年到二十世纪早期之间,不同的机构组织出现了,而且这 些组织把科学领域的研究者分离出专业的阶级然后通过认可某些知识为科学的 方法来减弱纠纷."]}),

wx.setStorage({key: "789", data: ["790.  In Ramachandran\'s opinion, it is perfectly acceptable to propose bold speculations about the brain, even if these speculations seem _______; as Ramachandran frequently remarks, science thrives on risky conjecture.",
{A: 'A.unfounded',B: 'B.premature',C: 'C.controversial',D: 'D.verifiable',E: 'E.testable',F: 'F.baseless',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说 perfectly acceptable,后面 even if 转折,所以空格要填 入 perfectly acceptable 的反义,所以正确答案选 AF 选项.unfounded 无根 据的,baseless 无根据的. \n***翻译：在拉马钱德朗的观点里,提出关于大脑的大胆的猜测是能被完全接受 的,就算是这些猜测毫无根据,就像拉马钱德朗经常评论的那样,科学是在大 胆冒险的猜测当中繁荣发展的."]}),

wx.setStorage({key: "790", data: ["791.Although Emily Bronte is impassioned about gender equality, she is anything but_______to endorse more privileges endowed to women.",
{A: 'A.zealous',B: 'B.apathetic',C: 'C.abhorrent',D: 'D.stubborn',E: 'E.lethargic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：anything but 的意思是\"绝不是\",所以空格和 impassioned 取 同,注意 impassioned 是\"热情\"的意思,正确答案选 A 选项.zealous 热情 的.\n***翻译：尽管 EB 对于性别平等非常热情,但是她绝没有狂热地去支持更多给予女性的特权."]}),

that.setData({progress_percent:79}),wx.setStorage({key: "791", data: ["792. Many creative photographers were delighted to find in instant photography a mode that encouraged them to stop viewing photography as_______and start viewing it as something they could handle with spontaneity, even derision.",
{A: 'A.sacrosanct',B: 'B.ephemeral',C: 'C.malleable',D: 'D.egalitarian',E: 'E.autonomous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：stop viewing photography 和 start viewing it as something 能 看出空格和 something 后面的内容是取反,后面的内容是 they could handle with spontaneity, even derision,核心词是\"derision 嘲笑\",所以前面 空格要选正评价词,正确答案选 A 选项.sacrosanct 神圣不可改变的. \n***翻译：很多有创意的摄影师很高兴的在即时摄影中发现了一种激励他们的模 式,使得他们停止将摄影视为神圣不可侵犯的并且开始将摄影视为一种他们能 够自然而然掌握的,甚至是可以嘲弄的东西."]}),

wx.setStorage({key: "792", data: ["793. As cheaper imports drove most California potteries out of business during the 1950s, one company (i) _______. The substantial size and weight of the specialized products produced by Architectural Pottery helped (ii)_____the company, because it was uneconomical for foreign companies to ship similarly large objects to California.",
{A: 'A.stagnated',B: 'B.diversified',C: 'C.flourished',D: 'D.transform',E: 'E.insulate',F: 'F.finance',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据后文的 The substantial size and weight of the specialized products produced by Architectural Pottery helped 知道这 个公司在这件事中有一个好事发生,第二空根据 similarly large objects 得 知正是因为之前帮别的公司运输同样大小的东西导致现在这个公司在运输上比 其他公司有了更多的优势,所以繁荣了.flourish 繁荣,insulate 使分离. \n***翻译：在 20 世纪 50 年代,随着更便宜的进口产品将加州本地的陶瓷挤出了市 场,一个公司繁荣了.这些 AP 公司提供的专业的产品的实际的尺寸和重量使这 个公司隔离了(也就是存活下来了),因为一些外国公司运输类似大小的物品 到加州根本就不盈利."]}),

wx.setStorage({key: "793", data: ["794. Each new generation of students grow up (i)_____the world of classical physics, with its mostly intuitive, billiard-ball causality; that is the everyday vantage from which we approach the alien world of quantum physics, which has for this reason never lost its air of (ii) _______.",
{A: 'A.immersed in',B: 'B.disdainful of',C: 'C.unmoved by',D: 'D.verisimilitude',E: 'E.objectivity',F: 'F.radicalism',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 intuitive, billiard-ball causality 得知我们是在这 样的环境中长大的,所以第一空选 A 选项,第二空推理题目,我们用经典物理 的优势才能接近量子物理,而且从 alien 一词也能看出量子物理的\"新\"的属 性,所以第二空选 F 选项.immersed in 沉迷于,radicalism 激进主义(体现 的是\"新\"的特征). \n***翻译：每一代的学生都在沉迷经典物理世界中成长,凭借它最简洁的,撞球的 因果关系；那是我们接近外星量子物理世界的常见的优势,因为这个原因所以 量子物理世界从来没有失去过激进性."]}),

wx.setStorage({key: "794", data: ["795. During the Harlem Renaissance, Alain Locke (i)_____the first flourishing of a self-consciously racial art movement in America and was widely credited with providing the philosophical basis for its emergence. His importance as a critic of African America art and as an art theorist is (ii)_____if controversial, yet he has received (iii)_____attention for his unique insight into the broad forces that shaped American modernism and cultural nationalism in the visual arts.",
{A: 'A.forestalled',B: 'B.presided over',C: 'C.seethed over',D: 'D.undisputed',E: 'E.misleading',F: 'F.questionable',G: 'G.undeserved',H: 'H.meticulous',I: 'I.insufficient'},
"###解析：第一空通过后面的 was widely credited with 判断出是正评价,所 以选 B 选项,第二空根据 if controversial 推知选 controversial 反义词,注 意这里的 if 是\"即使\"的意思,所以第二空选 D 选项,第三空根据 yet 知道后面选体现负评价的词,所以正确答案选 I 选项.preside over 主导,领导, undisputed 毋庸置疑的,insufficient 不充足的.\n***翻译：在 HR 期间,AL 在美国主导了第一次自我意识的种族艺术活动的流行, 而且他被认可因为她提供了这次活动出现的哲学基础.他作为美国黑人艺术的 评论家和艺术理论家的重要性是毋庸置疑的,即使有一些争议,然而他因为他 那种能够改变在视觉艺术中的美国现代主义和文化国家主义的广泛的力量的独 特见解却受到不充分的关注."]}),

wx.setStorage({key: "795", data: ["796.  Vaccine denial has all the hallmarks of a belief system that is no (i) _______. The notion that childhood vaccines are driving autism rates has been (ii)_____by multiple epidemiological studies. Yet the true believers are (iii) _______, critiquing each new study that challenges their views, and rallying to the defense of disgraced researchers whose work was retracted.",
{A: 'A.amenable to reputation',B: 'B.susceptible to fashion',C: 'C.open to criticism',D: 'D.resuscitated',E: 'E.documented',F: 'F.upended',G: 'G.indignant',H: 'H.persistent',I: 'I.phlegmatic'},
"###解析：后文主要在描述很多人不相信新研究,而是相信老的说法,所以说明 疫苗这事不服从研究名声,第二空对应最后的 was retracted,就是说 notion 被很多新的研究否决了,但是真正的信任者还是相信以前的 notion,所以第二 空选 F 选项,第三空选 H 选项.amenable to reputation 不服从于名声, upend 颠倒,persistent 坚持不懈的. \n***翻译：疫苗的否决具有一切不服从与名声的信任系统的标志.儿童疫苗增加了 自闭症发病率的说法已经被很多流行病研究否决了.然而真正信任的人是坚持 不懈的,他们会去批评挑战他们观点的新研究,而且聚集起来支持那些作品被 否决的不光彩的研究者."]}),

wx.setStorage({key: "796", data: ["797.  Price knew about how to do people favors, sometimes just from kindness, but often out of _______.",
{A: 'A.self-interest',B: 'B.benevolence',C: 'C.magnanimity',D: 'D.opportunism',E: 'E.disinterest',F: 'F.mercy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格选 kindness 的反义,此题选项比较麻烦,只能选 AD 选项. self-interest 自私自利,opportunism 机会主义.\n***翻译：P 知道如何帮人忙,有时候出于善意,但是经常都是出于私利."]}),

wx.setStorage({key: "797", data: ["798.  Caricature can be revealing as well as amusing, and Ager\'s novel is both: Ager\'s delineation of class, ethnic, and generational struggle is exaggerated for comical effect, but it_______nonetheless.",
{A: 'A.resonates',B: 'B.entertains',C: 'C.diverts',D: 'D.confuses',E: 'E.rings true',F: 'F.falls short',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：nonetheless 推出空格选 exaggerated 反义,正确答案选 AE 选项. resonate 共鸣,ring true 有几分真实. \n***翻译：漫画艺术既透露真情又有娱乐性,而且 A 的小说就是两者兼有：A 对于 阶级,种族和世代斗争的描述因为滑稽效果而被夸大了,但是它确实有几分真 实."]}),

wx.setStorage({key: "798", data: ["799.  Although the claim that no one knows what dark matter is remains _______, some scientists dispute the parallel assertion that dark matter has not been detected.",
{A: 'A.contentious',B: 'B.sound',C: 'C.questionable',D: 'D.unassailable',E: 'E.unverifiable',F: 'F.prominent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题考查了同义重复,注意 parallel 这个词,它是常见的同义重复 标志词,说明这里的两个说法都是 assertion,所以这个题的空格应该填入 assertion 的同义词,正确答案选 BD 选项.sound 可靠的,unassailable 不容 置疑的. \n***翻译：尽管没有人知道暗物质到底是什么的说法仍然是不容置疑的,一些科学 家对于暗物质还没有被勘测这一相似的断言却存在争议."]}),

wx.setStorage({key: "799", data: ["800.  Benjamin Franklin\'s reputation is so much one of appearing scientific investigation with commonsense empiricism that it is somewhat startling to realize how_______the great experiment\'s mentoring truly was.",
{A: 'A.reasonable',B: 'B.speculative',C: 'C.pragmatic',D: 'D.conjectural',E: 'E.careless',F: 'F.judicious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：富兰克林的名声是调查研究而来的,所以当人们发现这个实验是一 个推测的时候,人们感觉到惊讶.\n***翻译：本杰明富兰克林源自于调查研究常识经验而得到的声名,所以当人们意 识到这个伟大实验的指导真正上是如此依靠推测的时候,人们感到很惊讶."]}),

wx.setStorage({key: "800", data: ["801.The chairman, faced with the need to forge a consensus on a number of proposals, acknowledged that it would be difficult to reconcile the push for a radical overhaul with the stance of those who want_______change.",
{A: 'A.deliberate',B: 'B.indiscriminate',C: 'C.genuine',D: 'D.immediate',E: 'E.wholesale',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：reconcile the push for a radical overhaul with the stance of those who want change 看出空格和 radical overhaul 取反义词,激进 的全面修订的反义词是 A 选项.deliberate 谨慎的,注意这里的 deliberate的熟词僻意. \n***翻译：这个主席,面对大量需要达成共识的建议,承认想要和那些想要谨慎的 改变的人调和大刀阔斧地推进是很难的."]}),

that.setData({progress_percent:80}),wx.setStorage({key: "801", data: ["802. The stars\' attitudes toward their glowing press are diametrically opposed: some think it  _______ and others take the adulation seriously.",
{A: 'A.flummery',B: 'B.consequential',C: 'C.fanatical',D: 'D.coincidental',E: 'E.sincere',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复 adulation,正确答案选 A 选项.flummery 空洞的恭维 话. \n***翻译：明星对于高度赞扬他们的出版社的态度是截然相反的：一些人认为它是 虚假的恭维而另外一些人将这种谄媚当真了."]}),

wx.setStorage({key: "802", data: ["803. Up to the 1970s, histories of science tended to be (i)_____not least in their focus on discoveries and theories that could be read as anticipating later scientific orthodoxies, rather than on those deemed (ii)_____in their own periods. Historians of science are now routinely far more sensitive on such scores.",
{A: 'A.anachronistic',B: 'B.convoluted',C: 'C.undogmatic',D: 'D.major',E: 'E.fallacious',F: 'F.inessential',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：科学历史总是去预期后来的科学传统,不去关注时代本身的东西,说 明是一种时代错误,所以第一空选 A,第二空我们知道关注自己时代的才是好 的,所以第二空选一个正评价即可,所以选 D 选项.anachronistic 时代错误 的,major 重大的.\n***翻译：直到 20 世纪 70 年代,科学历史往往是时代错误的,尤其是他们会关注 那些可以被理解为来预期后来的科学传统的发现和理论,而不是那些在自己时 代里被认为重要的.科学的历史学家现在通常对于这些问题点(自己时代的重 大理论)更加敏感."]}),

wx.setStorage({key: "803", data: ["804. The students seeking undergraduate representation on the board of trustees viewed the impasse in their negotiations with the administration as (i) _______, since it promised to (ii)_____the administration\'s belief that students should take no part in running the university.",
{A: 'A.unfortunate',B: 'B.inevitable',C: 'C.unprecedented',D: 'D.undermine',E: 'E.fuel',F: 'F.distort',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：it 指的是 impasse,僵局会对行政机构不允许学生参加校园事物的想 法加剧,所以第二空选 E 选项,所以倒推第一空应该是一种不幸的局面,所以 第一空选 A 选项.unfortunate 不幸的,feul 火上浇油. \n***翻译：争取在董事会中寻求本科生代表权利的学生们把他们和行政部门的沟通 产生的僵局被认为是不幸的,因为这个僵局对行政部门的这样一个想法火上浇 油了,即学生不应该参与管理校园的事物."]}),

wx.setStorage({key: "804", data: ["805. The perennial problem for critics of nineteenth-century novelist Charlotte Yonge is the relationship of her realism to her (i) ______________. While admiring her complex psychological portraits and detailed descriptions of quotidian family life, readers since her own time have tended to fault her improbable manipulation of plot to teach a moral lesson. Indeed, many critics (ii)_____her because of her willingness to (iii) _______.",
{A: 'A.pessimism',B: 'B.didacticism',C: 'C.eclecticism',D: 'D.dismiss',E: 'E.applaud',F: 'F.underestimate',G: 'G.squander suspense',H: 'H.sacrifice credibility',I: 'I.deflate pretension'},
"###解析：第一空对应点在后文的 teach a moral lesson,所以第一空选 B 选 项.indeed 是对前文内容的强调,所以第二空必然是负评价,所以第二空选 D 选项,第三空对应 improbable manipulation of plot,不合理的操纵情节, 所以最好的答案是 H 选项.didacticism 教训主义,dismiss 不理睬, sacrifice credibility 牺牲可信度.\n***翻译：关于十九世纪小说家 CY 的真实主义和说教主义的关系问题成为了她的批 判家们长久以来的问题.尽管读者们敬佩她笔下复杂的心理描写和细致入微的 寻常生活描写,但从他存在的那个时期开始的的读者就对他不合理的教导道德课程的情节操纵颇有微词.的确,很多文学批判学家都对他置之不理,因为他 情愿牺牲故事的可信度."]}),

wx.setStorage({key: "805", data: ["806.  Filler claims that after the social welfare programs of the 1960s, belief that the government has an obligation to provide decent housing for citizens who cannot afford it was (i)_____in the United States by the notion that providing suitable shelter for everyone should be (ii) _______. Thus today in the (iii)_____of taxpayer-sponsored initiatives we have volunteer home-construction programs, honorable in intent but pitifully limited in scope.",
{A: 'A.supplanted',B: 'B.promulgated',C: 'C.corroborated',D: 'D.a shared civic responsibility',E: 'E.an act of private charity',F: 'F.a profit-oriented enterprise',G: 'G.absence',H: 'H.name',I: 'I.mold'},
"###解析：此题稍微要带入求解,前后两个观点是相反的,所以第一个空格选 A 选项.government has an obligation to provide decent housing for citizens who cannot afford it 和 providing suitable shelter for everyone should be+空格是对立的,所以空格选政府支持的反义,所以 E 选项 最合适.第三空注意\"纳税人支持\"指的是政府的税收,所以第三空是缺乏, 正确答案选 G 选项.supplant 取代,private charity 私人慈善,absence 缺 乏.\n***翻译：Filler 表示,在 1960 年代的社会福利项目之后,在美国关于政府应当 为住不起房屋的国民提供像样的住房这一信念被为每个人提供庇护所是私人慈 善机构的举动这一观念取而代之.因此,在缺乏来自纳税人资助项目的今天, 我们只能自愿建造家园项目,尽管意图是值得尊敬的,但能力却有限得可怜."]}),

wx.setStorage({key: "806", data: ["807.  In its few decades of existence, the field of technology assessment has undergone large changes: its original high ambitions to predict consequences of technology have been_______if not discarded.",
{A: 'A.deferred',B: 'B.subverted',C: 'C.abandoned',D: 'D.relinquished',E: 'E.tempered',F: 'F.modulated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：这个题最关键的点是要看出 if 是\"即使\"的意思,所以后面的逻辑 是即使没有被抛弃,至少也是怎么样了,所以空格选一个抛弃的弱递进词,正 确答案选 EF 选项.tempered 缓和的,modulated 调整的. \n***翻译：在它存在的时间里,技术评定领域发生了很大的变化,他原本的想要预 测技术结果的极高的野心即便没有被放弃的话那也会被调整."]}),

wx.setStorage({key: "807", data: ["808.  Individuals interested in longevity have sought to fine-tune their bodies with all kinds of  _______ diets: only raw foods; only plant; only the flesh, fruit, and nuts that prehistoric humans would have hunted and foraged.",
{A: 'A.eccentric',B: 'B.meager',C: 'C.salutary',D: 'D.proscriptive',E: 'E.trendy',F: 'F.exacting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：only raw foods; only plant; only the flesh, fruit, and nuts that prehistoric humans would have hunted and foraged 体现了这些食物 的严格性,正确答案选 DF 选项.proscriptive 禁止的,exacting 严格的.(此题有原文,原文在空格处使用的是 rigorously proscribed) \n***翻译：人们对于长寿的兴趣使得他们开始用各种严格的饮食来微调他们的身 体,比如吃史前人们获取的天然的有机食物,植物,肉,水果,还有坚果."]}),

wx.setStorage({key: "808", data: ["809.  The baseball players performance during last nights game was impressive, although not _______; others have performed similar feats.",
{A: 'A.decisive',B: 'B.unexampled',C: 'C.significant',D: 'D.novel',E: 'E.outstanding',F: 'F.spectacular',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据后文的 others have performed similar feats 得出这个人的行 为并不是唯一的,正确答案选 BD 选项.unexampled 无先例的,novel 新颖的. \n***翻译：这个棒球选手昨晚的表现非常棒,尽管并不是前所未有的,其他人也有 过这样的技艺."]}),

wx.setStorage({key: "809", data: ["810.  The laboratory maze has grown ever less      since it was first invented instead of hoping to lose a rodent in a labyrinth; today\'s scientists design mazes to elicit a few simple, easily measured behaviors.",
{A: 'A.intricate',B: 'B.extensive',C: 'C.effective',D: 'D.convoluted',E: 'E.useful',F: 'F.prevalent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：today’s scientists design mazes to elicit a few simple, easily measured behaviors 说明迷宫已经变得不那么\"迷\"了,正确答案选 AD 选项.intricate 复杂的,convoluted 错综复杂的.\n***翻译：这个实验研究的迷宫演变的逐渐不再复杂,因为它一开始被创造出来并 不是为了观察啮齿类动物逃出迷宫,今天的科学家们设计的迷宫是为了引出几 个简单的容易被测量的行为."]}),

wx.setStorage({key: "810", data: ["811.Studies of hermaphroditic plants may exhibit sampling bias against self-fertilizing and cross- fertilizing species, thus inflating the frequency of species using a mixed mating system (both self- fertilizing and cross-fertilizing); nevertheless the number of mixed-system species is not _______.",
{A: 'A.self-evident',B: 'B.static',C: 'C.trivial',D: 'D.relevant',E: 'E.calculable',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说尽管对自花施粉和异体受精有不利的偏见,支持混合受精,但 是混合受精物种数量却没有因此增加,能够对应的选项是 D 选项.relevant 相 关的. \n***翻译：对于雌雄同体植物的研究需要表现出对于自花施粉和异体受精物种的不 利的偏见,因此夸大了使用混合受精(既有自花施粉又有异体受精)的频率； 然而混合系统物种的数量却与此并无关联."]}),

that.setData({progress_percent:81}),wx.setStorage({key: "811", data: ["812. A curiosity of the film Vertigo is its capacity to generate emotional power from a plot that lacks the most of elementary _______: viewers are required to accept not an isolated implausibility, but a continuous stream of them.",
{A: 'A.believability',B: 'B.impact',C: 'C.narrative',D: 'D.tension',E: 'E.premise',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说要求观众接受不可信的事实,说明这些情节就是缺乏可信度, 正确答案选 A 选项.believability 可信度.\n***翻译：电影 Vertigo 的好奇之处在于它能够从缺乏最基本的可信度的情节中产 生情感力量：观众被要求接受不止一个单独的不可信,而是一连串的不可信的 事实."]}),

wx.setStorage({key: "812", data: ["813. It was fine to be (i)_____in the old days when papers were still not losing readers and ad revenue was not tough to come by, but many editors today are uneasy about bludgeoning their readers with the inherently (ii)_____work of cartoonists.",
{A: 'A.comprehensive',B: 'B.opinionated',C: 'C.profligate',D: 'D.unbalanced',E: 'E.flawed',F: 'F.vacuous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：双空取同义,整体的意思是以前这么做还 fine,但是现在依然这么 做就 uneasy 了,所以答案选 BD 选项.opinionated 固执己见的,unbalanced 不公正的. \n***翻译：在以前,当报纸还没有失去读者而且广告收益还不难获得的时候,固执 己见是可以的,但是今天很多编辑对于用内在很不公正的漫画家的作品来逼迫 它们的读者的事情感到不安."]}),

wx.setStorage({key: "813", data: ["814. Some academic criticism of popular novels has been (i)_____in character, being based on the assumption that the wider the appeal, the more (ii)_____the novel.",
{A: 'A.rigorous',B: 'B.exculpatory',C: 'C.elitist',D: 'D.undesirable',E: 'E.accomplished',F: 'F.comprehensible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：两空联立,必须选项带入求解,吸引范围越广就越不受欢迎的东西就 是精英主义的东西,正确答案选 CD 选项.elitist 精英主义的,undesirable 不受欢迎的. \n***翻译：一些流行小说的学术评论在人物特征上是精英主义的,基于这样一个假 设：吸引范围越广,小说就越不受欢迎."]}),

wx.setStorage({key: "814", data: ["815. The order applies to all Federal agency whose actions may affect the status of invasive species and requires agencies to identify such actions and to the extent practicable and permitted by law, and since invasive species severely reduce the number of native species and even (i)_____their existence, the agency has determined and made public its determination that the benefits of such actions clearly outweigh the potential harm caused by invasive species; and that all feasible and (ii)_____measures to (iii)_____risk of harm of the introduction of invasive species will be taken in conjunction with the actions.",
{A: 'A.escalate',B: 'B.preclude',C: 'C.diminish',D: 'D.prudent',E: 'E.mawkish',F: 'F.braggart',G: 'G.remedy',H: 'H.counterbalance',I: 'I.minimize'},
"###解析：第一空递进 reduce,所以选 B 选项,第二空和 feasible 并列,所以 正确答案选 D 选项,第三空语义搭配最合理的是 I 选项.preclude 排除, prudent 谨慎的,minimize 最小化. \n***翻译：命令适用于所有的联邦机构,他们的行为可能会影响入侵物种的地位而 且这个命令会要求这些机构去识别这些行为到法律可行和允许的程度,而且因 为入侵物种严重减少了本地物种的数量甚至排除了它们的生存,所以机构已经 向公众下了决心这些行为的好处一定会超过被入侵物种引起的坏处；而且所有 可行和谨慎的来减少入侵物种引进带来的伤害风险的措施将会和这些行动一起 被采取."]}),

wx.setStorage({key: "815", data: ["816.  Conventionally, the ultimate measure of a scientific work\'s validity is how broadly and confidently its conclusions become accepted in the relevant field, which in turn (i)_____the extent to which its findings are replicated and extended. However, establishing such validity, especially for a novel experimental finding, can take years, and what (ii)_____replication or extension may be (iii) _______ for some time.",
{A: 'A.derives from',B: 'B.works against',C: 'C.leads to',D: 'D.justifies',E: 'E.impugns',F: 'F.constitutes',G: 'G.evident',H: 'H.disputed',I: 'I.touted'},
"###解析：前面说有效性取决于被人接受的程度,从 in turn 推知,前后两句是 相互关联的,所以第一空选 A 选项合理,就是说反过来这种 measure 源自于它 的相关发现被复制和扩展的程度.第二空和第三空联系取反义,所以根据选项 得出选 FH 选项最合理.derive from 来源于,constitute 构成,disputed 被 质疑的. \n***翻译：照例而言,科学研究的有效性的最终标准是看其结论在相关专业使用的 广度和可信度,这反过来源自于它的结果能被运用或是改进的程度.但是,要 达到这样的效度,尤其是对一个新颖的实验结果,可能需要很多的时间,而且 构成复制和扩展的东西可能有时候会被质疑."]}),

wx.setStorage({key: "816", data: ["817.  While the group\'s street protests assumed an assertory uncompromising tenor, once admitted to the halls of power to begin formal lobbying, the group\'s leadership wisely chose to_______the stridency of their rhetoric.",
{A: 'A.metamorphose',B: 'B.gild',C: 'C.wane',D: 'D.palliate',E: 'E.succor',F: 'F.damp',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 while 看出前后有让步转折,前面说这些人 assertory uncompromising,后文空格选 assertory uncompromising 的反义词,正确答案 DF 选项.palliate 减轻,damp 减弱. \n***翻译：尽管这个小组的街头示威者表现出一种坚定的不妥协的语调,但是一旦 被允许进去权利层来开始正常的游说,这些小组的领导层就会聪明地选择减弱 他们言语上的强硬."]}),

wx.setStorage({key: "817", data: ["818.  His own writing style was _______: colorful and tart in its choice of language, willing to run risks in its allusions, metaphors, and verbal juxtapositions, prone to irreverent conclusions designed to surprise or startle.",
{A: 'A.effusive',B: 'B.audacious',C: 'C.lyrical',D: 'D.striking',E: 'E.ornate',F: 'F.emotional',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：体现冒号后面的特征,敢于流露自己的感情,考虑六选二选项同义的 问题之后,最好的答案是 AF 选项.effusive 溢于言表的,emotional 充满感情 的. \n***翻译：他自己的写作风格是流露感情的：在选择语言上充满色彩而尖酸刻薄, 愿意在暗指,比喻和排比中冒风险,喜欢不尊重人的结论用来让人瞠目结舌."]}),

wx.setStorage({key: "818", data: ["819.  Debate rages on between proponents of corporal punishment and the death penalty and their detractors, though even the most rabid supporter agrees that punishments must be_______and the justice system evenhanded and thorough.",
{A: 'A.meet',B: 'B.clement',C: 'C.delimited',D: 'D.condign',E: 'E.tantamount',F: 'F.merciful',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说关于死刑和肉刑有争议,后文转折说目前的惩罚必须是合适 的,而且后文的 the justice system evenhanded and thorough 也能说明空格 填入一个正评价词,正确答案 AD 选项.meet 合适的,condign 适合的. \n***翻译：死刑肉刑的支持者和反对者之前的争吵一直很流行,但是就算是最狂热 的支持者也必须承认惩罚必须是合适的而且正义系统必须是公平的和全面的."]}),

wx.setStorage({key: "819", data: ["820.  Miller reminded his clients that labor relationship are inherently _______; the interests of business owners are diametrically opposed to those of employees.",
{A: 'A.adversarial',B: 'B.exploitative',C: 'C.mercenary',D: 'D.antagonistic',E: 'E.variable',F: 'F.changeable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the interests of business owners are diametrically opposed to those of employees 说明老板和员工是对立的,正确答案选 AD 选项. adversarial 敌对的,antagonistic 敌对的. \n***翻译：米勒提醒他的客户,劳动关系固有敌对性.商人们的目标和兴趣本来就 和他们的员工相反."]}),

wx.setStorage({key: "820", data: ["821.The threat of litigation makes the art authentication industry_______realm: connoisseurs refuse to communicate in writing and confidential agreements bind authenticators to silence.",
{A: 'A.an opportunistic',B: 'B.a clandestine',C: 'C.a moralizing',D: 'D.a xenophobic',E: 'E.an anarchistic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面体现了这个行业的保密,沉默的特征,所以答案选 B 选项, clandestine 偷偷摸摸的. \n***翻译：诉讼的威胁让艺术认证行业成为了一个偷偷摸摸的领域：鉴赏家拒绝在 写作中交流而且保密协议让认证者保持沉默."]}),

that.setData({progress_percent:82}),wx.setStorage({key: "821", data: ["822. Some of the areas of research covered in the collection have already attracted substantial scholarly interest, while others are more , hence requiring pioneering effort to map the territory and suggest productive avenues of inquiry.",
{A: 'A.intricate',B: 'B.pristine',C: 'C.parochial',D: 'D.heterogeneous',E: 'E.onerous',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和 attracted substantial scholarly interest 取反,没有收 到学者关注的那就是崭新的内容,正确答案选 B 选项,pristine 崭新的. \n***翻译：一些包括在作品集中的研究地区已经吸引了大量的学术关注,但另外一 些却更加崭新,因此需要先锋派的工作去测绘地形和表明有大量调查的途径."]}),

wx.setStorage({key: "822", data: ["823. Since he had demonstrated (i)_____talent as an amateur, several of his acquaintances (ii)_____a career on the stage, but he followed his parents\' wishes, becoming an engineer.",
{A: 'A.an innocuous',B: 'B.an unremarkable',C: 'C.the requisite',D: 'D.aided him in pursuing',E: 'E.badgered him to pursue',F: 'F.swayed him into pursuing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过最后 but he followed his parents’ wishes, becoming an engineer 知道他的熟人是想劝他去追求舞台的职业生涯,那么第二空选 E 最合 适,第一空根据因果关系知道他能够表现出\"好的\"能力,能体现正评价的是 C 选项.requisite 必要的,badger 极力劝说.注意 badger 除了烦扰的意思之 外还有极力劝说的意思,参考韦氏词典. \n***翻译：因为他已经表现出了作为业余者的必要才能,几个她的好友极力劝说他 在舞台上追求自己的事业,但他却遵守着他父母对他的期望,当一个工程师."]}),

wx.setStorage({key: "823", data: ["824. In the past, the discussion of artificial light had been (i)      . When electrification spread, the talk of artificial light became (ii) , perhaps because the material was more familiar. Distance lends enchantment.",
{A: 'A.engaging',B: 'B.momentous',C: 'C.dormant',D: 'D.nugatory',E: 'E.repetitious',F: 'F.dull',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后两个空格取反,最后一句\"距离导致着迷\"非常关键,所以当材 料变得熟悉之后,对于人造光的讨论就变得乏味了,所以第二空选 F 选项,第 一空取反选 A 选项.engaging 迷人的,dull 乏味的. \n***翻译：在过去,对于人造光的讨论是吸引人的.当电气化传播之后,讨论人造 光变得很乏味了,很可能因为材料是更加熟悉了.距离导致着迷."]}),

wx.setStorage({key: "824", data: ["825. Saul\'s particular combination of intellectuality and vitality was not paradoxical; it was category- shattering. (i)_____was, in a way, his very theme. Was ever a bookish soul so cracklingly unmediated, so (ii)_____raw life? He was as vivid physically as he was mentally, almost perversely alert, completely at home in the world of matter, repulsed by (iii) _______.",
{A: 'A.energy',B: 'B.nostalgia',C: 'C.solitude',D: 'D.put off by',E: 'E.flush with',F: 'F.uninterested in',G: 'G.seriousness',H: 'H.sensuality',I: 'I.tedium'},
"###解析：第一空对应点可能是 intellectuality 和 vitality,然后根据后文 的 cracklingly 推出应该是对应 vitality,也就是选 A 选项 energy；第二空和 so cracklingly unmediated 并列关系,所以对应的选项是 E 选项 flush with；第三空根据 repulsed by 得出应该选 energy 的反义词,那么在三个选项 中选 I 选项 tedium 最合适.energy 精力,flush with 因…而兴奋,tedium 单 调乏味.\n***翻译：S 对于智力和精力的特殊结合并不矛盾；它是一种令人震惊的类型.精 力从某方面看来正是他的主题.是否一个曾经有着学究气质的人如此充满活力 地不可调和,对于原生态的生活如此兴奋？他在生理上是生动的,就像在心理 上反感单调乏味,几乎是任性地警惕,对物质世界完全精通."]}),

wx.setStorage({key: "825", data: ["826.  The difficulty for nineteenth-century advocates of the claim that forests helped regulate climate was that their argument (i)_____historical anecdote and observations. Proving the forest-climate link through verifiable and experimental scientific means rather than observation was (ii)_____for these individuals, a situation that eventually led to the link (iii)_____justifications for forest conservation.",
{A: 'A.lacked',B: 'B.discounted',C: 'C.employed',D: 'D.problematic',E: 'E.unnecessary',F: 'F.straightforward',G: 'G.being revived in',H: 'H.dropping out of',I: 'I.losing out to'},
"###解析：第一空说 advocates 的言论的难度在于他们的言论基于了 anecdote 和 observations,第一空选 C 选项,所以第二空选 D 选项,因为对这些人来说用科学方法反而是会造成困难的,而正是这个原因导致了这种 link 没有了合理 性,选 H 选项.employ 使用,problematic 造成困难的,drop out of 失去. \n***翻译：19 世纪那些森林能够调解气候的说法的支持者们的困难是他们的言论运 用了历史的轶事和观察.通过可信的且基于实验科学的方法而不是基于观察来 证明森林和气候的联系对于这些个体来说是受到质疑的,这是一种最终会导致 这种联系不再能够支持森林保护的合理性."]}),

wx.setStorage({key: "826", data: ["827.  Even the man was reserved in his speech, he thoroughly understood his mother, which made him far from_______as people usually thought.",
{A: 'A.comprehensive',B: 'B.ingenuous',C: 'C.sophisticated',D: 'D.foolish',E: 'E.simple',F: 'F.sententious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：he thoroughly understood his mother 说明他不是一个负评价的 人,所以此题空格找修饰人的负评价即可,正确答案选 BE 选项.ingenuous 天 真的,simple 简单的.foolish 没有同义词不选. \n***翻译：尽管这个男人在他的演讲中并不多话,但他能够完全理解他的妈妈,致 使人们改变了对于他天真的通常的看法."]}),

wx.setStorage({key: "827", data: ["828.  Mark Messina\'s book The Simple Soybean and Your Health exudes recognition much less unrestrained in the description of the soy\'s medical efficiency than its versatility, but the author cautions against soy to be a _______.",
{A: 'A.cure-all',B: 'B.solitude',C: 'C.efficacy',D: 'D.effectuality',E: 'E.panacea',F: 'F.placebo',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后让步关系,尽管前文不受限制地描述 soy 的药效,但是不能把 soy 当成万能药,正确答案选 AE 选项.cure-all 万能药,panacea 万能药. \n***翻译：MM 的书：《小豆豆和你的健康》更加自由地表达了大豆的多用途而不是 药用功能,但这个作者反对把大豆当成是万能药."]}),

wx.setStorage({key: "828", data: ["829.  Three of the nation\'s largest airlines could be operating under bankruptcy protection in coming weeks, analysts say, the latest sign of the industry\'s_______as it lurches through a historic transformation.",
{A: 'A.upheaval',B: 'B.exorbitance',C: 'C.affluence',D: 'D.peril',E: 'E.convulsion',F: 'F.opulence',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应前文的 bankruptcy 和 historic transformation,句中只 说了这个航空公司的破产,那么正确答案选 AE 选项.upheaval 大变动, convulsion 动乱. \n***翻译：这个国家的三大航空公司在未来几周内的破产保护下运作,研究称,最 新发生的行业动乱迹象是当它倾斜向一个历史变化开始的."]}),

wx.setStorage({key: "829", data: ["830.  Agencies responsible for protecting natural resources too often issue permits allowing exploitation of those resources, a process that remains_______given that agencies have become experts at masking their decisions in the scientific terms.",
{A: 'A.controversial',B: 'B.exacting',C: 'C.obscure',D: 'D.onerous',E: 'E.opaque',F: 'F.misleading',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因为机构擅长 masking their decisions in the scientific terms,所以这个过程显得比较不透明,正确答案选 CE 选项.obscure 模糊 的,opaque 不透明的. \n***翻译：对保护自然资源有责任的机构太经常给出允许开发资源的许可,这种做 法仍然保持模糊,使得这些机构在科学角度上闪烁其词成了专家."]}),

wx.setStorage({key: "830", data: ["831.The painter has emphasized the figure\'s erect posture by making it contrast so starkly with the_______ exhibited by trees of the windswept orchard in the background.",
{A: 'A.strength',B: 'B.list',C: 'C.rigidity',D: 'D.fruitfulness',E: 'E.uprightness',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：contrast so starkly with 告诉我们直立的人物和树的特征是反 义,所以空格选 erect 反义,答案选 B 选项. \n***翻译：画家通过让人物和后院里被风刮倒的树所体现出来的倾斜形成鲜明对比 来强调了这个人物直立的姿势."]}),

that.setData({progress_percent:83}),wx.setStorage({key: "831", data: ["832. The idea of a \"language instinct\" may seem_______to those who think of language as the zenith of the human intellect and of instincts as brute impulses.",
{A: 'A.jarring',B: 'B.plausible',C: 'C.gratifying',D: 'D.inevitable',E: 'E.conciliatory',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：language as the zenith of the human intellect and of instincts as brute impulses 说明智力和天赋不是同一个东西,所以这里把 智力和天赋合成一个词就是矛盾的,能体现这个意思的选项是 A.jarring 不和 谐的,刺耳的. \n***翻译：\"语言本能\"这个概念对那些认为语言是人类智慧的顶点、本能是野蛮 的冲动的人来说可能很刺耳."]}),

wx.setStorage({key: "832", data: ["833. Hidebound by cloying commercial radio and clueless record executives, the American pop music scene has frequently depended on cities at the edges of the cultural map to provide a much- needed shot of (i) _______. Seattle, Minneapolis, Austin, Texas, and Athens, Georgia, have all served as temporary pivot points, churning out bands and defining the sound of the moment. Even Omaha, Nebraska, has its 15 minutes not so long ago. The momentary (ii)_____seems to come out of nowhere-as if someone blows a whistle only those in the know can hear, and suddenly record executives and journalists are crawling all over what had previously been an obscure locale.",
{A: 'A.originality',B: 'B.hackneyedness',C: 'C.burlesque',D: 'D.consensus',E: 'E.disjunction',F: 'F.censorship',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：因为之前的特征是 hidebound,所以需要寻求一些创新的东西,所以 第一空去 hidebound 反义,答案选 A 选项,第二空 momentary 其实重复前文的 叙述,前文说了很多地方都在创新,所以这体现的是 D 选项.originality 原 创,consensus 一致. \n***翻译：因为厌腻的商业广播和一窍不通的唱片公司主管而导致的迂腐守旧,所 以美国流行音乐场景普遍依赖于在文化地图边缘的城市来提供大量急需的原创 内容.S,M,A,T,A,G 这些地方都已经作为临时的枢纽中心,大量炮制乐队和定 义这个时代的声音.就连 O,N 在不久之前也有了它的 15 个记录.这个短暂的一 致性不知道从哪来的—仿佛某人吹了一个口哨,只有消息灵通的人才能听到, 然后突然唱片公司主管和记者开始去之前不出名的地方去大肆传播."]}),

wx.setStorage({key: "833", data: ["834. The guilty-pleasure of the play lies in its invitation for us to identify with its characters-attractive, articulate young women and young men (i)_____behavior that, from the outside, may look more than a little (ii) _______: though the actions are initially repugnant, we cannot help but share the point of the view of the characters committing them.",
{A: 'A.lament',B: 'B.execrate',C: 'C.rationalize',D: 'D.trivial',E: 'E.altruistic',F: 'F.monstrous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空对应冒号后面的 repugnant,第一空对应 cannot help but share,令人反感的东西我们却要去 share,所以第一空选 C 选项,第二空选 F 选项.rationalize 给...做出合理解释,monstrous 可怕的. \n***翻译：戏剧中的窃喜在于它吸引我们去认出它的角色—有吸引力的,表达清晰 的年轻女性和男性把那些从外部看起来很残忍的行为变得合理：尽管行为最初 是很让人反感的,但是我们只能去共享执行这些行为的角色的观点."]}),

wx.setStorage({key: "834", data: ["835. Methods were developed to remove distortions caused by either the research environment or the researcher. Such methods, especially with respect to the researcher, were considered to(i)_____those (ii)_____subjectivity whose unbridled expression was thought to otherwise (iii)_____research.",
{A: 'A.restrain',B: 'B.reveal',C: 'C.supersede',D: 'D.incursions of',E: 'E.efficacy of',F: 'F.restrictions on',G: 'G.corrupt',H: 'H.obviate',I: 'I.facilitate'},
"###解析：这些方法的最终目标是消除曲解,那么第一空一定对主观性(就是偏 见)做负面动作,所以第一空选 A 选项,主观性在科学研究中是负评价的,所 以第二空依然选负评价词,答案选 D 选项最好,F 选项语义不合适,第三空选 一个词体现主观性对于研究的关系,主观必然负面影响研究,所以第三空选 G 选项最合适,H 选项语义不合适.restrain 限制,incursion 干扰,corrupt 使 出错.\n***翻译：有一些方法形成来消除由于研究环境或者研究人员而导致的曲解.这些 方法,尤其是关于研究者的那些,被认为能够限制那些对于主观性的干扰,这 些主观性的不受限制的表达被认为是能够在其他情况下破坏研究."]}),

wx.setStorage({key: "835", data: ["836.  People accustomed to thinking that the human lifespan (i)_____the outer bounds of animal longevity tend to dismiss tales of musket balls being found in the shells of living turtles. Samantha Romney, however, argues that while such stories may be (ii) _______, some turtles do indeed exhibit a phenomenon known as \"negligible (iii) _______,\" showing no signs of aging even as they pass the two-century mark.",
{A: 'A.belies',B: 'B.demarcates',C: 'C.antedates',D: 'D.apocryphal',E: 'E.authentic',F: 'F.heresy',G: 'G.rejuvenation',H: 'H.superannuation',I: 'I.senescence'},
"###解析：对于这种故事 dismiss 的人一定认为动物的寿命不能比人长,所以第 一空选 B 选项,第二空根据让步逻辑可知,尽管这个故事是假的,但是确实有 这样的乌龟,第二空选 D 选项,第三空说的是这些乌龟不会变老,所以选 I 选 项.demarcate 划定,apocryphal 可疑的,senescence 衰老. \n***翻译：习惯认为人类寿命作为动物寿命外部边界的标尺的人不会考虑传说中在 活体乌龟中发现的火枪子弹.然而,SR 却认为,尽管这种故事可能是假的,但 是一些乌龟确实能展现出一个被称为\"可忽视的衰老\",就算过了两个世纪也 没有变现出变老的特征."]}),

wx.setStorage({key: "836", data: ["837.  The recent exhibition on Dadaism is nothing if not _______, for the visual arts are currently awash in Dadaist gestures and gambits of one variety or another.",
{A: 'A.sensational',B: 'B.timely',C: 'C.daunting',D: 'D.ill-advised',E: 'E.opportune',F: 'F.misguided',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：当前是充满了达达主义的内容,所以不久前的展览是选对了时间,要 不然就没有什么重要意义了,正确答案选 BE 选项.timely 及时的,opportune 恰当的. \n***翻译：最近关于达达主义的展示如果不及时的话可能就没有什么意义了,因为 视觉艺术目前是充满了一个又一个的达达主义的手势和开局."]}),

wx.setStorage({key: "837", data: ["838.  Ascorbate readily oxidizes in aerated aqueous solutions, and the PH of such solutions, in part,_______ the rate of oxidation, since the higher the PH, the greater the rate of oxidation.",
{A: 'A.determines',B: 'B.accelerates',C: 'C.consolidates',D: 'D.governs',E: 'E.compounds',F: 'F.stabilizes',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 since the higher the PH, the greater the rate of oxidation 的关系,知道 PH 值和氧化速度是正相关,所以正确答案选 AD 选 项.determine 决定,govern 决定.此题能 google 到原文,原文用的是 function(函数).\n***翻译：抗坏血酸在加气水溶液中容易氧化,这些溶液的 ph 数值,决定了氧化的 速率,因为 ph 值越高,氧化的速率越快."]}),

wx.setStorage({key: "838", data: ["839.  Consuming 25 to 35 percent of their body weight each day, sea otters are not only_______but highly specialized eaters, organizing themselves into groups that zero in on specific kinds of prey.",
{A: 'A.prodigious',B: 'B.undiscriminating',C: 'C.fastidious',D: 'D.picky',E: 'E.voracious',F: 'F.omnivorous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：consuming 25 to 35 percent of their body weight each day 体 现了水獭的贪吃,正确答案选 AE 选项.prodigious eater 贪吃的东西, voracious 贪吃的. \n***翻译：每天消耗它们身体重量的百分之二十五到三十五,水獭不仅贪吃而且还 是高度专一性的吃货,组成小组集中火力冲向特定种类的猎物."]}),

wx.setStorage({key: "839", data: ["840.  The concept of the Hellenistic period in ancient history has proved useful but also _______, with scholars disagreeing on the dates when the period began and ended.",
{A: 'A.slippery',B: 'B.elusive',C: 'C.fruitless',D: 'D.deceptive',E: 'E.futile',F: 'F.compelling',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面的独立主格结构说学者们在出现和结束的时间上不能达成一 致,说明这个 period 是棘手的,所以正确答案选 AB 选项.slippery 棘手的, elusive 难以实现的. \n***翻译：希腊时期的概念在远古时期历史中被认为有用,但也是棘手的,因为学 者们在关于这个时期开始与结束时间上面的争论意见不统一."]}),

wx.setStorage({key: "840", data: ["841.\"RESIGNATION\", an English word the French novelist Christian Oster would no doubt appreciate, presents an elegant paradox: in one sense, it indicated a bold step, a cleaving of oneself from an attachment grown onerous; in another, it\'s the height of _______, an acquiescence to fate.",
{A: 'A.sham',B: 'B.fissure',C: 'C.desperation',D: 'D.passivity',E: 'E.maturity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：句意本身较难理解,但是空格和 an acquiescence to fate 是同位 语,所以直接选 an acquiescence to fate 的同义即可,正确答案选 D 选项. passivity 被动.\n***翻译：\"听任\"(一个法国小说家 CO 一定会欣赏的英语单词)表现出一个优雅的矛盾：在一方面,它表明了勇敢的一步,从艰难的附属变为自我的一大步； 另一方面,他体现了一种被动,一种对于命运的服从."]}),

that.setData({progress_percent:84}),wx.setStorage({key: "841", data: ["842. He accused some people who_______him of being by contrast supportive of another candidate, who shared a similar stance on most political issues.",
{A: 'A.offended',B: 'B.lauded',C: 'C.excoriated',D: 'D.promoted',E: 'E.noticed',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：既然两人有类似立场,那么这些指责他却支持别的竞选人的人一定会 被他指控的,正确答案选 C 选项.excoriate 指责. \n***翻译：他指控那些指责他但相反却去支持另外一个参选人的那些人,另外一个 参选人在大多数政治问题上有一个类似的立场."]}),

wx.setStorage({key: "842", data: ["843. To say the actors were (i)_____their director is an understatement: a director who is visibly bored by his cast and their performances is hard to (ii) _______.",
{A: 'A.disappointed in',B: 'B.accepting of',C: 'C.motivated by',D: 'D.lambast',E: 'E.displease',F: 'F.suffer',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面是一种低估,说明前后两个空格是同义词,正确答案选 BF 选 项.accept 这里取忍受的意思,suffer 忍受. \n***翻译：说这些演员能够忍受这个导演的说法是低估了(这个导演的脾气),一 个明显对演员和表演厌倦的导演是很难忍受的."]}),

wx.setStorage({key: "843", data: ["844. Just as large manufacturing companies with dominant positions in large domestic markets were once able to resist (i)_____despite ample signs that foreign competition was rapidly overtaking them, strong and wealthy states can (ii)_____and still manage to limp along for many years.",
{A: 'A.innovation',B: 'B.temptation',C: 'C.inertia',D: 'D.exploit vulnerable markets',E: 'E.dominate international affairs',F: 'F.maintain misguided policies',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：despite ample signs that foreign competition was rapidly overtaking them,通过让步信息推出第一空选正评价,所以选 A 选项,第二空 通过类比关系和上文的 were once able to resist innovation 取类比,所以 第二空选 F 选项. \n***翻译：正如在当地市场占主导位置的大制造厂商曾经即便有足够的迹象告诉他 们来自国外的竞争选手正在急速地超越它们,但它们仍然拒绝创新一样,那些 本来实力强劲而且富足的州还能够坚持一段时间这些错误的政策."]}),

wx.setStorage({key: "844", data: ["845. For a time in the early Middle Ages, Latin culture came close to (i) _______: the witness to that is the (ii)_____of manuscript copies of texts datable to the period. The process of copying manuscripts, the only way in which the fragile products of centuries of accumulating knowledge could be preserved, (iii) _______, a situation that did not change for two and a half centuries, until the time of Charlemagne. In the intervening period, much of Classical literature was lost to use forever.",
{A: 'A.reversing',B: 'B.exploding',C: 'C.vanishing',D: 'D.paucity',E: 'E.provenance',F: 'F.proliferation',G: 'G.was pursued methodically',H: 'H.expressed the spirit of the time',I: 'I.virtually came to a standstill'},
"###解析：此题要从最后一句来找对应,was lost to use forever 说明拉丁文 化走向衰落,所以第一空选 C 选项,证明这件事必然是缺乏相关的文字,第二 空选 D 选项,第三空也要体现 manuscript copy 的少,所以选 I 选项.vanish 消失,paucity 缺乏,virtually came to a standstill 走向停滞. \n***翻译：在中世纪的一段时间,拉丁文化接近消失：这件事的证明便是缺乏确定 在这一时期的手稿文件.复制稿件的过程(唯一可以保存几个世纪累计知识的 脆弱作品的方法)事实上处于停滞状态.这是一种两个半世纪未曾变化过的状 态,直到查理曼大帝时期.在这段介入的时期,大多数经典文学永远没法再使 用了."]}),

wx.setStorage({key: "845", data: ["846.  Barker\'s account of how mores have evolved over time is illuminating. It reveals as (i)_____and (ii)_____some values that have often been regarded as (iii) _______, while uncovering other values that do indeed seem to be universal.",
{A: 'A.transient',B: 'B.instinctive',C: 'C.resilient',D: 'D.transcendent',E: 'E.relative',F: 'F.enduring',G: 'G.liberating',H: 'H.nonnegotiable',I: 'I.antiquated'},
"###解析：此题没有太多上下文,只能从逻辑方向来判断,通过 while 可以判断 第三空和 universal 是反义关系,所以第三空选 I 选项,第一空和第二空是同义关系而且和第三空取反,所以分别选 C 和 F 选项.resilient 有适应力的, enduring 持久的,antiquated 古老的.\n***翻译：B 对于习俗如何随时间演化发展的记录是启发性的.它将曾经被当成是 古老的东西呈现得适应力强而且是持久的,但同时也揭露了一些确实看上去通 用的价值."]}),

wx.setStorage({key: "846", data: ["847.  The current_______of repackaged music under Miles Davis\' name might prompt any reasonable person to conclude that the recording vault has been plundered bare.",
{A: 'A.glut',B: 'B.revival',C: 'C.hodgepodge',D: 'D.surfeit',E: 'E.modicum',F: 'F.dearth',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面提到 the recording vault has been plundered bare,所以原 因必然是因为市场上出现大量的 repackaged recording,所以空格要选体现 \"多\"的意思,答案选 AD 选项.glut 过量,surfeit 过量.\n***翻译：当前以 Miles Davis 的名字而重新包装的音乐的泛滥可能会让一个明智 的人得出这样一个结论：专辑库已经被洗劫一空了."]}),

wx.setStorage({key: "847", data: ["848.  People enjoy listening to the governor\'s inspiring speeches, and his eloquence lulls his adversaries into underestimating his _______, the tempered steel beneath the sleek suits.",
{A: 'A.tenacity',B: 'B.resolve',C: 'C.resourcefulness',D: 'D.kindness',E: 'E.compassion',F: 'F.frankness',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：取 tempered steel 的同义词,tempered steel 回火钢对应的选项只 能是 AB 选项.tenacity 顽强,resolve 决心. \n***翻译：人们很享受这个政府统治者的激励演讲,而且她的演讲会欺骗他的对手 去低估他的坚韧,在时髦的衣服之下的回火钢."]}),

wx.setStorage({key: "848", data: ["849.  Ancient cave painters explored every surface, and although they bypassed certain walls that to us seem just as suitable for decoration as ones they chose, the placement of the art apparently wasn\'t _______.",
{A: 'A.inconsequential',B: 'B.capricious',C: 'C.strenuous',D: 'D.undisclosed',E: 'E.arduous',F: 'F.impulsive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 although...seem just as suitable for decoration 推出,这 些画家尽管不是按照普通人的想法来布置这些壁画,但却不是随意布置的,正 确答案选 BF 选项.capricious 任意的,impulsive 冲动的. \n***翻译：远古时期的洞穴画家探索了每一种岩石表面,尽管他们忽视了一些在我 们眼里看起来和他们选择的那些墙壁一样适合作画的岩石墙壁,但他们岩画的 布置显而易见不是任意布置的."]}),

wx.setStorage({key: "849", data: ["850.  Although many skeptics of the scientific theory_______critiques that have long since been disproved, some of the doubters arguably bring up valid points.",
{A: 'A.overlook',B: 'B.revise',C: 'C.recycle',D: 'D.utilize',E: 'E.neglect',F: 'F.rehash',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从后文的 some of the doubters arguably bring up valid points 看出前面的人没有带来 valid points,所以之前的人只能说在炒冷饭, 不创新,正确答案选 CF 选项.recycle 重新使用,rehash 炒冷饭. \n***翻译：尽管很多对于科学理论重讲的怀疑者评论科学理论一直以来都是反驳 的,抱怀疑态度的人提出了更加有效的观点."]}),

wx.setStorage({key: "850", data: ["851.Common and easily accessible resources (prey for predators or hosts for parasites) should be, all other things being equal, used frequently, yet in some environments apparently accessible and suitable resources remain           .",
{A: 'A.vulnerable',B: 'B.unobtainable',C: 'C.sustainable',D: 'D.depleted',E: 'E.unexploited',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 yet 判断出空格选前文 used frequently 反义,正确答案选 E 选 项.unexploited 未利用的. \n***翻译：常见而且容易得到的资源(捕食者的猎物或者寄生虫的寄主)应该是(假设其他所有东西都一样)被经常使用的,然而在某些环境中明显容易得到 而且合适的资源依然没有被利用."]}),

that.setData({progress_percent:85}),wx.setStorage({key: "851", data: ["852. Even though the authors repeatedly_______their won shrewdness, they show a remarkable credulousness toward far-fetched ideas such as carbon-eating trees and cloud-making machinery.",
{A: 'A.soft-pedal',B: 'B.extol',C: 'C.deprecate',D: 'D.broaden',E: 'E.compromise',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：很明显,转折之后是对这些 authors 的负评价,所以空格应该是正评 价词,所以正确答案选 B 选项.extol 赞美. \n***翻译：尽管这些作者不停去赞美他们自己的精明,但是他们表现出一个明显对 于牵强附会的一些想法的轻信,例如吃碳的树和制造云的机器."]}),

wx.setStorage({key: "852", data: ["853. The piecrust was not punctured, so steam built up and the crust _______, bursting like a balloon, creating an over-cleaning project where hopes of dinner were expected.",
{A: 'A.split',B: 'B.warped',C: 'C.distended',D: 'D.shrunk',E: 'E.caved in',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：蒸汽变多之后,馅饼皮会膨胀,所以正确答案选 C 选项.distend 膨 胀. \n***翻译：馅饼皮没有被刺破,因此蒸汽逐渐变多然后皮膨胀,像气球破裂,产生 了一个过度清理的项目,在那晚餐的希望被期待."]}),

wx.setStorage({key: "853", data: ["854. Regardless of the putative decline of (i)_____in contemporary culture, such (ii)_____remains essential to civil discourse. It allows people to avoid embarrassing or maligning an adversary, and it serves as a form of irony that draws attention to a problem that can scarcely be exaggerated.",
{A: 'A.understatement',B: 'B.originality',C: 'C.partisanship',D: 'D.inventiveness',E: 'E.objectivity',F: 'F.restraint',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题较难,两个空格通过 such 得知是取同义词,后文说这种东西能 够变成一种讽刺,因为它能够吸引那些无法再被夸大(已经很夸大了)的问 题,既然是一种讽刺,那么这个空格就是填夸大的反义词,所以正确答案选 AF 选项.understatement 低调,保守,restraint 克制. \n***翻译：不管当代文化中保守的频率已经被人们公认正在减少,这种克制对于公 民论述仍旧十分重要,它能避免人们使对方尴尬或中伤别人,并且它能够成为 一种讽刺,吸引人们的注意力到一个无法再被夸大的问题上."]}),

wx.setStorage({key: "854", data: ["855. Much of the newspapers readership found it hard to (i)_____the allegations of venality laid against the superintendent, since these readers were still (ii)_____the superintendents reputation for (iii) _______. The superintendents subsequent vindication will have come as no surprise to them.",
{A: 'A.ignore',B: 'B.credit',C: 'C.dismiss',D: 'D.swayed by',E: 'E.unaware of',F: 'F.learning about',G: 'G.grouchiness',H: 'H.probity',I: 'I.creativity'},
"###解析：这个题要从最后的部分倒推,主管被证明清白这件事一点都不意外, 说明大家都认为他很清白,所以第一空选 B 选项,也就是很难相信他的贪污, 第二空和第三空有关联,选 DH 选项搭配最合理,就是大家还受到主管正直名声 的影响.B 确信,D 影响,H 正直. \n***翻译：大部分的报纸读者很难认同关于负责人贪污的断言,因为这些读者们仍 然相信这些负责人的正直的名誉.关于负责人的随后的证明清白对于他们来说 没有任何意外."]}),

wx.setStorage({key: "855", data: ["856.  Persian prose writers from the second half of the twelfth century onward were characteristically (i)_____the literary form of their works, a fact that some scholars have perceived as a derogation of those works content. It may be better interpreted as (ii)_____the development of an awareness of authorship, for the awareness of authorship (iii)_____the awareness of form.",
{A: 'A.ambivalent about',B: 'B.indifferent to',C: 'C.preoccupied with',D: 'D.a retreat from',E: 'E.an indication of',F: 'F.a justification for',G: 'G.evolves through',H: 'H.extends beyond',I: 'I.holds back'},
"###解析：第一空 content 和 form 是对立的,根据后文对于 content 的 derogation 能够推出对于 form 是一个正评价,那么正确答案选 C 选项,第二 空和第三空是联系的,第二空填的名称就是第三空体现的关系,最合适的搭配 是 EG 选项,说 form 是 authorship 的体现,因为 authorship 是由 form 演化而来的.preoccupied with 全神贯注与,indication 体现,evolve though 通 过...演化.\n***翻译：12 世纪后半叶和那之后的波斯散文作家非常明显对于他们作品的文学形 式非常关注,这是一种被一些学者认为是轻视作品内容的现象.这件事可能更 好地理解为作家职业的意识发展的一个体现,因为作家职业意识是通过形式的 意识演化而来的."]}),

wx.setStorage({key: "856", data: ["857.  Although the employees\' union and company management, entering into contract negotiations, both issued statements encouraging _______, acrimony between the two sides continued unabated.",
{A: 'A.pertinacity',B: 'B.compromise',C: 'C.patience',D: 'D.civility',E: 'E.comity',F: 'F.steadfastness',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 acrimony between the two sides continued unabated 推出空 格应该选 acrimony 的反义词,所以正确答案是 DE 选项.civility 礼貌, comity 友谊. \n***翻译：尽管雇员的公会和公司的管理层在进入合同洽谈时都发布了鼓励友好的 言论,但是双方之间的刻薄之言仍然没有减少."]}),

wx.setStorage({key: "857", data: ["858.  As a way of_______the negative impacts of overdependence on a single export product-crude oil, the Nigerian government passed legislation in 1999 intended to revitalize the moribund solid minerals sector.",
{A: 'A.assuming',B: 'B.checking',C: 'C.disguising',D: 'D.stemming',E: 'E.downplaying',F: 'F.shouldering',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题考查了目的手段,后文说尼日利亚政府想要复兴垂死的矿业,说 明政府在消除过去依赖单一出口的问题,正确答案选 BD 选项.check 阻止, stem 阻止.注意 check 和 stem 考了熟词僻意. \n***翻译：作为一种阻止过度依赖于仅有的一项出口货物—原油而造成的负面影响 的办法,尼日利亚政府于 1999 年通过了立法企图重兴濒临破产的固体矿产行 业."]}),

wx.setStorage({key: "858", data: ["859.  After many years of feeling_______by his seniors managers, Clark was becoming hopeful of advancement.",
{A: 'A.vilified',B: 'B.stymied',C: 'C.hindered',D: 'D.aggrieved',E: 'E.circumvented',F: 'F.overlooked',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：becoming hopeful of advancement 说明之前是对于 advancement 没 有希望,所以空格体现阻碍,正确答案选 BC 选项.stymie 阻碍,hinder 阻 碍.\n***翻译：在感觉被他的经理阻碍了事业发展的很多年之后,C 渐渐觉得自己的提 升变得有希望了."]}),

wx.setStorage({key: "859", data: ["860.  Even before she went to art school, Veronica found the standard design categories _______: she didn\'t understand why designing buildings and designing tables should require different sensibilities.",
{A: 'A.provocative',B: 'B.limiting',C: 'C.stimulating',D: 'D.confusing',E: 'E.confining',F: 'F.exhilarating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：她不理解为什么这两种东西的设计需要不同的鉴赏力,说明她对于 设计分类的知识非常有限.limiting 有限的,confining 受限的. \n***翻译：甚至是在她去艺术学校之前,V 还发现标准的设计门类有些狭窄,她不 能明白为什么设计建筑和设计桌子需要用不同的鉴赏力."]}),

wx.setStorage({key: "860", data: ["861.Given the many thematic strands that the book seeks to draw together into a continuous cord of narrative, it is perforce work of , which is not to say that the author\'s research fails to provide sufficient detail about each of his chosen themes.",
{A: 'A.synthesis',B: 'B.conjecture',C: 'C.analysis',D: 'D.reconstruction',E: 'E.accretion',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 draw together into a continuous cord of narrative, 所以正确答案选 A 选项.synthesis 综合,合成. \n***翻译：鉴于很多缕主题,这本书想要把这些思路融合成一个连续的叙事线绳, 所以它一定是一个合成的作品,这并不是说这个作者的研究不能提供他所选的 主题的足够多的细节."]}),

that.setData({progress_percent:86}),wx.setStorage({key: "861", data: ["862. For many in the room, the idea of coming to the assistance of a rival was more than unpleasant: it was _______.",
{A: 'A.unpropitious',B: 'B.anomalous',C: 'C.anathema',D: 'D.redundant',E: 'E.meretricious',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：more than unpleasant 对应空格,正确答案选 C 选项.anathema 令 人厌恶的东西. \n***翻译：对于屋里的很多人来说,帮助对手的想法远不止让人不开心：它是令人 厌恶的东西."]}),

wx.setStorage({key: "862", data: ["863. That Seiberg and Witten lack celebrity can be explained by the_______nature of their pursuit: the mathematical exploration of four-dimensional space.",
{A: 'A.pedestrian',B: 'B.esoteric',C: 'C.compelling',D: 'D.global',E: 'E.unequivocal',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：the mathematical exploration of four-dimensional space 对应 了空格的意思,四维空间是深奥的内容,所以正确答案选 B 选项.esoteric 深 奥难懂的. \n***翻译：塞伯格和威滕名气不大可以被他们的追求的深奥性所解释：对四维空间 的数学探索(的追求)."]}),

wx.setStorage({key: "863", data: ["864. In science education, it is important to differentiate between inaccurate ideas that are conceptually (i)_____and understandings that are inaccurate, and yet can (ii)_____learning of more sophisticated understanding. The former are simply wrong, the latter can be seen as incomplete, overly simplistic, or tied to only a few limited contexts.",
{A: 'A.unproductive',B: 'B.unproblematic',C: 'C.distinct',D: 'D.foster',E: 'E.delay',F: 'F.resemble',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：既然说前者是 simply wrong,说明第一空是负评价词,所以答案选 A 选项,第二空和 that are inaccurate 转折,所以第二空选正评价动词,所以 答案选 D 选项.unproductive 无效率的,foster 推动. \n***翻译：在科学教育中,区别概念上无效率的不准确想法和不准确但能够推动学 习更复杂的理解是很重要的.前者很明显是错的,后者可能被认为是不完整 的,过度简化或者只和一些有些的背景联系的."]}),

wx.setStorage({key: "864", data: ["865. Many researchers assume that politicians consider the preferences of the entire public, and not merely those of likely voters, when making decisions. Yet, since the desire to be reelected is central, it is plausible that politicians (i)_____the opinions of likely voters in formulating their positions on issues. It is possible that researchers\' suppositions about policy makers\' (ii) _______ aggregate public opinion may serve to (iii)_____the fact that only the preferences of likely voters actually matter.",
{A: 'A.rely insufficiently on',B: 'B.depart sporadically from',C: 'C.attend disproportionately to',D: 'D.responsiveness to',E: 'E.neglect of',F: 'F.misrepresentation of',G: 'G.mask',H: 'H.reflect',I: 'I.obviate'},
"###解析：yet 转折,前面说政治家关注所有人,所以空格要体现政治家关注 likely voters 更多,所以第一空选 C 选项.第二空重复研究者的说法,研究 者认为政治家是关注所有人的,所以第二空选 D 选项,第三空选一个表示掩盖 意思的词,因为研究者的说法和政治家实际的做法是不一致的,所以选 G 选 项.attend disproportionately to 不成比例地关注,responsiveness to 对...的回应,mask 掩饰. \n***翻译：很多研究者认为政治家在做决策时会考虑整个公众的偏好,而不是只是 那些可能的投票人.然而,因为要连任的愿望很重要,所以很可能政治家不成 比例地关注那些可能的投票人来确定他们在一些问题上的立场.有可能研究者 对于政策制定者对所有公众有反馈的假设可能会掩盖这样一个事实,即只有那 些真正可能的投票人的偏好才有重要性."]}),

wx.setStorage({key: "865", data: ["866.  Observers of modern presidential campaigns who (i)_____the highly (ii)_____productions that pass for campaigns these days do sometimes find reason for hope in the occasional mix-ups that (iii)_____candidates on the trail despite the presence of political strategist\'s plotting every event with the tactical precision of military commanders.",
{A: 'A.relish',B: 'B.misinterpret',C: 'C.despair over',D: 'D.ambitious',E: 'E.chaotic',F: 'F.choreographed',G: 'G.rattle',H: 'H.bolster',I: 'I.legitimate'},
"###解析：sometimes find hope,说明一般都是绝望,所以第一空选 C 选项, 第二空和文章的 mix-ups 取反,所以正确答案选 F 选项,也就是说对于计划好 的东西很绝望,但是在混乱中找到希望,第三空 mix-ups 对于竞选人必然是不 好的东西,第三空依然负评价动词,所以正确答案选 G 选项.despair over 对...…绝望,choreograph 精心安排的,rattle 使不安. \n***翻译：对高度设计好的的出现在这些日子的竞选中的东西感到绝望的现代总统 竞选的观察者有时却的确在寻找偶然的混乱中能够找希望的理由,这些混战让 竞选人非常不安,尽管政治战略家用有谋略的军事长官般的精确性策划了每一 个事件."]}),

wx.setStorage({key: "866", data: ["867.  Upon realizing that the indicators of a stressful situation can be extremely _______, the psychologist reconsidered her claim that a reliable way of reducing stress is to recognize stressful situations and then avoid them.",
{A: 'A.acute',B: 'B.exiguous',C: 'C.persistent',D: 'D.overstated',E: 'E.tenuous',F: 'F.unrelenting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说 reconsidered her claim that a reliable way of reducing stress is to recognize stressful situations and then avoid them 说明这个 situation 的 indicator 是不明显的,才导致了 reconsider 这 个词,所以正确答案选 BE 选项.exiguous 细小的,tenuous 微弱的. \n***翻译：在意识到压力情况的迹象可能是极其微弱的之后,这个心理学家重新考 虑了之前的言论,那个言论说减少压力的有效方式是找出压力情景然后去避免 它们."]}),

wx.setStorage({key: "867", data: ["868.  To call Kermode the finest English critic of his generation would be a_______compliment, since not many of its population are professionally engaged in literary criticism.",
{A: 'A.sincere',B: 'B.backhanded',C: 'C.paltry',D: 'D.heartfelt',E: 'E.meager',F: 'F.plausible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从事文学评论的人很少,所以说他是最好的这种说法有一定局限性, 所以正确答案选 CE 选项.paltry 无价值的,meager 缺乏的.(此题道理大概 类似我们平时讲的笑话,你跑得最快,虽然比赛只有两个人,还有一个是瘸 子).\n***翻译：讲 K 视为他那个时代中最棒的英国批判学家实在是个不可取的称赞,因 为并那个时期并没有很多人涉足文学批判."]}),

wx.setStorage({key: "868", data: ["869.  In sharp contrast to the novel\'s scenic realism and precisely characterized figure is its persistent philosophical _______.",
{A: 'A.naturalism',B: 'B.abstraction',C: 'C.generality',D: 'D.impartiality',E: 'E.sincerity',F: 'F.objectivity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前后取反,前面特征是 scenic realism and precise characterized figure,所以后面特征选 BC 选项.abstraction 抽象, generality 笼统. \n***翻译：和这个小说中的舞台真实性还有人物的准确描述极度相反的是它固执的 哲学上的抽象笼统的东西."]}),

wx.setStorage({key: "869", data: ["870.  Estimating demographic parameters in marine mammals is challenging, often requiring many years of data to achieve sufficient precision to_______biologically meaningful change.",
{A: 'A.effect',B: 'B.tolerate',C: 'C.discern',D: 'D.envisage',E: 'E.withstand',F: 'F.detect',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：收集多年的资料的目的是觉察出变化,所以正确答案选 CF 选项. discern 觉察,detect 发现. \n***翻译：估算海洋类哺乳动物的数量参数,经常需要收集很多年很多年的资料, 才能达到足够的准确去识别生物上有意义的改变."]}),

wx.setStorage({key: "870", data: ["871.Many Latin American writers and critics have come to bristle at the very mention of the type of fiction termed \"magic realism,\" but to the common reader the appeal of such fiction is _______.",
{A: 'A.elusive',B: 'B.undiminished',C: 'C.unfathomable',D: 'D.unexpected',E: 'E.derivative',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：bristle at 是\"对…感到愤怒\"的意思,前面是对这种小说的批 评,后面转折,所以后面的意思是读者对于这类书的痴迷没有因此减少,正确 答案选 B 选项.undiminished 未减少的. \n***翻译：很多拉丁美洲作家和评论家已经开始对被称为魔幻现实主义的小说类型 的提及感到愤怒,但是对于普通读者来说,这类书的吸引力没有减少."]}),

that.setData({progress_percent:87}),wx.setStorage({key: "871", data: ["872. Shirky argues that the Internet (i)_____the needs for hierarchical structures and the sluggish organizations that (ii)_____them: the Internet makes it possible to do things cheaply and efficiently on one\'s own.",
{A: 'A.delineates',B: 'B.obviates',C: 'C.redoubles',D: 'D.circumvent',E: 'E.perpetuate',F: 'F.undervalue',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的 cheaply 和 efficiently 和 hierarchical 和 sluggish 是 反义,说明第一空要取一个表示避免的动词,选 B 选项,第二空前面的 that 指 的是 needs,所以这些需求是让这些 structures 和 organizations 长期存在 了,第二空正确答案 E 选项.obviate 避免,perpetuate 使永久.\n***翻译：S 认为因特网避免了对于等级制的结构和懒惰的组织的需求,而这是这 些需求使得这些结构和组织长期存在的：因特网使得独立便宜有效做事变得可 能了."]}),

wx.setStorage({key: "872", data: ["873. Not only is the field of behavioral genetics strewn with (i)_____findings, but even among those findings that managed to survive, many have turned out to be (ii)_____a very restricted class of cases.",
{A: 'A.convergent',B: 'B.disparate',C: 'C.repudiated',D: 'D.refuted by',E: 'E.germane to',F: 'F.subordinate to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据后文的 even among those findings that managed to survive 说明填入 managed to survive 的反义词,所以选 C 选项,第二空取 managed to survive 的反义,在选项中只能是 E 选项,就算是保留下来的也之 和有限的案例有关联.repudiated 被否决的,germane to 有关联的. \n***翻译：不仅行为遗传学领域充满了被否决的发现,而且就算在那些成功存活下 来的发现中,很多发现也被证明只和很局限的案例相关."]}),

wx.setStorage({key: "873", data: ["874. The prime minister\'s spokesman faces a difficult task in defending his boss from what he sees as the (i)_____of a decidedly prejudiced press. To make his defense effectively he will certainly have to give specific examples of the media coverage he finds so (ii) _______.",
{A: 'A.overwrought panegyrics',B: 'B.lowly calumnies',C: 'C.justified fulminations',D: 'D.objectionable',E: 'E.confusing',F: 'F.unexciting',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：从 decidedly prejudiced press 能看出第一个空格选一个体现\"不 正确的指责\",正确答案选 B,第二空和第一空是同义重复,所以选 D 选项最 合适. \n***翻译：首相的发言人面临困难的任务,要捍卫他的老板,因为他看到了一个充 满偏向性的新闻报社的卑微的诽谤.为了使他的辩论更具有效率,他一定会列 举很多关于这个媒体的无法接受的报道."]}),

wx.setStorage({key: "874", data: ["875. However luminous an insight might seem initially, brilliance is not a reliable predictor of (i) ______________, and sure enough the history of physical chemistry is replete with theories that were as (ii)_____as any but that (iii) _______.",
{A: 'A.popularity',B: 'B.originality',C: 'C.validity',D: 'D.opaque',E: 'E.ingenious',F: 'F.useful',G: 'G.slowly developed',H: 'H.eventually collapsed',I: 'I.ultimately prevailed'},
"###解析：要证明前面的观点\"才智并不是...的预言\",所以意思就是有才智 的东西还是会失败,所以第三空选 E 选项,那么第一空也可以得知选 C 选项, 第二空对应 brilliance,所以选 E 选项.validity 有效性,ingenious 机灵 的,eventually collapse 最终失败. \n***翻译：无论一个见解起初看起来是多么的熠熠生辉,这种才智并不是一个可靠 的代表着它有依据的预言,而且足够肯定的是物理化学的历史充满了很多聪明 的理论,但这些理论却最终失败了."]}),

wx.setStorage({key: "875", data: ["876.  Many historians of the ancient world are wary of sounding (i) _______. Write so much as a sentence and the temptation is immediately to (ii)_____it. Even in cases when the sources for a given event are (iii) _______, uncertainties and discrepancies crop up everywhere.",
{A: 'A.fusty',B: 'B.anachronistic',C: 'C.dogmatic',D: 'D.recapitulate',E: 'E.forswear',F: 'F.qualify',G: 'G.consistent',H: 'H.plentiful',I: 'I.biased'},
"###解析：第一空根据后文的 so much as a sentence 得知这些历史学家害怕教 条,第二个空是来体现他们如何避免教条,就是简单一句话就想认证.第三空 是在反驳这种人的做法,有些事件的资料来源很丰富,都还是有不确定和矛 盾,难道你一句话就能搞定吗？正确答案选 CFH.dogmatic 教条的,qualify 认证,plentiful 丰富的. \n***翻译：很多远古时代的历史学家都对于说话过于教条而小心翼翼.甚至就写一 个句子,但却想立即认证它.就算对于一桩信息丰富的事件,不确定性和矛盾 仍然无处不在."]}),

wx.setStorage({key: "876", data: ["877.  Governments are often willing to pay the direct costs of preparing for emergencies that may never happen: they make room in their budgets to prepare for_______but unlikely events.",
{A: 'A.plausible',B: 'B.anticipated',C: 'C.dangerous',D: 'D.conceivable',E: 'E.foreseen',F: 'F.unimaginable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题空格和 unlikely 取反,根据选项只能是 BE 选项.anticipated 预料的,foreseen 能预见的. \n***翻译：政府们通常都很乐意去支付准备那些从来不会发生的紧急情况的直接消 费,他们在政府预算中预留出给这些预知的但不易发生的事件的经费."]}),

wx.setStorage({key: "877", data: ["878.  Sports stars are often_______figures, regarded as representative of the city or country for which they compete.",
{A: 'A.totemic',B: 'B.iconoclastic',C: 'C.protean',D: 'D.idealized',E: 'E.irreverent',F: 'F.emblematic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：regarded as representative 说明空格要选 representative 的同义 词,所以正确答案选 AF 选项.totemic 象征意义的,图腾的,emblematic 象征 的. \n***翻译：运动明星经常是象征意义的任务,被当成是他们所竞争的城市或者国家 的代表."]}),

wx.setStorage({key: "878", data: ["879.  The life of a secret agent is dangerous enough, but the life of a double agent is infinitely more_______: a single slip can send an agent crashing to destruction.",
{A: 'A.arduous',B: 'B.precarious',C: 'C.clandestine',D: 'D.perilous',E: 'E.covert',F: 'F.exhilarating',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：more 递进前面的 dangerous,所以空格选 dangerous 同义,正确答案 选 BD 选项.precarious 危险的,perilous 危险的. \n***翻译：特工的生活是十分危险的,但是双重间谍的生活更是极其危险的,一个 小小的失误将会导致一个间谍的崩溃和毁灭."]}),

wx.setStorage({key: "879", data: ["880.  The writer\'s assignment of the critic includes personal_______such as jibes about his physical girth and style of delivery, and is not the better for it.",
{A: 'A.aspersions',B: 'B.commendations',C: 'C.falsehoods',D: 'D.fantasies',E: 'E.whims',F: 'F.slurs',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：such as jibes 非常清晰地指出空格选 jibe 的同义词,正确答案选 AF 选项.aspersion 诽谤,slur 诽谤. \n***翻译：评论家关于这位作家的评价包括个人中伤,比如奚落他身体的情况,腰 围还有表达方式,这样做并不是很好."]}),

wx.setStorage({key: "880", data: ["881.Paintings created in India during the Mughal dynasty were in ambition but ornamental in presentation: in one direction they have an affinity with newspaper photographs, while in the other they have the intricacy of jewels.",
{A: 'A.metaphorical',B: 'B.documentary',C: 'C.aesthetic',D: 'D.sectarian',E: 'E.baroque',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：in one direction they have a affinity with newspaper photographs 对应的就是空格,newspaper photographs 就是写实的特征,所以 正确答案选 B 选项.documentary 纪实的. \n***翻译：在莫卧儿王朝时期的印度创作的画在志向上是纪实性的但在表现上却是 装饰性的：一方面它们和报纸的照片类似,一方面它们有珠宝的错综复杂."]}),

that.setData({progress_percent:88}),wx.setStorage({key: "881", data: ["882. It remains a mystery how Theobroma cacao, which scholars believe originated in lowland Amazonia, was introduced to tropical Mesoamerica. It must have been a (i)_____process: cacao trees do not easily sprout from seed, need years to mature, and grow only in humid lowland forest. Moreover, in a tropical climate, cacao pods spoil quickly, rendering their transport from lowland Amazonia tropical Mesoamerica in a single journey by foot or canoe (ii) _______.",
{A: 'A.clandestine',B: 'B.protracted',C: 'C.spontaneous',D: 'D.unlikely',E: 'E.redundant',F: 'F.expeditious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说不知道 cacao 是如何引进到 M 这个地区的,说明这个过程很困 难,所以第一空选 B 选项,后文进一步解释这种事情的不可能性,所以对应的 选项是 D.protracted 拖延的,unlikely 可能性小的. \n***翻译：关于可可,一种学者们认定起源于亚马逊低地的植物,是如何被带到热 带的中美洲的,仍然是一个谜.这一定是一个漫长的进程,因为可可种子很难 发芽长成可可树,需要进过很多年才能成熟,并且只生长于潮湿的低地森林. 除此之外,在热带气候下,可可豆很快会腐败,致使关于可可可能是通过步行 或船只从亚马逊传播到中美洲的说法变得不切实际."]}),

wx.setStorage({key: "882", data: ["883. To the avid reader of $#$E.O. Wilson, much of his most recent book Consilience: The Unity of Knowledge will be (i) _______, as the book represents the culmination of a life spent thinking about everything from the social lives of ants to the social lives of people. Nonetheless, new thoughts have been mixed in with the old to produce a book remarkable for its (ii)_____and ambition.",
{A: 'A.predictable',B: 'B.discounted',C: 'C.startling',D: 'D.purview',E: 'E.overreaching',F: 'F.contingency',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：as the book represents the culmination of a life spent thinking about everything from the social lives of ants to the social lives of people 对于 avid 的读者来说必然是负评价,后文对这个负评价说的 是 old,所以第一空对应 old,答案选 A,第二空和 ambition 平行,所以选广 义同义词即可,对应前文的描写的内容范围,正确答案选 D 选项.predictable 墨守成规的,purview 范围.\n***翻译：对于 E.O.W 的热衷读者来说,他最近的新书 Consilience 中大部分的内 容是墨守成规的,这本书作为代表人生思考的顶峰,它思索从蚂蚁的社会生活 到人类的社会生活这些日常平淡事务.然而,新的想法和旧的想法混合在了一 起,著作成了一本因其中范围和志向而出名的书."]}),

wx.setStorage({key: "883", data: ["884. Until the advent of film, commercial entertainment in England occurred only where concentrated urban populations provided audiences large enough to make it remunerative: theaters and music halls were (i)_____in rural villages. But village cinemas quickly become (ii) _______, even though they were ramshackle affairs in comparison to the urban picture palaces.",
{A: 'A.spartan',B: 'B.conceivable',C: 'C.profitable',D: 'D.commonplace',E: 'E.sophisticated',F: 'F.unfashionable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对比城市和农村,城市能盈利,农村取反,所以第一空选 A 选 项,第二空根据 but 得知后面是正评价,所以第二空选 D 选项.spartan 简朴 的,commonplace 常见的. \n***翻译：在电影出现之前,英国的商业娱乐只在城市人口集中的地方出现,在那 里观众数量庞大到足够使其回报颇丰：乡村的剧院和音乐厅是很简朴的.但是 乡村电影院很快变得普及,尽管它们和城市的图片宫殿比起来破烂不堪."]}),

wx.setStorage({key: "884", data: ["885. His new role gives the normally clownish actor a chance to impress audiences with his (i)      . He is among the most uninhibited comic performers around, but here he buttons his lip and stares straight ahead. Perhaps without quite knowing it, the audience waits for a wink, a hint that some of the (ii)         spirit that animated his previous movies might be lurking inside the (iii)          manner he presents in this film.",
{A: 'A.raillery',B: 'B.effusiveness',C: 'C.forbearance',D: 'D.madcap',E: 'E.lugubrious',F: 'F.edifying',G: 'G.facetious',H: 'H.reserved',I: 'I.beguiling'},
"###解析：buttons his lip and stares straight ahead 体现了他新角色的特 征,其实就是与之前的 uninhibited 取反,第一空选 C 选项,第二空是他之前 的电影的风格特征,所以对应 uninhibited 的同义,选 D 最合适,第三空根据in this film 又得知选新角色的特征,那就是 uninhibited 的反义词,所以选 H 选项.forbearance 克制,madcap 鲁莽的,reserved 保守的. \n***翻译：他的新角色能让这个通常饰演粗笨之人的他一个机会去运用他的忍耐而 感动自己的观众.他大约是最骄傲的喜剧演员,但现在他现在却收紧嘴唇凝视 前方.可能是因为不太知道这个,观众们在等待着一个暗示或者机会,能看到 之前他电影中他表演的那种的粗鲁的脾气,现在被他隐藏在现在这个电影中的 内向角色中."]}),

wx.setStorage({key: "885", data: ["886.  Some climatologists dismiss as (i)_____the debate among geophysicists over the role of carbon dioxide in global climate change across many millions of years. These climatologists say the evidence of a tie between carbon dioxide and planetary warming over the last few centuries is so (ii)_____that any longer-term evidence against such a link must somehow be (iii) _______.",
{A: 'A.unavoidable',B: 'B.irrelevant',C: 'C.undecidable',D: 'D.unlikely',E: 'E.controversial',F: 'F.compelling',G: 'G.tainted',H: 'H.accommodated',I: 'I.reinforced'},
"###解析：dismiss 说明第一空是负评价词,所以 B 选项最好.第二空和第三空 联系,因为二氧化碳和行星变暖的联系紧密,所以反对这个联系的证据都是有 污点的.irrelevant 无关紧要的,compelling 强大的,tainted 有污点的. \n***翻译：一些气候科学家认为关于二氧化碳在全球气温变化中的角色的辩论是无 关紧要的所以不予考虑,这些气候学家说,有关这几个世纪以来二氧化碳和全 球变暖之间的联系的证据实在是太明显,所以任何反对这种联系的证据都是有 污点的."]}),

wx.setStorage({key: "886", data: ["887.  A priori mathematics, according to Galileo, does not_______the need for observation, but mathematics does allow us to deduce unobservable properties and thus to penetrate further into the structure of nature than observation does.",
{A: 'A.address',B: 'B.acknowledge',C: 'C.obviate',D: 'D.diminish',E: 'E.displace',F: 'F.appreciate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文转折说数学能够让我们推理无法观察的东西,更深研究自然的结 构,所以空格填入取代的意思,并不取代观察,只是能做一些观察做不了的 事,答案选 CE 选项.obviate 排除,displace 取代. \n***翻译：推理数学,根据伽利略的说法来看的话,并不取代观察的需求,但是数 学确实能够让我们推断注意不到的特性而且因此能让我们比起观察更深地研究 自然的结构."]}),

wx.setStorage({key: "887", data: ["888.  One of the peculiarities of humans is that we irrationally gravitate to the predictable and avoid risk, whatever the reasons for this _______, it is hardly a sound basis for dealing with complex, long- term problems.",
{A: 'A.eccentricity',B: 'B.predilection',C: 'C.vacillation',D: 'D.proclivity',E: 'E.wavering',F: 'F.cowardice',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：irrationally gravitate to 说明我们在做事的时候有一个倾向,所 以空格选\"倾向\",正确答案选 BD 选项.predilection 偏爱,proclivity 倾 向. \n***翻译：人类的独特怪癖中,我们不够理智地被可预测或者避免的危险而吸引. 不管这个倾向是因为什么原因,解决这个长期的,艰难的困难很难听起来像是 个基础的问题."]}),

wx.setStorage({key: "888", data: ["889.  An abundance of nutrient-rich pollution in estuaries causes algae to _______, much as houseplants grow better when their soil contains added fertilizer.",
{A: 'A.abound',B: 'B.proliferate',C: 'C.stagnate',D: 'D.coalesce',E: 'E.collect',F: 'F.diversity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：much as houseplants grow better when their soil contains added fertilizer 这句话和前面是类比关系,所以空格要选 grow 的同义,正 确答案选 AB 选项.abound 丰富,proliferate 激增. \n***翻译：在河口大量富含营养的污染物导致水藻大量繁殖,就像室内植物会在土 壤有额外的化肥的时候长得更快一样."]}),

wx.setStorage({key: "889", data: ["890.  The stories of silent drama may often have been _______; yet, within those broad outlines, the true artists among silent-film actors could express shadings that had no immediate analogue in language.",
{A: 'A.implausible',B: 'B.incredible',C: 'C.conventional',D: 'D.elemental',E: 'E.rudimentary',F: 'F.confusing',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说到无声喜剧的演员能做很困难的是,根据 yet 说明这些故事 是初级的.elemental 基本的,rudimentary 初级的.\n***翻译：无声喜剧的故事经常是初级的；然而,在这些宽泛的范围内,无声喜剧 演员中真正的艺术家能够表达那些语言中没有直接类似物的细微差别."]}),

wx.setStorage({key: "890", data: ["891.He defended the government\'s equivocations regarding the mysterious contrail as resulting not from    as critics say, but from a benightedness about its own doings that is almost inevitable, given the multitudinous- ness of its agencies.",
{A: 'A.obtuseness',B: 'B.mendacity',C: 'C.abnegation',D: 'D.guilelessness',E: 'E.trenchancy',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：not...but...这个短语说明要选一个理由,这个理由是很多人认为政 府含糊其辞的原因,而后文说政府含糊其辞的原因是 benightedness\"无 知\",所以前文对应最好的选项就是 B 选项.mendacity 谎言. \n***翻译：他辩护政府关于这种神秘的航迹云的闪烁其词,他认为这种闪烁其词不 是评论家所说的政府在撒谎,而是政府对于几乎是必然的航迹云的行为的无 知,因为它(航迹云)的动机的多样性."]}),

that.setData({progress_percent:89}),wx.setStorage({key: "891", data: ["892. Scientists have argued not only that the chains of atoms called ladder compounds have  _______ theoretical interest but also that studies of such systems can lead to important practical applications.",
{A: 'A.limited',B: 'B.dubious',C: 'C.superfluous',D: 'D.unidimensional',E: 'E.intrinsic',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 not only 和 but also 得知前后关系是并列,后面的核心意思是 important practical applications,所以空格选 important 的同义,正确答 案选 E 选项.intrinsic 固有的,真正的. \n***翻译：科学家们认为不仅是所谓梯状结构化合物的原子的链本身具有理论价 值,对这种系统的研究也有重要的实际应用."]}),

wx.setStorage({key: "892", data: ["893. The professor frequently reiterated a basic assumption behind the experimental method--- namely, that the outcome of the experiment is always (i) _______. The hypothesis can never assume the experiment\'s results, in other words, but instead must (ii)_____their appearance.",
{A: 'A.undetermined',B: 'B.incontrovertible',C: 'C.inconsequential',D: 'D.await',E: 'E.signal',F: 'F.negate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 The hypothesis can never assume the experiment’s results 的重复信息告诉我们,这个结果是不定的,所以第一空选 A 选项,第 二空转折,尽管结果不确定,但是表明结果会出现,第二空选 E 选项. undetermined 未确定的,signal 标记. \n***翻译：教授经常重申一个在实验方法背后的基本假设—那就是说,实验的结果 通常是无法确定的.换句话说,这个假设绝对不能表明实验的结果,但是一定 表明他们的出现."]}),

wx.setStorage({key: "893", data: ["894. Hyana Kusiemko and her colleagues speculate that the (i)_____support among low-income works for increases in the minimum wage is a form of last-place aversion: people who are in a marginally better position than the worst off seek to (ii)_____to distinguish themselves from those in last place.",
{A: 'A.unwavering',B: 'B.vociferous',C: 'C.tepid',D: 'D.disavow their willingness',E: 'E.retain their ability',F: 'F.dissemble their need',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：既然是厌恶最后一名,说明这些人对于最低工资上涨没有支持,所以 第一空选 C 选项,第二空解释原因,不想要最低工资上涨是因为他们想保持和 那些低工资的人差距,所以第二空选 E 选项.tepid 冷淡的,retain their ability 保持能力.\n***翻译：HK 和她的同事推测说对于低收入工作最低工资上涨比较冷漠的支持是一 种厌恶末位的表现：那些刚好比穷人处于好一点点的位置上的人们想要维持他 们和最后面的人的差距."]}),

wx.setStorage({key: "894", data: ["895. Unlike the elected branches of the United States government, where making personal connection with citizens is (i)_____and almost (ii)_____political efficacy, the United States Supreme Court continues to maintain that its members should communicate with the public almost exclusively through formal opinions-and even then through ceremonial rituals that date back to the nineteenth century.",
{A: 'A.frowned upon',B: 'B.rampant',C: 'C.disregarded',D: 'D.a requirement for',E: 'E.a detriment to',F: 'F.an irrelevance to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题最关键的是要看到 exclusively 一词,这个词说明最高法院接触 公众的途径少,再通过 unlike 可知分支机构接触公众的途径很多,almost 又 是递进关系,所以两个空都体现\"多\",而且前后要递进,所以正确答案选 BD 选项.rampant 疯长的,很多的,requirement 要求. \n***翻译：与美国政府的当选分支,一个与国民私交情况很频繁,甚至几乎成为为 政府效力的前提条件的机构不同,美国最高法院一直坚持其中成员与外界民众 只能通过公共方式进行交流,通过公共意见,或者是从十九世纪开始就有的仪 式."]}),

wx.setStorage({key: "895", data: ["896.  Part of what currently makes it so (i)_____to arrive at a scientific understanding of the living world is that while technological advances have produced a cascade of data-from detailed genome sequence to the sophisticated satellite imagery that documents the planet\'s ecosystems- our ability to (ii)_____these data still lags far behind their (iii) _______.",
{A: 'A.frustrating',B: 'B.intriguing',C: 'C.challenging',D: 'D.gather',E: 'E.apprehend',F: 'F.dispute',G: 'G.acquisition',H: 'H.interpretation',I: 'I.implementation'},
"###解析：从后文的 lags far behind 告诉我们第一空一定是负评价,A 选项语 义不符合,只能选 C 选项,第二空和第三空解释为什么会 challenging,尽管 数据多,但是没法理解,所以第二空选 E 选项,第三空选 G 选项.challenging 有挑战性的,apprehend 理解,acquisition 获取. \n***翻译：部分让达成一个对于所生活的世界的科学理解的挑战在于尽管技术进步 已经产生了大量的数据—从详细的基因组合到记录了地球生态系统的复杂卫星 图像—但是我们理解这些数据的能力依然落后于获取它们的能力."]}),

wx.setStorage({key: "896", data: ["897.  In the wild, no other mammal_______individuals from another species; badgers do not tend hares, deer do not nurture baby squirrels, lions do not care for giraffes.",
{A: 'A.protects',B: 'B.fosters',C: 'C.aids',D: 'D.cajoles',E: 'E.adopts',F: 'F.coaxes',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：解释说明,取后文的 tend,nurture 和 care for 的同义词,所以正 确答案选 BE 选项.foster 抚育,支持,adopt 收养. \n***翻译：在野生世界中,没有任何一种哺乳动物会哺育另一种生物,獾不会帮助 野兔,鹿不会哺育松鼠,狮子也不会关心长颈鹿."]}),

wx.setStorage({key: "897", data: ["898.  Recent research runs counter to the long-cherished notion that a small drop in body temperature during and after surgery is either_______or actually protects the patient by slowing metabolism and reducing the body\'s demand for blood and oxygen.",
{A: 'A.beneficial',B: 'B.immaterial',C: 'C.inconsequential',D: 'D.preventive',E: 'E.prophylactic',F: 'F.redundant',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：此题逻辑较简单,通过 either...or...得知前后要取反,正确答案 选 BC 选项.immaterial 无关紧要的,inconsequential 无关紧要的. \n***翻译：最近的研究和以往一直坚持的概念背道而驰,这个研究是关于在手术过 程中和手术之后,人体温度的小幅度下降或许只是无关紧要的,也或许真的能 通过降低新陈代谢和减少人体血氧需求而保护人体."]}),

wx.setStorage({key: "898", data: ["899.  In the northeastern United States, beaver populations had been critically reduced or even         in large areas at the end of nineteenth century; as a result, several states instituted prohibitions on beaver trapping.",
{A: 'A.diminished',B: 'B.extirpated',C: 'C.eliminated',D: 'D.devalued',E: 'E.weakened',F: 'F.underrated',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：even 递进关系,所以空格后面选 reduce 的递进,所以正确答案选 BC 选项.extirpate 绝迹,eliminate 消灭.此题 A 选项不对是因为 diminish\"减少\"和 reduce 只能同义,没有递进. \n***翻译：在美国东北部,河狸的数量在十九世纪末期大部分地方已经严重减少甚 至已经快灭绝了.结果,好几个州都颁布了禁止抓捕河狸的法令."]}),

wx.setStorage({key: "899", data: ["900.  Laughter, like speech, is primarily a human faculty, although both functions may also exist in a more_______form in lesser primates.",
{A: 'A.indispensable',B: 'B.crucial',C: 'C.primitive',D: 'D.intelligible',E: 'E.recognizable',F: 'F.rudimentary',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：人类的能力在题目中是高级的,而 lesser primates 则是低级的, 所以空格选 lesser 同义,正确答案选 CF 选项.primitive 原始的, rudimentary 初级的. \n***翻译：笑就像演讲一样,主要是人类的能力,尽管两种功能可能也同时以更加 初级的形式存在于低级灵长类动物中."]}),

wx.setStorage({key: "900", data: ["901.Contrary to its reputation for intellectual _______, the 1950s was a decade exceptionally rich in works of trenchant and far-reaching social criticism.",
{A: 'A.keenness',B: 'B.inclusiveness',C: 'C.complacency',D: 'D.integrity',E: 'E.productivity',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 contrary 得知空格选后文 exceptionally rich 的反义,那么最佳 选项是 B 选项.inclusiveness 包罗万象. \n***翻译：和它智力的包罗万象的名声相反,20 世纪 50 年代是一个仅仅在尖刻和 影响深远的社会评论中丰富的十年."]}),

that.setData({progress_percent:90}),wx.setStorage({key: "901", data: ["902. The philosopher was a strong advocate of _______: he taught that happiness comes from forgoing one\'s desires.",
{A: 'A.magnanimity',B: 'B.duty',C: 'C.abstinence',D: 'D.pragmatism',E: 'E.tolerance',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面内容解释说明空格,空格对应 forgoing one's desires,所以 体现的是节制这种特征,正确答案选 C 选项.abstinence 节制. \n***翻译：这个哲学家是一个坚定的节制主义的支持者：他教导人们快乐来源于放 弃个人的欲望."]}),

wx.setStorage({key: "902", data: ["903. In light of Elizabeth\'s habitually (i)_____nature, her friend were quite surprised by her (ii) _______ at the convention.",
{A: 'A.ingenuous',B: 'B.laconic',C: 'C.intractable',D: 'D.garrulity',E: 'E.ostentatiousness',F: 'F.tenacity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 surprised 可知两个空格是反义关系,所以看选项得出答案选 BD 选 项.laconic 话少的,garrulity 话多. \n***翻译：因为伊丽莎白习惯性的话少的性格,所以她的朋友非常惊讶到她在这次 大会的话多."]}),

wx.setStorage({key: "903", data: ["904. After Betty found a qualified assistant to help her, the tasks that once seemed so (i) _______ became quite (ii) _______.",
{A: 'A.onerous',B: 'B.pleasant',C: 'C.trivial',D: 'D.manageable',E: 'E.challenging',F: 'F.unwieldy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：once seemed 和现在的情况取反,所以两个空格取反,而且根据 \"qualified 合格的\"可以得知后面选正面评价的词,前面选负面评价的词, 所以答案选 AD 选项.onerous 繁重的,manageable 能应付的.\n***翻译：在 Betty 找到一个合格的助手帮她之后,这些曾经看上去如此繁重的任 务现在变得能应付了."]}),

wx.setStorage({key: "904", data: ["905. Since the 1920s, historical fiction writers in China have emancipated the genre from the traditional notion that (i)_____was the ultimate goal of history writing. Yet the traditional commitment to (ii)_____was not simply (iii) _______: this new genre was expected to capture the essence of historical truth even as it allowed space for the writer\'s imagination.",
{A: 'A.comprehensiveness',B: 'B.factuality',C: 'C.entertainment',D: 'D.veracity',E: 'E.thoroughness',F: 'F.pleasure',G: 'G.jettisoned',H: 'H.rationalized',I: 'I.acknowledged'},
"###解析：通过冒号后面的内容推知,就算在新的题材中,真实也是很重要的,那 么第二空和第三空应该选 D 和 G 选项,也就是真实还没有被抛弃,而第二空和 第一空是同义词,都是指的传统的 notion,所以第一空选 B 选项.factuality 事实性,veracity 真实,jettison 抛弃.\n***翻译：自从 20 世纪 20 年代开始,中国的历史科幻小说作者就从这样一个理念 中解放了,这个理念的内容是说事实性是历史写作的最终目标.然后传统对于 真实的承诺也没有简单被抛弃：新的题材被预期会去抓住历史真实的本质,即 便它给作者的想象力留下了空间."]}),

wx.setStorage({key: "905", data: ["906.  The journey to (i) _______, when it starts from a vantage as (ii)_____as Dunsany\'s, is often as(iii)_____as the path to glory. How did a writer of such talent and renown wind up nearly forgotten?",
{A: 'A.obscurity',B: 'B.normalcy',C: 'C.genius',D: 'D.eminent',E: 'E.reactionary',F: 'F.egalitarian',G: 'G.unfathomable',H: 'H.cyclical',I: 'I.mundane'},
"###解析：注意关键词 the path to the glory,说明这个题是拿两个方向来对比 的,一个是从无名到光辉,一个是光辉到无名,所以第一空选 A 选项,第二空 根据 vantage 可知空格取正面的词,所以答案选 D 选项,第三空则根据后面的 问号作答,问号体现出这件事的难以置信,所以选 G 选项最合适.obscurity 无名(注意这里没用模糊晦涩的意思),eminent 杰出的,unfathomable 不可 理解的.\n***翻译：当路径从优势地位(像 Dunsany 一样杰出的优势)开始时,这种到无名 的旅程经常和到光辉的路径一样难以理解.一个拥有如此才能和名誉的作家怎 么最终几乎被大家遗忘的呢？"]}),

wx.setStorage({key: "906", data: ["907.  It is normal for artists who achieve great acclaim during their lifetimes to be considered  _______ shortly after their deaths, only to have their reputations restored by subsequent generations.",
{A: 'A.sacrosanct',B: 'B.outmoded',C: 'C.overrated',D: 'D.canonical',E: 'E.unfashionable',F: 'F.emblematic',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说他们的名声只能被后代恢复,说明前面他们的名声被遗忘了,所 以正确答案选 BE 选项.outmoded 过时的,unfashionable 过时的. \n***翻译：在世的时候实现伟大的称赞的艺术家以后立即变得过时这件事很正常, 只能让后代来恢复他们的名声了."]}),

wx.setStorage({key: "907", data: ["908.  Human perception is not a direct consequence of reality but rather requires imagination, because the data that people encounter in their lives are never complete and always _______.",
{A: 'A.equivocal',B: 'B.ambiguous',C: 'C.apparent',D: 'D.clear',E: 'E.transient',F: 'F.contradictory',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格和 never complete 平行,所以答案选 AB 选项.equivocal 模棱两 可的,ambiguous 模糊的. \n***翻译：人类感知不是真实情形的直接结果而是需要想象力,因为人们在生活中 碰到的数据从来不完整而且总是模棱两可的."]}),

wx.setStorage({key: "908", data: ["909.  Susanne Prediger argues that although rational decimals and fractions are mathematically equivalent, students generally deal with them in_______ways, hence they are not cognitively equivalent.",
{A: 'A.variable',B: 'B.divergent',C: 'C.unique',D: 'D.cursory',E: 'E.dissimilar',F: 'F.superficial',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过让步转折推知空格选前文 equivalent 反义,所以答案选 BE 选项. divergent 不一样的,dissimilar 不一致的.\n***翻译：Susanne Prediger 认为尽管有理小数和分数在数学上是一样的,但是学 生普遍用不同的方式来处理他们,因此他们在认知上是不同的."]}),

wx.setStorage({key: "909", data: ["910.  Although Lemettais was_______computer engineering, he lacked the spirit or enthusiasm to pursue it as a lifelong occupation.",
{A: 'A.fanatical about',B: 'B.adept at',C: 'C.indifferent to',D: 'D.diligent regarding',E: 'E.proficient in',F: 'F.apathetic about',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 although 的让步转折和后面说他缺乏 spirit 和 enthusiasm 可以推 知,前面选对于电脑工程正面的词,但是不能选 CF 选项,因为和 enthusiasm 直接矛盾,所以答案选 BE 选项最佳.adept at 擅长,proficient in 精通. \n***翻译：尽管 Lemettais 擅长电脑工程,但是他缺乏把它继续变成终生事业的精 神和热情."]}),

wx.setStorage({key: "910", data: ["911.The architecture of the Shanghai Bund was for decades presented as an archetypal symbol of abhorrent Western influence, which may be one of the reasons that these grand building were_______ for so many years.",
{A: 'A.imitated',B: 'B.extolled',C: 'C.commemorated',D: 'D.disdained',E: 'E.unnoticed',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说了这些建筑是 abhorrent,所以后面直接对应 abhorrent 的同义 词即可,正确答案选 D 选项.disdain 鄙视. \n***翻译：上海外滩建筑在好几十年中都是作为一种令人厌恶的西方影响的典型标 志,这是这些大建筑在这些年被鄙视的其中一个原因."]}),

that.setData({progress_percent:91}),wx.setStorage({key: "911", data: ["912. The wonder of Amy Chapman was her _______, her tenacious devotion to certain causes.",
{A: 'A.subtle allure',B: 'B.refractory willfulness',C: 'C.obstinate self-regard',D: 'D.brazen hubris',E: 'E.staunch fealty',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格同义重复后面的 tenacious devotion,所以正确答案选 E 选项. stauch fealty 坚定的忠诚. \n***翻译：艾米查普曼的奇迹在于她的坚定的忠诚,他对于某些事物的执著的热 爱."]}),

wx.setStorage({key: "912", data: ["913. In the new biography, Gonzalez doesn\'t (i)_____the aspects of her subject that have drawn criticism but instead creates them with considerable (ii) _______: hardly a fact or assertion goes by her without being sourced in the endnotes.",
{A: 'A.explain',B: 'B.acknowledge',C: 'C.evade',D: 'D.sympathy',E: 'E.thoroughness',F: 'F.ingenuity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容解释了这个人在创作的时候的全面性,所以第二空选 E 选项,第一空说明他并没有抛弃这些细节(细节是体现全面的).evade 躲 避,放弃,thoroughness 全面性.\n***翻译：在新的传记中,G 并没有抛弃她引起批评的主题的细节,反而用强大的 全面性来创造：几乎没有事实和断言能够在尾注中不被他找到."]}),

wx.setStorage({key: "913", data: ["914. The governor is known for her unwillingness to (i)_____policy decisions in the face of opponents typically, if she announces a specific policy and is confronted with objections from interest groups, she (ii)_____the policy.",
{A: 'A.adhere to',B: 'B.compromise on',C: 'C.disavow',D: 'D.resumes',E: 'E.appraises',F: 'F.abandons',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：这个题双空联动,前面不愿意坚持政策,后面对应放弃政策,AF 选项最 为合适,注意 resume 是重新开始的意思,所以 D 选项不考虑.adhere to 坚 持,abandons 放弃 \n***翻译：这个州长因为他在面对反对者时不愿意坚持政策决定而出名.如果她宣 布了一个特别的政策而且遇到利益群体的反对的话,他会放弃这个政策."]}),

wx.setStorage({key: "914", data: ["915. At least one otter species, the sea otter, has a large, often dominating, effect on the structure of its own habitat. There is no evidence that other species have ever exercised such (i)_____effects. That lack of evidence could merely be because the other species have been studied less thoroughly. However, the size and density of the historic sea otter populations in many Pacific coastal regions (ii)_____those of other otter species elsewhere, so perhaps the sea otter is indeed (iii)_____in its effects on habitat.",
{A: 'A.ephemeral',B: 'B.unpredictable',C: 'C.significant',D: 'D.vastly exceed',E: 'E.have little effect on',F: 'F.roughly parallel',G: 'G.unique',H: 'H.destructive',I: 'I.transitory'},
"###解析：第一空通过 such 推出选 large 和 dominating 同义,所以正确答案选 C 选项.第二空和第三空形成因果关系,因为海水獭和别的种类确实有不一样, 所以才会导致它的栖息地是独一无二的,所以 DG 选项最为合适.significant 重大的,vastly exceed 大量超过,unique 独特的. \n***翻译：至少一种水獭(海水獭)有一个大的且支配性的对于它自己的栖息地的 结构的影响.没有证据表明其他物种能够运用这种重大的影响.对于这件事缺 乏证据可能仅仅是因为其他物种被研究得不是很透彻.然而,在很多太平洋海 域的海水獭历史数量的大小和密度大量超过其他地方的其他水獭品种,因此很 可能还水獭确实在对它们栖息地的影响上是独特的."]}),

wx.setStorage({key: "915", data: ["916.  For many years Cole experienced (i)_____his professional circle. He was a (ii)_____figure in the Middle East Studies Association of North America, editing for five years its flagship publication, and in 2004 he was even elected the association\'s incoming president. But because his research focused on highly (iii)_____aspects of the eighteenth-and-nineteenth century Middle East, he was unlikely to achieve any sort of public acclaim.",
{A: 'A.obscurity within',B: 'B.estrangement from',C: 'C.anonymity outside',D: 'D.leading',E: 'E.provocative',F: 'F.traditional',G: 'G.relevant',H: 'H.esoteric',I: 'I.disputed'},
"###解析：通过 flagship 得知这个人在协会内是一个非常优秀的人物,所以第二空 选 D 选项,第三空根据后文说他不太可能获得整个公众的称赞,说明他研究的 内容是不能被广大人民接受的,所以 H 选项最合适,最后再填第一个空格,后 面的内容说明这个人在圈内很有名,但是在圈外不出名,所以第一空选 C 选 项.anonymity outside 在...外无名,leading 主要的,顶尖的,esoteric 晦 涩难懂的.\n***翻译：很多年来,Cole 在他的专业圈外不出名.他是一个在 MESANA 顶尖的人 物,花了五年时间编辑他的旗舰作品,而且在 2004 年他甚至被选为了这个协会的新任主席.但是因为他的研究高度关注 18 世纪 19 世纪中东的晦涩难懂的内 容,所以他不太可能获得整个公众高度的称赞."]}),

wx.setStorage({key: "916", data: ["917.  In science, replicability comes with the idea that the pursuit of scientific truth should not be_______: researchers who make claims must allow others to test them empirically.",
{A: 'A.incomplete',B: 'B.settled',C: 'C.private',D: 'D.unfinished',E: 'E.insular',F: 'F.unerring',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说\"提出言论的研究者必须让别人经验性地测试这些言论\",说明 这种研究不是私人的,不是狭隘的,所以答案选 CE 选项.private 私人的, insular 狭隘的. \n***翻译：在科学中,复现性和这样一个理念同时出现,对于科学真理的追求不应 该是狭隘的：提出言论的研究者必须让别人经验性地测试这些言论."]}),

wx.setStorage({key: "917", data: ["918.  Even the most hard-nosed critics could hardly deny that the novelist\'s best books are _______: they are filled with energy, imagination, and something close to a white-hot inspiration.",
{A: 'A.inventive',B: 'B.engaging',C: 'C.spirited',D: 'D.compassionate',E: 'E.vigorous',F: 'F.warmhearted',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面内容解释说明空格,正确答案选 CE 选项.spirited 有精神 的,vigorous 有活力的. \n***翻译：即使是最顽固的评论家也几乎不能否认小说家最好的小说是充满活力 的：它们充满了能量,想象力还有一些接近白热化的灵感."]}),

wx.setStorage({key: "918", data: ["919.  Liam Clancy described the young Bob Dylan as a sponge, eagerly absorbing the possibilities life and culture might provide, and Dylan presents himself so in his memoir_______in his intellectual and musical curiosity.",
{A: 'A.insatiable',B: 'B.devious',C: 'C.unique',D: 'D.pretentious',E: 'E.voracious',F: 'F.cunning',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对已 eagerly absorbing the possibilities,所以答案选 AE 选 项.insatiable 不知足的,voracious 贪婪的.\n***翻译：LC 把年轻的 BD 描述成一个海绵,非常急切地吸收生活和文化提供的所 有可能,而且 D 在他的回忆录中也是这样表现自己的,对于智力和音乐的好奇 贪得无厌."]}),

wx.setStorage({key: "919", data: ["920.  The Red Sea town of Aydhab presents scholars with _______: medieval records describe it as a major port for ships engaged in trade, yet today there is no trace of a viable harbor at the site.",
{A: 'A.an illusion',B: 'B.a contradiction',C: 'C.a chimera',D: 'D.a puzzle',E: 'E.an anachronism',F: 'F.a conundrum',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面解释内容说明这个镇很神秘,记录和现实不一样,正确答案选 DF 选项.puzzle 迷,conundrum 迷.\n***翻译：A 这个地方的 RS 镇给学者呈现了一个迷：中世纪的记录把它描绘成一个 船舶贸易的重要港口,而今天在这个却没有可通行的港湾存在."]}),

wx.setStorage({key: "920", data: ["921.The author affects_______in the tone of his novels that is quite at odds with his predilection for invective in his nonfiction publications.",
{A: 'A.a tenacity',B: 'B.a neutrality',C: 'C.a pugnacity',D: 'D.an effusiveness',E: 'E.an irascibility',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 at odds with(与...矛盾)推出空格选后文 invective 的反义, 所以正确答案选 B 选项.neutrality 中立. \n***翻译：这个作者假装在他的小说中表现出中立的语气,这种语气和他喜欢在写 实出版物中责骂的偏好是矛盾的."]}),

that.setData({progress_percent:92}),wx.setStorage({key: "921", data: ["922. The combination of Isabella Beeton\'s short life and the_______of evidence for some parts of her story means that at times her biography, Kathryn Hughes, is forced to fill out her narrative with background information.",
{A: 'A.reliability',B: 'B.plethora',C: 'C.relevance',D: 'D.paucity',E: 'E.transparency',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说被迫用背景信息来填补她的故事,说明她的故事的缺乏,所以正 确答案选 D 选项.paucity 缺乏.\n***翻译：IB 短暂的人生和她一部分故事的证据的缺乏意味着有些时候她的传记《KH》被迫用背景信息填入她的故事."]}),

wx.setStorage({key: "922", data: ["923. Far from (i)_____the actions taken by the newspaper\'s executives, William praised the executive\'s resistance to corruption-yet he doubted that their policies were practical enough to warrant (ii)_____by other papers.",
{A: 'A.lionizing',B: 'B.impugning',C: 'C.surveying',D: 'D.criticism',E: 'E.admiration',F: 'F.emulation',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 far from 得知取 praised 反义,所以正确答案选 B 选项,第 二空根据 yet 得知后面是一件负面的事情,那么这个政策的实用性会导致别的 报社的效仿,所以答案选 F 选项.impugn 指责,emulation 效仿. \n***翻译：没有去指责报社执行官的行动,反而 W 表扬了执行官对于贪污的抵制, 然而他怀疑到这些执行官的政策足够有实用性以至于能够确保其他报社来效 仿."]}),

wx.setStorage({key: "923", data: ["924. If you follow your intuition, you will more often than not err by misclassifying a random event as (i) _______. We are far too willing to (ii)_____the belief that much of what we see in life is random.",
{A: 'A.uncharacteristic',B: 'B.systematic',C: 'C.arbitrary',D: 'D.countenance',E: 'E.reject',F: 'F.champion',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据 misclassify(错误划分)推知,空格一定是 random 的反义 词,所以第一空选 B 选项,我们经常犯这个错误,说明我们习惯性地不相信很 多东西是随机的,所以第二空选 E 选项.systematic 系统性的,reject 反对. \n***翻译：如果你跟着直觉走,你会更加容易错误地把随机事件划分为系统性的. 我们太愿意去反对这样一个想法：我们生活中所看到的东西是随机的."]}),

wx.setStorage({key: "924", data: ["925. Although political events in different countries were (i)_____in the nineteenth century, their interrelationship was (ii)_____compared with the present, when (iii)_____has become far greater, isolationism has ceased to be an option.",
{A: 'A.connected',B: 'B.unobjectionable',C: 'C.unpredictable',D: 'D.superficial',E: 'E.cordial',F: 'F.improbable',G: 'G.idealism',H: 'H.interdependence',I: 'I.rigidity'},
"###解析：最后说当前国家之间的联系更深,孤立不再是选择,说明以前的联系很 浅,所以第二空选 D 选项,第一空和第三空根据题目的内容很容易选出 A 和 H 选项,因为这个题只是在讨论国家间的联系.\n***翻译：尽管 19 世纪在不同国家的政治事件是有联系的,但是他们的相互联系比 起当前是很浅层次的,当前的情况是相互联系变得愈发强大,孤立不再是一个 选择了."]}),

wx.setStorage({key: "925", data: ["926.  At a recent conference on ancient DNA, one presentation opened with the claim that the field was now mature and could move ahead with confidence. This (i)_____is (ii) _______, as demonstrated at the conference by the many presentations that notably lacked an adequate methodology for ensuring that DNA was uncontaminated by material that is more recent. In fact, ancient DNA research presents extreme technical difficulties, in part precisely because of the (iii)_____of surviving DN",
{A: 'A.',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：this 同义重复前文的内容,前文是说的一种 confidence,所以第一空选 B 选项,第二空根据后面说很多展示缺乏方法论,没法确保 DNA 不被污染,说 明这个乐观是没有根据的,第二空选 E 选项,第三空选 DNA 研究技术困难的原 因,那么正是前面说的 DNA 被 contaminated,所以第三空选 G 选项.optimism 乐观,unfounded 无根据的,corrupted nature 被污染的性质. \n***翻译：在最近的一次关于古老 DNA 的会议中,一个展示用这样一个言论开头： 这个领域现在是成熟的而且很有信心能够继续进步.这种乐观是没有根据的, 就像很多展示在这次会议中证明的那样,这些展示缺乏足够的方法论来确保这 些 DNA 是没有被较新的物质污染.事实上,古老的 DNA 研究表现出极大的技术 困难,部分正是因为现存 DNA 被污染的特性."]}),

wx.setStorage({key: "926", data: ["927.  As clucks of disapproval about Americans\' political_______have grown louder in recent years, many historian have looked for contrast to the decades before the Civil War as a time when Americans were enthusiastically engaged in politics.",
{A: 'A.zealotry',B: 'B.apathy',C: 'C.hypocrisy',D: 'D.partisanship',E: 'E.insincerity',F: 'F.passivity',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 contrast to 得知内战前的十年和最新的这些年的特征是取反,内 战前美国人对于政治热情,所以这几十年美国人对于政治很冷漠,所以正确答 案选 BF 选项.apathy 冷淡,passivity 消极. \n***翻译：随着各种对于美国人政治冷漠的反对在这些年中变得越来越响亮,很多 历史学家已经相反寻找内战前的十年,在那个时代美国人非常热情地参与政 治."]}),

wx.setStorage({key: "927", data: ["928.  The latest publications predicting disastrous coastal erosion are unlikely to  _______ knowledgeable readers because variations on the same claims have been effectively refuted in the past few years.",
{A: 'A.intrigue',B: 'B.reassure',C: 'C.baffle',D: 'D.alarm',E: 'E.unsettle',F: 'F.calm',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：这些预测海岸侵蚀的言论被有力否决了,说明这些东西不会让这些知识 渊博的人感到惊慌,所以正确答案选 DE 选项.alarm 使惊慌,unsettle 使不 安. \n***翻译：最近预测海岸侵蚀的出版物不太可能让知识渊博的读者感到不安,因为 相同言论的各种各样的情况已经在过去的几年中有力地被否决了."]}),

wx.setStorage({key: "928", data: ["929.  Some social insects, such as bees and ants, are celebrated for their industriousness and engineering feat, but popular culture has not generally_______termites for theirs-even though they can build mounds twenty feet high.",
{A: 'A.considered',B: 'B.reprehended',C: 'C.applauded',D: 'D.deprecated',E: 'E.exonerated',F: 'F.extolled',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面蜜蜂和蚂蚁被赞成,后面转折,说明白蚁没有被赞扬,所以正确答 案选 CF 选项.applaud 称赞,extol 称赞. \n***翻译：一些群居昆虫(例如蜜蜂和蚂蚁)因为它们的勤劳和杰出成就而被称 赞,但是流行文化没有因为白蚁的杰出成就普遍去表扬它们,尽管它们能够修 建 20 英尺高的堆."]}),

wx.setStorage({key: "929", data: ["930.  Because the organization often trumpeted itself as a forum for_______discussion, visitors were startled by the frequently heated tone of its recent debates.",
{A: 'A.elevated',B: 'B.vigorous',C: 'C.temperate',D: 'D.strenuous',E: 'E.dispassionate',F: 'F.strident',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：游客惊讶是因为这个组织自己鼓吹的和实际情况不一致,实际情况是激 烈的辩论,那么鼓吹的应该是温和的特征,所以正确答案选 CE 选项. temperate 温和的,dispassionate 冷静的. \n***翻译：因为这个组织经常鼓吹它自己是一个客观公正的论坛,所以游客看到辩 论中经常性激烈的语气时感到非常惊讶."]}),

wx.setStorage({key: "930", data: ["931.For the ancient Egyptians, inequality in human society was not_______nature, in other words, existing differences-between rich and poor, strong and weak-were not viewed as a necessary part of the natural order of things.",
{A: 'A.superseded by',B: 'B.detectable in',C: 'C.ameliorated by',D: 'D.inherent in',E: 'E.excluded from',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说这个东西不是必须的成分,所以同义重复前面应该就是\"不是内 在的属性\",所以正确答案选 D 选项.inherent 内在的. \n***翻译：对于古代埃及人来说,在人类社会的不平等并不是内在的特质.换句话 说,现存的差异(在穷人和富人间,强者和弱者间的差异)并没有被看成是事 物自然秩序的必要成分."]}),

that.setData({progress_percent:93}),wx.setStorage({key: "931", data: ["932. It was quite_______for Sir Isaac Newton to believe in alchemy-most of the experimental scientists of his era did.",
{A: 'A.unethical',B: 'B.brave',C: 'C.pretentious',D: 'D.reasonable',E: 'E.controversial',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：既然那个时代大部分科学家都信炼金术,说明牛顿的做法也是合情合理 的,所以正确答案选 D 选项.reasonable 合理的. \n***翻译：牛顿相信炼金术是很合理的—在那个时代大部分实验科学家都相信炼金 术."]}),

wx.setStorage({key: "932", data: ["933. Trying to fix problems that affect vast numbers of people has an intuitive appeal that politicians and policymakers find (i)   , but several warehouses of research studies show that intuition is often a poor guide to fixing (ii)           problems.",
{A: 'A.logical',B: 'B.irresistible',C: 'C.off-putting',D: 'D.localized',E: 'E.systemic',F: 'F.theoretical',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：but 之后转折内容说直觉是 poor 的,所以前面应该说直觉是正面评价 的,所以第一空选 B 选项,第二空的 problems 就是指先问说的影响大部分人的 问题,那么对应的是 E 选项.irresistible 无法抵抗的,systemic 系统性的. \n***翻译：尝试处理影响大部分人的问题会有一种直觉性的吸引力,而这种吸引力 是政治家和政策制定者认为无法抵抗的,但是很多的研究表明直觉经常是一种 不好的处理系统性问题的指导."]}),

wx.setStorage({key: "933", data: ["934. This book, a more (i)_____version of a highly technical report, is designed for the layperson, yet it is nothing if not (ii) _______: it grapples with very complex questions about the world economy.",
{A: 'A.accessible',B: 'B.professional',C: 'C.formidable',D: 'D.ambitious',E: 'E.popular',F: 'F.persuasive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：说这本书是为门外汉设计的,说明这本书是通俗易懂,所以第一空选 A 选项,第二空则根据冒号后面的内容对应,后面说处理复杂的问题,那么第二 空选 D 选项.accessible 容易理解的,ambitious 有野心的. \n***翻译：这本书(一本更加容易理解的高技术的报告)是为门外汉而设计的,然 而它却是极其有野心的：它尽力克服很多关于世界经济的复杂问题."]}),

wx.setStorage({key: "934", data: ["935. Anthony Kenny states that although his A New History of Western Philosophy is intended for undergraduates, he aimed to write it in a lighthearted manner that will give (i)_____to those who read the history \"not for curricular purposes but for their own enjoyment\". His book is certainly enlightening, and although the bibliography includes technical works liable to (ii)_____the newcomer, the work is written at a level that generally (iii)_____between elementary and advanced.",
{A: 'A.solace',B: 'B.pleasure',C: 'C.offense',D: 'D.baffle',E: 'E.initiate',F: 'F.suit',G: 'G.strikes a good balance',H: 'H.makes fine distinctions',I: 'I.rejects the difference'},
"###解析：给那些\"纯粹为了娱乐而没有别的课程目的\"的人能给的便是娱乐了, 所以第一空选 B 选项,而且也能对应 lighthearted,第二空和第三空联立,让 步说尽管会难倒新读者,但是能达到一个良好的平衡,所以第二空选 D 选项, 第三空选 G 选项.pleasure 愉悦,baffle 难倒,strikes a good balance 达 到一种良好的平衡.\n***翻译：AK 声称尽管他的《A New History of Western Philosophy》是为本科 生设计的,但是他却想要用一种非常愉快的方式来写它,而这种方式会给那些 纯粹为了娱乐而没有别的课程目的的读者一些愉悦.他的书确实是启发性的, 而且尽管书目包括很容易难住新读这本书的人的技术性作品,但是这个作品是 以一种普遍达到一个在初级和进阶中良好的平衡的水平而创作的."]}),

wx.setStorage({key: "935", data: ["936.  Substantial atmosphere around planetary bodies acts as (i)_____incoming objects. Smaller objects, particularly those that are lower in density and more fragile, (ii)_____in the upper reaches of the atmosphere, whereas more intact, larger bodies may survive to impact the surface. Thus, relative to large craters, small craters are much less (iii)_____on bodies with dense atmosphere, such as Earth, Venus, and Titan, than they are on Mercury and Moon.",
{A: 'A.effective obscurers of',B: 'B.significant filters to',C: 'C.impenetrable barriers against',D: 'D.vaporize',E: 'E.proliferate',F: 'F.agglomerate',G: 'G.unusual',H: 'H.persistent',I: 'I.common'},
"###解析：后面说完整的大的物体能够进入行星表面,说明小的脆弱的物体无法进 入,所以第二空选 D 选项,那么第一空就知道大气层实际上就是一个过滤器 了,第三空根据前面的推理,既然小物体更容易消散在大气层中,所以在有着 密集大气层的行星中,小火山口是更少的,因为小物体进不来.sifnificant filter to 重要的过滤器,vaporize 消散,common 常见.\n***翻译：在行星附近的坚固的大气层作为一个对于进入物体的重要过滤器.更小 的物体,尤其是那些低密度而且更脆弱的物体,在高层大气消散,然而更完整 更大的物体能够成功碰撞到行星表面.因此,相对于大的火山口而言,小的火 山口在有着密集大气层的行星上是更不常见的,例如地球,金星,土卫六,它 们的小火山口少于水星和月球."]}),

wx.setStorage({key: "936", data: ["937.  Many scholars studying leadership_______cult of the celebrity that has been fostered both by the media and by politicians\' public relations staffs, arguing that it trivialized politics.",
{A: 'A.abet',B: 'B.decry',C: 'C.question',D: 'D.analyze',E: 'E.countenance',F: 'F.condemn',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：学者认为这种对于名人的崇拜会贬低政治,说明他们一定对这种崇拜给 予负面评价,所以正确答案选 BF 选项.decry 指责,condemn 谴责. \n***翻译：很多研究领导力的学者谴责对于名人的崇拜(这些名人被媒体和政治家 的公共关系推动),这些学者认为这种对于名人的崇拜会贬低政治."]}),

wx.setStorage({key: "937", data: ["938.  Experimentation in the arts often generates befuddlement, and even_______of innovative art generally have voiced perplexity regarding this new, experimental artwork.",
{A: 'A.proponents',B: 'B.vilifiers',C: 'C.defenders',D: 'D.belittlers',E: 'E.vendors',F: 'F.luminaries',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：even 让步,一般人认为有困惑,就连支持者也认为有困惑,所以正确答 案选 AC 选项.proponent 推动者,defender 拥护者. \n***翻译：艺术中的实验经常产生困惑,而且就算是创新艺术的支持者也普遍表达 在这个创新试验的作品中有疑惑."]}),

wx.setStorage({key: "938", data: ["939.  The sailors realized too late that winds had shifted the ice in such a way as to obstruct the ship\'s path; this process had been so_______that it was completed by the time they discovered the effect.",
{A: 'A.gradual',B: 'B.negligible',C: 'C.unpredictable',D: 'D.time-consuming',E: 'E.inconsequential',F: 'F.imperceptible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：当水手发现的时候已经结束了,说明这个过程非常不明显,不容易被看 出来,所以正确答案选 AF 选项.gradual 逐渐的,imperceptible 难以觉察 的. \n***翻译：水手们太晚意识到风已经以一种能够阻碍船前进道路的方式移动了冰； 这个过程如此不容易觉察的以至于当这些水手发现的时候,这个过程已经结束 了."]}),

wx.setStorage({key: "939", data: ["940.  What makes the precisely oriented flight of a honeybee swarm to its new home so_______is that only a small percentage of its members know the swarm travel rout and final destination.",
{A: 'A.exact',B: 'B.unpredictable',C: 'C.amazing',D: 'D.erratic',E: 'E.reliable',F: 'F.wondrous',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：只有小部分的蜜蜂知道蜂群的飞行路线和最终目的地,但却成功了,说 明这个过程是让人惊讶的,所以正确答案选 CF 选项.amazing 令人惊讶的, wondrous 令人惊讶的. \n***翻译：让蜜蜂群准确飞行到新家的过程变得如此让人惊讶的是仅仅只有小部分 的蜜蜂知道蜂群的飞行路线和最终目的地."]}),

wx.setStorage({key: "940", data: ["941.Some minor misgivings about the book notwithstanding, the editor\'s claim that the work will be recognized as \"the authoritative history of sports for this era\" is thoroughly _______.",
{A: 'A.absurd',B: 'B.undemonstrated',C: 'C.credible',D: 'D.outlandish',E: 'E.researched',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：根据 notwithstanding 推知空格和 misgivings 取反,所以正确答案选 C 选项.credible 可信的. \n***翻译：尽管对于这本书有一些小的担忧,但是这个编辑说的这个作品会被当成 \"这个时代运动的权威历史\"的言论是完全可信的."]}),

that.setData({progress_percent:94}),wx.setStorage({key: "941", data: ["942. In the 1630s, directors of the Dutch West India Company received reports of minor problems from their agents with _______, as the company was wealthy enough not to be overly concerned about small frustrations.",
{A: 'A.trepidation',B: 'B.consternation',C: 'C.gratitude',D: 'D.equanimity',E: 'E.exhilaration',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文说公司有钱不用担心小的挫折,所以说明公司的董事在面对这些关 于错误的报告时是一种镇定的态度,答案选 D 选项.equanimity 镇定. \n***翻译：在 17 世纪 30 年代,Dutch West India Company 的董事们用一种镇定的 态度去接收一些来自于代理机构的关于小错误的报告,因为这个公司足够的富 有以至于不用过分担心小的挫折."]}),

wx.setStorage({key: "942", data: ["943. Even though the idea that medical research should be rigorously objective is (i)_____one in the medical community, the editors of medical journals often display a disquieting (ii)_____when it comes to articles submitted by researchers who accept money from the makers of the products they evaluate in their research; editors rarely ask whether that research is truly disinterested.",
{A: 'A.a neglected',B: 'B.an uncontroversial',C: 'C.an unproductive',D: 'D.capriciousness',E: 'E.credulity',F: 'F.stringency',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第二空根据 disquieting 得知空格一定是负面评价词,再根据最后一句 话说这些编辑从来不去问研究的客观性,说明这些编辑是轻信的,所以第二空 选 E 选项,第一空根据 even though 的转折得知选正面评价,所以第一空选 B 选项.uncontroversial 无可争议的,credulity 轻信. \n***翻译：尽管医学研究应该是严格客观的理念在医学领域中无可争议的,但是当 提到由一些接受来自于研究评估中的产品获利者捐助的研究者们所写的文章的 时候,医学杂志的编辑们经常表现出一种令人不安的轻信；编辑们从来不问是 否那个研究是不是真的客观的."]}),

wx.setStorage({key: "943", data: ["944. Making the shift to the 90-nanometer manufacturing process has been (i)_____for semiconductor companies. This process effectively doubles the manufacturing capacity of the industry, but it (ii)_____enormous technical challenges because some components of the new semiconductor chips are no more than five to seven molecule thick.",
{A: 'A.an unanticipated boon',B: 'B.a routine accomplishment',C: 'C.a significant struggle',D: 'D.circumvents',E: 'E.entails',F: 'F.resolves',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：but 前后转折,前面说提升了生产能力,but 后则应该是负面效应,所以 第二空选 E 选项,第一空来体现这样一个既有好处也有坏处的词,所以 C 选项 最合适.significant struggle 重要的挣扎,entail 使必需.\n***翻译：向 90 纳米过程的转变对半导体公司来说是一个重大的挣扎.这个过程有 效地双倍提升了这个行业的生产能力,但是它必然引起了一些巨大的技术挑 战,因为一些新半导体芯片的元件现在是超过 5 到 7 个分子那么厚."]}),

wx.setStorage({key: "944", data: ["945. An invasive creeping weed native to the Mediterranean region, Cirsium arvense has been present in Yellowstone National Park at least since the nineteen century. Because of its extensive root system, the plant defies attempts to (i)_____it by normal methods, and consequently, park officials have (ii)_____efforts to do so. Warming temperature have also (iii)_____of the thistle\'s fortune.",
{A: 'A.control',B: 'B.study',C: 'C.nourish',D: 'D.largely abandoned',E: 'E.recently reinitiated',F: 'F.increasingly promoted',G: 'G.helped',H: 'H.undermined',I: 'I.illuminated'},
"###解析：因为强大的根,所以能够蔑视去控制它的企图,所以第一空选 A 选项, 第二空表示结果,既然能够蔑视这种做法,所以 officials 只能放弃,所以第 二空选 D 选项,第三空根据 also 得知温暖的天气也是能够帮助这种植物的,所 以第三空选 G 选项.control 控制,largely abandon 很大程度放弃,help 帮 助.\n***翻译：一种原本生长在地中海地区的入侵的蔓草(叫 Cirsium arvense)至少 从 19 世纪开始就已经在出现在黄石公园.因为它庞大的根系统,所以这种植物 能够蔑视那些通过正常方法去控制它的方法,结果公园管理人员已经很大程度 上放弃这么做了.温暖的天气也帮助了这种蓟草的命运."]}),

wx.setStorage({key: "945", data: ["946.  Marie Tharp\'s mapping of the ocean floor, which was based on a mass of previously unanalyzed measurements of ocean depth, did not depend on (i)        but on (ii)        : she (iii)        the sea floor\'s contours by marring the voluminous but incomplete data with her knowledge of geology.",
{A: 'A.rote work',B: 'B.analytical prowess',C: 'C.empirical knowledge',D: 'D.serendipity',E: 'E.extrapolation',F: 'F.collaboration',G: 'G.inferred',H: 'H.detected',I: 'I.reconstituted'},
"###解析：第二空和第三空是同义词,所以 EG 选项搭配最为合理,第一空和第二空 又取反,而且和后面的 marring the volumimous but incomplete data 对应,所以第一空选 C 选项最合适.empirical knowledge 经验性的知识, extraplation 推测,infer 推断.\n***翻译：Marie Tharp 对于洋底的测绘(该测绘基于大量先前没有被分析的海洋 深度的数据)没有依靠经验性的知识,而是依靠了推测：通过她的地理知识, 她摧毁庞大但不彻底的资料而推断出洋底的轮廓."]}),

wx.setStorage({key: "946", data: ["947.  The proposition that foraging Native Americans studied the skies is : anthropological evidence demonstrates, for example, that the Chumash Indians counted the lunar cycles and established the times of the solstices.",
{A: 'A.unquestionable',B: 'B.unremarkable',C: 'C.undeniable',D: 'D.unprecedented',E: 'E.unexceptional',F: 'F.unparalleled',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面描述了确实印第安人有研究天文内容,所以这个观点是毋庸置 疑的,正确答案选 AC 选项.unquestionable 毋庸置疑的,undeniable 不可否 认的. \n***翻译：觅食的美洲土著人研究了天空的观点是毫无疑问的：例如,人类学的证 据表明 Chumash 印第安人数太阳的周期而且建立了至日的时间."]}),

wx.setStorage({key: "947", data: ["948.  In the nineteenth century, the circus, for all its glitz and even its glamour, was entertainment with an old soul,_______the fast-forward pace of change in modern life.",
{A: 'A.a forerunner of',B: 'B.an antidote to',C: 'C.a respite from',D: 'D.a break from',E: 'E.a precursor to',F: 'F.a rebuke to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：old soul 和 modern life 取反,所以这种古老的娱乐活动便是快速变化 的现代生活的一种暂停.respite 暂停,break 休息. \n***翻译：在十九世纪,马戏团尽管有着它的浮华甚至有光辉,但是它却是古老灵 魂的娱乐活动,一种在现代生活中快速变化的暂停."]}),

wx.setStorage({key: "948", data: ["949.  Sokari Douglas Camp was_______in the early 1990s by many of London\'s commercially driven art dealers and galleries, some of whom apparently found her themes difficult to market.",
{A: 'A.criticized',B: 'B.lionized',C: 'C.misrepresented',D: 'D.neglected',E: 'E.forsaken',F: 'F.eulogized',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：dealers 和 galleries 发现 SDC 的主题很难营销,所以她会被放弃,正 确答案选 DE 选项.neglected 忽略的,forsaken 放弃的.\n***翻译：SDC 在 20 世纪 90 年代被很多伦敦商业驱动的艺术交易者和展览馆抛弃 了,其中一些明显发现她的主题很难来进行营销."]}),

wx.setStorage({key: "949", data: ["950.  It is troubling that blogs, which may be among the least reliable sources of information in human history, occupy such _______.",
{A: 'A.enviable     `',B: 'B.conspicuous',C: 'C.suspect',D: 'D.dubious',E: 'E.controversial',F: 'F.prominent',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：最不可靠的信息来源的一个特征会让人不安,这个特征一定是影响力比 较大,所以选 BF 比较合适.conspicuous 显眼的,prominent 显眼的. \n***翻译：博客(在人类历史中可能是最不可靠的信息来源)占据了如此显眼的地 位这件事确实很令人不安."]}),

wx.setStorage({key: "950", data: ["951.The anthropologist_______the claim that the Neanderthal remains must represent an immediate family because they belong to the same mitochondrial lineage, noting that some chimpanzees with identical mitochondrial are not closely related.",
{A: 'A.misapplied',B: 'B.queried',C: 'C.expanded',D: 'D.substantiated',E: 'E.surmised',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面人类学家说了有相同线粒体的大猩猩没有紧密的联系,说明他对前 面的那个说法是持怀疑态度的,所以答案选 B 选项.query 质疑. \n***翻译：这个人类学家质疑了这样一个说法：N 残余物一定代表着一个直系的家 族因为这些残余物属于相同的线粒体家族.该人类学家还提到一些有着相同线 粒体的大猩猩也不是紧密相关的."]}),

that.setData({progress_percent:95}),wx.setStorage({key: "951", data: ["952. While the current coffee craze was sparked by the emergence of flavorful, high-quality gourmet varieties, a slew of studies suggesting that concerns about coffee\'s health effects may be  _______ has nurtured the trend.",
{A: 'A.underemphasize',B: 'B.exacerbated',C: 'C.unfounded',D: 'D.documented',E: 'E.recapitulated',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：让步转折关系,通过前面说的尽管对于咖啡有狂热,但是说咖啡健康的 说法没有根据的这些研究也能在主流趋势中盛行,所以正确答案选 C 选项. unfounded 无根据的. \n***翻译：尽管当前对于咖啡的狂热被可口的高质量的精美的各种菜肴而激发起 来,但是大量表明关于咖啡的健康效果的考虑可能是无根据的研究已经哺育了 主流趋势(抽象理解：就是说这个研究已经在主流趋势中很盛行了)."]}),

wx.setStorage({key: "952", data: ["953. In a sharp blow to his reputation as (i)_____leader, the evidence that the mayor has recently been involved in malfeasance seems to be (ii) ______________.",
{A: 'A.a partisan',B: 'B.an unsuccessful',C: 'C.an exemplary',D: 'D.fabricated',E: 'E.sound',F: 'F.dubious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：blow 是\"打击\"的意思,打击的名声一定是好的名声,所以第一空选 C 选项,第二空说这种证明市长渎职的证据是合理有效的就能够对应前面的对市 长名声的打击,所以第二空选 E 选项.exemplary 模范的,sound 可靠的. \n***翻译：对他是一个模范性的领导人一个重大打击的是：市长最近牵涉到渎职的 证据是很可靠的."]}),

wx.setStorage({key: "953", data: ["954. As climate change alters ecosystems, the winners are going to be the (i)_____foragers, likes grizzlies that eat everything from ants to moose, and the losers are going to be those species that are too (ii)_____to adjust.",
{A: 'A.adaptive',B: 'B.persistent',C: 'C.anomalous',D: 'D.specialized',E: 'E.hierarchical',F: 'F.voracious',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应后面灰熊的距离,eat everything from ants to moose,这 体现的一种适应力强,第二空和第一空对比关系,所以第二空选 D 选项. adaptive 有适应力的,specialized 专一的. \n***翻译：随着气候变化改变了生态系统,胜利者将会属于适应性强的觅食者,例 如灰熊,它吃蚂蚁到驼鹿的任何东西,而失败者将是那些太专一而最终无法适 应的物种."]}),

wx.setStorage({key: "954", data: ["955. The Golden Gates Bridge has been quite (i)_____by most aesthetic and functional criteria. However, as a structure it has had some limitations. Shortly after it opened, its roadway proved to be (ii)_____under certain wind conditions, so it was stiffened. The additional steel that provided that stiffening naturally added weight to the structure, and this made it (iii)_____later to add a proposed rail system beneath the roadway.",
{A: 'A.inadequate',B: 'B.unusual',C: 'C.successful',D: 'D.quite noisy',E: 'E.overly flexible',F: 'F.dangerously windswept',G: 'G.unnecessary',H: 'H.impossible',I: 'I.feasible'},
"###解析：however 转折之后又局限,说明第一空是正评价词,所以选 C 选项,第 二空根据 so it was stiffend 推理,被加固肯定是因为不够稳固,所以选 E 选 项最合适,第三空既然已经很重了,那么加一条铁路就不太现实了,所以第三 空选 H 选项.successful 成功的,overly flexible 过度摇晃,impossible 不 可能的. \n***翻译：金门大桥已经从大多数美学和功能性的标准来看是非常成功的了.然而 作为一个建筑它也有一些局限.在它公开使用后不久,它的路被证明在某些风 的条件下是过分晃动的,因此它被加固了.额外的提供加固作用的钢铁自然会 增加这个建筑的重量而这会让后来再在公路下面加上轨道交通的想法不可能实 现了."]}),

wx.setStorage({key: "955", data: ["956.  The prime minister underestimates the fatigue that her continual (i)_____induces, even among those who are largely(ii)_____her aims. Constantly referring to the bold challenges and tremendous opportunities that she and the country face, the prime minister insists that she is(iii)_____the country, when most people would be grateful if she succeeded just in improving it a bit.",
{A: 'A.complaining',B: 'B.diffidence',C: 'C.overclaiming',D: 'D.sympathetic to',E: 'E.confused by',F: 'F.troubled by',G: 'G.deliberately analyzing',H: 'H.radically transforming',I: 'I.slowly fine-turning'},
"###解析：\"大胆的挑战和惊人的机会\"只能对应 C 选项,第二空根据 even 得知, 就算是支持这个目标的人也会觉得疲倦,所以第二空选 D 选项,第三空的 when 注意有转折语气,后面说只要有一点改进人们就会感激,所以前面一定是她自己说自己对这个国家的贡献很大,也是对应 overclaim,所以第三空选 H 选 项.overclaim 过分的声称或要求,sympathetic to 对...同情,radically transform 剧烈的改变. \n***翻译：首相低估了她持续过分的要求多带来的疲倦感,就算在那些同情她的目 标的人群中也一样.总是谈到她和这个国家所面临的大胆的挑战和惊人的机 会,首先坚称她剧烈地改变(往好的方向)了这个国家,然而(题目的 when 有 转折语气,好好体会)大部分人认为如果她成功地改进了一丁点他们就会很感 激了."]}),

wx.setStorage({key: "956", data: ["957.  Considering that space travel was science fiction only decades ago, we should be extremely reluctant to proclaim an idea forever technologically infeasible unless that idea_______some hard physical constraint.",
{A: 'A.violates',B: 'B.contravenes',C: 'C.overcomes',D: 'D.transcends',E: 'E.utilizes',F: 'F.introduces',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：前面说这个 idea 是技术上不可行的,所以意思就是除非我们去违反物理 限制才能实现的技术,正确答案选 AB 选项.violate 违反,contravene 违反. \n***翻译：考虑到航天旅行在几十年前仅仅是科幻小说的内容,我们应该非常不愿 意去称赞一个技术上永远不可行的想法,除非那个想法能够违反一下物理限 制."]}),

wx.setStorage({key: "957", data: ["958.  The actor\'s part in the film turned out to be _______: he had only one line, and by the time the film appeared in theaters, even that line had been removed.",
{A: 'A.misunderstood',B: 'B.mandatory',C: 'C.intriguing',D: 'D.fascinating',E: 'E.trivial',F: 'F.inessential',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面的内容很明显说明这个演员很打酱油,所以答案选 EF 选项. trivial 不重要的,inessential 无关紧要的. \n***翻译：电影中这个演员的角色是无足轻重的：他只有一句台词,而且当电影出 现在电影院之时,甚至这句台词都被抛弃了."]}),

wx.setStorage({key: "958", data: ["959.  Although_______to please his audiences, Mozart was, at the same time, fully aware of his musical genius and had no intention of compromising his music.",
{A: 'A.disposed',B: 'B.loath',C: 'C.disinclined',D: 'D.eager',E: 'E.keen',F: 'F.compelled',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说没有向观众去妥协音乐,说明前面转折内容是他想要愉悦观众, 所以正确答案选 DE 选项.eager 急切的,keen 渴望的. \n***翻译：尽管非常渴望去愉悦观众,但是莫扎特同时也完全意识到他的音乐天赋 而且没有任何去妥协他音乐的想法."]}),

wx.setStorage({key: "959", data: ["960.  It is true that science, and more particularly scientists,_______cherished paradigms with great reluctance and that when they do, scientific revolutions may result.",
{A: 'A.unify',B: 'B.share',C: 'C.cede',D: 'D.embrace',E: 'E.dismantle',F: 'F.relinquish',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说科学的革命会发生,说明一定是放弃了 cherished paradigm,所 以答案选 CF 选项.cede 放弃,relinguish 放弃. \n***翻译：科学,更确切地说科学家,确实以大量的反感的态度放弃了一些收到珍 视的典范,而且当他们这么做的时候,科学革命可能就发生了."]}),

wx.setStorage({key: "960", data: ["961.Even months after massive storm, there remained a heavy, suspended sediment load in the surface water overlying the coral reef, the_______water a testament to the storm\'s effects.",
{A: 'A.turbid',B: 'B.stagnant',C: 'C.fathomless',D: 'D.turbulent',E: 'E.brackish',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：水中的沉淀能够证明水是浑浊的,所以答案选 A 选项.turbid 浑浊的. \n***翻译：就算是在大风暴之后的好几个月,依然有重的悬浮在水表面的沉淀物位 于珊瑚上,浑浊的水证明了风暴的影响."]}),

that.setData({progress_percent:96}),wx.setStorage({key: "961", data: ["962. Later in the book, the author takes pains to_______the claims she had made earlier, as though she recognizes their implausibility and wants to quell skepticism by narrowing their scope.",
{A: 'A.qualify',B: 'B.apply',C: 'C.reiterate',D: 'D.verify',E: 'E.jettison',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应 narrowing their scope,所以正确答案选 A 选项.qualify 限 制,修改. \n***翻译：在他书的后面部分,作者费尽心思地去限制修改他在前面部分所作出的 言论,好像她意识到它们(前面部分)的不可信而且想要去通过缩小范围来平 息怀疑."]}),

wx.setStorage({key: "962", data: ["963. No one (i)_____that building a ship powered by black holes or dark matter would be a formidable task. Yet remarkably there seems to be nothing in our present understanding of physics that (ii)_____our doing so.",
{A: 'A.believes',B: 'B.admits',C: 'C.disputes',D: 'D.anticipates',E: 'E.necessitates',F: 'F.precludes',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：用黑洞和暗物质做太空船让人敬畏是没有人会质疑的,所以第一空选 C 选项,后面 yet 转折,就是说尽管这件事让人敬畏,但是没有任何东西能够阻 止我们去成功做这件事,所以第二空选 F 选项.dispute 质疑,preclude 预先 阻止. \n***翻译：没有人质疑修一艘用黑洞和暗物质来做动力的太空船这件事是非常值得 敬畏的.然而惊讶的是在我们当前对于物理的理解下没有什么东西能够阻止我 们能够这么做."]}),

wx.setStorage({key: "963", data: ["964. Because the writer emphasizes the (i)_____of certain engineers whose contributions have been overlooked, her history of technology will not, like many of its predecessors, be a survey (ii) _______ the most celebrated achievements in the field.",
{A: 'A.mediocrity',B: 'B.importance',C: 'C.anonymity',D: 'D.comprising',E: 'E.underestimating',F: 'F.downplaying',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：双空联动,因为作者强调了以前被忽视的工程师的重要性,所以不会包 含那些最为出名的成就.importance 重要性,comprise 由...组成. \n***翻译：因为作者强调了强调了某些贡献被忽视的工程师的重要性,所以他关于 技术的历史将不会和很大他的前任那样成为一个包含在这个领域中最出名的成 就的调查."]}),

wx.setStorage({key: "964", data: ["965. It is only recently that emotion has attracted any substantial scholar attention, with historians lagging behind anthropologists, sociologists, and philosophers in their willingness to (i) ______________ emotion as subject worthy of scholarly attention. In the past, scholars viewed emotion as a natural and essential force that (ii)_____analysis-a strictly private matter and, therefore (iii)_____social life and the stuff of research.",
{A: 'A.recognize',B: 'B.overlook',C: 'C.repudiate',D: 'D.enlivened',E: 'E.defied',F: 'F.sustained',G: 'G.requisite for',H: 'H.extraneous to',I: 'I.synonymous with'},
"###解析：前面说最近感情才吸引学术关注,说明之前的学者不愿意把感情认为是 值得关注的,所以第一空选 A 选项,第二空描述的是 in the past 的事情,过 于不关注感情,所以第二空选 E 选项,第三空根据\"strictly private matter\"推出选 H 选项.recognize as 认为...是...,defy 公然藐视, extraneous to 与...无关. \n***翻译：最近感情才吸引大量的学术关注,在把感情当成是指的学术关注的主题 的意愿程度上,历史学家落后于人类学家,社会学家和哲学家.过去,学者把 感情当成自然和基本的动力,这种动力会公然蔑视分析—一个严格意义上很隐 私的事情—而且因此与社会生活和研究内容无关."]}),

wx.setStorage({key: "965", data: ["966.  The art of letter writing is like the art of acting in that it is the impression of (i)_____which usually makes a performance convincing. Great letter writers, like great actors, have a gift for (ii)          , for the here and now, the depth of expression depending on its closeness to actualprocesses of thought. By these criteria Ellen Terry was a remarkable letter writer indeed: her letters invariably have an air of (iii) _______.",
{A: 'A.spontaneity',B: 'B.mastery',C: 'C.sympathy',D: 'D.compassion',E: 'E.exaggeration',F: 'F.immediacy',G: 'G.confidence',H: 'H.improvisation',I: 'I.sensitivity'},
"###解析：整个题目的关键是 for the here and now,整体上一直在说书信艺术的 即兴的特征,所以第一空选 A 选项,第二空选 F 选项,那么第三空就选 H 选 项,三个词都是在说即兴的特征,spontaneity 自发性,immediacy 立即, improvisation 即兴表演. \n***翻译：书信书写的艺术就像表演的艺术,因为正是自发性的印象经常能够让表 演让人信服.伟大的书信作家,就像伟大的演员一样,有即兴的天赋,此时此地,表达的深度依靠的是和实际思考过程的接近程度.以这些标准 Ellen Terry 的确是一个非凡的书信作家：她的信总是有一种即兴的东西存在."]}),

wx.setStorage({key: "966", data: ["967.  Patterson thought the waste leaking into the river was_______situation: by contrast, judging from their silence on the matter, the owners of the factory felt the problem did not require immediate action.",
{A: 'A.a lingering',B: 'B.a convoluted',C: 'C.a pressing',D: 'D.an enervating',E: 'E.an exigent',F: 'F.an intricate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：通过 by contrast 推出空格选后面 did not require immediate 的反 义,所以正确答案选 CE 选项.pressing 紧迫的,exigent 紧急的. \n***翻译：Petterson 认为泄漏到合理的废弃物是非常紧迫的状况：相反,从他们 在这件事上的沉默可以推断出工厂的雇主们感觉这个问题不需要急迫的措施."]}),

wx.setStorage({key: "967", data: ["968.  Some historians represent the East India Company as_______participant in political and military conflict in India, only taking an interest in territorial power and revenue as a last-ditch effort to protect its trading activities.",
{A: 'A.a shrewd',B: 'B.an ineffectual',C: 'C.an irregular',D: 'D.a canny',E: 'E.a reluctant',F: 'F.an unwilling',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面说东印度公司只把领土权和税收来作为保护贸易活动的最后防线, 说明东印度公司是不愿意加入政治军事矛盾的,正确答案选 EF 选项. reluctant 不情愿的,unwilling 不情愿的. \n***翻译：一些历史学家把东印度公司呈现成不太乐意去加入印度政治和军事矛盾 的一个公司,它只把领土权和税收来作为保护贸易活动的最后防线."]}),

wx.setStorage({key: "968", data: ["969.  Very few companies take the trouble to discover where the wood in their products originates, consumers do not demand this information, and consequently regarding illicit timber has become the norm.",
{A: 'A.greed',B: 'B.indifference',C: 'C.outrage',D: 'D.timidity',E: 'E.apprehension',F: 'F.apathy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：消费者不关心木材来源,所以公司也不会去探究,所以人们对于非法木 材的冷漠的态度就很正常了,正确答案选 BF 选项.indifference 冷漠, apathy 冷漠. \n***翻译：极少的公司会费劲地去探究他们产品的木豆是从哪来的,消费者不会要 求这个信息,所以对于非法木材的冷漠就很正常了."]}),

wx.setStorage({key: "969", data: ["970.  Scientists are investigating odors so faint that people cannot_______them in order to see whether such odors can nevertheless change the way people interact.",
{A: 'A.tolerate',B: 'B.endure',C: 'C.avoid',D: 'D.dispel',E: 'E.detect',F: 'F.discern',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：如此微弱的结果一定是不容易觉察到,所以正确答案选 EF 选项.detect 觉察,discern 觉察. \n***翻译：科学家正在调查那些如此微弱以至于人们无法感知的味道,目的是看是 否这些味道能够改变人们交流的方式."]}),

wx.setStorage({key: "970", data: ["971.By cosmic standards, Earth and its fellow terrestrial planets are chemical _______: they consist of primarily four elements (iron, magnesium, silicon, and oxygen) that are rare elsewhere in the universe.",
{A: 'A.prototypes',B: 'B.mavericks',C: 'C.malefactors',D: 'D.paragons',E: 'E.old-timers',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面提到说\"rare elsewhere in the universe\",所以它们很特别, 所以正确答案选 B 选项.mavericks 特立独行的人或事物. \n***翻译：从宇宙的标准来看,地球和它同类的陆地星球在化学成分上是特别的： 它们主要由四种元素(铁,镁,硅,氧)组成,这些东西是宇宙其他地方是很 稀少的."]}),

that.setData({progress_percent:97}),wx.setStorage({key: "971", data: ["972. Because of the newspaper\'s_______joint bylines, lots of reporters were compelled to do anonymous work on stories credited to other people.",
{A: 'A.toleration of',B: 'B.aversion to',C: 'C.instigation of',D: 'D.endorsement of',E: 'E.leniency toward',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后文提到被迫去做在明别名下的匿名的作品,说明这个报纸是不让记者 把名字署在共同署名栏的,所以正确答案选 B 选项.aversion to 对...反感. \n***翻译：因为报纸对共同署名行的厌恶,所以很多记者被迫地去做了一些匿名的 故事作品,这些作品被归在别人名下."]}),

wx.setStorage({key: "972", data: ["973. While the philosopher was known for valuing (i)_____in the classroom, she was also, by contrast, a scrupulous and patient reviser, who (ii)_____her lectures for print.",
{A: 'A.predictability',B: 'B.spontaneity',C: 'C.correctness',D: 'D.superficially proofread',E: 'E.haphazardly adapted',F: 'F.laboriously reworked',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空根据让步转折知道选 scrupulous and patient revisor 的反义, 那么 B 选项最为合适,第二空具体阐释 scrupulous and patient revisor,所 以 F 选项修饰最合适.spontaneity 自发行为,laboriously reworked 勤奋地 修改. \n***翻译：尽管这个哲学家众所周知喜欢在教室中的墨守成规,但她同时也相反地 是一个非常一丝不苟且耐心的修订者,她会非常勤奋地去修改讲稿再打印."]}),

wx.setStorage({key: "973", data: ["974. Catherine the Great comes across in her memoirs as (i)_____ruler with a razor-sharp intellect, letting nothing stand in the way of her ambitions. In short, the impression the memoirs give is entirely in accord with her reputation for being (ii) _______.",
{A: 'A.an oblivious',B: 'B.an uncompromising',C: 'C.a moralistic',D: 'D.ambivalent',E: 'E.benevolent',F: 'F.formidable',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空对应 letting nothing stand in the way of her ambitions, 正确答案选 B 选项,第二空和第一空取同义词,所以选 F 选项. uncompromising 不妥协的,formidable 可怕的,难对付的(这里取第二个意 思). \n***翻译：凯瑟琳大帝在她的回忆录中用一种非常犀利的智力给人一种毫不妥协的 印象,不让任何人阻挡她的野心.简言之,回忆录给人的印象完全是和她难对 付的名声是一致的."]}),

wx.setStorage({key: "974", data: ["975. Despite the (i)_____in negotiations apparently signaled by the recent agreement between the two neighboring countries, the countries remain (ii)_____even about the import of that agreement. One wants to prolong agreed-to resumption of limited cross-border traffic, believing it can become entrenched as a new status quo. The other, by contrast, insists that the resumption is(iii)_____and has been undertaken voluntarily and provisionally in order to show goodwill.",
{A: 'A.progress',B: 'B.stalemate',C: 'C.setbacks',D: 'D.unreconciled',E: 'E.vague',F: 'F.flexible',G: 'G.requisite',H: 'H.temporary',I: 'I.advantageous'},
"###解析：从后面说两个国家的观点不一致能够看出第二空选 D 选项,所以第一空 再根据让步选第二空反义词,那么 A 选项最佳,第三空对应后面的 voluntarily and provisionally,所以选 H 选项.progress 进步, unreconciled 未达成一致的,temporary 临时的. \n***翻译：尽管被最近在两个邻国之间的合同而标志的谈判中的进步,但是这些国 家仍然对于合同中关于进口的内容未达成一致.一个国家想要延长曾经被同意 的边境运输(有限交流的恢复),相信它能像一个新现状一样根深蒂固.另外 一方却坚持认为这种恢复是暂时的而且是自愿和临时被承担的,目的是为了表 现出友好."]}),

wx.setStorage({key: "975", data: ["976.  One of the fundamental problems with learning mathematics is that the number sense may be (i) _______, exact calculation requires cultural tools-symbols and algorithms-that relatively new and must therefore be absorbed by areas of the brain designed for other purpose, which is easierwhen what we are learning (ii)_____our built-in circuitry with an understanding of it we can at least (iii)_____our teaching methods by reflecting on the constraints it imposes.",
{A: 'A.innate',B: 'B.modern',C: 'C.complex',D: 'D.harmonizes with',E: 'E.intrudes on',F: 'F.goes beyond',G: 'G.preserve',H: 'H.discard',I: 'I.adapt'},
"###解析：通过 while 得知第一空选 requires cultural tools 的反义,所以答案 选 A 选项,第二空根据 easier 推知我们必须要让我们学的东西和大脑一致才可 以实现,所以选 D 选项,第三空当我们理解这个问题之后,我们至少可以通过思考这个过程(就是大脑的区域原本是为了别的目的而存在的)给我们的限制 来适应这个问题. \n***翻译：学习数学的其中一个基本问题是尽管对数字的感觉可能是天生的,准确 的计算需要文化工具(符号和运算法则),这些工具相对比较新而且一定会因 此被为其他目的而设计的大脑的各个区域吸收,当我们所学的内容和我们内在 的回路一致时,这个过程是更加简单的,而且凭借对于这个目的的理解我们能 够通过思考它强加的限制来至少适应我们的学习方法."]}),

wx.setStorage({key: "976", data: ["977.  The tribes\'_______a settled mode of living was derived from their long-standing traditions, which, though differing from one tribal group to another, always included a resistance to nomadic lifestyles.",
{A: 'A.curiosity about',B: 'B.proclivity toward',C: 'C.predilection for',D: 'D.unfamiliarity with',E: 'E.rejection of',F: 'F.disdain for',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：长期传统导致的结果是对于生活方式的偏好,正确答案选 BC 选项. proclivity 偏好,predilection 偏好. \n***翻译：部落对于一种稳定的生活模式的偏好是来源于它们长期存在的传统,尽 管每个部落之间不尽相同,但是这些传统通常包括对于游牧生活方式的反对."]}),

wx.setStorage({key: "977", data: ["978.  In politics, tactical calculations about which groups a candidate should appeal to are never pleasant, but they are not always _______, and sometimes they are necessary.",
{A: 'A.injudicious',B: 'B.sleazy',C: 'C.effective',D: 'D.sordid',E: 'E.useful',F: 'F.exceptional',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：让人不爽,但不总是让人不爽,所以空格答案选 BD 选项.sleazy 令人 厌恶的,sordid 卑鄙的. \n***翻译：在政治中,对于竞选人会吸引到哪些群体的策略计算从来不让人不爽, 但是它们不是总让人厌恶,有时候它们是必须的."]}),

wx.setStorage({key: "978", data: ["979.  The spacecraft\'s considerable heft forces an unusually_______route that meanders through the solar system and depends on the gravitational pull of three heavenly bodies.",
{A: 'A.predetermined',B: 'B.circuitous',C: 'C.indirect',D: 'D.truncated',E: 'E.shortened',F: 'F.sequential',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：空格对应后面的 meander,既然是蜿蜒,所以路径应该是弯的,正确答 案选 BC 选项.cirtuitous 迂回的,indirect 不直接的. \n***翻译：宇宙飞船大的重量引起了一个不常见的迂回的路径,这个路劲蜿蜒地经 过太阳系而且依靠三个天体的引力拉动."]}),

wx.setStorage({key: "979", data: ["980.  According to some political analysts, the candidate\'s occasionally rambling responses to questions suggest that she has bee out of circulation for a while and her debating skills need to be_______.",
{A: 'A.honed',B: 'B.discredited',C: 'C.enhanced',D: 'D.reevaluated',E: 'E.remedied',F: 'F.de-emphasized',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：rambling 的辩论回应,说明竞选人的辩论技巧需要提高,正确答案选 AC 选项.hone 磨砺,enhance 提高. \n***翻译：根据一些政治分析家,竞选人偶然出现的冗长含糊的问题回应表明她已 经不在这个圈子里一段时间了,而且她的辩论技巧需要被提升."]}),

wx.setStorage({key: "980", data: ["981.Although most of the lakes have merged, salinity levels are not_______throughout the lake systems: an upward-trending salinity gradient extends southeast from Pelican Lake to East Stump Lake, a distance of nearly 80 kilometers.",
{A: 'A.known',B: 'B.equable',C: 'C.rising',D: 'D.problematic',E: 'E.unprecedented',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：冒号后面说一个上升趋势的含盐度变化率,说明湖泊的含盐度是不一样 的,所以正确答案选 B 选项.equable 稳定的. \n***翻译：尽管大部分的湖已经汇合了,但是在湖泊系统中的含盐度并不稳定：一 个上升趋势的含盐度变化率以东南方向从 Pelican Lake 向 East Stump 延伸, 几乎是 80 公里的距离."]}),

that.setData({progress_percent:98}),wx.setStorage({key: "981", data: ["982. The novel presents him as a man who monitors his state of mind and emotions as though he were doing so _______, taking and thinking about himself as if he were someone else.",
{A: 'A.guiltily',B: 'B.instinctively',C: 'C.furtively',D: 'D.heedlessly',E: 'E.externally',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：as if he were someone else 告诉我们他是以外部角度来监测他的心灵 和情感状态的,所以正确答案选 E 选项.externally 外部地. \n***翻译：小说将他呈现为一个似乎如此外部地去监测他的心态和情感状态的人, 对待和思考自己似乎他是别人一样."]}),

wx.setStorage({key: "982", data: ["983. The prosecutor belied his hard-boiled reputation by submitting (i)_____queries to the witness and accepting in turn (ii)_____responses.",
{A: 'A.innocuous',B: 'B.quizzical',C: 'C.impertinent',D: 'D.evasive',E: 'E.elaborate',F: 'F.informative',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：既然是与 hard-boiled(不懂感情的的,强硬的)的名声不符,那么这 个起诉人做的事就是和 hard-boiled 取反,所以第一空选 A 选项,第二空选 D 选项,就是提供无意伤害的质疑却接受躲躲闪闪的回复.innocuous 无意伤害 的,evasive 躲避的. \n***翻译：起诉人与他不动感情强硬的名声不符,因为他对目击人提供了无意伤害 的质疑而且反过来接受闪烁其辞的回复."]}),

wx.setStorage({key: "983", data: ["984. Proffering one increasingly improbable scene character after another, (i)_____by the constraint of realism, the novel revels in this (ii)_____by ever more brazenly defying its readers\' presumed expectations.",
{A: 'A.untrammeled',B: 'B.liberated',C: 'C.confined',D: 'D.exiguity',E: 'E.ponderousness',F: 'F.implausibility',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：不准确的场景角色会被真实的限制约束,所以第一空选 C 选项,而且 AB 选项意思接近,第二空 this 同意重复前文的 improbable,所以第二空选 F 选 项.confine 限制,约束；implausibility 不可信. \n***翻译：提供一个接一个的越来越不准确的场景角色,受限于真实的限制,这个 小说在这种不可信中通过更加厚颜无耻地区蔑视读者之前的期望而洋洋得意."]}),

wx.setStorage({key: "984", data: ["985. Logically, one might assume that the nostalgia in which Guzman engages at times in his documentary about Chilean history would be (i)_____critical reflection and thus leave the film intellectually flaccid. This conclusion would be (ii) ______________, however, insofar as not all nostalgia necessarily results in a (iii)_____of critical thought.",
{A: 'A.a motive for',B: 'B.a marker of',C: 'C.an impediment to',D: 'D.hasty',E: 'E.dilatory',F: 'F.warranted',G: 'G.reappropriation',H: 'H.distillation',I: 'I.stagnation'},
"###解析：thus leave the film intellectually flaccid 推知第一空选负评价, 所以正确答案选 C 选项,第二空根据 however 得知选一个表示结论不太正确的 选项,那么 D 选项最为合适,第三空解释了结论为什么不正确,因为不是所有 的怀旧都会导致批判性思想的停滞.impediment 阻碍,hasty 仓促的, stagnation 停滞.\n***翻译：从逻辑上讲,一个人可能认为 G 有时候在他的关于 Chilean 的纪录片中 涉及的怀旧可能是一个对于批判性思考的阻碍而且因此让电影智力上疲软.然 而,这个结论是很仓促的,因为不是所有的怀旧都一定导致批判性想法的停 滞."]}),

wx.setStorage({key: "985", data: ["986.  Sometimes the criteria that are used to categorize nation-states are purely factual: for example, the denotation of a states as a coastal states or an inland state. But most state labels have a predominantly (i)_____character. Labels such as failed state or democratic state tend to be accepted only by those who (ii)_____the assumptions that (iii)_____such a marker.",
{A: 'A.pejorative',B: 'B.functional',C: 'C.evaluative',D: 'D.share',E: 'E.flout',F: 'F.transcend',G: 'G.are necessarily distorted by',H: 'H.constitute the basis of',I: 'I.rarely make reference to'},
"###解析：第一空对应后面说的\"失败的州\"和\"民主的州\"很明显是评价性的, 所以第一空选 C 选项,第二空和第三空联动,DH 选项最佳,共享构成标签的基 础的假设的人才会去接受这些标签.evaluative 评估性的,share 共享, constitute the basis of 构成...的基础. \n***翻译：有时候被用来给单一民族国家分类的标准完全是真实的：例如把一个州 描绘成一个海岸州或者内陆州.但是大部分州的标签有一个显著评估性的特征.例如\"失败的州\"或者\"民主的州\"倾向于只被那些共享这些假设的人接 受,这些假设构成了这个标签的基础."]}),

wx.setStorage({key: "986", data: ["987.  Until 1992, microprocessor types were identified by number, and for a long time they were considered so_______that manufacturers would share design specifications for them.",
{A: 'A.fungible',B: 'B.interchangeable',C: 'C.perishable',D: 'D.integral',E: 'E.inimitable',F: 'F.essential',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：制造者会共享设计规格说明这些产品很互通,所以正确答案选 AB 选项. fungible 可互换的,interchangeable 可互换的.\n***翻译：在 1992 年之前,微处理器是以数字来识别的,而且在很长一段时间它们 被认为是如此的可互换的以至于制造者会为它们共享一些设计规格."]}),

wx.setStorage({key: "987", data: ["988.  The apparent simplicity of savanna or a prairie landscape is illusory, but the illusion takes real effort to_______because much of what actually occurs in these places takes place underground.",
{A: 'A.dispel',B: 'B.acknowledge',C: 'C.confirm',D: 'D.disavow',E: 'E.dismiss',F: 'F.perceive',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：很多东西都是隐蔽发生的,说明我们很难去确认这个假象,所以正确答 案选 BC 选项.acknowledge 承认,confirm 确认. \n***翻译：大草原和大牧场的明显的简单性质是虚假的,但是这个假象需要很大功 夫才能确认,因为在这些地方实际发生的大部分的事情都是隐蔽发生的."]}),

wx.setStorage({key: "988", data: ["989.  Lustig\'s critics argue that what makes him a compelling public speaker is his practice of citing evidence that is merely suggestive in support of a claim and insisting that this evidence is _______.",
{A: 'A.invaluable',B: 'B.irrelevant',C: 'C.indubitable',D: 'D.immaterial',E: 'E.insignificant',F: 'F.incontrovertible',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：他引用证据来支持结论能让他变得 compelling,说明这些证据一定是正 面评价,所以正确答案选 CF 选项.indubitable 毋庸置疑的, incontrovertible 不容置疑的.\n***翻译：Lustig 的评论认为让他成为一个吸引人的公众发言人的是他练习引用仅 仅是引起联想的证据来支持一个言论,而且坚持认为这个证据是不容置疑的."]}),

wx.setStorage({key: "989", data: ["990.  The series of documentaries certainly does not promote the country\'s recent diplomatic initiatives, in fact, some of the films appear to be_______those initiatives.",
{A: 'A.commendations of',B: 'B.reparations of',C: 'C.tributes to',D: 'D.rationalizations of',E: 'E.denunciations of',F: 'F.indictments of',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：后面同义重复前面,不能推动主动性,事实上有些电影还在对这个主动性起到负面的作用,所以正确答案选 EF 选项.denunciation 控告, indictment 控告. \n***翻译：这一系列的纪录片一定不能推动这个国家最近的外交主动性.事实上, 一些电影似乎在控诉这些主动性."]}),

wx.setStorage({key: "990", data: ["991.The professor\'s tendency to commandeer faculty meetings to promote her personal agenda quickly inspired resentment among other faculty, who objected to such _______.",
{A: 'A.appropriation',B: 'B.obfuscation',C: 'C.caviling',D: 'D.vacillation',E: 'E.cronyism',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：such 推出空格重复教授的行为 commandeer,所以答案选 A 选项. appropriation 侵占,挪用. \n***翻译：教授抢占教员会议来提升他自己个人的工作事项的倾向很快引发了在其 他教员中的反感,这些人反对这种侵占."]}),

that.setData({progress_percent:99}),wx.setStorage({key: "991", data: ["992. The assumption that children learn about science primarily in the classroom is so_______that few scientists, educators or policymakers question it, despite an ever-growing body of evidence demonstrating that most science is learnt outside of school.",
{A: 'A.tenuous',B: 'B.subtle',C: 'C.irrefutable',D: 'D.pervasive',E: 'E.misconstrued',F: 'N/A',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：以至于科学家,教育者,政策制定者都不会去怀疑,那说明这个假设是 毋庸置疑的,所以正确答案选 C 选项.irrefutable 不容置疑的. \n***翻译：孩子主要在教室中学习科学知识的假设是如此不容置疑以至于几乎没有 科学家,教育者或者政策制定者质疑这个假设,尽管越来越多的证据证明大部 分的科学是在学校之外学习的."]}),

wx.setStorage({key: "992", data: ["993. Far from (i)_____corporate influence on the academy, Taylor would like to see more of it, he is particularly (ii)_____the idea of universities partnering with for-profit companies to sell online courses.",
{A: 'A.decrying',B: 'B.presuming',C: 'C.investigating',D: 'D.enamored of',E: 'E.judicious about',F: 'F.unnerved by',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：第一空和 would like see more of it 取反,所以第一空选 A 选项,第 二空通过 particularly 得知选第一空的递进,所以选 D 选项.decry 谴责, enamore 着迷.\n***翻译：远不是谴责了公司对于学院影响,Taylor 喜欢看到更多的这种影响,他 尤其对这些理念着迷,即大学和盈利公司合作来销售网上课程."]}),

wx.setStorage({key: "993", data: ["994. The shift from extraction to cultivation in forestry involves transforming the production of trees into a source of industrial productivity, leading to a greater degree of (i)_____between biophysical nature on the one hand and industry on the other. In the process, nature is increasingly (ii) _______ industry and science.",
{A: 'A.separation',B: 'B.antagonism',C: 'C.entanglement',D: 'D.excluded from',E: 'E.appropriated by',F: 'F.superfluous to',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：要将树木转换成工业生产的来源必然导致自然和工业之间的联系,所以 第一空选 C 选项,第二空则重复第一空的关系,所以选 E 选项最合适. entanglement 纠缠,appropriate 侵占,私吞. \n***翻译：森林从开采到培养的转变包括将树木产品转化成工业产品的来源,导致 了一次很大程度的在一方面生物物理自然和另外一方面工业之间的纠缠.在这 个过程中,自然越来越被工业和科学侵占."]}),

wx.setStorage({key: "994", data: ["995. Appreciating that mathematical notation presents a major roadblock to many students, some well-meaning educators (i)_____them by (ii)_____the use of notation; but this is an unfortunate detour, since practice with notation (iii)_____the important skill of reasoning.",
{A: 'A.enrich',B: 'B.discourage',C: 'C.accommodate',D: 'D.mandating',E: 'E.accelerating',F: 'F.minimizing',G: 'G.compromises',H: 'H.promotes',I: 'I.circumvents'},
"###解析：既然 notation 对于学生是阻碍,那么心怀好意的教育者会去简化这种 notation 来让学生适应,所以第一空选 C 选项,第二空选 F 选项,第三空转折 后面说其实练习 notation 会促进学生的推理能力,所以第三空选 H 选项. accommodate 适应,minimize 简化,promote 推动. \n***翻译：欣赏这样一个事实：即数学计数法代表着一个重大的对于很多学生的阻 碍,所以一些心怀好意的教学者通过简化计数法的使用而使这些学生适应；但 是这是一个不幸的绕路,因为计数法的练习会推动重要的推理技能."]}),

wx.setStorage({key: "995", data: ["996.  Having an intense and long-standing culture of (i) _______, the company understandably has a reputation as the supreme corporate (ii) _______. But even by these standard, the degree of secrecy surrounding the company\'s most recent research is (iii) ______________.",
{A: 'A.impropriety',B: 'B.progress',C: 'C.privacy',D: 'D.anachronism',E: 'E.abomination',F: 'F.enigma',G: 'G.remarkable',H: 'H.predictable',I: 'I.counterproductive'},
"###解析：前两空同义,而且根据后文是 secrecy 可以知道题目讨论的是公司的隐 私性的问题,所以第一空选 C 选项,第二空选 F 选项,第三空 but 转折,就算 以这些标准来看,这个研究的隐私性也非常大,所以第三空选 G 选项.privacy 隐私,enigma 谜,remarkable 显著的. \n***翻译：有一个激烈的而且长期存在的隐私的文化,所以可以理解这个公司有一 个名声是最高的公司谜语.但是就算拿这些标准来看,这种围绕在公司最近的 研究的隐私性是很显著的."]}),

wx.setStorage({key: "996", data: ["997.  If Wilson\'s article style changed overtime, it was in the wrong retrograde direction,  _______ experimentation and inclining toward works that seemed hobbled by a fear of risk.",
{A: 'A.belaboring',B: 'B.shunning',C: 'C.eschewing',D: 'D.overemphasizing',E: 'E.misconstruing',F: 'F.mocking',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：他的作品倾向于写那些被冒险的恐惧所阻碍的东西,所以他的作品是无 惧的,是勇于尝试的,所以正确答案选 AD 选项.belabor 过多说, overemphasize 过分强调.\n***翻译：如果 Wilson 的文章风格随时间变化的话,那这是在错误的倒退的方向, 过度强调试验而且倾向于写被冒险的恐惧而阻碍的作品."]}),

wx.setStorage({key: "997", data: ["998.  Considering how difficult it is to prove or disprove the existence of life on Mars, which is practically our neighbor, it is quite_______challenge to do the same for any Earthlike planets that might exist outside our solar system.",
{A: 'A.a formidable',B: 'B.an impossible',C: 'C.a hopeless',D: 'D.a daunting',E: 'E.an urgent',F: 'F.an immediate',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：在火星(我们的邻居)上证明生命存在都很难,在太阳系之外做同样的 工作就更难了,所以答案选 AD 选项.formidable 让人害怕的,daunting 让人 畏缩的. \n***翻译：考虑到是多么的难证明或者否决火星(我们的邻居)上生命的存在,所 以在太阳系之外的类地行星做同样的工作是相当让人畏缩的一个挑战."]}),

wx.setStorage({key: "998", data: ["999.  While it\'s hard to know for sure, I suspect that the well-known authority\'s silence on this contentious topic reflects the cautious_______of a sensible scientist confronted with mixed data and mountains of speculation.",
{A: 'A.neutrality',B: 'B.impartiality',C: 'C.optimism',D: 'D.diffidence',E: 'E.commitment',F: 'F.buoyancy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：权威在争议话题上保持沉默,这就是一种中立的表现,所以答案选 AB 选 项.neutrality 中立,impartiality 中立. \n***翻译：尽管很难确切地知道,但是我怀疑这个出名的权威在这个有争议的话题 上的沉默反映了一个明智的科学家的在面对复杂的资料和很多的推论时的谨慎 的中立."]}),

wx.setStorage({key: "999", data: ["1000.  Very few companies take the trouble to discover where the wood in their products originate; consumers do not demand this information, and consequently regarding illicit timber has become the norm.",
{A: 'A.greed',B: 'B.indifference',C: 'C.outrage',D: 'D.timidity',E: 'E.apprehension',F: 'F.apathy',G: 'N/A',H: 'N/A',I: 'N/A'},
"###解析：公司和消费者都不关心木材从哪来,这其实就是对非法木材的冷漠,而 且这种冷漠就会变成常见的事情,所以正确答案选 BF 选项.indifference 冷 漠,apathy 冷漠. \n***翻译：很少很少的公司会费力地区探索它们的产品的木头是从哪来的；消费者 不要求这个信息,结果关于非法木材的冷漠就变成了正常的事情."]}),
  
    wx.setStorage({ key: "tikushuliang", data: "1000" })
    that.setData({ progress_percent: 100 })
    that.setData({
      disabled: false,
      loading_1: false,
      tikushuliang: 1000
    })
    wx.getStorageInfo({
      success: function (res) {
        var kk = Math.ceil(Number(res.currentSize) / Number(res.limitSize) * 100)
        that.setData({ zhanyongkongjian: kk })
      }
    })
    that.setData({ progress_percent: 0 })
    wx.hideLoading()
  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }

})
