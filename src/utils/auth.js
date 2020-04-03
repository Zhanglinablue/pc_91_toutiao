const USER_TOKEN = 'pc_91_toutiao'
// 保存用户信息
export function setUser (user) {
  localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}
// 获取用户信息
export function getUser () {
  return JSON.parse(localStorage.getItem(USER_TOKEN) || '{}')
}
// 删除用户信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN)
}
