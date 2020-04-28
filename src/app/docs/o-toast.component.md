#### OToast
You can use our component by calling `<lib-o-toast>`.
`ToastOService` exports two functions:
* `remove(toast)` removing a Toast after being shown.

* `show(textOrTpl: string | TemplateRef<any>, options: any = {})`, for displaying the message you can use either a string or a template and you can input options which include :
- `classname` is the class (string) you want to apply to the toast.
- `delay` is the time (nimber) after which the toast will hide.
