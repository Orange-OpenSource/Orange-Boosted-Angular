* You can close the popover manually :
```html
<button ... triggers="manual" #p="ngbPopover" (click)="p.open()"></button>
<button ... (click)="p.close()"></button>
```
* `autoClose` allows to close popover by clicking `inside` or `outside` of button.