import { ChangeDetectorRef, ViewRef, inject } from '@angular/core';
import { Subject } from 'rxjs';

/* Ondestroy$ util helps to shorthand clear up remaining subscriptions when the component is destroyed.
 To use it add the subject to the component declaration: destroy$ = onDestroy$();

 Then you can close the subscription in one line with the subscribe:
 this.service.datasource$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
 console.log(data)
   });

 export class XComponent implements OnInit {
  destroy$ = onDestroy$();
  
  ngOnInit(): void {
    this.postService.posts$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      console.log(data);
    });

    this.page$.subscribe((data) => console.log(data));
  }
 */

export const onDestroy$ = () => {
  const destroy$ = new Subject<void>();
  const viewRef = inject(ChangeDetectorRef) as ViewRef;

  viewRef.onDestroy(() => {
    destroy$.next();
    destroy$.complete();
  });
  return destroy$;
};
