import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { regions } from '../../constant';

@Component({
  selector: 'obng-app',
  templateUrl: './obng.component.html',
  styleUrls: ['./obng.component.scss']
})
export class OnboardingComponent {
  title = 'Onboarding';
  regions: any;
  communesCompany: any;
  communesPerson: any;
  constructor(
    protected router: Router,
  ) {
    this.regions = regions;
  }

  private matchSelectRegion(key: string, value: any) {
    this.getRegionCompany(regions);
    const data = regions.regiones.filter((s: any) => s.id === value)[0];
    // if (!isNullOrUndefined(data)) {
    // //  this.formAgent.get(key).setValue(data);
    //   //this.formAgent.get(key).disable();
    // }
  }

  getRegionCompany(region: any) {
    this.communesCompany = region.comunas;
    //this.formAgent.get('suburbCompany').setValue('');
    return region.region;
  }


  getRegionPerson(region: any) {
    this.communesPerson = region.comunas;
    //this.formAgent.get('suburb').setValue('');
    return region.region;
  }

}
