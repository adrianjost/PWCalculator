// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
export default {
    data(){
        return {
            touchsurface: undefined,
            swipedir: undefined,
            start: {
                'x': undefined,
                'y': undefined
            },
            dist: {
                'x': undefined,
                'y': undefined
            },
            threshold: 100, //required min distance traveled to be considered swipe
            restraint: 100, // maximum distance allowed at the same time in perpendicular direction
            allowedTime: 300, // maximum time allowed to travel that distance
            elapsedTime: undefined,
            startTime: undefined,
            handleswipe: undefined,
        }
    },
    methods: {
      touchstart(e){
        let touchobj = e.changedTouches[0]
        this.swipedir = 'none'
        this.dist = {x:0, y:0}
        this.start.x = touchobj.pageX
        this.start.y = touchobj.pageY
        this.startTime = new Date().getTime() // record time when finger first makes contact with surface
        //e.preventDefault()
      },
      touchend(e){
        var touchobj = e.changedTouches[0]
        this.dist.x = touchobj.pageX - this.start.x // get horizontal dist traveled by finger while in contact with surface
        this.dist.y = touchobj.pageY - this.start.y // get vertical dist traveled by finger while in contact with surface
        this.elapsedTime = new Date().getTime() - this.startTime // get time elapsed
        if (this.elapsedTime <= this.allowedTime){ // first condition for swipe met
            if (Math.abs(this.dist.x) >= this.threshold && Math.abs(this.dist.y) <= this.restraint){ // 2nd condition for horizontal swipe met
                this.swipedir = (this.dist.x < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(this.dist.y) >= this.threshold && Math.abs(this.dist.x) <= this.restraint){ // 2nd condition for vertical swipe met
                this.swipedir = (this.dist.y < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        this.handleswipe(this.swipedir)
        //e.preventDefault();
      },
      swipedetect(el, callback){
            this.touchsurface = el,
            this.handleswipe = callback || function(swipedir){}
          
            this.touchsurface.addEventListener('touchstart', this.touchstart, false)
          
            this.touchsurface.addEventListener('touchmove', function(e){
                //e.preventDefault() // prevent scrolling when inside DIV
            }, false)
          
            this.touchsurface.addEventListener('touchend', this.touchend, false)
        }
    }
}