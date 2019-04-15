//generator基本定义 需要babel-polyfill支持
{
    let tell = function* (){
        yield 'a';
        yield 'b';
        return 'c';
    };

    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());

    let obj = {};
    obj[Symbol.iterator] = function* (){
        yield 1;
        yield 2;
        yield 3;
    }

    for(let value of obj){
        console.log('value',value);
    }

}

//抽奖逻辑
window.onload = () => {

    let draw = count => {
        console.log(`剩余抽奖${count}次`);
    }
    //防止定义全局变量会耗性能和被修改的风险
    let residue = function* (count){
        while(count > 0){
            count--;
            yield draw(count);
        }
    }

    let star = residue(5);

    let btn = document.createElement('button');

    btn.id = 'start';

    btn.textContent = '抽奖';

    document.body.appendChild(btn);

    document.getElementById('start')
    .addEventListener('click',function(){

      star.next();

    },false);

}

//长轮询
{
    let ajax = function* (){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                //resolve({code:0});
                resolve({code:1});
            },200);
        });
    }

    let pull = function(){
        let generator = ajax();
        let step = generator.next();
        step.value.then(function(d){
            if(d.code != 0){
                setTimeout(function(){
                    console.info('查询中');
                    pull();
                },1000);
            }else{
                console.info(d);
            }
        });
    }

    pull();

}