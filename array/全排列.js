/**
 * @param {number[]} nums
 * @return {number[][]}
 */


 var permute = function(nums){
    let result = [];
    findSon([],[]);
    function findSon(visited,item){
        for(let j = 0; j < nums.length; j++){
            if(!visited[j]){
                visited[j] = true;
                item.push(nums[j]);
                if(item.length == nums.length){
                    let newItem = JSON.stringify(item);
                    newItem = JSON.parse(newItem)
                    result.push(newItem);
                    visited[j] = false;
                    item.pop();
                }else{
                    findSon(visited, item);
                    visited[j] = false;
                    item.pop();
                }
            }
        }
    }
    return result;
};
// [1,2,3] =>  [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
