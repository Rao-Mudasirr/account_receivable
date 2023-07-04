import React from 'react';
import { Grid, Box } from '@mui/material';
import DetailsFields from './DetailsFields';
import './details.scss'

const DetailsPage = () => {
  return (
    <Grid container xs={8} padding={2}>
      <Grid item>
        <label className='details_label'>Preview</label>
      </Grid>
      <Grid
        item xs={12}
        sx={{
          width: '760px',
          height: '180px',
          mt: '10px',
          mb: '3rem',
          boxShadow: 'inset 0px 0px 15px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div className='bill_page' >
          <Box sx={{ width: '100%', height: 'fit-content' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aliquam tenetur eum suscipit, voluptatum unde nihil omnis beatae magni ipsum ea saepe laborum. Culpa illum, corporis nihil laudantium odit veritatis? Iste, veniam. Quae rem, omnis voluptatem dignissimos consectetur minus provident exercitationem atque quaerat nesciunt. Quia obcaecati autem ex aspernatur unde exercitationem error incidunt delectus quisquam sequi doloremque explicabo, illo minus quidem omnis at, qui quas eos dolorum! Nam quaerat itaque quisquam ex porro adipisci repellendus ab odit est, soluta molestias tenetur laboriosam dolor animi odio. Nobis quod numquam vero deleniti magnam exercitationem quae commodi. Ratione architecto possimus facere, ullam obcaecati voluptas laudantium voluptate aut, quod quibusdam debitis officia reprehenderit enim in aspernatur! Dolore amet autem, asperiores sint unde assumenda totam recusandae aut ex, similique odio quo molestias porro exercitationem accusantium tempore iure at nisi cupiditate sunt consequuntur ducimus. Ullam ex nemo ut dolorum eius, corrupti quia culpa explicabo, inventore illo similique. Consequatur in repellat quas ex, cupiditate ducimus minima doloremque, tenetur voluptates laborum, quaerat eius voluptatem nisi facere harum optio suscipit exercitationem veritatis! Alias veritatis sint exercitationem cupiditate atque, esse aspernatur laudantium iusto quia doloribus, quis, illo commodi! Mollitia quia maxime aliquid ad magnam iure, eum minus, modi possimus facere ipsum inventore doloribus eveniet ex, ducimus dolor commodi fuga sapiente ullam placeat? Impedit laborum suscipit natus, odio nisi placeat. Laborum a eius cupiditate blanditiis accusamus in molestias quam nihil aperiam sapiente nobis hic sunt facere, praesentium mollitia? Esse molestiae consequatur minima, vitae atque ut voluptates sint tempora blanditiis numquam impedit distinctio excepturi velit ducimus corrupti temporibus non enim est. Laborum perspiciatis asperiores, nisi quas ipsa explicabo, nostrum, unde quis laudantium quidem tenetur voluptates! Odio voluptas animi vitae similique culpa quis illo tempore voluptatibus consequatur vel libero delectus magnam, molestias facilis dolore ad ducimus ullam nemo eum? Iure, ducimus molestiae magnam quaerat nesciunt consequatur explicabo odio nobis harum alias esse quia numquam minima mollitia rerum possimus facilis deserunt optio officiis. Iure, repellendus alias saepe quod corrupti commodi ex cupiditate fugiat aut! Deleniti nobis voluptatum assumenda sunt blanditiis ipsa veniam omnis. Esse sequi veritatis dignissimos, quo blanditiis harum consequuntur! Illum possimus, praesentium explicabo ut nihil a at reiciendis accusantium ipsam repellendus cupiditate, unde id aspernatur voluptatibus qui maxime. Itaque aspernatur nam error ut dolor maxime molestias nobis officiis voluptate praesentium, accusantium inventore accusamus repellat, quidem voluptatibus nemo minima quaerat. Debitis officiis, obcaecati libero reiciendis quaerat, natus unde, neque iusto laborum corrupti recusandae eveniet consequatur. Est optio, aperiam dolor hic sed eum accusantium voluptatum porro id, maxime magnam dolorum! Eos veritatis consequatur vel atque nesciunt quaerat deleniti eveniet adipisci unde natus expedita facilis soluta qui ea labore eligendi at, cupiditate exercitationem impedit quis libero enim. Culpa nesciunt excepturi voluptate quia quaerat eum ab libero. Quo eius minus accusantium, laudantium eligendi repellat itaque iusto cupiditate, architecto sint repudiandae. Aut cumque laboriosam nulla quo exercitationem, omnis ratione mollitia alias sint, quis vitae inventore deleniti, quas error? Quis similique sequi placeat delectus porro laborum tempore repellat animi. Eos magnam tenetur explicabo fugit culpa voluptate repellendus animi!
          </Box>
        </div>
      </Grid>
      <DetailsFields />
    </Grid>
  );
};

export default DetailsPage;
