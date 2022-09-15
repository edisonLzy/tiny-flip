import { FlipList } from '@/index'

const data = (new Array(6)).fill(0).map((el,idx)=>{
    return {
        key: `${idx}`,
        title: `${idx}`
    }
})

function shuffle(arr:any[]) {
    return arr.sort(() => Math.random() - 0.5);
}

const flipList = new FlipList({
    initialState: data,
    container: document.querySelector('.list')!,
    createItem(item) {
        const li = document.createElement('li');
        li.textContent = item.title
        li.classList.add('list-item')
        li.addEventListener('click',(e)=>{
                const domInfo = li.getBoundingClientRect();
                li.classList.toggle('center');
                const updateInfo = li.getBoundingClientRect();
                const scaleX = domInfo.width / updateInfo.width
                const scaleY = domInfo.height / updateInfo.height
                const offsetX = domInfo.x - updateInfo.x
                const offsetY = domInfo.y - updateInfo.y
                const animation = li.animate([
                    {
                        transform: `translate(${offsetX}px,${offsetY}px) scale(${scaleX},${scaleY}) `
                    },
                    {
                        transform: ``
                    }
                ],{
                    duration: 300,
                    easing: "cubic-bezier(0,0,0.32,1)",
                })
            
        })
        return li
    },
})

const btnReverse = document.querySelector('#reverse');
btnReverse?.addEventListener('click',e=>{
    const newData = shuffle(data)
    flipList.setState(newData)
})