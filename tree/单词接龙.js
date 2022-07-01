/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

 var ladderLength = function(beginWord, endWord, wordList) {
    // 创建集合数组 -> 后续使用集合数组的方法
    let wordSet = new Set(wordList)
    // 若数组中无最终字符串 -> 返回0    
    if (!wordSet.has(endWord)) return 0
    // 初始化放入队列
    let queue = [[beginWord, 1]]
    // 当队列不为空
    while (queue.length) {
        // 提取队首
        let [word, sum] = queue.pop()
        // 如果当前字符串就是最终字符串 -> 返回步数
        if (word === endWord) return sum
        // 遍历当前字符串和集合数组所有相差1字符的情况
        for (let str of wordSet) {
            if (strDiff(word, str) === 1) {
                // 放入队尾
                queue.unshift([str, sum + 1])
                // 避免重复放入
                wordSet.delete(str)
            }
        }
    }
    // 当不需要转换时
    return 0
};
// 判断字符串不同
const strDiff = (str1, str2) => {
  let changes = 0
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) changes += 1
  }
  return changes
}

// "hit"
// "cog"
// ["hot","dot","dog","lot","log","cog"]  => 5