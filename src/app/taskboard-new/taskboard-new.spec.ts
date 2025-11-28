import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardNew } from './taskboard-new';

describe('TaskboardNew', () => {
  let component: TaskboardNew;
  let fixture: ComponentFixture<TaskboardNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskboardNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskboardNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
