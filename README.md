# Active Event Stack Lite

It's a fork of [qimingweng/active-event-stack](https://github.com/qimingweng/active-event-stack) with heavy dependencies removed. 

See details in [source](https://github.com/qimingweng/active-event-stack/issues/1) [repo](https://github.com/qimingweng/active-event-stack/pull/2).

It seems that source project is abandoned and there is no hope that PR will be merged. Still, I'm not happy to have 540kb of useless dependencies in my bundle. 
 
This lib is used as dependency of [react-modal-dialog](https://github.com/qimingweng/react-modal-dialog) which I don't want to fork to just override a single dependency.
So problem can be solved via `npm-shrinkwrap.json` like this:

```json
{
  "dependencies": {
    "active-event-stack": {
      "resolved": "https://github.com/jeron-diovis/active-event-stack.git#477edc54855e25b143edd4982a05781f721d5d15"
    }
  }
}
```

Then run `npm shrinkwrap` again to generate all required json for this package.

Transpiled files are added to repo so package can be installed from github normally.
