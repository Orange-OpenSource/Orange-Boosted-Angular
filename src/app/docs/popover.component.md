By default a popover is closed by clicking on its trigger element.
To close by clicking outside you'll have to use custom directives on the trigger element :

```html
<span #p="ngbPopover" (document:click)="p.close()" (click)="$event.stopPropagation()"></span>
```
