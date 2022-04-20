
// [[1,2,3],[4,5,6],[7,8,9]] => [[7,4,1],[8,5,2],[9,6,3]]
    var rotate=function(matrix){
        const n=matrix.length
        const matrix_new=new Array(n).fill(0).map(()=>new Array(n).fill(0))
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrix_new[j][n-i-1]=matrix[i][j]
                
            }
            
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrix[i][j]=matrix_new[i][j]
                
            }
            
        }
    }