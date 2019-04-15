//基本定义和生成实例
{
    class Parent{
        constructor(name = 'kangjie'){
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数和实例',v_parent);
}

//继承
{
    class Parent{
        constructor(name='kangjie'){
            this.name = name;
        }
    }
    class Child extends Parent{

    }
    console.log('继承',new Child());
}

//继承传递参数
{
    class Parent{
        constructor(name='kangjie',age=23){
            this.name = name;
            this.age = age;
        }
    }
    //在子类继承父类属性中使用了super，子类新增的属性必须往后加
    class Child extends Parent{
        constructor(name='child',age=18){
            super(name,age);
            this.type = 'child';
        }
    }
    console.log('子类继承父类传递参数',new Child());
    console.log('子类继承父类传递参数',new Child('hello'));
}

//getter和setter
{
    class Parent{
        constructor(name='kangjie'){
            this.name = name;
        }
        get longName(){
            return 'mk' + this.name;
        }
        set longName(value){
            this.name = value;
        }
    }
    let v_parent = new Parent();
    console.log('getter',v_parent.longName);
    v_parent.longName = 'hello';
    console.log('setter',v_parent.longName);
}

//类的静态方法
{
    class Parent{
        constructor(name='kangjie'){
            this.name = name;
        }
        static tell(){
            return 'tell';
        }
    }

    //静态方法是通过类去调用，而不是类的实例去调用
    console.log('类的静态方法',Parent.tell());

}

//类的静态属性
{
    class Parent{
        constructor(name='kangjie'){
            this.name = name;
        }
    }
    Parent.type = 'test';
    console.log('类的静态属性',Parent.type); 
}