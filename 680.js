var validPalindrome = function(s) {
    function isPalindrome (left, right) {
        while(left < right) {
            if(s[left] !== s[right]){
                return false
            }
            ++left;
            --right;
        }
        return true;
    }
    let left = 0, right = s.length - 1;
    while (left < right) {
        if(s[left] !== s[right]) {
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1)

        }
        ++left;
        --right;
    }
};