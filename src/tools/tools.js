const Tools = (()=>{

    function remove(element, someArray) {
        let index = someArray.findIndex((value)=> value === element);
        someArray.splice(index,1);
    }

    function isSubArray(arr1, arr2) {
        let result = true;
        let index = 0;
        while(result === true && index < arr1.length) {
            let temp = arr1[index];
            if(arr2.findIndex((value) => value === temp)  === -1) {
                result = false;
            }
            index++;
        }
        return result;   
    }

    function getRandomIndex(arrayLength) { 
        return Math.floor(Math.random() * arrayLength);    
    }
    //************************************************************************************** */
    
    const winCondition = [[1,5,9], [1,2,3], [1,4,7], [2,5,8], [3,6,9], [3,5,7], [7,8,9], [4,5,6]];
   
    
    function checkVictoryCondition(playerOnMove, player1Moves, player2Moves) {

        const moves = playerOnMove === 1 ? player1Moves : player2Moves;
            let win = false;
            let i = 0;
            while(win === false && i < winCondition.length){
                win = Tools.isSubArray(winCondition[i], moves);
                i++;
            } 
            
        return {
            win:win,
            array: winCondition[i-1]
        };
    }
    //********************************************************************************************** */
    return {
        remove:remove,
        isSubArray:isSubArray,
        getRandomIndex: getRandomIndex,
        checkVictoryCondition: checkVictoryCondition
    }
})();

export default Tools;