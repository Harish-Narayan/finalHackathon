import { Controller, Get, Param,Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('aggregate')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getValues() {
    return this.appService.findAll();
  }

@Controller('View')
  @Get(){
   return this.appService.findMasterCoin();
  }


  @Controller('create')


  @Post(':name')
  createProduct(@Param('name') prodId: string) {
    return this.appService.createWatchlist(prodId);
  }

  @Patch(':tokensToBeAdded')
  async updateProduct(
    @Param('tokensToBeAdded') finValue: string,
 
  ) 
  {
    return this.appService.updateProduct(finValue );
  
  }

  @Delete(':tokensToBeDeleted')
  async removeProduct(@Param('tokensToBeDeleted') value: string) {
      return this.appService.deleteProduct(value);
      
  }
}

@Controller('ViewbyId')
@Get(':id')
getProduct(@Param('id') Id: string) {
  return this.appService.getData(Id);
}
