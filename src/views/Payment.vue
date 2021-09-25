<template>
<div>
   <SideBar /> 

     <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Transaction History</a></li>
					</ol>
                </div>
				<div class="form-head mb-4 d-flex flex-wrap align-items-center">
				</div>
				<div class="col-12">
					<div class="card">
						<div class="card-header">
							<h4 class="card-title">Transaction History</h4>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								<table id="example4" class="display" style="min-width: 845px">
									<thead>
										<tr>
											<th>Roll No</th>
											<th>Account Name </th>
											<th>Account Number </th>
											<th>Status </th>
											<th>Date</th>
											<th>Amount</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>01</td>
											<td>Ajayi Samson Aduragbemi</td>
											<td>2005045949</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/04/25</td>
											<td><strong>₦120</strong></td>
											</tr>
											<td>01</td>
											<td>Ajayi Samson Aduragbemi</td>
											<td>2005045949</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/04/25</td>
											<td><strong>₦120</strong></td>
										</tr>
											<td>01</td>
											<td>Ajayi Samson Aduragbemi</td>
											<td>2005045949</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/04/25</td>
											<td><strong>₦120</strong></td>
											</tr>
											<td>01</td>
											<td>Ajayi Samson Aduragbemi</td>
											<td>2005045949</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/04/25</td>
											<td><strong>₦120</strong></td>
											</tr>
											<td>01</td>
											<td>Ajayi Samson Aduragbemi</td>
											<td>2005045949</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/04/25</td>
											<td><strong>₦120</strong></td>
											</tr>
											<td>01</td>
											<td>Ajayi Samson Aduragbemi</td>
											<td>2005045949</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/04/25</td>
											<td><strong>₦120</strong></td>
											</tr>
										
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
            </div>
			
        </div>
</div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
    export default({
        name: 'Payment',
        components: {SideBar}
    })
</script>