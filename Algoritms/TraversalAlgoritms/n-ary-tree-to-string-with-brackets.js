const root = {
    key: 'item1',
    props: ['prop1', 'prop2', 'prop3'],
    children: [
        {
            key: 'item2',
            props: ['prop4', 'prop5', 'prop6'],
            children: [
                {
                    key: 'item3',
                    props: ['prop6', 'prop7', 'prop8'],
                    children: null
                }
            ]
        },
        {
            key: 'item4',
            props: ['prop9', 'prop10', 'prop11'],
            children: [
                {
                    key: 'item5',
                    props: ['prop12', 'prop13', 'prop14'],
                    children: null
                },
                {
                    key: 'item6',
                    props: ['prop15', 'prop16', 'prop17']
                }
            ]
        }
    ]
}

function traverse_tree(root)
{
    const nodes = [];
    let result = '';
    
    nodes.push(root);
 
    while (nodes.length != 0)
    {
        var curr = nodes.pop();

        if (curr != null)
        {
            if (curr === '(' || curr === ')' || curr === ',') {
                result += curr;
                continue;
            }
            result += `${curr.key}`;

            if (!curr.children) {
                continue;
            }

            nodes.push(')');
            for(var i = curr.children.length - 1;
                    i >= 0; i--)
            {
                nodes.push(curr.children[i]);
                if (i !== 0) nodes.push(',');
            }
            nodes.push('(');
        }
    }
    return result;
}

const result = traverse_tree(root);
