import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebanqueComponent } from './listebanque.component';

describe('ListebanqueComponent', () => {
  let component: ListebanqueComponent;
  let fixture: ComponentFixture<ListebanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListebanqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListebanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
