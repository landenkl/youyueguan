
angular.module('frients.controllers',['two.controllers'])
  .controller('FrientsCtrl', function($scope) {

      $scope.products=[
        {id:1, porster:'http://www.yzlyqf.com/cp/cp/fxs.jpg', name:'伏羲式', desc:'古琴的琴式之一，琴界先德的记述，琴文化的起始，可以上溯到约公元前三四千年的伏羲琴。'},
        {id:2, porster:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3964059324,135131136&fm=27&gp=0.jpg', name:'仲尼式', desc:'仲尼，即孔子，儒家思想的杰出代表，一位影响中国数千年的哲人。'},
        {id:3, porster:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1212442174,4064542931&fm=27&gp=0.jpg', name:'列子式', desc:'“仲尼式”的变体，明代著名的“潞王琴”，就是列子式。'}
    ]
    $scope.pdio=[
      {id:1,porster:'http://img1.imgtn.bdimg.com/it/u=3175202432,1372840293&fm=27&gp=0.jpg', name:'李云迪', desc:'2000年，18岁的李云迪将空缺了14年的肖邦国际钢琴比赛金奖纳入囊中，轰动乐坛。'},
      {id:2,porster:'http://img0.imgtn.bdimg.com/it/u=1908825385,374597243&fm=200&gp=0.jpg', name:'殷承宗', desc:'中国优秀的钢琴家，钢琴协奏曲《黄河》主要改编创作者、首演者，创作出钢琴伴唱《红灯记》而红遍全国。是在卡内基音乐厅演出场次最多的华人钢琴家。'}
    ]
    $scope.head=[
      {id:1,porster:'http://img2.imgtn.bdimg.com/it/u=2331914897,2122899955&fm=27&gp=0.jpg', name:'阴柔之美', desc:'含蓄典雅、细腻集中、甘纯华丽、忧郁神秘'},
      {id:2,porster:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3863175191,3439785837&fm=200&gp=0.jpg', name:'阳刚之美', desc:'浓郁豪放、浑厚深沉、明亮圆润、大气浩然'}

    ]


})
  .controller('FoundCtrl', function($scope) {

  })
  .controller('SeafirstCtrl', function($scope) {

  })
  .controller('HotCtrl', function($scope) {

})
  .controller('VidosCtrl', function($scope) {

  })
  .controller('StoryCtrl', function($rootScope) {
    $rootScope.story=[
      {id:1,porster:'http://img3.imgtn.bdimg.com/it/u=28829829,202807728&fm=27&gp=0.jpg', name:'神人畅', desc:'1、古琴文化的历史，从伏羲而始。伏羲见凤集于桐，乃象其形削桐“制以为琴”《太古遗音》。这是有关古琴最早的传说。2、据《礼记.乐记》记载：“昔者舜作五弦之琴，以歌南风，夔始制乐，以赏诸候”。这是关于古琴最早的明确记录。上古的琴原为五弦。后来，周文王和周武王复加二弦，以合君臣之德。从此以后，古琴皆为七弦。3、据《左传》记载：晋侯到军中视察，发现了两年前郑国献来的楚囚钟仪。钟仪自称是伶人，晋侯就给他一张琴，命他演奏。钟仪所弹奏的都是南方楚调。晋侯认为钟仪未弃本职，不忘故土，受到了感动。为了促进晋楚两国和平关系，晋侯就把钟仪送回了楚国。'},
      {id:2,porster:'http://images.shobserver.com/news/690_390/2017/5/21/e2c005f6-8c1e-4108-9510-195bbdea2d11.jpg', name:'乐器之王', desc:'在音乐氛围浓厚的上海，“乐器之王”钢琴素来受到人们的喜爱。既有一代代大师从这里启航，演绎华美的音乐篇章，又有寻常人家沉浸于音乐的魅力，在弄堂、街道奏响悠悠琴声。这个时代有着怎样的钢琴故事？音乐与城市融合，能够谱写出怎样的旋律？今年恰逢上海市音乐家协会钢琴专业委员会成立30周年，不妨跟着他们一同回味往事。'},
      {id:3,porster:'http://img2.imgtn.bdimg.com/it/u=2529460165,4102668113&fm=200&gp=0.jpg', name:'乐器皇后', desc:'　这是因为所有乐器的创制都以模仿人声的歌唱为追求，小提琴音色优美，音域宽广，表现力丰富，像一只会唱歌的百灵鸟。演奏家们用它一会儿奏出悠扬的像诗一样动听的曲调，一会儿又奏出快速得让人眼花缭乱的旋律。它是个多才多艺的表演能手。在它的启发下，许许多多伟大的音乐作品产生了，还有那些技艺超群的音乐大师们也在它的熏陶下诞生了。小提琴在大师们的手里既能表现狂欢的舞蹈场面，也能表现悲壮的英雄史诗和古老的神话传说。所以我们把钢琴叫做“乐器之王”，小提琴就是“乐器皇后”。。'}
    ]
  })
  .controller('GuCtrl', function($scope,$stateParams) {
    $scope.detail = $scope.products[$stateParams.id-1];

  })
  .controller('GangCtrl', function($scope,$stateParams) {
    $scope.guang = $scope.pdio[$stateParams.id-1];
  })
  .controller('XiaoCtrl', function($scope,$stateParams) {

    $scope.detail = $scope.head[$stateParams.id-1];
  })
  .controller('StoryguCtrl', function($scope,$stateParams,$rootScope) {
    $scope.storys = $rootScope.story[$stateParams.id-1];
  })
  .controller('ZhaoCtrl', function($rootScope) {
    $rootScope.zhao=[
      {id:1, porster:'http://www.yzlyqf.com/cp/cp/fxs.jpg', name:'伏羲式', desc:'古琴的琴式之一，琴界先德的记述，琴文化的起始，可以上溯到约公元前三四千年的伏羲琴。'},
      {id:2, porster:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3964059324,135131136&fm=27&gp=0.jpg', name:'仲尼式', desc:'仲尼，即孔子，儒家思想的杰出代表，一位影响中国数千年的哲人。'},
      {id:3, porster:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1212442174,4064542931&fm=27&gp=0.jpg', name:'列子式', desc:'“仲尼式”的变体，明代著名的“潞王琴”，就是列子式。'},
      {id:4,porster:'http://img1.imgtn.bdimg.com/it/u=3175202432,1372840293&fm=27&gp=0.jpg', name:'李云迪', desc:'2000年，18岁的李云迪将空缺了14年的肖邦国际钢琴比赛金奖纳入囊中，轰动乐坛。'},
      {id:5,porster:'http://img0.imgtn.bdimg.com/it/u=1908825385,374597243&fm=200&gp=0.jpg', name:'殷承宗', desc:'中国优秀的钢琴家，钢琴协奏曲《黄河》主要改编创作者、首演者，创作出钢琴伴唱《红灯记》而红遍全国。是在卡内基音乐厅演出场次最多的华人钢琴家。'},
      {id:6,porster:'http://img2.imgtn.bdimg.com/it/u=2331914897,2122899955&fm=27&gp=0.jpg', name:'阴柔之美', desc:'含蓄典雅、细腻集中、甘纯华丽、忧郁神秘'},
      {id:7,porster:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3863175191,3439785837&fm=200&gp=0.jpg', name:'阳刚之美', desc:'浓郁豪放、浑厚深沉、明亮圆润、大气浩然'}
    ]
  })
  .controller('ZhaosCtrl', function($scope,$stateParams,$rootScope) {
    $scope.p = $rootScope.zhao[$stateParams.id-1];
  })
  .controller('EndCtrl', function($scope) {

  })



