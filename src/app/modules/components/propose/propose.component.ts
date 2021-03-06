import { Title } from '@angular/platform-browser';
import { ClientService } from '../../../services/client-service/client.service';
import { Job } from 'src/app/models/job';
import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-propose',
  templateUrl: './propose.component.html',
  styleUrls: ['./propose.component.css'],
})
export class ProposeComponent implements OnInit {
  id: string = '';
  job: Job = new Job();
  freelancer: Freelancer = new Freelancer();
  DateCreated: string;
  constructor(
    private _freelancerService: FreelancerService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("Upwork");
  }

  ngOnInit(): void {
    this._freelancerService.getFreelancerAuth().subscribe(
      (response: Freelancer) => {
        this.freelancer = response;
      },
      (error) => {
        console.log("Can't get freelancer details")
      }
    );

    this.route.params.subscribe((params) => {
      this.id = params['id'];
      window.scrollTo(0, 0);
      this._freelancerService.getAJob(this.id).subscribe(
        (response: any) => {
          this.job = response;
          this.DateCreated = this.job.createdAt.slice(0, 10);
          this.titleService.setTitle(`Apply for ${this.job.Name.slice(0, 50)}`);
        },
        (error) => {
          console.log("Can't get job details");
        }
      );
    });
  }

  submitProposal(CoverLetter: Object) {
    this._freelancerService.submitProposal(this.job._id, { CoverLetter }).subscribe(
      (response: any) => {
        this.router.navigateByUrl('/freelancer/my-proposals');
      },
      (error) => {
        console.log("Can't submit proposal");
      }
    );
  }
}
