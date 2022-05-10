# Checkbox &#x1F34E;

```diff
+ Short Documentation
```

:rice: Requirement :
- plain React JS only

:eyes: Usage :
- Put this file to your component directory folder. You can choose to make a new folder or not.
- import this component to your views or other component in JSX.


:phone: Parameters :
- children = put your text or element to placed beside checkbox
- checked = boolean state for checkbox
- onChange = onChange event
- onClick = onClick event
- ...rest = to initiate all events but not showing in vscode suggest like onChange & onClick
- name = to naming checkbox input value
- classNameDiv = add your own css classname


:paperclip: Example :
```js
 <div>
     <Checkboxes onClick={this.onCheckList} name='checkedOne' checked={this.state.checkedOne}>
          <span>One</span>
     </Checkboxes>
     <Checkboxes onClick={this.onCheckList} name='checkedTwo' checked={this.state.checkedTwo}>
          <span>Two</span>
     </Checkboxes>
</div>
```
