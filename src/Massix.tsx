import React from 'react';
import {List} from 'antd';

type Item={ 
    key: number | string;
    value: string;
};

class Massiv {
items:Item[];
constructor(){
    this.items=[
        {key:1, value: '1'},
        {key:2, value: '2'},
        {key:3, value: '3'},
        {key:4, value: '4'},
        {key:5, value: '5'},
        {key:6, value: '6'},
        {key:7, value: '7'},
        {key:8, value: '8'},
        {key:9, value: '9'},
        {key:10, value: '10'},
    ];
}

    renderItems(){
        return(
            <List
            dataSource={this.items}
            renderItem={(item:Item)=>(
                <List.Item>
                    Key: {item.key},
                    Value: {item.value}
                </List.Item>
            )}
            />
        );
    }
}

export default Massiv;