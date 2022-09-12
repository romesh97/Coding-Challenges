<?php

namespace App\Application;

use App\Models\Company;
use App\Models\Document;
use Illuminate\Http\Request;

class GroupByOwnersService
{
    public function getDocumentDetails(Request $request)
    {
        $companies = Company::all();
        foreach ($companies as $key => $value) {
            $documents = Document::where('company_id', '=', $value['id'])->pluck('document_name');
            $data[] = [$value['company_name'] => $documents];

        }
        return $data;

    }

}