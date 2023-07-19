import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MytestComponent } from './mytest.component';

//lancer les tests unitaire : ng test
describe('Tester MytestComponent', () => {
    let fixture: ComponentFixture<MytestComponent>
    let component: MytestComponent
    let tpl: HTMLElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MytestComponent]
        }).compileComponents()
        fixture = TestBed.createComponent(MytestComponent)
        fixture.detectChanges()
        component = fixture.componentInstance
        tpl = fixture.nativeElement
    })

    it('Propriete title vaut Mon App', () => {
        const h1 = tpl.querySelector('h1')
        expect(h1?.textContent).toBe(component.title)
    })
})