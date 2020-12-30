let motion =['output'];
let target = ['text'];
let arrow = ['up','down','right','left','up_right','up_left','down_right','down_left','right_up','right_down','left_up','left_down'];
let typ = motion.concat(arrow);
let order_typ = typ.concat(target);
order_typ.push('none');

let savedate = ['none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none'];
