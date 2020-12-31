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

let up_order = ['up','right_up','left_up'];
let down_order = ['down','right_down','left_down'];
let right_order = ['right','up_right','down_right'];
let left_order = ['left','up_left','down_left'];

let up_target = ['down','down_right','down_left'];
let down_target = ['up','up_right','up_left'];
let right_target = ['left','left_up','left_down'];
let left_target = ['right','right_up','right_down'];
