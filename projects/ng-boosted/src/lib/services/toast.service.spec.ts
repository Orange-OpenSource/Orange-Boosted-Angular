import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;
  const dangerTpl = '<ng-template #dangerTpl> Danger Danger !</ng-template>';
  beforeEach(() => { service = new ToastService(); });

  it('ToastService should be created ', () => {
    expect(service).toBeTruthy();
  });

  it('Showing a simple toast', () => {
    service.show('I am a standard toast');
    expect(service.toasts).toContain(Object({ textOrTpl: 'I am a standard toast', options: Object({ }) }));
  });

  it('Showing a toast with options', () => {
    service.show('I am a success toast test', { classname: 'bg-success text-light', delay: 3000 });
    expect(service.toasts).toContain(Object({ textOrTpl: 'I am a success toast test',
    options: Object({ classname: 'bg-success text-light', delay: 3000 }) }));
  });

  it('Showing a templated-toast with options', () => {
    service.show(dangerTpl, { classname: 'bg-danger text-light', delay: 3000 });
    expect(service.toasts).toContain(Object({ textOrTpl: '<ng-template #dangerTpl> Danger Danger !</ng-template>',
    options: Object({ classname: 'bg-danger text-light', delay: 3000 }) }));
  });

});
