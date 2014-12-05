# Resource

Convert json to After Effects resource. With this module json could be used
insteed of string of resource data.

## Dependencies

After Effects CC 2014 do not support JSON.
Polyfill can be found in [JSON repository](https://github.com/douglascrockford/JSON-js).

## How come?

After Effects use not very user friendly interface for creating dialogs,
this is how it looks:

```js
var res = "dialog { \
    info: Panel { orientation: ’column’, \
        text: ’Personal Info’, \
        name: Group { orientation: ’row’, \
            s: StaticText { text:’Name:’ }, \
            e: EditText { characters: 30 } \
        }, \
        addr: Group { orientation: ’row’, \
            s: StaticText { text:’Street / City:’ }, \
            e: EditText { characters: 30 } \
        } \
    }, \
    buttons: Group { orientation: ’row’, \
        okBtn: Button { text:’OK’, properties:{name:’ok’} }, \
        cancelBtn: Button { text:’Cancel’, properties:{name:’cancel’} } \
    } \
}";
win = new Window (res);
win.center();
win.show(); 
```

To simplify work with resources module was created.

## How to use?

```js
#include json.js
#include lib/resource.js

var res = resource('dialog', {
    'info~Panel>': {
        orientation: 'column',
        text: 'Personal Info',
        'name~Group>': {
            orientation: 'row',
            's~StaticText>': { text:'Name:' },
            'e~EditText>' : { characters: 30 },
        },
        'addr~Group>': {
            orientation: 'row',
            's~StaticText>': { text:'Street / City:' },
            'e~EditText>': { characters: 30 }
        },
        'buttons~Group>' : {
            orientation: 'row',
            'okBtn~Button>':{ text:'OK', properties:{name:'ok'}},
            'cancelBtn~Button>':{ text:'Cancel', properties:{name:'cancel'}}
        }
    }
});

win = new Window (res);
win.center();
win.show();
```

## License

MIT
