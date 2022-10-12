import { Flip } from '@/index'
import './index.scss';
const small = document.querySelector('#small');
const big = document.querySelector('#big');
const toggle =  document.querySelector('#toggle') as HTMLButtonElement;
const box = document.querySelector('#box') as HTMLDivElement;
let current = 'small';
const flip = new Flip({
    target: box as HTMLElement
})

toggle.onclick = ()=>{
    if(current === 'small'){
        const content = small?.innerHTML;
        box.innerHTML = content as string;
        current = 'big';
        flip.update('big')
    }else{
        const content = big?.innerHTML;
        box.innerHTML = content as string;
        current = 'small';
        flip.update('small')
    }
}
export {}