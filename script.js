// 登录之后的首页: 有关注, 推荐和热搜, 点击我的关注并隐藏它旁边的推荐, 此时能选中我的关注并且隐藏推荐和热搜

const menuItems = document.querySelectorAll('.s-menu-item');

if (menuItems.length) {
  menuItems[0].click();
  
  menuItems[1].style.display = 'none';
}
