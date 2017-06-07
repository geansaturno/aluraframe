// jshint esversion:6


class ProxyFactory {

    static create(obj, props, action){

        return new Proxy(obj, {
            get(target, prop, receiver){

                // console.log(`Interceptado ${prop}`);

                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){

                    return function(){
                        Reflect.apply(target[prop], target, arguments);
                        return action(target);
                    };
                }
                return Reflect.get(...arguments);
            },

            set(target, prop, value, receiver){
                // console.log(`Interceptando set ${prop}`);
                if(props.includes(prop)){
                    // console.log(`${prop} está na lista de interceptação`);
                    target[prop] = value;
                    action(target);
                }

                return Reflect.set(...arguments);
            }
        });
    }

    static _isFunction(prop){
        return typeof(prop) == typeof(Function);
    }
}
