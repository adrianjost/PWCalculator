// credit: https://jsfiddle.net/Ukkmu/4/
export default {
    data(){
        return {
        }
    },
    methods: {
        insertTextAtCursor(el, newText){
            var start = el.selectionStart;
            var end = el.selectionEnd;
            var text = el.value;
            if(newText === ''){
                start -= 1;
            }
            var before = text.substring(0, start);
            var after  = text.substring(end, text.length);
            el.value = (before + newText + after);
            el.selectionStart = el.selectionEnd = start + newText.length;
            el.focus();
            return el.value;
        }
    }
}