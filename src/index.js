module.exports = function toReadable (number) {
  let a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let c = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let d = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  let str = number.toString(), end = '';
    
     if(str[0] == 0){
        end = 'zero';
     } else if(str.length == 1){
        
            end = (a[number-1]);
        }else if(str.length == 2){
            if(str[0] == 1){
            end = b[parseInt(str[1])];
            } else end = (c[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + a[parseInt(str[1])-1]):''));
        } else if(str.length == 3){
                if(str[1] == 0){
                    if(str[2] == 0){
                        end = (d[parseInt(str[0])-1]);
                    } else end = (d[parseInt(str[0])-1] + ' ' + a[parseInt(str[2])-1]);
                } else if(str[1] == 1){
                    end = (d[parseInt(str[0])-1] + ' ' + b[parseInt(str[2])]);
                } else if(str[2] == 0){
                    end = (d[parseInt(str[0])-1] + ' ' + c[parseInt(str[1])-1]);
                } else end = (d[parseInt(str[0])-1] + ' ' + c[parseInt(str[1])-1]) + ' ' + a[parseInt(str[2])-1];
        }
    return end;
}
